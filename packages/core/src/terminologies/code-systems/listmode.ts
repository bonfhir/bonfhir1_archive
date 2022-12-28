export const ListMode = {
  resourceType: "CodeSystem",
  id: "list-mode",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>ListMode</h2>\n      \n      <div>\n        \n        <p>The processing mode that applies to this list.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/list-mode defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">working\n            \n            <a name="list-mode-working"> </a>\n          \n          </td>\n          \n          <td>Working List</td>\n          \n          <td>This list is the master list, maintained in an ongoing fashion with regular updates as the real world list it is tracking changes.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">snapshot\n            \n            <a name="list-mode-snapshot"> </a>\n          \n          </td>\n          \n          <td>Snapshot List</td>\n          \n          <td>This list was prepared as a snapshot. It should not be assumed to be current.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">changes\n            \n            <a name="list-mode-changes"> </a>\n          \n          </td>\n          \n          <td>Change List</td>\n          \n          <td>A point-in-time list that shows what changes have been made or recommended.  E.g. a discharge medication list showing what was added and removed during an encounter.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/list-mode",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.319",
    },
  ],
  version: "4.3.0",
  name: "ListMode",
  title: "ListMode",
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
  description: "The processing mode that applies to this list.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/list-mode",
  content: "complete",
  concept: [
    {
      code: "working",
      display: "Working List",
      definition:
        "This list is the master list, maintained in an ongoing fashion with regular updates as the real world list it is tracking changes.",
    },
    {
      code: "snapshot",
      display: "Snapshot List",
      definition:
        "This list was prepared as a snapshot. It should not be assumed to be current.",
    },
    {
      code: "changes",
      display: "Change List",
      definition:
        "A point-in-time list that shows what changes have been made or recommended.  E.g. a discharge medication list showing what was added and removed during an encounter.",
    },
  ],
};
