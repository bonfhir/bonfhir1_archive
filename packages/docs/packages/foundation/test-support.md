---
sidebar_position: 3
---

# Test Support

[![npm](https://img.shields.io/npm/v/@bonfhir/test-support)](https://www.npmjs.com/package/@bonfhir/test-support)

```bash npm2yarn
npm install @bonfhir/test-support
```

The `test-support` package is dedicated to resources that are useful in the context of automated tests and/or data generation.

## Fakes

It is sometime useful to be able to generate random resources with somewhat plausible data.
The `fake` helper method can generate fake but valid [FHIR Resources](https://hl7.org/fhir/resourcelist.html) that can be used during unit testing for example.

```typescript
import { fake } from "@bonfhir/test-support/r4b";

const fakePatient = fake("Patient");

// Force specific attributes values
const fakeDeadPatient = fake("Patient", { deceasedBoolean: true });
```

Here is a sample of a fake patient generated during unit testing:

```typescript
{
  resourceType: "Patient",
  id: "0203bec7-d723-4b4a-a00b-b2a0d6d4fd8e",
  identifier: [
    {
      use: "temp",
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "SB",
            display: "Social Beneficiary Identifier",
          },
        ],
        text: "Social Beneficiary Identifier",
      },
      system: "http://hl7.org/fhir/sid/us-ssn",
      value: "eassadf",
    },
  ],
  active: true,
  name: [
    {
      use: "usual",
      family: "Kumari",
      given: ["Somphong"],
    },
  ],
  telecom: [
    {
      system: "fax",
      value: "+82 11 678 1078",
      use: "work",
    },
  ],
  gender: "other",
  birthDate: "1999-01-06",
  address: [
    {
      use: "home",
      type: "both",
      line: ["1302 Frances Groves"],
      city: "Durwardton",
      state: "Kent",
      postalCode: "69760-6341",
    },
  ],
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml" class="fhir-narrative"><ul><li><span class="fhir-attr">Id: </span><span class="fhir-value">0203bec7-d723-4b4a-a00b-b2a0d6d4fd8e</span></li><li><span class="fhir-attr">Identifier: </span><ul><li><ul><li><span class="fhir-attr">Type: </span><ul><li><span class="fhir-attr">Coding: </span><ul><li><ul><li><span class="fhir-attr">System: </span><span class="fhir-value">http://terminology.hl7.org/CodeSystem/v2-0203</span></li><li><span class="fhir-attr">Display: </span><span class="fhir-value">Social Beneficiary Identifier</span></li></ul></li></ul></li><li><span class="fhir-attr">Text: </span><span class="fhir-value">Social Beneficiary Identifier</span></li></ul></li><li><span class="fhir-attr">System: </span><span class="fhir-value">http://hl7.org/fhir/sid/us-ssn</span></li><li><span class="fhir-attr">Value: </span><span class="fhir-value">e</span></li></ul></li></ul></li><li><span class="fhir-attr">Active: </span><span class="fhir-value">true</span></li><li><span class="fhir-attr">Name: </span><ul><li><ul><li><span class="fhir-attr">Family: </span><span class="fhir-value">Kumari</span></li><li><span class="fhir-attr">Given: </span><span class="fhir-value">Somphong</span></li></ul></li></ul></li><li><span class="fhir-attr">Telecom: </span><ul><li><ul><li><span class="fhir-attr">Value: </span><span class="fhir-value">+82 11 678 1078</span></li></ul></li></ul></li><li><span class="fhir-attr">Birth Date: </span><span class="fhir-value">2023-01-06</span></li><li><span class="fhir-attr">Address: </span><ul><li><ul><li><span class="fhir-attr">Line: </span><span class="fhir-value">1302 Frances Groves</span></li><li><span class="fhir-attr">City: </span><span class="fhir-value">Durwardton</span></li><li><span class="fhir-attr">State: </span><span class="fhir-value">Kent</span></li><li><span class="fhir-attr">Postal Code: </span><span class="fhir-value">69760-6341</span></li></ul></li></ul></li></ul></div>',
  },
}
```

**It is important to understand that all values are completely random (generated with the help of [Falso](https://ngneat.github.io/falso/)).
So while resources may be _valid_, they are certainly not _semantically correct_ (i.e. they do not accurately represent coherent clinical data).
If that's what you need, you may want to use the [Synthetic data](#synthetic-data) support.**

## Synthetic data

As an alternative to [fakes](#fakes), it is possible to leverage clinically-sensible data by using [synthetic data](https://en.wikipedia.org/wiki/Synthetic_data).

For this, we first need a data source for the synthetic data. It must be in the form of FHIR R4 Bundles.
We do recommend using the data provided by the [SyntheticMass project using Synthea<sup>TM</sup>](https://synthea.mitre.org/).

So go ahead and [download some synthetic data](https://synthea.mitre.org/downloads) in the FHIR R4 format.
Be mindful of the size of the data, specifically if you plan to commit it to your repo.
We recommend to start with a subset of their sample patients.

Then, copy those bundles into a folder in your source code.
You can now use the data in your tests:

```typescript
import { syntheticGenerator } from "@bonfhir/test-support/r4b";

// Initializing the generator once ensure that the loading of files is done only once for all synthetic searches.
const synthetic = syntheticGenerator(
  "<path to the synthetic data folder>/*.json"
);

const randomSyntheticPatient = await synthetic("Patient");
const randomSyntheticClaim = await synthetic("Claim");

// You can even look for specific conditions using FHIR Path
const randomSyntheticObservationOfLargeBodyMassIndex = await synthetic(
  "Observation",
  {
    fhirPath:
      "code.coding.code='39156-5' and valueQuantity.value > 25 and valueQuantity.unit = 'kg/m2'",
  }
);

// And as for fakes, override specific values at will
await synthetic("Patient", { override: { deceasedBoolean: true } });
```
