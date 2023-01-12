---
sidebar_position: 1
---

# Medplum

```bash npm2yarn
npm install @bonfhir/medplum
```

This package simply contains an adapter from the [Medplum Client](https://www.medplum.com/docs/sdk/classes/MedplumClient) to the [`FhirRestfulClient` interface present in the `core` package.](/packages/foundation/core#fhir-client-interface)

```typescript
import { buildFhirRestfulClientAdapter } from "@bonfhir/medplum/r4b";
import { MedplumClient } from "@medplum/core";

const medplumClient = new new MedplumClient({...});

const fhirRestfulClient = buildFhirRestfulClientAdapter(medplumClient);
```

_If you are using [Medplum](https://www.medplum.com/) as your FHIR Server, checkout [our Docker image](/packages/integrations/medplum-devbox) as well!._
