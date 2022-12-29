import { MolecularSequence } from "fhir/r4";

export const buildMolecularSequence = (
  resource: Omit<MolecularSequence, "resourceType">
) => ({
  ...resource,
  resourceType: "MolecularSequence",
});
