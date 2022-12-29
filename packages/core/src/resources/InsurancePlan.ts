import { InsurancePlan } from "fhir/r4";

export const buildInsurancePlan = (
  resource: Omit<InsurancePlan, "resourceType">
) => ({
  ...resource,
  resourceType: "InsurancePlan",
});
