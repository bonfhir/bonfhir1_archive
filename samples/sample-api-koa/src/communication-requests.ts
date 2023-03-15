import { FhirSubscription } from "@bonfhir/subscriptions/r4b";
import { CommunicationRequest } from "fhir/r4";

export const communicationRequests: FhirSubscription<CommunicationRequest> = {
  criteria: "CommunicationRequest",
  reason: "Send communication requests",
  endpoint: "/fhir/communication-requests",
  async handler({ resource }) {
    console.log(resource);
    return {
      status: 204,
    };
  },
};
