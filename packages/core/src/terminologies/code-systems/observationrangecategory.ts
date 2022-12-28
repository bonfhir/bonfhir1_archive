/**
 * Codes identifying the category of observation range.
 * http://hl7.org/fhir/observation-range-category
 */
export const ObservationRangeCategoryCodeSystem = {
  resourceType: "CodeSystem",
  id: "observation-range-category",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>ObservationRangeCategory</h2>\n      \n      <div>\n        \n        <p>Codes identifying the category of observation range.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/observation-range-category defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">reference\n            \n            <a name="observation-range-category-reference"> </a>\n          \n          </td>\n          \n          <td>reference range</td>\n          \n          <td>Reference (Normal) Range for Ordinal and Continuous Observations.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">critical\n            \n            <a name="observation-range-category-critical"> </a>\n          \n          </td>\n          \n          <td>critical range</td>\n          \n          <td>Critical Range for Ordinal and Continuous Observations.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">absolute\n            \n            <a name="observation-range-category-absolute"> </a>\n          \n          </td>\n          \n          <td>absolute range</td>\n          \n          <td>Absolute Range for Ordinal and Continuous Observations. Results outside this range are not possible.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "oo",
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
  url: "http://hl7.org/fhir/observation-range-category",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1334",
    },
  ],
  version: "4.3.0",
  name: "ObservationRangeCategory",
  title: "ObservationRangeCategory",
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
  description: "Codes identifying the category of observation range.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/observation-range-category",
  content: "complete",
  concept: [
    {
      code: "reference",
      display: "reference range",
      definition:
        "Reference (Normal) Range for Ordinal and Continuous Observations.",
    },
    {
      code: "critical",
      display: "critical range",
      definition: "Critical Range for Ordinal and Continuous Observations.",
    },
    {
      code: "absolute",
      display: "absolute range",
      definition:
        "Absolute Range for Ordinal and Continuous Observations. Results outside this range are not possible.",
    },
  ],
};
