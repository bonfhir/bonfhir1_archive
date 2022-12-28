/**
 * The free/busy status of the slot.
 * http://hl7.org/fhir/slotstatus
 */
export const SlotStatusCodeSystem = {
  resourceType: "CodeSystem",
  id: "slotstatus",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>SlotStatus</h2>\n      \n      <div>\n        \n        <p>The free/busy status of the slot.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/slotstatus defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">busy\n            \n            <a name="slotstatus-busy"> </a>\n          \n          </td>\n          \n          <td>Busy</td>\n          \n          <td>Indicates that the time interval is busy because one  or more events have been scheduled for that interval.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">free\n            \n            <a name="slotstatus-free"> </a>\n          \n          </td>\n          \n          <td>Free</td>\n          \n          <td>Indicates that the time interval is free for scheduling.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">busy-unavailable\n            \n            <a name="slotstatus-busy-unavailable"> </a>\n          \n          </td>\n          \n          <td>Busy (Unavailable)</td>\n          \n          <td>Indicates that the time interval is busy and that the interval cannot be scheduled.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">busy-tentative\n            \n            <a name="slotstatus-busy-tentative"> </a>\n          \n          </td>\n          \n          <td>Busy (Tentative)</td>\n          \n          <td>Indicates that the time interval is busy because one or more events have been tentatively scheduled for that interval.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">entered-in-error\n            \n            <a name="slotstatus-entered-in-error"> </a>\n          \n          </td>\n          \n          <td>Entered in error</td>\n          \n          <td>This instance should not have been part of this patient\'s medical record.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 3,
    },
  ],
  url: "http://hl7.org/fhir/slotstatus",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.483",
    },
  ],
  version: "4.3.0",
  name: "SlotStatus",
  title: "SlotStatus",
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
  description: "The free/busy status of the slot.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/slotstatus",
  content: "complete",
  concept: [
    {
      code: "busy",
      display: "Busy",
      definition:
        "Indicates that the time interval is busy because one  or more events have been scheduled for that interval.",
    },
    {
      code: "free",
      display: "Free",
      definition: "Indicates that the time interval is free for scheduling.",
    },
    {
      code: "busy-unavailable",
      display: "Busy (Unavailable)",
      definition:
        "Indicates that the time interval is busy and that the interval cannot be scheduled.",
    },
    {
      code: "busy-tentative",
      display: "Busy (Tentative)",
      definition:
        "Indicates that the time interval is busy because one or more events have been tentatively scheduled for that interval.",
    },
    {
      code: "entered-in-error",
      display: "Entered in error",
      definition:
        "This instance should not have been part of this patient's medical record.",
    },
  ],
};
