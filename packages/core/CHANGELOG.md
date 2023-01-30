# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-alpha.6](https://github.com/bonfhir/bonfhir/compare/@bonfhir/core@1.0.0-alpha.5...@bonfhir/core@1.0.0-alpha.6) (2023-01-30)


### Features

* **core:** :sparkles: add `buildTimelineOfResourcesWithPeriods` method ([f989f17](https://github.com/bonfhir/bonfhir/commit/f989f17ae1bc32dd478f69f79d9ffec50916d22f))
* **core:** :sparkles: add `getIdFromReference` convenience method ([2c237f0](https://github.com/bonfhir/bonfhir/commit/2c237f0cc641e40778583ba581e6b846c8a8b9d4))





# [1.0.0-alpha.5](https://github.com/bonfhir/bonfhir/compare/@bonfhir/core@1.0.0-alpha.4...@bonfhir/core@1.0.0-alpha.5) (2023-01-23)


### Bug Fixes

* **core:** :adhesive_bandage: add `title` and `url` to `resourceSearch("ConceptMap")` ([e8f06ee](https://github.com/bonfhir/bonfhir/commit/e8f06ee19525fbad0264917283ad28431328776d)), closes [#29](https://github.com/bonfhir/bonfhir/issues/29)
* **core:** :adhesive_bandage: fix `createOr` mandating identifier when a search is provided ([b2a2628](https://github.com/bonfhir/bonfhir/commit/b2a2628d574f0453d84d725767349aa2fc89cea6)), closes [#28](https://github.com/bonfhir/bonfhir/issues/28)


### Features

* **core:** :sparkles: add `get` to `FhirRestfulClient` + support for better pagination ([d8e260a](https://github.com/bonfhir/bonfhir/commit/d8e260a6ccb1f4d8cda229310663f7c8f3f9a6c6))
* **core:** :sparkles: add more search parameters ([debef45](https://github.com/bonfhir/bonfhir/commit/debef458e815506a27abb43c582bd5fd0dc58a8c)), closes [#26](https://github.com/bonfhir/bonfhir/issues/26)
* **core:** :sparkles: add version-specific reference builder ([3a9eaa7](https://github.com/bonfhir/bonfhir/commit/3a9eaa72db30013c529000d67d99dabadf4b9f36))





# [1.0.0-alpha.4](https://github.com/bonfhir/bonfhir/compare/@bonfhir/core@1.0.0-alpha.3...@bonfhir/core@1.0.0-alpha.4) (2023-01-18)


### Features

* **core:** :sparkles: add `isFhirResource` utility ([3798b3b](https://github.com/bonfhir/bonfhir/commit/3798b3bee30a2f6338c1dffb1373f6015394821d))
* **core:** :sparkles: add `searchAllPages` utility ([b725c01](https://github.com/bonfhir/bonfhir/commit/b725c011e4502e6c02ab9c3c3a57d66d8ee3a954))





# [1.0.0-alpha.3](https://github.com/bonfhir/bonfhir/compare/@bonfhir/core@1.0.0-alpha.2...@bonfhir/core@1.0.0-alpha.3) (2023-01-13)


### Bug Fixes

* **core:** :bug: add `code` to `resourceSearch("Medication")` ([0a132d4](https://github.com/bonfhir/bonfhir/commit/0a132d42421bc656bc3fce02eeb6947e1185e636)), closes [#19](https://github.com/bonfhir/bonfhir/issues/19)





# [1.0.0-alpha.2](https://github.com/bonfhir/bonfhir/compare/@bonfhir/core@1.0.0-alpha.1...@bonfhir/core@1.0.0-alpha.2) (2023-01-13)


### Bug Fixes

* **core:** :bug: fix using the narrative as display when building references ([2a4c6e5](https://github.com/bonfhir/bonfhir/commit/2a4c6e5c8485e2fc78a32eb7ce762f5eaf2255c1))
* **core:** :bug: remove the id from the narrative, to allow more stable merge ([013f8e0](https://github.com/bonfhir/bonfhir/commit/013f8e06d2e4bab25a9f7aedf3206dd926419ee7))


### Features

* **core:** :sparkles: add `createOr` utility function ([c148b47](https://github.com/bonfhir/bonfhir/commit/c148b472336a7d8e1df0f083bb84f89fa043477c))
* **core:** :sparkles: add small `utcNow` utility ([1e31b33](https://github.com/bonfhir/bonfhir/commit/1e31b3347d104a04eeb50c61a5ea58d57041607f))





# [1.0.0-alpha.1](https://github.com/bonfhir/bonfhir/compare/@bonfhir/core@1.0.0-alpha.0...@bonfhir/core@1.0.0-alpha.1) (2023-01-10)

**Note:** Version bump only for package @bonfhir/core
