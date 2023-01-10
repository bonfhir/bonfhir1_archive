---
sidebar_position: 2
---

# Terminology

![npm](https://img.shields.io/npm/v/@bonfhir/terminology)

```bash npm2yarn
npm install @bonfhir/terminology
```

This package is there to support a light usage of FHIR terminology.

The subject is vast and complex, so for any important implementation a analysis must be made as to how to use FHIR
terminology appropriately.

Nevertheless, this library provides some out-of-the-box typings for the common [`ValueSets`](https://hl7.org/fhir/terminologies-valuesets.html)
defined in the FHIR spec.

## ValueSet expansion

For a lot of the [`ValueSet` defined in the FHIR Terminology](https://hl7.org/fhir/terminologies-valuesets.html), this provide
a typed-version with all values, codes, `Coding`, and `CodeableConcept` expanded and ready to be used.

```typescript
import { build } from "@bonfhir/core/r4b";
import { MedicationDispenseStatusCodes, MedicationDispenseStatusReasonCodes } from "@bonfhir/terminology/r4b";

const medicationDispense = build("MedicationDispense", {
  status: MedicationDispenseStatusCodes.values["On Hold"].code,
  statusReasonCodeableConcept: MedicationDispenseStatusReasonCodes.values["Drug interacts with another drug"].codeableConcept
  ...
});
```

It is also possible, for each of the value sets, to enumerate all it's expanded values using the `expansion` attribute
(for use in frontend applications for example).

_The terminology package is quite big, so if you plan to use it on a frontend application,
make sure to run a bundler with tree-shaking capabilities to limit the size of the final package._

## Known Identifier Systems / Identifier Registry

The package also includes definitions for [Known Identifier Systems](https://hl7.org/fhir/identifier-registry.html).

```typescript
import type { Identifier } from "fhir/r4";
import { KnownIdentifierSystems } from "@bonfhir/terminology/r4b";

const usSSNIdentifier: Identifier = {
  ...KnownIdentifierSystems.USSocialSecurityNumber,
  value: "00000000",
};
```
