import { Contract } from "fhir/r4";

export const buildContract = (resource: Omit<Contract, "resourceType">) => ({
  ...resource,
  resourceType: "Contract",
});
