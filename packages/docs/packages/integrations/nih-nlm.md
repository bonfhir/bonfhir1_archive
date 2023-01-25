---
sidebar_position: 3
---

# NIH National Library of Medicine

[![npm](https://img.shields.io/npm/v/@bonfhir/nih-nlm)](https://www.npmjs.com/package/@bonfhir/nih-nlm)

```bash npm2yarn
npm install @bonfhir/nih-nlm
```

This package regroups features related to the [NIH National Library of Medicine](https://www.nlm.nih.gov/) products & features.

## RxNorm

Provides a utility to retrieve information from the [RXNorm API](https://lhncbc.nlm.nih.gov/RxNav/APIs/RxNormAPIs.html).

### `syncAllProperties`

Given a NDC Code (or Rxcui number), it will interrogate the API and sync back the information to a FHIR Server.

```typescript
import { FhirRestfulClient } from "@bonfhir/core/r4b";
import { RxNormSyncSession } from "@bonfhir/nih-nlm/r4b";

const client: FhirRestfulClient = ...;

const syncSession = new RxNormSyncSession({
  client
});

const result = await syncSession.syncAllProperties({ ndc: "<ndc-code>" });
```

The sync operation performs a [`merge`](/packages/foundation/core#resources-merge) on subsequent syncs.

Here are the entities created:

- a `Medication` resource with information taken from the main [getAllProperties API](https://lhncbc.nlm.nih.gov/RxNav/APIs/api-RxNorm.getAllProperties.html)
- if a NDC Code was provided, an additional `MedicationKnowledge` with information taken from the [getNDCProperties API](https://lhncbc.nlm.nih.gov/RxNav/APIs/api-RxNorm.getNDCProperties.html)
- A `Provenance` record pointing to the `Medication` and `MedicationKnowledge`
- And an `Organization` representing the NLM itself, used by the `Provenance`

The Provenance record can be provided as an option if needed (will serve as a template to create the records), or de-activated entirely by passing the "no-provenance" value to the sync session.

The `RxNormSyncSession` can be safely re-used or re-created any time; all it does is holding a cache for certain referenced values (mainly the NLM `Organization`), to save a few round-trips to the server.

## Drug Interactions

Allows identification of drug interactions using [NLM Drug Interaction API](https://lhncbc.nlm.nih.gov/RxNav/APIs/InteractionAPIs.html).

```typescript
import { findDrugInteractionsIssues } from "@bonfhir/nih-nlm/r4b";

// with Rxcuis directly
const detectedIssues = await findDrugInteractionsIssues({
  rxcuis: ["207106", "152923", "656659"],
});

// with Medication resources coded with Rxcui - See RxNorm sync above
const detectedIssues = await findDrugInteractionsIssues({
  medications,
});
```
