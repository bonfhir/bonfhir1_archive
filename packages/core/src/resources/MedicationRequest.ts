import { MedicationRequest } from "fhir/r4";

export const buildMedicationRequest = (
  resource: Omit<MedicationRequest, "resourceType">
) => ({
  ...resource,
  resourceType: "MedicationRequest",
});
