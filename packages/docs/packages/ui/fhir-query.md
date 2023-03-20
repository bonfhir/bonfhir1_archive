---
sidebar_position: 1
---

# FHIR Query

[![npm](https://img.shields.io/npm/v/@bonfhir/fhir-query)](https://www.npmjs.com/package/@bonfhir/fhir-query)

```bash npm2yarn
npm install @bonfhir/fhir-query @tanstack/react-query
```

This package provides a solution for managing data-fetching and caching server data in
a [React / React Native](https://reactjs.org/) application.

It is based on [TanStack React Query](https://tanstack.com/query/latest).

_[Change Log](https://github.com/bonfhir/bonfhir/blob/main/packages/fhir-query/CHANGELOG.md)_

## Getting started

_We **strongly** advise that you start by familiarizing yourself with [React Query](https://tanstack.com/query/latest)
first, as this package builds on top of it, but all the concepts are exposed._

Here is a sample usage of the library:

```typescript
import { build } from "@bonfhir/core/r4b";
import { FhirQueryProvider, useFhirCreateMutation, useFhirSearch } from "@bonfhir/fhir-query/r4b";

function App() {

  // Instantiate a FhirRestfulClient somewhere...
  const fhirClient = ...;

  return (
    <FhirQueryProvider fhirClient={fhirClient}>
      <PatientList />
    </FhirQueryProvider>
  )
}

function PatientList() {
  const patientsQuery = useFhirSearch("Patient", (search) => search._count(20));

  const createPatientMutation = useFhirCreateMutation("Patient");

  if(patientsQuery.isInitialLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {patientsQuery.data?.nav.searchMatch().map((patient) => (
          <li key={patient.id}>{patient.id}</li>
        ))}
      </ul>

      <button onClick={() => createPatientMutation.mutate({
        body: build("Patient", { name: [{ given: ["Miles"], family: "Davis" }] })
      })}>
    </div>
  );
}
```

In this example, we retrieve a list of patients using a [search](https://hl7.org/fhir/http.html#search) query,
and we also create new patients using a [create](https://hl7.org/fhir/http.html#create) mutation.

You'll notice that the cache invalidation is performed automatically, so the patient list is automatically refreshed
as soon as the new patient is created.
The list is also refreshed automatically in the background when the window is refocused or the network is reconnected.
Please see [React Query Important Default](https://tanstack.com/query/latest/docs/react/guides/important-defaults) to
understand the default behavior.

Here is a sample code that uses [Medplum](https://www.medplum.com/) and [Bonfhir Medplum adapter](/packages/integrations/medplum) to initialize the provider:

```typescript
import { FhirQueryProvider } from "@bonfhir/fhir-query/r4b";
import { buildFhirRestfulClientAdapter } from "@bonfhir/medplum/r4b";
import { MedplumClient } from "@medplum/core";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useMemo } from "react";

function App() {
  const medplum = useMemo(
    () =>
      new MedplumClient({
        // Medplum configuration goes here.
      }),
    []
  );

  useEffect(() => {
    if (!medplum.getActiveLogin()) {
      // This is medplum Open ID Connect flow; other options exists - see https://www.medplum.com/docs/auth
      medplum.signInWithRedirect({
        clientId: process.env.MEDPLUM_CLIENT_ID,
        redirectUri: window.location.origin.endsWith("/")
          ? window.location.origin
          : `${window.location.origin}/`,
      });
    }
  }, [medplum, medplum.getActiveLogin()?.profile?.reference]);

  const fhirClient = useMemo(() => {
    if (!medplum) {
      return undefined;
    }
    return buildFhirRestfulClientAdapter(medplum);
  }, [medplum]);

  if (!fhirClient) {
    return null;
  }

  if (!medplum.getActiveLogin()) {
    return null;
  }

  return (
    <FhirQueryProvider fhirClient={fhirClient}>
      <PatientList />
      <ReactQueryDevtools />
    </FhirQueryProvider>
  );
}
```

This example also shows how to use [React Query DevTools](https://tanstack.com/query/latest/docs/react/devtools),
which we recommend you use to easily visualize the content of the query cache.

## Available hooks

### `useFhirRead`

Return a [Query](https://tanstack.com/query/latest/docs/react/guides/queries) for a
[read](https://hl7.org/fhir/http.html#read) request.

If the option to `manageCache` is enabled (default behavior), `useFhirRead` will also hunt for a resource in the `search`
operation cache to preload initial data. This makes master/detail scenarios quite snappy by having the data
already fetched when looking at details.

```typescript
import { useFhirRead } from "@bonfhir/fhir-query/r4b";

const organizationQuery = useFhirRead(
  "Organization",
  "a942b3d5-19bc-4959-8b5d-f9aedd790a94",
  { throwIfNotFound: true } // Will set an error if not found, instead of just returning undefined.
);

if (organizationQuery.isInitialLoading) {
  return <div>Loading...</div>;
}

if (organizationQuery.isError) {
  return <div>{organizationQuery.error?.message}</div>;
}

return <div>{organizationQuery.data?.name}</div>;
```

### `useFhirVRead`

Return a [Query](https://tanstack.com/query/latest/docs/react/guides/queries) for a
[vread](https://hl7.org/fhir/http.html#vread) request.

```typescript
import { useFhirVRead } from "@bonfhir/fhir-query/r4b";

const organizationQuery = useFhirVRead(
  "Organization",
  "a942b3d5-19bc-4959-8b5d-f9aedd790a94",
  "9e75a8da-79cf-4ade-a095-6fd7419d8c96"
);

if (organizationQuery.isInitialLoading) {
  return <div>Loading...</div>;
}

if (organizationQuery.isError) {
  return <div>{organizationQuery.error?.message}</div>;
}

return <div>{organizationQuery.data?.name}</div>;
```

### `useFhirHistory`

Return a [Query](https://tanstack.com/query/latest/docs/react/guides/queries) for a
[history](https://hl7.org/fhir/http.html#history) request.

```typescript
import { useFhirHistory } from "@bonfhir/fhir-query/r4b";

const organizationHistoryQuery = useFhirHistory(
  "Organization",
  "a942b3d5-19bc-4959-8b5d-f9aedd790a94"
);

if (organizationHistoryQuery.isInitialLoading) {
  return <div>Loading...</div>;
}

if (organizationHistoryQuery.isError) {
  return <div>{organizationQuery.error?.message}</div>;
}

return (
  <ul>
    {organizationHistoryQuery.data?.nav.type("Organization").map((org) => (
      <li>{org.meta?.versionId}</li>
    ))}
  </ul>
);
```

### `useFhirSearch`

Return a [Query](https://tanstack.com/query/latest/docs/react/guides/queries) for a
[search](https://hl7.org/fhir/http.html#search) request.

This version [handles pagination properly](https://tanstack.com/query/latest/docs/react/guides/paginated-queries),
but requires the parent component to manage the pagination state.

```typescript
import { useFhirSearch } from "@bonfhir/fhir-query/r4b";

// You can substitute this for a URL query parameters (e.g. useSearchParams), this way you have stable/shareable URLs.
const [pageUrl, setPageUrl] = useState("");

const organizationSearchQuery = useFhirSearch("Organization", (search) =>
  search.type("govt")._count(20)._sort("name"),
  pageUrl
);

if (organizationSearchQuery.isInitialLoading) {
  return <div>Loading...</div>;
}

if (organizationSearchQuery.isError) {
  return <div>{organizationSearchQuery.error?.message}</div>;
}

return (
  <ul>
    {organizationSearchQuery.data?.nav.type("Organization").map((org) => (
      <li>{org.name}</li>
    ))}
  </ul>
  {organizationSearchQuery.data?.hasPreviousPage && <button onClick={() => setPageUrl(organizationSearchQuery.data?.previousPageUrl)}>Previous</button>}
  {organizationSearchQuery.data?.hasNextPage && <button onClick={() => setPageUrl(organizationSearchQuery.data?.nextPageUrl)}>Next</button>}
);
```

### `useFhirInfiniteSearch`

Return a [Infinite Query](https://tanstack.com/query/latest/docs/react/guides/infinite-queries) for a
[search](https://hl7.org/fhir/http.html#search) request.

This search version is for infinite search / scroll behavior.

```typescript
import { useFhirInfiniteSearch } from "@bonfhir/fhir-query/r4b";


const organizationSearchQuery = useFhirInfiniteSearch("Organization", (search) =>
  search.type("govt")._count(20)._sort("name"),
);

if (organizationSearchQuery.isInitialLoading) {
  return <div>Loading...</div>;
}

if (organizationSearchQuery.isError) {
  return <div>{organizationSearchQuery.error?.message}</div>;
}

return (
  <ul>
    {organizationSearchQuery.data?.pages?.flatMap(page => page.nav.type("Organization")).map((org) => (
      <li>{org.name}</li>
    ))}
  </ul>
  // Might want to tie it to scroll behavior instead
  {organizationSearchQuery.hasNextPage && <button onClick={() => organizationSearchQuery.fetchNextPage()}>Fetch Next</button>}
);
```

### `useFhirCapabilities`

Return a [Query](https://tanstack.com/query/latest/docs/react/guides/queries) for a
[capabilities](https://hl7.org/fhir/http.html#capabilities) request.

### `useFhirExecute`

Return a [Query](https://tanstack.com/query/latest/docs/react/guides/queries) for an
[operation](https://hl7.org/fhir/operations.html) request.

See [FHIR Operations List](https://www.hl7.org/fhir/operationslist.html) for the default operations supported by FHIR.

This hook is for operations that have no side-effect (e.g. do not create. update or delete a resource), such as
the [ValueSet Expansion](https://www.hl7.org/fhir/valueset-operation-expand.html).

If this is not the case, please use the [`useFhirExecuteMutation`](#usefhirexecutemutation) hook instead.

```typescript
import { useFhirExecute } from "@bonfhir/fhir-query/r4b";

const addressUseExpansionQuery = useFhirExecute<ValueSet>(
  "$expand",
  {
    type: "ValueSet",
    parameters: { url: "http://hl7.org/fhir/ValueSet/address-use" },
  },
  {
    cacheTime: Infinity,
  }
);

if (addressUseExpansionQuery.isInitialLoading) {
  return <div>Loading...</div>;
}

if (addressUseExpansionQuery.isError) {
  return <div>{organizationQuery.error?.message}</div>;
}

return (
  <ul>
    {result.current.data?.expansion?.contains?.map((x) => (
      <li>{x.code}</li>
    ))}
  </ul>
);
```

### `useFhirUpdateMutation`

Return a [Mutation](https://tanstack.com/query/latest/docs/react/guides/mutations) for an
[update](https://hl7.org/fhir/http.html#update) request.

```typescript
import { useFhirUpdateMutation } from "@bonfhir/fhir-query/r4b";

const practitionerMutation = useFhirUpdateMutation("Practitioner", {
  onSuccess: (practitioner) => {
    navigate("/home");
  }
);

return <button onClick={() => practitionerMutation.mutate({ body: practitioner })}>Update!</button>;
```

If the option to `manageCache` is enabled (default behavior), `useFhirUpdateMutation` automatically invalidates all
queries involving the updated resource on success (e.g. searches and reads), and also update the read cache with the
latest version of the resource.

### `useFhirPatchMutation`

Return a [Mutation](https://tanstack.com/query/latest/docs/react/guides/mutations) for an
[patch](https://hl7.org/fhir/http.html#patch) request.

```typescript
import { useFhirPatchMutation } from "@bonfhir/fhir-query/r4b";

const organizationMutation = useFhirPatchMutation("Organization", {
  onSuccess: (organization) => {
    navigate("/home");
  }
);

return (
  <button
    onClick={() =>
      organizationMutation.mutate({
        id: "39a43e23-46dd-4f05-948e-2e9d29ece4ab",
        body: (patch) => patch.replace("/name", "new name"),
      })
    }
  >
    Update!
  </button>
);
```

If the option to `manageCache` is enabled (default behavior), `useFhirPatchMutation` automatically invalidates all
queries involving the updated resource on success (e.g. searches and reads), and also update the read cache with the
latest version of the resource.

### `useFhirDeleteMutation`

Return a [Mutation](https://tanstack.com/query/latest/docs/react/guides/mutations) for a
[delete](https://hl7.org/fhir/http.html#delete) request.

```typescript
import { useFhirDeleteMutation } from "@bonfhir/fhir-query/r4b";

const deleteMutation = useFhirDeleteMutation({
  onSuccess: (practitioner) => {
    navigate("/home");
  }
);

return <button onClick={() => deleteMutation.mutate({
  type: "Communication"
  id: "066273a1-c81d-4a05-9d0c-e44e56d67a63",
})}>Delete!</button>;
```

If the option to `manageCache` is enabled (default behavior), `useFhirDeleteMutation` automatically invalidates all
queries involving the updated resource on success (e.g. searches and reads).

### `useFhirCreateMutation`

Return a [Mutation](https://tanstack.com/query/latest/docs/react/guides/mutations) for a
[create](https://hl7.org/fhir/http.html#create) request.

```typescript
import { build } from "@bonfhir/core/r4b";
import { useFhirCreateMutation } from "@bonfhir/fhir-query/r4b";

const patientMutation = useFhirCreateMutation("Patient", {
  onSuccess: (patient) => {
    navigate(`/patients/${patient.id}`);
  }
);

return <button onClick={() => patientMutation.mutate({ body: build("Patient", { active: true }) })}>Create!</button>;
```

If the option to `manageCache` is enabled (default behavior), `useFhirCreateMutation` automatically invalidates all
queries involving the created resource on success (e.g. searches and reads), and also update the read cache with the
latest version of the resource.

### `useFhirExecuteMutation`

Return a [Mutation](https://tanstack.com/query/latest/docs/react/guides/mutations) for an
[operation](https://hl7.org/fhir/operations.html) request.

See [FHIR Operations List](https://www.hl7.org/fhir/operationslist.html) for the default operations supported by FHIR.

This is the hook to use to run an operation with side-effects, such as
[Submit a Claim resource for adjudication](https://www.hl7.org/fhir/claim-operation-submit.html).

If the operation does not have side-effects and you want to cache the result, please use the
[`useFhirExecute`](#usefhirexecutemutation) hook instead.

```typescript
import { useFhirExecuteMutation } from "@bonfhir/fhir-query/r4b";

const executeMutation = useFhirExecuteMutation({
  onSuccess: (claim) => {
    navigate(`/home`);
  }
);

return <button onClick={() => executeMutation.mutate("$submit", { type: "Claim", parameters: { ... } })}>Submit!</button>;
```

## Configuration

All configuration option applicable to
[React Query](https://tanstack.com/query/latest/docs/react/guides/important-defaults) are valid.

If you opt to let `FhirQueryProvider` create the [`QueryClient`](https://tanstack.com/query/v4/docs/react/reference/QueryClient)
instance, you can still use the `queryClientConfig` prop to configure it:

```typescript
import { FhirQueryProvider } from "@bonfhir/fhir-query/r4b";
import { QueryClientConfig } from "@tanstack/react-query";

function App() {

  // Instantiate a FhirRestfulClient somewhere...
  const fhirClient = ...;

  const queryClientConfig: QueryClientConfig = {
      defaultOptions: {
      queries: {
        networkMode: "always"
      }
    }
  };

  return (
    <FhirQueryProvider fhirClient={fhirClient}, queryClientConfig={queryClientConfig}>
      <PatientList />
    </FhirQueryProvider>
  )
}
```

By default, all hooks have behavior to manage the query cache in a manner that makes sense, and include invalidation
and optimization code that should work for a standard app.

If you want to fully control the cache behavior, you can opt out of this by using the `manageCache` property:

```typescript
import { FhirQueryProvider } from "@bonfhir/fhir-query/r4b";

function App() {

  // Instantiate a FhirRestfulClient somewhere...
  const fhirClient = ...;

  return (
    <FhirQueryProvider fhirClient={fhirClient}, manageCache={false}>
      <PatientList />
    </FhirQueryProvider>
  )
}
```

Be aware that you will need to manage cache invalidation for mutations manually.
If you want to have access to the [query keys](https://tanstack.com/query/v4/docs/react/guides/query-keys) used by
the default hooks, you can use the `FhirQueryKeys` utility:

```typescript
import { FhirQueryKeys } from "@bonfhir/fhir-query/r4b";

// Example of the query key used by `useFhirRead`:
const queryKey = FhirQueryKeys.read(
  "Patient",
  "84d5d265-27ff-45a5-b449-8874fdbb3dc6"
);
// ["Patient", "84d5d265-27ff-45a5-b449-8874fdbb3dc6", "read", undefined]
```
