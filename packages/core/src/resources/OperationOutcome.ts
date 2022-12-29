import { OperationOutcome } from "fhir/r4";

export const buildOperationOutcome = (
  resource: Omit<OperationOutcome, "resourceType">
) => ({
  ...resource,
  resourceType: "OperationOutcome",
});
