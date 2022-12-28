export const EncounterLocationStatus = {
  resourceType: "CodeSystem",
  id: "encounter-location-status",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>EncounterLocationStatus</h2>\n      \n      <div>\n        \n        <p>The status of the location.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/encounter-location-status defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">planned\n            \n            <a name="encounter-location-status-planned"> </a>\n          \n          </td>\n          \n          <td>Planned</td>\n          \n          <td>The patient is planned to be moved to this location at some point in the future.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">active\n            \n            <a name="encounter-location-status-active"> </a>\n          \n          </td>\n          \n          <td>Active</td>\n          \n          <td>The patient is currently at this location, or was between the period specified.\n\nA system may update these records when the patient leaves the location to either reserved, or completed.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">reserved\n            \n            <a name="encounter-location-status-reserved"> </a>\n          \n          </td>\n          \n          <td>Reserved</td>\n          \n          <td>This location is held empty for this patient.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">completed\n            \n            <a name="encounter-location-status-completed"> </a>\n          \n          </td>\n          \n          <td>Completed</td>\n          \n          <td>The patient was at this location during the period specified.\n\nNot to be used when the patient is currently at the location.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/encounter-location-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.263",
    },
  ],
  version: "4.3.0",
  name: "EncounterLocationStatus",
  title: "EncounterLocationStatus",
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
  description: "The status of the location.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/encounter-location-status",
  content: "complete",
  concept: [
    {
      code: "planned",
      display: "Planned",
      definition:
        "The patient is planned to be moved to this location at some point in the future.",
    },
    {
      code: "active",
      display: "Active",
      definition:
        "The patient is currently at this location, or was between the period specified.\r\rA system may update these records when the patient leaves the location to either reserved, or completed.",
    },
    {
      code: "reserved",
      display: "Reserved",
      definition: "This location is held empty for this patient.",
    },
    {
      code: "completed",
      display: "Completed",
      definition:
        "The patient was at this location during the period specified.\r\rNot to be used when the patient is currently at the location.",
    },
  ],
};
