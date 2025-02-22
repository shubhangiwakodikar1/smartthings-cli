# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.0.0-pre.23](https://github.com/rossiam/smartthings-cli/compare/v0.0.0-pre.22...v0.0.0-pre.23) (2021-04-23)


### Bug Fixes

* pin pkg to resolve missing commands ([03701dd](https://github.com/rossiam/smartthings-cli/commit/03701dd1b908e3986645ab8dab9017f768cc1cd1))





# [0.0.0-pre.22](https://github.com/john-u/smartthings-cli/compare/v0.0.0-pre.21...v0.0.0-pre.22) (2021-04-21)


### Bug Fixes

* **deps:** include cli-ux as dependency ([c4348be](https://github.com/john-u/smartthings-cli/commit/c4348be9b99fbc6ec0819d58a0ae4b9c4bd65521))





# [0.0.0-pre.21](https://github.com/john-u/smartthings-cli/compare/v0.0.0-pre.20...v0.0.0-pre.21) (2021-04-20)


### Features

* accept eventsource init dict ([45eb35f](https://github.com/john-u/smartthings-cli/commit/45eb35f34a29c0763eebd286d9bde4e43b539ff2))





# [0.0.0-pre.20](https://github.com/john-u/smartthings-cli/compare/v0.0.0-pre.19...v0.0.0-pre.20) (2021-04-12)


### Features

* **lib:** stream SSE with custom output format ([7f0444d](https://github.com/john-u/smartthings-cli/commit/7f0444df6abb1dcddb40330a8311f5d5096b99ac))
* Accept manufacturerName in device config command ([2a17dc4](https://github.com/john-u/smartthings-cli/commit/2a17dc4c2b2c638a85062e372e35df7bb375ece3))





# [0.0.0-pre.19](https://github.com/john-u/smartthings-cli/compare/v0.0.0-pre.18...v0.0.0-pre.19) (2021-04-06)


### Features

* output JSON by default when not outputting to the console ([a0d91ff](https://github.com/john-u/smartthings-cli/commit/a0d91ff73d40131392fb57407c90ce01806b0424))





# [0.0.0-pre.18](https://github.com/rossiam/smartthings-cli/compare/v0.0.0-pre.17...v0.0.0-pre.18) (2021-02-01)


### Features

* Added commands to list, show, and delete installed ST schema instances ([3158d47](https://github.com/rossiam/smartthings-cli/commit/3158d4715e7ec3f261af74429675f3afa97695e5))





# [0.0.0-pre.17](https://github.com/rossiam/smartthings-cli/compare/v0.0.0-pre.16...v0.0.0-pre.17) (2021-01-25)

**Note:** Version bump only for package root





# [0.0.0-pre.16](https://github.com/rossiam/smartthings-cli/compare/v0.0.0-pre.15...v0.0.0-pre.16) (2021-01-22)


### Bug Fixes

* correct ordering of InputProcessor calls ([dd4dfd0](https://github.com/rossiam/smartthings-cli/commit/dd4dfd0938f6b6888ce1f0a48840d4b8b0ccdddf))
* Corrected bug display verbose apps table ([0b35655](https://github.com/rossiam/smartthings-cli/commit/0b35655fe0c46aeadf57817ec4d6a21d73a300c5))
* fix rules lookup without location id and functional refactor ([bfa67b6](https://github.com/rossiam/smartthings-cli/commit/bfa67b6167c32281825559c65e4f38e38ab1d863))
* use kebab case for all flags ([128dcbb](https://github.com/rossiam/smartthings-cli/commit/128dcbb25e292e179b6483ce76e42a4c3eb290c2))


### Features

* Added support for specifying a language header ([00f50b9](https://github.com/rossiam/smartthings-cli/commit/00f50b9d8aadf0275f4e6426d68207903e639829))





# [0.0.0-pre.15](https://github.com/rossiam/smartthings-cli/compare/v0.0.0-pre.14...v0.0.0-pre.15) (2020-12-21)


### Bug Fixes

* Added support for device presentation manufacturer name ([804eaaa](https://github.com/rossiam/smartthings-cli/commit/804eaaa906d965dd7e66aa98d3e66b166f90fe68))
* remove unnecessary node dependency in lib ([27c38e3](https://github.com/rossiam/smartthings-cli/commit/27c38e3fddb692b7985e77a0d5147f17f929558a))
* use InstalledApp fields in installedapps:rename and refactor to use new functional paradigm ([8170818](https://github.com/rossiam/smartthings-cli/commit/817081833d5d260f48a5fda1255b12ff631ca0da))





# [0.0.0-pre.14](https://github.com/john-u/smartthings-cli/compare/v0.0.0-pre.13...v0.0.0-pre.14) (2020-12-07)


### Bug Fixes

* use default version of 1 when not id included in command line without version ([9acace0](https://github.com/john-u/smartthings-cli/commit/9acace0b47388f552f2c50ed46f64c720b1176b9))
* validate capability command and attribute names ([794d592](https://github.com/john-u/smartthings-cli/commit/794d5928c855dbbe7168479763cc33852c0e4c76))


### Features

* **logger:** default log file path to oclif cacheDir ([a1ce523](https://github.com/john-u/smartthings-cli/commit/a1ce523eac18c0ddda4c92bc627658bd394a0862))





# [0.0.0-pre.13](https://github.com/john-u/smartthings-cli/compare/v0.0.0-pre.12...v0.0.0-pre.13) (2020-10-22)


### Features

* Added option to filter devices by installedAppId ([62628a8](https://github.com/john-u/smartthings-cli/commit/62628a80ca9c0fcc78339f4f7ecb6122dde44f33))





# [0.0.0-pre.12](https://github.com/rossiam/smartthings-cli/compare/v0.0.0-pre.11...v0.0.0-pre.12) (2020-09-30)


### Bug Fixes

* fix issues with binary and node builds ([7989558](https://github.com/rossiam/smartthings-cli/commit/7989558c2cda5b1cf1c2f622285bee1445a54f66))





# [0.0.0-pre.11](https://github.com/rossiam/smartthings-cli/compare/v0.0.0-pre.10...v0.0.0-pre.11) (2020-09-28)


### Bug Fixes

* clean up zip file contents ([03a4a37](https://github.com/rossiam/smartthings-cli/commit/03a4a3761b025a60112d7407137a98cce811b386))
* remove ambiguous log method ([5466cd6](https://github.com/rossiam/smartthings-cli/commit/5466cd6ad3ed8bf35ab79d40f7ec2023cbd81f62))
* Update to accommodate switch from vid to presentationId ([3756ed7](https://github.com/rossiam/smartthings-cli/commit/3756ed74abf6feca1d0ba44518ebb85de3930904))


### Features

* add support for access to parsed argv property ([48d1264](https://github.com/rossiam/smartthings-cli/commit/48d12644baaf417e26285a97e4c3ef17562f6c52))
* added device profile and capability localizations ([6a48783](https://github.com/rossiam/smartthings-cli/commit/6a487830539eb3660358c8c448ce1de2e3465f8e))
* app list options and fixes to app and schema commands ([#101](https://github.com/rossiam/smartthings-cli/issues/101)) ([979e409](https://github.com/rossiam/smartthings-cli/commit/979e409c27e8ed9eb33c6fadad65a1811cf413ef))
* use separate file for logging config ([80b3005](https://github.com/rossiam/smartthings-cli/commit/80b30051abb6670ea36f479e18c202fb3bf7b289))





# [0.0.0-pre.10](https://github.com/rossiam/smartthings-cli/compare/v0.0.0-pre.9...v0.0.0-pre.10) (2020-09-02)


### Bug Fixes

* bump core-sdk and log4js versions ([2a3f9ff](https://github.com/rossiam/smartthings-cli/commit/2a3f9fffdabbf5f5babb0cc4aaffe648ddd7ebd8))





# [0.0.0-pre.9](https://github.com/rossiam/smartthings-cli/compare/v0.0.0-pre.8...v0.0.0-pre.9) (2020-09-02)


### Features

* added prompted device profile creation and device view commands  ([#95](https://github.com/rossiam/smartthings-cli/issues/95)) ([a4f1672](https://github.com/rossiam/smartthings-cli/commit/a4f167208035544741fd750010554644d05c5d5a))
* export api-helpers functions ([d723b85](https://github.com/rossiam/smartthings-cli/commit/d723b85cd8745ee3631ad5976eecd0ae66e50e0a))





# [0.0.0-pre.8](https://github.com/rossiam/smartthings-cli/compare/v0.0.0-pre.7...v0.0.0-pre.8) (2020-08-17)


### Bug Fixes

* corrected processing of command line input into command line id ([25da623](https://github.com/rossiam/smartthings-cli/commit/25da6232e71d3485c833859785306e47a939f2c8))
* **LoginAuthenticator:** create cli dir on init ([27d7bee](https://github.com/rossiam/smartthings-cli/commit/27d7bee76a0e8b8043686dd6b066f8fb8bd0d2b9))


### Features

* add support for building input form command line options ([599c3c2](https://github.com/rossiam/smartthings-cli/commit/599c3c261fd8d84218f477d0118b1a5e2de4a90a))





# [0.0.0-pre.7](https://github.com/john-u/smartthings-cli/compare/v0.0.0-pre.6...v0.0.0-pre.7) (2020-07-31)

**Note:** Version bump only for package root





# [0.0.0-pre.6](https://github.com/rossiam/smartthings-cli/compare/v0.0.0-pre.5...v0.0.0-pre.6) (2020-07-28)


### Bug Fixes

* make logManager and credentials work across with plugins ([e267b53](https://github.com/rossiam/smartthings-cli/commit/e267b53d3cef7959dd60fb48efd6d25e953beafb))





# [0.0.0-pre.5](https://github.com/rossiam/smartthings-cli/compare/v0.0.0-pre.4...v0.0.0-pre.5) (2020-07-28)


### Bug Fixes

* make cliConfig truly global ([6e2d45f](https://github.com/rossiam/smartthings-cli/commit/6e2d45f5960f8c3340b5e420139bb73674c1dde5))





# [0.0.0-pre.4](https://github.com/john-u/smartthings-cli/compare/v0.0.0-pre.3...v0.0.0-pre.4) (2020-07-27)

**Note:** Version bump only for package root





# [0.0.0-pre.3](https://github.com/john-u/smartthings-cli/compare/v0.0.1-pre2...v0.0.0-pre.3) (2020-07-22)


### Bug Fixes

* correct spelling of SchemaCreateResponse ([b0334b3](https://github.com/john-u/smartthings-cli/commit/b0334b3e0f288c74cffab81d2808c48e9512eb20))
* pass version arg to capabilities delete endpoint ([519c15a](https://github.com/john-u/smartthings-cli/commit/519c15afc0f79cad61e8d8a633ab4f3d0ee84141))


### Features

* add namespace flag to capabilities create ([8c0ae7e](https://github.com/john-u/smartthings-cli/commit/8c0ae7e712d837f3c129f65fd11389d3b055c545))
