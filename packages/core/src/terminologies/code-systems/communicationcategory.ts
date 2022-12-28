export const CommunicationCategory = {
  resourceType: "CodeSystem",
  id: "communication-category",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>CommunicationCategory</h2>\n      \n      <div>\n        \n        <p>Codes for general categories of communications such as alerts, instructions, etc.</p>\n\n      \n      </div>\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/communication-category defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">alert\n            \n            <a name="communication-category-alert"> </a>\n          \n          </td>\n          \n          <td>Alert</td>\n          \n          <td>The communication conveys an alert.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">notification\n            \n            <a name="communication-category-notification"> </a>\n          \n          </td>\n          \n          <td>Notification</td>\n          \n          <td>The communication conveys a notification.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">reminder\n            \n            <a name="communication-category-reminder"> </a>\n          \n          </td>\n          \n          <td>Reminder</td>\n          \n          <td>The communication conveys a reminder.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">instruction\n            \n            <a name="communication-category-instruction"> </a>\n          \n          </td>\n          \n          <td>Instruction</td>\n          \n          <td>The communication conveys an instruction.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
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
  url: "http://terminology.hl7.org/CodeSystem/communication-category",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1076",
    },
  ],
  version: "4.3.0",
  name: "CommunicationCategory",
  title: "CommunicationCategory",
  status: "draft",
  experimental: false,
  date: "2021-01-17T07:06:13+11:00",
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
    "Codes for general categories of communications such as alerts, instructions, etc.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/communication-category",
  content: "complete",
  concept: [
    {
      code: "alert",
      display: "Alert",
      definition: "The communication conveys an alert.",
    },
    {
      code: "notification",
      display: "Notification",
      definition: "The communication conveys a notification.",
    },
    {
      code: "reminder",
      display: "Reminder",
      definition: "The communication conveys a reminder.",
    },
    {
      code: "instruction",
      display: "Instruction",
      definition: "The communication conveys an instruction.",
    },
  ],
};
