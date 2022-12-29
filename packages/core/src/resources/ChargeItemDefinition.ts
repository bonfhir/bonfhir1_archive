import { ChargeItemDefinition } from "fhir/r4";

export const buildChargeItemDefinition = (
  resource: Omit<ChargeItemDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "ChargeItemDefinition",
});
