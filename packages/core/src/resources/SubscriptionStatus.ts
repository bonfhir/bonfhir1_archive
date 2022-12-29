import { SubscriptionStatus } from "fhir/r4";

export const buildSubscriptionStatus = (
  resource: Omit<SubscriptionStatus, "resourceType">
) => ({
  ...resource,
  resourceType: "SubscriptionStatus",
});
