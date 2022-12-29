import { ChargeItem } from "fhir/r4";

export const buildChargeItem = (
  resource: Omit<ChargeItem, "resourceType">
) => ({
  ...resource,
  resourceType: "ChargeItem",
});
