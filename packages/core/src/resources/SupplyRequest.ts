import { SupplyRequest } from "fhir/r4";

export const buildSupplyRequest = (
  resource: Omit<SupplyRequest, "resourceType">
) => ({
  ...resource,
  resourceType: "SupplyRequest",
});
