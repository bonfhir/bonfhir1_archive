import { Consent } from "fhir/r4";

export const buildConsent = (resource: Omit<Consent, "resourceType">) => ({
  ...resource,
  resourceType: "Consent",
});
