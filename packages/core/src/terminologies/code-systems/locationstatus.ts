/**
 * Indicates whether the location is still in use.
 * http://hl7.org/fhir/location-status
 */
export const LocationStatusCodeSystem = {
  resourceType: "CodeSystem",
  id: "location-status",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>LocationStatus</h2>\n      \n      <div>\n        \n        <p>Indicates whether the location is still in use.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/location-status defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">active\n            \n            <a name="location-status-active"> </a>\n          \n          </td>\n          \n          <td>Active</td>\n          \n          <td>The location is operational.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">suspended\n            \n            <a name="location-status-suspended"> </a>\n          \n          </td>\n          \n          <td>Suspended</td>\n          \n          <td>The location is temporarily closed.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">inactive\n            \n            <a name="location-status-inactive"> </a>\n          \n          </td>\n          \n          <td>Inactive</td>\n          \n          <td>The location is no longer used.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/location-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.333",
    },
  ],
  version: "4.3.0",
  name: "LocationStatus",
  title: "LocationStatus",
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
  description: "Indicates whether the location is still in use.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/location-status",
  content: "complete",
  concept: [
    {
      code: "active",
      display: "Active",
      definition: "The location is operational.",
    },
    {
      code: "suspended",
      display: "Suspended",
      definition: "The location is temporarily closed.",
    },
    {
      code: "inactive",
      display: "Inactive",
      definition: "The location is no longer used.",
    },
  ],
};
