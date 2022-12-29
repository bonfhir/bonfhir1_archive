import { SubscriptionTopic } from "fhir/r4";

export const buildSubscriptionTopic = (
  resource: Omit<SubscriptionTopic, "resourceType">
) => ({
  ...resource,
  resourceType: "SubscriptionTopic",
});
