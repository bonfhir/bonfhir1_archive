import { MedicationStatement } from "fhir/r4";

export const buildMedicationStatement = (
  resource: Omit<MedicationStatement, "resourceType">
) => ({
  ...resource,
  resourceType: "MedicationStatement",
});
