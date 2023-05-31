/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { buildFhirRestfulClientAdapter } from "@bonfhir/medplum/r4b";
import { fhirSubscriptions } from "@bonfhir/subscriptions-lambda/r4b";
import { MedplumClient } from "@medplum/core";
import { APIGatewayProxyEvent, APIGatewayProxyHandler } from "aws-lambda";
import { communicationRequests } from "./communication-requests";

// Async initialization of the lambda handler
const init = async () => {
  return await fhirSubscriptions({
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
    register: "endpoint",
    subscriptions: [communicationRequests],
    webhookSecret: "thewebhooksecret",
    auditEvent: "Sample API",
  });
};

const initPromise = init();

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
) => {
  const fhirHandler = await initPromise;

  return fhirHandler(event);
};
