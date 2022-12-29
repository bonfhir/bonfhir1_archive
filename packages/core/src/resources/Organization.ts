import { Organization } from "fhir/r4";

export const buildOrganization = (
  resource: Omit<Organization, "resourceType">
) => ({
  ...resource,
  resourceType: "Organization",
});
