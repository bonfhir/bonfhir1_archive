import { Account } from "fhir/r4";

export const buildAccount = (resource: Omit<Account, "resourceType">) => ({
  ...resource,
  resourceType: "Account",
});
