import { CapabilityLocalization } from '@smartthings/core-sdk'

import { APICommand, inputAndOutputItem } from '@smartthings/cli-lib'

import { buildTableOutput } from '../translations'
import { capabilityIdInputArgs, chooseCapability } from '../../capabilities'


export default class CapabilityTranslationsUpsertCommand extends APICommand {
	static description = 'Create or update a capability translation'

	static flags = {
		...APICommand.flags,
		...inputAndOutputItem.flags,
	}

	static args = capabilityIdInputArgs

	static examples = [
		'$ smartthings capabilities:translations:upsert custom1.outputModulation 1 -i en.yaml ',
		'tag: en',
		'label: Output Modulation',
		'attributes:',
		'  outputModulation:',
		'    label: Output Modulation',
		'    displayTemplate: \'The {{attribute}} of {{device.label}} is {{value}}\'',
		'    i18n:',
		'      value:',
		'        50hz:',
		'          label: 50 Hz',
		'        60hz:',
		'          label: 60 Hz',
		'commands:',
		'  setOutputModulation:',
		'    label: Set Output Modulation',
		'    arguments:',
		'      outputModulation:',
		'        label: Output Modulation',
		'',
		'$ smartthings capabilities:translations:upsert -i en.yaml',
		'┌───┬─────────────────────────────┬─────────┬──────────┐',
		'│ # │ Id                          │ Version │ Status   │',
		'├───┼─────────────────────────────┼─────────┼──────────┤',
		'│ 1 │ custom1.outputModulation    │ 1       │ proposed │',
		'│ 2 │ custom1.outputVoltage       │ 1       │ proposed │',
		'└───┴─────────────────────────────┴─────────┴──────────┘',
		'? Enter id or index 1',
		'tag: en',
		'label: Output Modulation',
		'attributes:',
		'  outputModulation:',
		'    label: Output Modulation',
		'    displayTemplate: \'The {{attribute}} of {{device.label}} is {{value}}\'',
		'    i18n:',
		'      value:',
		'        50hz:',
		'          label: 50 Hz',
		'        60hz:',
		'          label: 60 Hz',
		'commands:',
		'  setOutputModulation:',
		'    label: Set Output Modulation',
		'    arguments:',
		'      outputModulation:',
		'        label: Output Modulation',
	]

	async run(): Promise<void> {
		const { args, argv, flags } = this.parse(CapabilityTranslationsUpsertCommand)
		await super.setup(args, argv, flags)

		const id = await chooseCapability(this, args.id, args.version)
		await inputAndOutputItem<CapabilityLocalization, CapabilityLocalization>(this,
			{ buildTableOutput: data => buildTableOutput(this.tableGenerator, data) },
			(_, translations) => this.client.capabilities.upsertTranslations(id.id, id.version, translations))
	}
}
