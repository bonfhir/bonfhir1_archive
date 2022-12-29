import { Subscription } from "fhir/r4";

export const buildSubscription = (
  resource: Omit<Subscription, "resourceType">
) => ({
  ...resource,
  resourceType: "Subscription",
});
