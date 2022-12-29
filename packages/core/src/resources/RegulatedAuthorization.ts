import { RegulatedAuthorization } from "fhir/r4";

export const buildRegulatedAuthorization = (
  resource: Omit<RegulatedAuthorization, "resourceType">
) => ({
  ...resource,
  resourceType: "RegulatedAuthorization",
});
