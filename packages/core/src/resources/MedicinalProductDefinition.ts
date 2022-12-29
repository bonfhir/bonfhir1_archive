import { MedicinalProductDefinition } from "fhir/r4";

export const buildMedicinalProductDefinition = (
  resource: Omit<MedicinalProductDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "MedicinalProductDefinition",
});
