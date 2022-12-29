import { Measure } from "fhir/r4";

export const buildMeasure = (resource: Omit<Measure, "resourceType">) => ({
  ...resource,
  resourceType: "Measure",
});
