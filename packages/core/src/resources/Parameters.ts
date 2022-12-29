import { Parameters } from "fhir/r4";

export const buildParameters = (
  resource: Omit<Parameters, "resourceType">
) => ({
  ...resource,
  resourceType: "Parameters",
});
