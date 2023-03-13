---
sidebar_position: 1
---

# Subscriptions

[![npm](https://img.shields.io/npm/v/@bonfhir/subscriptions)](https://www.npmjs.com/package/@bonfhir/subscriptions)

```bash npm2yarn
npm install @bonfhir/subscriptions
```

This package contains utilities to build [`Subscription`](https://hl7.org/fhir/subscription.html) handlers using [Koa](https://koajs.com/).

It manages both registration _and_ execution of handlers.

_[Change Log](https://github.com/bonfhir/bonfhir/blob/main/packages/subscriptions/CHANGELOG.md)_

## Get Started

### Create a new app using KOA

```bash npm2yarn
mkdir api
cd api
npm init -y
npm install koa @koa/router koa-bodyparser
```

### Server code

```typescript
import { fhirSubscriptions } from "@bonfhir/subscriptions/r4b";
import Koa from "koa";
import bodyParser from "koa-bodyparser";

const app = new Koa();

app.use(
  bodyParser({
    extendTypes: {
      json: ["application/fhir+json"],
    },
  })
);

app.use(
  await fhirSubscriptions({
    baseUrl: process.env.BASE_URL,
    fhirClient: async () => {
      // TODO: Provide the FhirRestfulClient instance
    },
    register: "startup",
    subscriptions: [],
    webhookSecret: process.env.WEBHOOK_SECRET || "thewebhooksecret",
    auditEvent: "My API",
  })
);

const port = parseInt(process.env.PORT || "3001");

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
```

### Create Subscription Handlers

```typescript
import { FhirSubscription } from "@bonfhir/subscriptions/r4b";
import { CommunicationRequest } from "fhir/r4";

export const communicationRequests: FhirSubscription<CommunicationRequest> = {
  criteria: "CommunicationRequest",
  reason: "Process communication requests",
  endpoint: "/fhir/communication-requests",
  async handler({ resource, context }) {
    console.log(resource);
    context.status = 204;
  },
};
```

and add it to the server:

```typescript
app.use(
  //...
    register: "startup",
    subscriptions: [communicationRequests],
  //...
  })
);
```

This will create the subscriptions on startup, and invoke the handler when receiving the webhooks.

See the [Sample API code](https://github.com/bonfhir/bonfhir/blob/main/samples/sample-api) for a live
example.

## Configuration

### Webhook security

The `webhookSecret` configuration parameter must contain a key that will be used to authenticate incoming webhooks.
The subscriptions are created with the following specific [header](https://hl7.org/fhir/subscription-definitions.html#Subscription.channel.header) setting:

`X-Subscription-Auth: ${webhookSecret}`

This header is verified on webhook invocation.
If the handlers return 401, check the webhook secret value.

### Subscription registration

The Subscriptions can either be created:

- during startup (`register: "startup"`)

- at a specific endpoint invocation: (`register: "endpoint"`)
  - the default endpoint is `/fhir/register-subscriptions`
  - can be customized using `registerEndpoint`
  - the endpoint requires the same security header as the webhooks to be invoked:

```bash
curl --request POST 'http://localhost:3001/fhir/register-subscriptions' --header 'X-Subscription-Auth: thewebhooksecret'
```

- or manually (`register: "off"`) - you can use the helper function `registerSubscriptions` to do so if needed

### AuditEvent creation

By setting a string value to the `auditEvent` configuration option, the harness will create [`AuditEvent`](https://hl7.org/fhir/auditevent.html)
when an error is encountered. This might make the monitoring of the execution easier.
The value of the `auditEvent` property is used as the [agent name](https://hl7.org/fhir/auditevent-definitions.html#AuditEvent.agent.name) for the AuditEvent.

Alternatively, you can use a function to build the AuditEvent yourself.
