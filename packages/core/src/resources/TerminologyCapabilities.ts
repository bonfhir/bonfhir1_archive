import { TerminologyCapabilities } from "fhir/r4";

export const buildTerminologyCapabilities = (
  resource: Omit<TerminologyCapabilities, "resourceType">
) => ({
  ...resource,
  resourceType: "TerminologyCapabilities",
});
