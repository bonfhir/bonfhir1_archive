/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { buildFhirRestfulClientAdapter } from "@bonfhir/medplum/r4b";
import { fhirSubscriptions } from "@bonfhir/subscriptions/r4b";
import { MedplumClient } from "@medplum/core";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import { communicationRequests } from "./communication-requests";

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
    baseUrl: process.env.BASE_URL || "http://devcontainer:3001",
    fhirClient: async () => {
      const medplum = new MedplumClient({
        baseUrl: process.env.MEDPLUM_SERVER_URL!,
        fetch: fetch,
      });

      await medplum.startClientLogin(
        process.env.MEDPLUM_CLIENT_ID!,
        process.env.MEDPLUM_CLIENT_SECRET!
      );

      return buildFhirRestfulClientAdapter(medplum);
    },
    register: "startup",
    subscriptions: [communicationRequests],
    webhookSecret: "thewebhooksecret",
    auditEvent: "Sample API",
  })
);

const port = parseInt(process.env.PORT || "3001");

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
