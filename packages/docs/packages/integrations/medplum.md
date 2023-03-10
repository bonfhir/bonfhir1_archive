---
sidebar_position: 1
---

# Medplum

[![npm](https://img.shields.io/npm/v/@bonfhir/medplum)](https://www.npmjs.com/package/@bonfhir/medplum)

```bash npm2yarn
npm install @bonfhir/medplum
```

This package simply contains an adapter from the [Medplum Client](https://www.medplum.com/docs/sdk/classes/MedplumClient) to the [`FhirRestfulClient` interface present in the `core` package.](/packages/foundation/core#fhir-client-interface)

_[Change Log](https://github.com/bonfhir/bonfhir/blob/main/packages/medplum/CHANGELOG.md)_

```typescript
import { buildFhirRestfulClientAdapter } from "@bonfhir/medplum/r4b";
import { MedplumClient } from "@medplum/core";

const medplumClient = new MedplumClient({...});

const fhirRestfulClient = buildFhirRestfulClientAdapter(medplumClient);
```

_If you are using [Medplum](https://www.medplum.com/) as your FHIR Server, checkout [our Medplum Docker image](/docs/medplum-devbox) as well!._
