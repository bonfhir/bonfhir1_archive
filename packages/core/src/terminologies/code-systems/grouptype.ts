export const GroupType = {
  resourceType: "CodeSystem",
  id: "group-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>GroupType</h2>\n      \n      <div>\n        \n        <p>Types of resources that are part of group.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/group-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">person\n            \n            <a name="group-type-person"> </a>\n          \n          </td>\n          \n          <td>Person</td>\n          \n          <td>Group contains &quot;person&quot; Patient resources.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">animal\n            \n            <a name="group-type-animal"> </a>\n          \n          </td>\n          \n          <td>Animal</td>\n          \n          <td>Group contains &quot;animal&quot; Patient resources.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">practitioner\n            \n            <a name="group-type-practitioner"> </a>\n          \n          </td>\n          \n          <td>Practitioner</td>\n          \n          <td>Group contains healthcare practitioner resources (Practitioner or PractitionerRole).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">device\n            \n            <a name="group-type-device"> </a>\n          \n          </td>\n          \n          <td>Device</td>\n          \n          <td>Group contains Device resources.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">medication\n            \n            <a name="group-type-medication"> </a>\n          \n          </td>\n          \n          <td>Medication</td>\n          \n          <td>Group contains Medication resources.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">substance\n            \n            <a name="group-type-substance"> </a>\n          \n          </td>\n          \n          <td>Substance</td>\n          \n          <td>Group contains Substance resources.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/group-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.285",
    },
  ],
  version: "4.3.0",
  name: "GroupType",
  title: "GroupType",
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
  description: "Types of resources that are part of group.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/group-type",
  content: "complete",
  concept: [
    {
      code: "person",
      display: "Person",
      definition: 'Group contains "person" Patient resources.',
    },
    {
      code: "animal",
      display: "Animal",
      definition: 'Group contains "animal" Patient resources.',
    },
    {
      code: "practitioner",
      display: "Practitioner",
      definition:
        "Group contains healthcare practitioner resources (Practitioner or PractitionerRole).",
    },
    {
      code: "device",
      display: "Device",
      definition: "Group contains Device resources.",
    },
    {
      code: "medication",
      display: "Medication",
      definition: "Group contains Medication resources.",
    },
    {
      code: "substance",
      display: "Substance",
      definition: "Group contains Substance resources.",
    },
  ],
};
