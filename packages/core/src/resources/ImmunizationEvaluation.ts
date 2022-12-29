import { ImmunizationEvaluation } from "fhir/r4";

export const buildImmunizationEvaluation = (
  resource: Omit<ImmunizationEvaluation, "resourceType">
) => ({
  ...resource,
  resourceType: "ImmunizationEvaluation",
});
