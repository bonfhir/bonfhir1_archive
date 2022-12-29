import { Basic } from "fhir/r4";

export const buildBasic = (resource: Omit<Basic, "resourceType">) => ({
  ...resource,
  resourceType: "Basic",
});
