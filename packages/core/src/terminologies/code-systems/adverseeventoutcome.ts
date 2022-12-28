export const AdverseEventOutcome = {
  resourceType: "CodeSystem",
  id: "adverse-event-outcome",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>AdverseEventOutcome</h2>\n      \n      <div>\n        \n        <p>TODO (and should this be required?).</p>\n\n      \n      </div>\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/adverse-event-outcome defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">resolved\n            \n            <a name="adverse-event-outcome-resolved"> </a>\n          \n          </td>\n          \n          <td>Resolved</td>\n          \n          <td/>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">recovering\n            \n            <a name="adverse-event-outcome-recovering"> </a>\n          \n          </td>\n          \n          <td>Recovering</td>\n          \n          <td/>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">ongoing\n            \n            <a name="adverse-event-outcome-ongoing"> </a>\n          \n          </td>\n          \n          <td>Ongoing</td>\n          \n          <td/>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">resolvedWithSequelae\n            \n            <a name="adverse-event-outcome-resolvedWithSequelae"> </a>\n          \n          </td>\n          \n          <td>Resolved with Sequelae</td>\n          \n          <td/>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">fatal\n            \n            <a name="adverse-event-outcome-fatal"> </a>\n          \n          </td>\n          \n          <td>Fatal</td>\n          \n          <td/>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">unknown\n            \n            <a name="adverse-event-outcome-unknown"> </a>\n          \n          </td>\n          \n          <td>Unknown</td>\n          \n          <td/>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 0,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/adverse-event-outcome",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1252",
    },
  ],
  version: "4.3.0",
  name: "AdverseEventOutcome",
  title: "AdverseEventOutcome",
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
  description: "TODO (and should this be required?).",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/adverse-event-outcome",
  content: "complete",
  concept: [
    { code: "resolved", display: "Resolved" },
    { code: "recovering", display: "Recovering" },
    { code: "ongoing", display: "Ongoing" },
    { code: "resolvedWithSequelae", display: "Resolved with Sequelae" },
    { code: "fatal", display: "Fatal" },
    { code: "unknown", display: "Unknown" },
  ],
};
