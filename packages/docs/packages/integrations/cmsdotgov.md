---
sidebar_position: 3
---

# CMS.gov

[![npm](https://img.shields.io/npm/v/@bonfhir/cmsdotgov)](https://www.npmjs.com/package/@bonfhir/cmsdotgov)

```bash npm2yarn
npm install @bonfhir/cmsdotgov
```

This package regroups features related to the [CMS.gov](https://www.cms.gov/) products & features.

_[Change Log](https://github.com/bonfhir/bonfhir/blob/main/packages/cmsdotgov/CHANGELOG.md)_

## NPPES / NPI Registry

Provides a utility to retrieve information from the [National Plan and Provider Enumeration System (NPPES) National Provider Identifier (NPI) registry](https://npiregistry.cms.hhs.gov/).

Given a NPI number, it will interrogate the API and sync back the information to a FHIR Server.

```typescript
import { FhirRestfulClient } from "@bonfhir/core/r4b";
import { NPIRegistrySyncSession } from "@bonfhir/cmsdotgov/r4b";

const client: FhirRestfulClient = ...;

const syncSession = new NPIRegistrySyncSession({
  client
});

const result = await syncSession.sync({ number: "<npi-number>" });
```

The sync operation performs a [`merge`](/packages/foundation/core#resources-merge) on subsequent syncs.

Here are the entities created:

- For a Practitioner:

  - The `Practitioner` itself, with the
    - [NPI number as an identifier](https://www.hl7.org/fhir/identifier-registry.html)
    - qualifications filled from taxonomies
  - A `Provenance` record pointing to the `Practitioner`
  - And an `Organization` representing the CMS.gov itself, used by the `Provenance`

- For an Organization:
  - The `Organization` itself, with the[NPI number as an identifier](https://www.hl7.org/fhir/identifier-registry.html)
  - a `HealthcareService` per taxonomy, pointing to the `Organization`
    - if the taxonomy reports a state, the `HealthcareService.coverageArea` pointing to a `Location` representing the state
  - A `Provenance` record pointing to the `Organization`
  - And an `Organization` representing the CMS.gov itself, used by the `Provenance`

The Provenance record can be provided as an option if needed (will serve as a template to create the records), or de-activated entirely by passing the "no-provenance" value to the sync session.

The `NPIRegistrySyncSession` can be safely re-used or re-created any time; all it does is holding a cache for certain referenced values (mainly the CMS.gov `Organization` and the `Location` per state), to save a few round-trips to the server.

## ICD10 Codes builder

The `ICD10CodesBuilder` is there to help create `Coding` and `CodeableConcept` for ICD10 Codes using reference files
downloadable at https://www.cms.gov/Medicare/Coding/ICD10:

```typescript
import { ICD10CodesBuilder } from "@bonfhir/cmsdotgov/r4b";

const builder = new ICD10CodesBuilder({
  sourceFilePath: "./icd10cm_codes_2023.txt",
  version: "2023",
});

const coding = await builder.coding("A408");
/*
{
  system: "http://hl7.org/fhir/sid/icd-10-cm",
  code: "A408",
  display: "Other streptococcal sepsis",
  version: "2023"
}
*/

const codeableConcept = await builder.codeableConcept("B301");
/*
{
  coding: [{
    system: "http://hl7.org/fhir/sid/icd-10-cm",
    code: "B301",
    display: "Conjunctivitis due to adenovirus",
    version: "2023",
  }],
  text: "Conjunctivitis due to adenovirus"
}
*/
```

## HCPCS Codes builder

The `HCPCSCodesBuilder` is there to help create `Coding` and `CodeableConcept` for HCPCS Codes using reference files
downloadable at https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets:

```typescript
import { HCPCSCodesBuilder } from "@bonfhir/cmsdotgov/r4b";

const builder = new ICD10CodesBuilder({
  sourceFilePath: "./HCPC2023_JAN_ANWEB_v3.csv",
  version: "2023-01",
});

const coding = await builder.coding("G0157");
/*
{
  system: "https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets",
  code: "G0157",
  display: "Services performed by a qualified physical therapist assistant in the home health or hospice setting, each 15 minutes",
  version: "2023-01"
}
*/

const codeableConcept = await builder.codeableConcept("L3470");
/*
{
  coding: [{
    system: "https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets",
    code: "L3470",
    display: "Heel, thomas extended to ball",
    version: "2023-01",
  }],
  text: "Heel, thomas extended to ball"
}
*/
```

_Source files should be CSV files. If you download them as Excel file, you can use the `ssconvert` utility to process them into CSV files._
