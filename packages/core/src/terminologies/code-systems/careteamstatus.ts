export const CareTeamStatus = {
  resourceType: "CodeSystem",
  id: "care-team-status",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>CareTeamStatus</h2>\n      \n      <div>\n        \n        <p>Indicates the status of the care team.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/care-team-status defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">proposed\n            \n            <a name="care-team-status-proposed"> </a>\n          \n          </td>\n          \n          <td>Proposed</td>\n          \n          <td>The care team has been drafted and proposed, but not yet participating in the coordination and delivery of patient care.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">active\n            \n            <a name="care-team-status-active"> </a>\n          \n          </td>\n          \n          <td>Active</td>\n          \n          <td>The care team is currently participating in the coordination and delivery of care.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">suspended\n            \n            <a name="care-team-status-suspended"> </a>\n          \n          </td>\n          \n          <td>Suspended</td>\n          \n          <td>The care team is temporarily on hold or suspended and not participating in the coordination and delivery of care.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">inactive\n            \n            <a name="care-team-status-inactive"> </a>\n          \n          </td>\n          \n          <td>Inactive</td>\n          \n          <td>The care team was, but is no longer, participating in the coordination and delivery of care.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">entered-in-error\n            \n            <a name="care-team-status-entered-in-error"> </a>\n          \n          </td>\n          \n          <td>Entered in Error</td>\n          \n          <td>The care team should have never existed.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/care-team-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.154",
    },
  ],
  version: "4.3.0",
  name: "CareTeamStatus",
  title: "CareTeamStatus",
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
  description: "Indicates the status of the care team.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/care-team-status",
  content: "complete",
  concept: [
    {
      code: "proposed",
      display: "Proposed",
      definition:
        "The care team has been drafted and proposed, but not yet participating in the coordination and delivery of patient care.",
    },
    {
      code: "active",
      display: "Active",
      definition:
        "The care team is currently participating in the coordination and delivery of care.",
    },
    {
      code: "suspended",
      display: "Suspended",
      definition:
        "The care team is temporarily on hold or suspended and not participating in the coordination and delivery of care.",
    },
    {
      code: "inactive",
      display: "Inactive",
      definition:
        "The care team was, but is no longer, participating in the coordination and delivery of care.",
    },
    {
      code: "entered-in-error",
      display: "Entered in Error",
      definition: "The care team should have never existed.",
    },
  ],
};
