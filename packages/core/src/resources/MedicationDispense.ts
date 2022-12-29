import { MedicationDispense } from "fhir/r4";

export const buildMedicationDispense = (
  resource: Omit<MedicationDispense, "resourceType">
) => ({
  ...resource,
  resourceType: "MedicationDispense",
});
