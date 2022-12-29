import { Procedure } from "fhir/r4";

export const buildProcedure = (resource: Omit<Procedure, "resourceType">) => ({
  ...resource,
  resourceType: "Procedure",
});
