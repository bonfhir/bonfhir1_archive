import { OrganizationAffiliation } from "fhir/r4";

export const buildOrganizationAffiliation = (
  resource: Omit<OrganizationAffiliation, "resourceType">
) => ({
  ...resource,
  resourceType: "OrganizationAffiliation",
});
