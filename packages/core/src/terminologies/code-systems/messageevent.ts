/**
 * One of the message events defined as part of this version of FHIR.
 * http://hl7.org/fhir/message-events
 */
export const MessageEventCodeSystem = {
  resourceType: "CodeSystem",
  id: "message-events",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/message-events defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/valueset-special-status",
      valueString:
        "This Code System is normative - it is generated based on the information defined in this specification. The definition will remain fixed  across versions, but the actual contents will change from version to version",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "inm",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/message-events",
  version: "4.3.0",
  name: "MessageEvent",
  title: "MessageEvent",
  status: "active",
  experimental: true,
  date: "2022-05-28T12:47:40+10:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description:
    "One of the message events defined as part of this version of FHIR.",
  caseSensitive: true,
  content: "complete",
};
