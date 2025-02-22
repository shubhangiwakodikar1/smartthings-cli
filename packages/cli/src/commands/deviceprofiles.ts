import { flags } from '@oclif/command'

import { DeviceProfile, LocaleReference } from '@smartthings/core-sdk'

import { APICommand, ChooseOptions, chooseOptionsWithDefaults, outputListing, selectFromList, stringTranslateToId, TableFieldDefinition, TableGenerator } from '@smartthings/cli-lib'


export function buildTableOutput(tableGenerator: TableGenerator, data: DeviceProfile): string {
	const table = tableGenerator.newOutputTable()
	table.push(['Name', data.name])
	for (const comp of data.components) {
		table.push([`${comp.id} component`,  comp.capabilities ? comp.capabilities.map(it => it.id).join('\n') : ''])
	}
	table.push(['Id', data.id])
	table.push(['Device Type', data.metadata?.deviceType ?? ''])
	table.push(['OCF Device Type', data.metadata?.ocfDeviceType ?? ''])
	table.push(['Manufacturer Name', data.metadata?.mnmn ?? ''])
	table.push(['Presentation ID', data.metadata?.vid ?? ''])
	table.push(['Status', data.status])
	return table.toString()
}

export async function chooseDeviceProfile(command: APICommand, deviceProfileFromArg?: string, options?: Partial<ChooseOptions>): Promise<string> {
	const opts = chooseOptionsWithDefaults(options)
	const config = {
		itemName: 'device profile',
		primaryKeyName: 'id',
		sortKeyName: 'name',
		listTableFieldDefinitions: ['name', 'status', 'id'],
	}
	if (opts.verbose) {
		config.listTableFieldDefinitions.splice(3, 0, 'locales')
	}

	const listDeviceProfiles = async (): Promise<DeviceProfile[]> => {
		const deviceProfiles = await command.client.deviceProfiles.list()
		if (opts.verbose) {
			const ops = deviceProfiles.map(async (it) => {
				try {
					return await command.client.deviceProfiles.listLocales(it.id)
				} catch (error) {
					if ('message' in error && error.message.includes('status code 404')) {
						return []
					} else {
						throw error
					}
				}
			})

			const locales = await Promise.all(ops)

			return deviceProfiles.map((deviceProfile, index) => {
				return { ...deviceProfile, locales: locales[index].map((it: LocaleReference) => it.tag).sort().join(', ') }
			})
		}
		return deviceProfiles
	}

	const preselectedId = opts.allowIndex
		? await stringTranslateToId(config, deviceProfileFromArg, listDeviceProfiles)
		: deviceProfileFromArg
	return selectFromList(command, config, preselectedId, listDeviceProfiles)
}

export default class DeviceProfilesCommand extends APICommand {
	static description = 'list all device profiles available in a user account or retrieve a single profile'

	static flags = {
		...APICommand.flags,
		...outputListing.flags,
		verbose: flags.boolean({
			description: 'include presentationId and manufacturerName in list output',
			char: 'v',
		}),
	}

	static args = [{
		name: 'id',
		description: 'device profile to retrieve; UUID or the number of the profile from list',
	}]

	static examples = [
		'$ smartthings deviceprofiles                      # list all device profiles',
		'$ smartthings deviceprofiles bb0fdc5-...-a8bd2ea  # show device profile with the specified UUID',
		'$ smartthings deviceprofiles 2                    # show the second device profile in the list',
		'$ smartthings deviceprofiles 3 -j                 # show the profile in JSON format',
		'$ smartthings deviceprofiles 5 -y                 # show the profile in YAML format',
		'$ smartthings deviceprofiles 4 -j -o profile.json # write the profile to the file "profile.json"',
	]

	static aliases = ['device-profiles']

	async run(): Promise<void> {
		const { args, argv, flags } = this.parse(DeviceProfilesCommand)
		await super.setup(args, argv, flags)

		const config = {
			primaryKeyName: 'id',
			sortKeyName: 'name',
			listTableFieldDefinitions: ['name', 'status', 'id'] as TableFieldDefinition<DeviceProfile>[],
			buildTableOutput: (data: DeviceProfile) => buildTableOutput(this.tableGenerator, data),
		}
		if (this.flags.verbose) {
			config.listTableFieldDefinitions.push({ label: 'Presentation ID', value: item => item.metadata?.vid ?? '' })
			config.listTableFieldDefinitions.push({ label: 'Manufacturer Name', value: item => item.metadata?.mnmn ?? '' })
		}

		await outputListing(this, config, args.id,
			() => this.client.deviceProfiles.list(),
			id => this.client.deviceProfiles.get(id),
		)
	}
}
