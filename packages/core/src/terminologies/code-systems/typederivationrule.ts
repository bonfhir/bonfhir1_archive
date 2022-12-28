/**
 * How a type relates to its baseDefinition.
 * http://hl7.org/fhir/type-derivation-rule
 */
export const TypeDerivationRuleCodeSystem = {
  resourceType: "CodeSystem",
  id: "type-derivation-rule",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>TypeDerivationRule</h2>\n      \n      <div>\n        \n        <p>How a type relates to its baseDefinition.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/type-derivation-rule defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">specialization\n            \n            <a name="type-derivation-rule-specialization"> </a>\n          \n          </td>\n          \n          <td>Specialization</td>\n          \n          <td>This definition defines a new type that adds additional elements to the base type.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">constraint\n            \n            <a name="type-derivation-rule-constraint"> </a>\n          \n          </td>\n          \n          <td>Constraint</td>\n          \n          <td>This definition adds additional rules to an existing concrete type.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "normative",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      valueCode: "4.0.0",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
  ],
  url: "http://hl7.org/fhir/type-derivation-rule",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.674",
    },
  ],
  version: "4.3.0",
  name: "TypeDerivationRule",
  title: "TypeDerivationRule",
  status: "active",
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
  description: "How a type relates to its baseDefinition.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/type-derivation-rule",
  content: "complete",
  concept: [
    {
      code: "specialization",
      display: "Specialization",
      definition:
        "This definition defines a new type that adds additional elements to the base type.",
    },
    {
      code: "constraint",
      display: "Constraint",
      definition:
        "This definition adds additional rules to an existing concrete type.",
    },
  ],
};
