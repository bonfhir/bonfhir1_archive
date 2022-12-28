/**
 * The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).
 * http://hl7.org/fhir/variable-type
 */
export const EvidenceVariableTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "variable-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>EvidenceVariableType</h2>\n      \n      <div>\n        \n        <p>The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/variable-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">dichotomous\n            \n            <a name="variable-type-dichotomous"> </a>\n          \n          </td>\n          \n          <td>Dichotomous</td>\n          \n          <td>The variable is dichotomous, such as present or absent.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">continuous\n            \n            <a name="variable-type-continuous"> </a>\n          \n          </td>\n          \n          <td>Continuous</td>\n          \n          <td>The variable is a continuous result such as a quantity.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">descriptive\n            \n            <a name="variable-type-descriptive"> </a>\n          \n          </td>\n          \n          <td>Descriptive</td>\n          \n          <td>The variable is described narratively rather than quantitatively.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cds",
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
  url: "http://hl7.org/fhir/variable-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1344",
    },
  ],
  version: "4.3.0",
  name: "EvidenceVariableType",
  title: "EvidenceVariableType",
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
    "The possible types of variables for exposures or outcomes (E.g. Dichotomous, Continuous, Descriptive).",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/variable-type",
  content: "complete",
  concept: [
    {
      code: "dichotomous",
      display: "Dichotomous",
      definition: "The variable is dichotomous, such as present or absent.",
    },
    {
      code: "continuous",
      display: "Continuous",
      definition: "The variable is a continuous result such as a quantity.",
    },
    {
      code: "descriptive",
      display: "Descriptive",
      definition:
        "The variable is described narratively rather than quantitatively.",
    },
  ],
};
