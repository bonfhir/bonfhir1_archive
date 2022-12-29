import { MessageHeader } from "fhir/r4";

export const buildMessageHeader = (
  resource: Omit<MessageHeader, "resourceType">
) => ({
  ...resource,
  resourceType: "MessageHeader",
});
