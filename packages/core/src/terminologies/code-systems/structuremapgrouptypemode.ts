/**
 * If this is the default rule set to apply for the source type, or this combination of types.
 * http://hl7.org/fhir/map-group-type-mode
 */
export const StructureMapGroupTypeModeCodeSystem = {
  resourceType: "CodeSystem",
  id: "map-group-type-mode",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>StructureMapGroupTypeMode</h2>\n      \n      <div>\n        \n        <p>If this is the default rule set to apply for the source type, or this combination of types.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/map-group-type-mode defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">none\n            \n            <a name="map-group-type-mode-none"> </a>\n          \n          </td>\n          \n          <td>Not a Default</td>\n          \n          <td>This group is not a default group for the types.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">types\n            \n            <a name="map-group-type-mode-types"> </a>\n          \n          </td>\n          \n          <td>Default for Type Combination</td>\n          \n          <td>This group is a default mapping group for the specified types and for the primary source type.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">type-and-types\n            \n            <a name="map-group-type-mode-type-and-types"> </a>\n          \n          </td>\n          \n          <td>Default for type + combination</td>\n          \n          <td>This group is a default mapping group for the specified types.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/map-group-type-mode",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.688",
    },
  ],
  version: "4.3.0",
  name: "StructureMapGroupTypeMode",
  title: "StructureMapGroupTypeMode",
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
    "If this is the default rule set to apply for the source type, or this combination of types.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/map-group-type-mode",
  content: "complete",
  concept: [
    {
      code: "none",
      display: "Not a Default",
      definition: "This group is not a default group for the types.",
    },
    {
      code: "types",
      display: "Default for Type Combination",
      definition:
        "This group is a default mapping group for the specified types and for the primary source type.",
    },
    {
      code: "type-and-types",
      display: "Default for type + combination",
      definition:
        "This group is a default mapping group for the specified types.",
    },
  ],
};
