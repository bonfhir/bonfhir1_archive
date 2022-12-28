/**
 * The criteria by which a question is enabled.
 * http://hl7.org/fhir/questionnaire-enable-operator
 */
export const QuestionnaireItemOperatorCodeSystem = {
  resourceType: "CodeSystem",
  id: "questionnaire-enable-operator",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>QuestionnaireItemOperator</h2>\n      \n      <div>\n        \n        <p>The criteria by which a question is enabled.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/questionnaire-enable-operator defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">exists\n            \n            <a name="questionnaire-enable-operator-exists"> </a>\n          \n          </td>\n          \n          <td>Exists</td>\n          \n          <td>True if whether an answer exists is equal to the enableWhen answer (which must be a boolean).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">=\n            \n            <a name="questionnaire-enable-operator-.61"> </a>\n          \n          </td>\n          \n          <td>Equals</td>\n          \n          <td>True if whether at least one answer has a value that is equal to the enableWhen answer.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">!=\n            \n            <a name="questionnaire-enable-operator-.33.61"> </a>\n          \n          </td>\n          \n          <td>Not Equals</td>\n          \n          <td>True if whether at least no answer has a value that is equal to the enableWhen answer.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">&gt;\n            \n            <a name="questionnaire-enable-operator-.62"> </a>\n          \n          </td>\n          \n          <td>Greater Than</td>\n          \n          <td>True if whether at least no answer has a value that is greater than the enableWhen answer.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">&lt;\n            \n            <a name="questionnaire-enable-operator-.60"> </a>\n          \n          </td>\n          \n          <td>Less Than</td>\n          \n          <td>True if whether at least no answer has a value that is less than the enableWhen answer.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">&gt;=\n            \n            <a name="questionnaire-enable-operator-.62.61"> </a>\n          \n          </td>\n          \n          <td>Greater or Equals</td>\n          \n          <td>True if whether at least no answer has a value that is greater or equal to the enableWhen answer.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">&lt;=\n            \n            <a name="questionnaire-enable-operator-.60.61"> </a>\n          \n          </td>\n          \n          <td>Less or Equals</td>\n          \n          <td>True if whether at least no answer has a value that is less or equal to the enableWhen answer.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
      valueInteger: 3,
    },
  ],
  url: "http://hl7.org/fhir/questionnaire-enable-operator",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1006",
    },
  ],
  version: "4.3.0",
  name: "QuestionnaireItemOperator",
  title: "QuestionnaireItemOperator",
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
  description: "The criteria by which a question is enabled.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/questionnaire-enable-operator",
  content: "complete",
  concept: [
    {
      code: "exists",
      display: "Exists",
      definition:
        "True if whether an answer exists is equal to the enableWhen answer (which must be a boolean).",
    },
    {
      code: "=",
      display: "Equals",
      definition:
        "True if whether at least one answer has a value that is equal to the enableWhen answer.",
    },
    {
      code: "!=",
      display: "Not Equals",
      definition:
        "True if whether at least no answer has a value that is equal to the enableWhen answer.",
    },
    {
      code: ">",
      display: "Greater Than",
      definition:
        "True if whether at least no answer has a value that is greater than the enableWhen answer.",
    },
    {
      code: "<",
      display: "Less Than",
      definition:
        "True if whether at least no answer has a value that is less than the enableWhen answer.",
    },
    {
      code: ">=",
      display: "Greater or Equals",
      definition:
        "True if whether at least no answer has a value that is greater or equal to the enableWhen answer.",
    },
    {
      code: "<=",
      display: "Less or Equals",
      definition:
        "True if whether at least no answer has a value that is less or equal to the enableWhen answer.",
    },
  ],
};
