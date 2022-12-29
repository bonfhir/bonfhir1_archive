import { MedicationAdministration } from "fhir/r4";

export const buildMedicationAdministration = (
  resource: Omit<MedicationAdministration, "resourceType">
) => ({
  ...resource,
  resourceType: "MedicationAdministration",
});
