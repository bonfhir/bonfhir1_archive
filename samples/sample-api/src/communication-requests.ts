import { FhirSubscription } from "@bonfhir/subscriptions/r4b";
import { CommunicationRequest } from "fhir/r4";

export const communicationRequests: FhirSubscription<CommunicationRequest> = {
  criteria: "CommunicationRequest",
  reason: "Send communication requests",
  endpoint: "/fhir/communication-requests",
  async handler({ resource, context }) {
    console.log(resource);
    context.status = 204;
  },
};
