import { PractitionerRole } from "fhir/r4";

export const buildPractitionerRole = (
  resource: Omit<PractitionerRole, "resourceType">
) => ({
  ...resource,
  resourceType: "PractitionerRole",
});
