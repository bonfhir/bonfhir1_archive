import { ServiceRequest } from "fhir/r4";

export const buildServiceRequest = (
  resource: Omit<ServiceRequest, "resourceType">
) => ({
  ...resource,
  resourceType: "ServiceRequest",
});
