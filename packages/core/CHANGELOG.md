# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.0.0-alpha.9](https://github.com/bonfhir/bonfhir/compare/@bonfhir/core@1.0.0-alpha.8...@bonfhir/core@1.0.0-alpha.9) (2023-03-01)


### Bug Fixes

* **codegen:** :adhesive_bandage: fix bundling of auto-generated note ([295efa0](https://github.com/bonfhir/bonfhir/commit/295efa0900f0cb1f80a889e05d8969452ccb8262))
* **core:** :adhesive_bandage: fix linting issues ([9effbdd](https://github.com/bonfhir/bonfhir/commit/9effbdd5775cbc6f73bc5be3e2867929c11546d5))
* **core:** :bug: add `patient` and `code` to `resourceSearch("Condition")` ([552f9ac](https://github.com/bonfhir/bonfhir/commit/552f9acf302db023da8e6b6acf58036aa028b73e)), closes [#79](https://github.com/bonfhir/bonfhir/issues/79)
* **core:** :bug: fix token search builder when using only a system ([535ae46](https://github.com/bonfhir/bonfhir/commit/535ae4622d14e374f4b76677ee58461e8aee1e82)), closes [#115](https://github.com/bonfhir/bonfhir/issues/115)


### Features

* **core:** :sparkles: add `adapter.message` template function ([2bb2c1f](https://github.com/bonfhir/bonfhir/commit/2bb2c1f2bcbfa7c7254a0db01501fed2e2ff6f5d))
* **core:** :sparkles: add `resources` method to `BundleNavigator` ([3c225d1](https://github.com/bonfhir/bonfhir/commit/3c225d19bd80d72f0ebb02b21f97a7be3b1239ab)), closes [#48](https://github.com/bonfhir/bonfhir/issues/48)
* **core:** :sparkles: add missing data types in `adapter.message` tag function ([6a747ed](https://github.com/bonfhir/bonfhir/commit/6a747ed150d4934448bdf6493dc5205d8798201e))
* **core:** :sparkles: add types for standard operations parameters and results ([511ade7](https://github.com/bonfhir/bonfhir/commit/511ade77a0201f8f0d64483f2ce3a8a074cace40))
* **core:** :sparkles: introduce decimal type fhir adapter ([0280da0](https://github.com/bonfhir/bonfhir/commit/0280da0547155ecf578ec0786bd17ae82cb23ac7))
* **core:** add adapter for boolean primitive data type ([2a3c55c](https://github.com/bonfhir/bonfhir/commit/2a3c55c3da37eadea96820cb2a86b615d2decdbc))
* **core:** add address general FHIR type ([ab3089b](https://github.com/bonfhir/bonfhir/commit/ab3089b3275ef808dfaabb916040a826aed5809c))
* **core:** add age general FHIR type ([61675c0](https://github.com/bonfhir/bonfhir/commit/61675c0f369b31474bca1d5ec49e955c278761e0))
* **core:** add code primitive type ([e71b9f7](https://github.com/bonfhir/bonfhir/commit/e71b9f7e8db33335b1f8f36758d07484583ec392))
* **core:** add codeableConcept general FHIR type ([6c5b018](https://github.com/bonfhir/bonfhir/commit/6c5b01812905737062f1d6d79a55eedb5b605b14))
* **core:** add coding general FHIR type ([1a1020e](https://github.com/bonfhir/bonfhir/commit/1a1020e2287089102176fe4c19386dc344f5cfb7))
* **core:** add contact point general FHIR type ([1e8b5be](https://github.com/bonfhir/bonfhir/commit/1e8b5be5bada7400c6741cff276501cda05d0f7a))
* **core:** add count general FHIR type ([ed81428](https://github.com/bonfhir/bonfhir/commit/ed81428fff9cae95d87a6bc8fc159ac8dedf01a7))
* **core:** add datetime primitive type ([06761b1](https://github.com/bonfhir/bonfhir/commit/06761b14e1bec0839737fb2acdc81429f6dec9cf))
* **core:** add distance general FHIR type ([0b72aa3](https://github.com/bonfhir/bonfhir/commit/0b72aa3fdcafee8c18db82fd0405ec64e331cba7))
* **core:** add duration general FHIR type ([4f334a2](https://github.com/bonfhir/bonfhir/commit/4f334a2fa6e65e7e80ec2508a5d8037ebc6246b8))
* **core:** add format options to booleans ([a3807b2](https://github.com/bonfhir/bonfhir/commit/a3807b2753b7c7d03e1b227b61f7bd483d8c18f8))
* **core:** add humanName general FHIR type ([e4542fe](https://github.com/bonfhir/bonfhir/commit/e4542feac620f2b7e2a5675968914faa73a66c35))
* **core:** add instant primitive type ([d06c070](https://github.com/bonfhir/bonfhir/commit/d06c070b4279a3e2d766f5b0ae2fc3f0d639847e))
* **core:** add markdown primitive type ([0995873](https://github.com/bonfhir/bonfhir/commit/0995873ffe132f70c5a55a03c51752a1a0900c47))
* **core:** add missing basic primitive types ([3fca119](https://github.com/bonfhir/bonfhir/commit/3fca119e12ea9fc80264ee6f5ecd325d1da3a57c))
* **core:** add primary data type integer adapter ([75b94f0](https://github.com/bonfhir/bonfhir/commit/75b94f0bea1d7fbb0d8762fe1ac19067a16b813a))
* **core:** add time primitive type ([931ff4f](https://github.com/bonfhir/bonfhir/commit/931ff4fbc233d7bac5974ecea7694d8961f6971d))
* **core:** format array of addresses, sorted ([69bb195](https://github.com/bonfhir/bonfhir/commit/69bb195f46e3777a4f45c934deed953131095c6c))
* **core:** format array of contactPoint, sorted ([8e0fb76](https://github.com/bonfhir/bonfhir/commit/8e0fb76a2661f22f80ce56a265adef73ddfa9ae0))
* **core:** format array of humanNames, sorted ([a70bcd5](https://github.com/bonfhir/bonfhir/commit/a70bcd596ad899ad6097f8f14fe7e8a212882c57))
* **core:** formatters always return a string even for array arguments ([38bfaaa](https://github.com/bonfhir/bonfhir/commit/38bfaaadb6dd6ae0541265124d61daa06fe1c647))
* **core:** identifier formatters, including array format - sorted ([2eadc6a](https://github.com/bonfhir/bonfhir/commit/2eadc6abcc066df8b8fff446b25d06e916bc1d5f))
* **core:** introduce data-type-adatpers + date type ([327090d](https://github.com/bonfhir/bonfhir/commit/327090dede19238e8cb5719350498d539a76f0da))
* **core:** support for uri, url and canonical primitive types ([9e85fa7](https://github.com/bonfhir/bonfhir/commit/9e85fa7cb7095c01959016355e2d7c7a3d9a3717))
* **core:** support some general-purpuse datatypes ([40a20dc](https://github.com/bonfhir/bonfhir/commit/40a20dc7cb0ca400fd85ccd9e7c1769891805673))
* **core:** update address formater with localized format library ([dc52c3a](https://github.com/bonfhir/bonfhir/commit/dc52c3a447d0758170f00fcb2adf7d03ca3779ba))
* **core:** wip - add quantity FHIR general type ([828c6a1](https://github.com/bonfhir/bonfhir/commit/828c6a14f4b2f1df011bf913aface7d81df7c4b4))
* **ui-components:** :sparkles: add `<FhirValue />` component ([9b1f169](https://github.com/bonfhir/bonfhir/commit/9b1f16905739dea6b2660643bc834380fd383c83))





# [1.0.0-alpha.8](https://github.com/bonfhir/bonfhir/compare/@bonfhir/core@1.0.0-alpha.7...@bonfhir/core@1.0.0-alpha.8) (2023-02-08)


### Bug Fixes

* **core:** :bug: add `_total` to all `resourceSearch` ([5f00c14](https://github.com/bonfhir/bonfhir/commit/5f00c14b2e0b6915382d631e471337bde29ea094)), closes [#70](https://github.com/bonfhir/bonfhir/issues/70)
* **core:** :bug: add `identifier` to `resourceSearch("List")` ([e042f8e](https://github.com/bonfhir/bonfhir/commit/e042f8ee2075c4c35e636c954347f694430c1751)), closes [#41](https://github.com/bonfhir/bonfhir/issues/41)





# [1.0.0-alpha.7](https://github.com/bonfhir/bonfhir/compare/@bonfhir/core@1.0.0-alpha.6...@bonfhir/core@1.0.0-alpha.7) (2023-02-08)


### Features

* **core:** :sparkles: update `nextUrl` to a more generic `linkUrl` ([48a9cb4](https://github.com/bonfhir/bonfhir/commit/48a9cb4dee6bf998e42fa71990b47ddba67327ec)), closes [#50](https://github.com/bonfhir/bonfhir/issues/50)





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
