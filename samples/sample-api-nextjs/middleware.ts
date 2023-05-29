import { NextRequest } from "next/server";

import { fhirSubscriptions } from "@bonfhir/subscriptions-nextjs/r4b";
import { MedplumClient } from "@medplum/core";

import { buildFhirRestfulClientAdapter } from "@bonfhir/medplum/r4b";
import { communicationRequests } from "./requests/communication-requests";

// Limit the middleware to paths starting with `/fhir/`
export const config = {
  matcher: ["/fhir/:function*"],
};

const initializeSubscriptionMiddleware = async () =>
  fhirSubscriptions({
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

const subscriptionMiddleware = initializeSubscriptionMiddleware();

export async function middleware(request: NextRequest) {
  const subs = await subscriptionMiddleware;
  return subs(request);
}
