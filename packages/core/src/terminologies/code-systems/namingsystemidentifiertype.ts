/**
 * Identifies the style of unique identifier used to identify a namespace.
 * http://hl7.org/fhir/namingsystem-identifier-type
 */
export const NamingSystemIdentifierTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "namingsystem-identifier-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>NamingSystemIdentifierType</h2>\n      \n      <div>\n        \n        <p>Identifies the style of unique identifier used to identify a namespace.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/namingsystem-identifier-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">oid\n            \n            <a name="namingsystem-identifier-type-oid"> </a>\n          \n          </td>\n          \n          <td>OID</td>\n          \n          <td>An ISO object identifier; e.g. 1.2.3.4.5.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">uuid\n            \n            <a name="namingsystem-identifier-type-uuid"> </a>\n          \n          </td>\n          \n          <td>UUID</td>\n          \n          <td>A universally unique identifier of the form a5afddf4-e880-459b-876e-e4591b0acc11.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">uri\n            \n            <a name="namingsystem-identifier-type-uri"> </a>\n          \n          </td>\n          \n          <td>URI</td>\n          \n          <td>A uniform resource identifier (ideally a URL - uniform resource locator); e.g. http://unitsofmeasure.org.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">other\n            \n            <a name="namingsystem-identifier-type-other"> </a>\n          \n          </td>\n          \n          <td>Other</td>\n          \n          <td>Some other type of unique identifier; e.g. HL7-assigned reserved string such as LN for LOINC.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "vocab",
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
  url: "http://hl7.org/fhir/namingsystem-identifier-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.493",
    },
  ],
  version: "4.3.0",
  name: "NamingSystemIdentifierType",
  title: "NamingSystemIdentifierType",
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
    "Identifies the style of unique identifier used to identify a namespace.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/namingsystem-identifier-type",
  content: "complete",
  concept: [
    {
      code: "oid",
      display: "OID",
      definition: "An ISO object identifier; e.g. 1.2.3.4.5.",
    },
    {
      code: "uuid",
      display: "UUID",
      definition:
        "A universally unique identifier of the form a5afddf4-e880-459b-876e-e4591b0acc11.",
    },
    {
      code: "uri",
      display: "URI",
      definition:
        "A uniform resource identifier (ideally a URL - uniform resource locator); e.g. http://unitsofmeasure.org.",
    },
    {
      code: "other",
      display: "Other",
      definition:
        "Some other type of unique identifier; e.g. HL7-assigned reserved string such as LN for LOINC.",
    },
  ],
};
