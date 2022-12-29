import { HealthcareService } from "fhir/r4";

export const buildHealthcareService = (
  resource: Omit<HealthcareService, "resourceType">
) => ({
  ...resource,
  resourceType: "HealthcareService",
});
