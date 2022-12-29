import { AdministrableProductDefinition } from "fhir/r4";

export const buildAdministrableProductDefinition = (
  resource: Omit<AdministrableProductDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "AdministrableProductDefinition",
});
