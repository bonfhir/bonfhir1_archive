/**
 * The type of operator to use for assertion.
 * http://hl7.org/fhir/assert-operator-codes
 */
export const AssertionOperatorTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "assert-operator-codes",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>AssertionOperatorType</h2>\n      \n      <div>\n        \n        <p>The type of operator to use for assertion.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/assert-operator-codes defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">equals\n            \n            <a name="assert-operator-codes-equals"> </a>\n          \n          </td>\n          \n          <td>equals</td>\n          \n          <td>Default value. Equals comparison.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">notEquals\n            \n            <a name="assert-operator-codes-notEquals"> </a>\n          \n          </td>\n          \n          <td>notEquals</td>\n          \n          <td>Not equals comparison.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">in\n            \n            <a name="assert-operator-codes-in"> </a>\n          \n          </td>\n          \n          <td>in</td>\n          \n          <td>Compare value within a known set of values.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">notIn\n            \n            <a name="assert-operator-codes-notIn"> </a>\n          \n          </td>\n          \n          <td>notIn</td>\n          \n          <td>Compare value not within a known set of values.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">greaterThan\n            \n            <a name="assert-operator-codes-greaterThan"> </a>\n          \n          </td>\n          \n          <td>greaterThan</td>\n          \n          <td>Compare value to be greater than a known value.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">lessThan\n            \n            <a name="assert-operator-codes-lessThan"> </a>\n          \n          </td>\n          \n          <td>lessThan</td>\n          \n          <td>Compare value to be less than a known value.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">empty\n            \n            <a name="assert-operator-codes-empty"> </a>\n          \n          </td>\n          \n          <td>empty</td>\n          \n          <td>Compare value is empty.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">notEmpty\n            \n            <a name="assert-operator-codes-notEmpty"> </a>\n          \n          </td>\n          \n          <td>notEmpty</td>\n          \n          <td>Compare value is not empty.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">contains\n            \n            <a name="assert-operator-codes-contains"> </a>\n          \n          </td>\n          \n          <td>contains</td>\n          \n          <td>Compare value string contains a known value.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">notContains\n            \n            <a name="assert-operator-codes-notContains"> </a>\n          \n          </td>\n          \n          <td>notContains</td>\n          \n          <td>Compare value string does not contain a known value.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">eval\n            \n            <a name="assert-operator-codes-eval"> </a>\n          \n          </td>\n          \n          <td>evaluate</td>\n          \n          <td>Evaluate the FHIRPath expression as a boolean condition.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/assert-operator-codes",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.709",
    },
  ],
  version: "4.3.0",
  name: "AssertionOperatorType",
  title: "AssertionOperatorType",
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
  description: "The type of operator to use for assertion.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/assert-operator-codes",
  content: "complete",
  concept: [
    {
      code: "equals",
      display: "equals",
      definition: "Default value. Equals comparison.",
    },
    {
      code: "notEquals",
      display: "notEquals",
      definition: "Not equals comparison.",
    },
    {
      code: "in",
      display: "in",
      definition: "Compare value within a known set of values.",
    },
    {
      code: "notIn",
      display: "notIn",
      definition: "Compare value not within a known set of values.",
    },
    {
      code: "greaterThan",
      display: "greaterThan",
      definition: "Compare value to be greater than a known value.",
    },
    {
      code: "lessThan",
      display: "lessThan",
      definition: "Compare value to be less than a known value.",
    },
    { code: "empty", display: "empty", definition: "Compare value is empty." },
    {
      code: "notEmpty",
      display: "notEmpty",
      definition: "Compare value is not empty.",
    },
    {
      code: "contains",
      display: "contains",
      definition: "Compare value string contains a known value.",
    },
    {
      code: "notContains",
      display: "notContains",
      definition: "Compare value string does not contain a known value.",
    },
    {
      code: "eval",
      display: "evaluate",
      definition: "Evaluate the FHIRPath expression as a boolean condition.",
    },
  ],
};
