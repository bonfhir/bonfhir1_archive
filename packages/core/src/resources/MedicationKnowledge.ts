import { MedicationKnowledge } from "fhir/r4";

export const buildMedicationKnowledge = (
  resource: Omit<MedicationKnowledge, "resourceType">
) => ({
  ...resource,
  resourceType: "MedicationKnowledge",
});
