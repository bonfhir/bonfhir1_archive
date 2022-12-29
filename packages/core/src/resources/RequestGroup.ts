import { RequestGroup } from "fhir/r4";

export const buildRequestGroup = (
  resource: Omit<RequestGroup, "resourceType">
) => ({
  ...resource,
  resourceType: "RequestGroup",
});
