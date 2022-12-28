/**
 * Whether an operation is a normal operation or a query.
 * http://hl7.org/fhir/operation-kind
 */
export const OperationKindCodeSystem = {
  resourceType: "CodeSystem",
  id: "operation-kind",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>OperationKind</h2>\n      \n      <div>\n        \n        <p>Whether an operation is a normal operation or a query.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/operation-kind defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">operation\n            \n            <a name="operation-kind-operation"> </a>\n          \n          </td>\n          \n          <td>Operation</td>\n          \n          <td>This operation is invoked as an operation.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">query\n            \n            <a name="operation-kind-query"> </a>\n          \n          </td>\n          \n          <td>Query</td>\n          \n          <td>This operation is a named query, invoked using the search mechanism.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/operation-kind",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.507",
    },
  ],
  version: "4.3.0",
  name: "OperationKind",
  title: "OperationKind",
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
  description: "Whether an operation is a normal operation or a query.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/operation-kind",
  content: "complete",
  concept: [
    {
      code: "operation",
      display: "Operation",
      definition: "This operation is invoked as an operation.",
    },
    {
      code: "query",
      display: "Query",
      definition:
        "This operation is a named query, invoked using the search mechanism.",
    },
  ],
};
