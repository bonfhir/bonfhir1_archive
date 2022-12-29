import { CommunicationRequest } from "fhir/r4";

export const buildCommunicationRequest = (
  resource: Omit<CommunicationRequest, "resourceType">
) => ({
  ...resource,
  resourceType: "CommunicationRequest",
});
