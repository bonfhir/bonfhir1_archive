import { Substance } from "fhir/r4";

export const buildSubstance = (resource: Omit<Substance, "resourceType">) => ({
  ...resource,
  resourceType: "Substance",
});
