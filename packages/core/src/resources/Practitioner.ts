import { Practitioner } from "fhir/r4";

export const buildPractitioner = (
  resource: Omit<Practitioner, "resourceType">
) => ({
  ...resource,
  resourceType: "Practitioner",
});
