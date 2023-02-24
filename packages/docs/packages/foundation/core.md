---
sidebar_position: 1
---

# Core

[![npm](https://img.shields.io/npm/v/@bonfhir/core)](https://www.npmjs.com/package/@bonfhir/core)

```bash npm2yarn
npm install @bonfhir/core
```

The `core` package provides utilities to easily manipulate FHIR resources.
It is also used as a common dependency for all other packages to rely on.

## Builders & narrative generators

As specified in the [FHIR `Narrative` description](https://hl7.org/fhir/narrative.html):

> Any resource that is a DomainResource (all resources except Bundle, Parameters and Binary) may include a
> human-readable narrative that contains a summary of the resource and may be used to represent the content
> of the resource to a human.

The package provide a function to generate such `Narrative` using the content of the resource:

```typescript
import type { Patient } from "fhir/r4";
import { narrative } from "@bonfhir/core/r4b";

const patient: Patient = ...;

patient.text = narrative(patient);
```

Narratives are generated using resources elements that are marked with the
[**Σ** (`isSummary`) element definition](https://hl7.org/fhir/elementdefinition-definitions.html#ElementDefinition.isSummary).

In order to simplify building the resources, a convenient builder is provided that invokes the `narrative` generator
automatically:

```typescript
import { build } from "@bonfhir/core/r4b";

const organization = build("Organization", { name: "Acme, Inc." });
```

## Resources merge

It is sometime convenient to be able to recursively merge 2 resources definitions in a non-destructive fashion.
This is particularly useful in data-integration scenarios, where the same resource might be ingested at different time
and we want to add updates to it, without loosing other potential modifications that occur in between.

The `core` package provides a utility function to merge resources together:

```typescript
import type { Claim } from "fhir/r4";
import { merge } from "@bonfhir/core/r4b";

const originalClaim: Claim = ...;
const newClaim: Claim = ...;

const result = merge({
  current: originalClaim,
  incoming: newClaim
});

result.isUpdated; // True if the incoming resource impacted the current, so the result is different that the current
result.merged; // The final, merged entity.
```

Merging is deeply recursive. Elements are de-duplicated based on their `id` property (for both [`Resource`](https://hl7.org/fhir/resource-definitions.html#Resource.id) and [`Element`](https://hl7.org/fhir/element-definitions.html#Element.id)).
If not `id` property is present, a strict attribute compare is used to identify duplicate elements.

If you want a stable deep-merge that will consistently update values, use stable `id` fields on all resources and elements.

The narrative is re-generated automatically for the merged result.

```typescript
import type { Claim } from "fhir/r4";
import { build, merge } from "@bonfhir/core/r4b";

const current = build("Person", {
  name: [
    {
      id: "main-id",
      use: "official",
      family: "Simpson"
    },
  ]
});

const incoming = build("Person", {
  name: [
    {
      id: "main-id",
      given: ["Homer"],
    },
    {
      id: "alternate-id",
      use: "old",
      family: "Power"
      given: ["Max"],
    },
  ]
});

const result = merge({ current, incoming: newClaim });

result === {
  isUpdated: true,
  merged: {
    resourceType: "Person",
    name: [
    {
      id: "main-id",
      use: "official",
      family: "Simpson"
      given: ["Homer"],
    },
    {
      id: "alternate-id",
      use: "old",
      family: "Power"
      given: ["Max"],
    },
  ]
  }
};
```

## FHIR Client interface

The `core` package provides the `FhirRestfulClient` interface that matches with the [official FHIR RESTful API](https://hl7.org/fhir/http.html).

The idea is that all Bonfhir packages, and maybe your own implementation too, can take a dependency on that type instead
of a concrete client implementation, that depends on a specific FHIR server. This is a good way to ensure portability
of implementations.

This can also simplify unit testing by offering a simple interface to mock.

Concrete implementations can be found in [Integrations](/packages/integrations/medplum) packages, or can be built quite easily yourself.

### FHIR Client decorator

A utility function is provided to be able to decorate a `FhirRestfulClient`, to intercept calls made to it.
This can be helpful to log calls, or record resources elsewhere for example.

```typescript
import { decorateFhirRestfulClient, FhirRestfulClient, FhirRestfulClientInterceptor } from "@bonfhir/core/r4b";

const client: FhirRestfulClient = ...;
const interceptor: FhirRestfulClientInterceptor = {
  read: async (originalClient, [type, id]) => {
    console.log(`Reading ${type}/${id}...`)
    const result = await originalClient.read(type, id);
    console.log(`Read ${type}/${id}: ${result?.text?.div}`);
    return result;
  },
  search: ...
}

const decoratedClient = decorateFhirRestfulClient(client, interceptor);
await decoratedClient.read(...);
```

### `createOr` utility

Often time there is a need to create, add, update or merge a resource on a server depending on it's prior existence.
This is a very common occurrence in data integration scenarios / syncing tasks.

The `core` package provide a utility to help with those operations:

```typescript
import { build, createOr, resourceSearch } from "@bonfhir/core/r4b";
import { KnownIdentifierSystems } from "@bonfhir/terminology/r4b";


const resource = build("Patient", {
  identifier: [
    {
      ...KnownIdentifierSystems.USSocialSecurityNumber,
      value: "000000000",
    },
  ],
  ...
});

// Will return the existing resource on the server if it exists, or create a new one
// Search is performed by default using the identifiers.
const [mergedResource, wasMerged] = createOr("return", client, resource);

// Will replace entirely the existing resource on the server if it exists, or create a new one
// Search is performed by default using the identifiers.
const [mergedResource, wasMerged] = createOr("replace", client, resource);

// Will merge the existing resource on the server with the one here, or create a new one if not found
// Search is performed by default using the identifiers.
const [mergedResource, wasMerged] = createOr("merge", client, resource);

// Will add a new resource, unless there is an existing one with a strict equality except for the `id` property (avoid strict duplicates).
// Search is performed by default using the identifiers.
const [mergedResource, wasMerged] = createOr("add", client, resource);

// The search can be customized (instead of using the default identifiers)
const [mergedResource, wasMerged] = createOr("merge", client, resource, resourceSearch("Patient").name("John Doe").href);

```

### `searchAllPages` utility

The `searchAllPages` utility can be used to retrieve _all_ pages for a given search criteria.

> Be careful as this may be a very long / very expensive operation.

```typescript
import { searchAllPages, resourceSearch, linkUrl } from "@bonfhir/core/r4b";

const allPatients = await searchAllPages(
  client,
  "Patient",
  resourceSearch("Patient").href
);

// For paginating yourself
const searchResult = await client.search("Patient");
const searchPatientPage2 =
  linkUrl(searchResult, "next") &&
  (await client.get(linkUrl(searchResult, "next")));
const backPage = linkUrl(searchPatientPage2, "previous");
```

### Standard Operations Types

The `core` library contains types for the [standard FHIR Operations](https://www.hl7.org/fhir/operationslist.html)
parameters and results:

```typescript
import type {
  ValueSetExpandOperationParameters,
  ValueSetExpandOperationResult,
} from "@bonfhir/core/r4b";

const valueSet = await client.execute<
  ValueSetExpandOperationResult,
  ValueSetExpandOperationParameters
>("$expand", {
  type: "ValueSet",
  parameters: { url: "http://hl7.org/fhir/ValueSet/address-use" },
});
```

## FHIR Search

There are utility functions designed to help creating [FHIR Search](https://hl7.org/fhir/search.html) URL query parameters.

### Resources search

The easiest way is to use the `resourceSearch` helper method, as it provides typing for all resources, based on the search parameters specification:

```typescript
import { resourceSearch } from "@bonfhir/core/r4b";

resourceSearch("Organization").identifier("12345").active("true").href;
resourceSearch("Patient").identifier({
  system: "http://hl7.org/fhir/sid/us-ssn",
  value: "000-00-0000",
}).href;
resourceSearch("Account").status("active").type("patient")._tag({
  system: "source",
  value: "foo",
}).href;
```

If any search parameter is missing from the builder, you can always drop down to a
[Generic search](#generic-search-builder) using the `builder` property:

```typescript
resourceSearch("Organization").identifier("12345").builder.string("_count", 20)
  .href;
```

### Generic search builder

In addition to the resource-typed searches, there is a generic search builder that exposes the fundamental [FHIR Search Parameter Types](https://hl7.org/fhir/search.html#ptypes)
to help compose FHIR searches as well:

```typescript
import { fhirSearch } from "@bonfhir/core/r4b";

fhirSearch().token("identifier", "152345235").href;
fhirSearch().date("date", "2010-01-01", "ge").date("date", "2011-12-31", "le")
  .href;
fhirSearch().date("date", "2010-01-01", "ge").date("date", "2011-12-31", "le")
  .href;
fhirSearch().reference(
  "subject",
  { system: "http://acme.org/fhir/identifier/mrn", value: "123456" },
  ":identifier"
).href;
```

## Bundle navigator

It can be hard sometime to extract and navigate a [`Bundle`](https://hl7.org/fhir/bundle.html), when it is the result of a complex [Search operation](https://hl7.org/fhir/search.html).

The primary resources are returned along with [`_include`](https://hl7.org/fhir/search.html#include) and [`_revinclude`](https://hl7.org/fhir/search.html#revinclude),
that must be resolved via [`references`](https://hl7.org/fhir/references.html).
Additionally, naive implementations can lead to O(N<sup>2</sup>) complexity when processing `_revinclude` resources for example.

The `bundleNavigator` helper can help with this by providing lazy indexing and search on top of a bundle to extract resources efficiently:

```typescript
import {
  buildReferenceFromResource,
  bundleNavigator,
  fhirSearch,
} from "@bonfhir/core/r4b";

const bundle = await client.search(
  "Patient",
  resourceSearch("Patient")
    ._include("Patient", "managingOrganization")
    ._revinclude("Provenance", "target")
    ._include("Provenance", "agent", { iterate: true })
);

const navigator = bundleNavigator<Patient, Organization | Provenance>(bundle);
for (const patient of navigator.searchMatch()) {
  const managingOrganization = navigator.reference(
    patient?.managingOrganization?.reference
  );
  const provenance = navigator.firstRevReference<Provenance>(
    (provenance) => provenance.target,
    buildReferenceFromResource(patient).reference
  );
  const provenanceOrganization = navigator.reference(
    provenance?.agent[0]?.who.reference
  );
}
```

In this example, the bundle is only iterated twice:

- once to index the results for the calls to `searchMatch` and `reference`
- a second time to create the on-the-fly index for the `firstRevReference`

The reverse references also create indices that can be reused in loops, assuming the select function is the same (the cache key is the function `toString()` method).

All indices are created lazily, so it is very cheap to create / return a `bundleNavigator` even if it is not used subsequently.

## Timeline builder

The `buildTimelineOfResourcesWithPeriods` can compute blocks of time where resources can be placed, assuming you can project them into a `Period`.

```typescript
import { build, buildTimelineOfResourcesWithPeriods } from "@bonfhir/core/r4b";

const resources = [
  build("MedicationDispense", {
    status: "completed",
    daysSupply: { value: 30 },
    whenHandedOver: "2021-01-01",
  }),
  build("MedicationDispense", {
    status: "completed",
    daysSupply: { value: 30 },
    whenHandedOver: "2021-01-15",
  }),
  build("MedicationDispense", {
    status: "completed",
    daysSupply: { value: 90 },
    whenHandedOver: "2021-01-01",
  }),
  build("MedicationDispense", {
    status: "completed",
    daysSupply: { value: 15 },
    whenHandedOver: "2021-03-01",
  }),
];

const result = buildTimelineOfResourcesWithPeriods({
  resources,
  periodFn: resource => ({
    start: resource.whenHandedOver!,
    end: addDays(
      new Date(resource.whenHandedOver!),
      resource.daysSupply!.value!
    )
      .toISOString()
      .slice(0, 10),
  }),
});

// result
{
  blocks: [
    {
      period: {
        start: "2021-01-01",
        end: "2021-01-15",
      },
      items: [resources[0]],
    },
    {
      period: {
        start: "2021-01-15",
        end: "2021-01-31",
      },
      items: [resources[0], resources[1]],
    },
    {
      period: {
        start: "2021-01-31",
        end: "2021-02-14",
      },
      items: [resources[1]],
    },
  ],
}
```
