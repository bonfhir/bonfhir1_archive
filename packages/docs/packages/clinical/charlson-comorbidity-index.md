---
sidebar_position: 1
---

# Charlson Comorbidity Index

[![npm](https://img.shields.io/npm/v/@bonfhir/charlson-comorbidity-index)](https://www.npmjs.com/package/@bonfhir/charlson-comorbidity-index)

```bash npm2yarn
npm install @bonfhir/charlson-comorbidity-index
```

This package contains a [Charlson Comorbidity Index (CCI)](<https://doi.org/10.1016/0021-9681(87)90171-8>) calculator.

It can compute a CCI score and 10-year-survival rate based on a [`Patient`](https://hl7.org/fhir/patient.html) profile and a list of active and current [`Condition`](https://hl7.org/fhir/condition.html).

**IMPORTANT: This package does not contain any mapping between CCI variables and the code system used for your specific `Condition`.<br/>
In order to make it work, you must provide such a mapping, that needs to be reviewed by experienced medical professionals.
An _example_ of [such mapping using ICD10 codes can be seen here](https://github.com/bonfhir/bonfhir/blob/main/packages/charlson-comorbidity-index/r4b/__fixtures__/icd10-codes-conceptmap.fhir.json).<br/>
We make absolutely no claim that this is accurate or up-to-date, so you MUST make and review your own mapping.**

_[Change Log](https://github.com/bonfhir/bonfhir/blob/main/packages/charlson-comorbidity-index/CHANGELOG.md)_

```typescript
import {
  buildTemplateConceptMapForCCI,
  computeCharlsonComorbidityIndex,
} from "@bonfhir/charlson-comorbidity-index/r4b";

// Build a concept map template that you can safe in your own system, and must be completed with relevant Condition codes mapping.
const conceptMapTemplate = buildTemplateConceptMapForCCI();

//...

const result = computeCharlsonComorbidityIndex({
  patient,
  conditions,
  conceptMap,
});
/*
{
  status: "success",
  score: 3,
  tenYearSurvivalRate: 0.77,
  detailedScores: {
    age: 2,
    "myocardial-infarction": 1,
    ...
  },
  basedOn: [
    {
      reference: "Condition/90cd4ebe-47a4-4162-8088-cc6b944af764",
      type: "Condition"
    },
    ...
  ],
}
*/
```
