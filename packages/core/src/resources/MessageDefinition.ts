import { MessageDefinition } from "fhir/r4";

export const buildMessageDefinition = (
  resource: Omit<MessageDefinition, "resourceType">
) => ({
  ...resource,
  resourceType: "MessageDefinition",
});
