import { Endpoint } from "fhir/r4";

export const buildEndpoint = (resource: Omit<Endpoint, "resourceType">) => ({
  ...resource,
  resourceType: "Endpoint",
});
