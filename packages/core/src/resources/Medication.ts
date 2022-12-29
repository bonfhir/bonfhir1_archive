import { Medication } from "fhir/r4";

export const buildMedication = (
  resource: Omit<Medication, "resourceType">
) => ({
  ...resource,
  resourceType: "Medication",
});
