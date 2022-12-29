import { SupplyDelivery } from "fhir/r4";

export const buildSupplyDelivery = (
  resource: Omit<SupplyDelivery, "resourceType">
) => ({
  ...resource,
  resourceType: "SupplyDelivery",
});
