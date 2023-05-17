/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { buildFhirRestfulClientAdapter } from "@bonfhir/medplum/r4b";
import { fhirSubscriptions } from "@bonfhir/subscriptions-lambda/r4b";
import { MedplumClient } from "@medplum/core";
import { Handler } from "aws-lambda";
import { communicationRequests } from "./communication-requests";

export const handler: Handler = await fhirSubscriptions({
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
});
