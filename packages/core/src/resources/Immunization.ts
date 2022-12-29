import { Immunization } from "fhir/r4";

export const buildImmunization = (
  resource: Omit<Immunization, "resourceType">
) => ({
  ...resource,
  resourceType: "Immunization",
});
