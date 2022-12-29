import { OperationDefinition } from "fhir/r4";

export const buildOperationDefinition = (
  resource: Omit<OperationDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "OperationDefinition",
});
