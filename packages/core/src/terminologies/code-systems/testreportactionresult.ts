export const TestReportActionResult = {
  resourceType: "CodeSystem",
  id: "report-action-result-codes",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>TestReportActionResult</h2>\n      \n      <div>\n        \n        <p>The results of executing an action.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/report-action-result-codes defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">pass\n            \n            <a name="report-action-result-codes-pass"> </a>\n          \n          </td>\n          \n          <td>Pass</td>\n          \n          <td>The action was successful.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">skip\n            \n            <a name="report-action-result-codes-skip"> </a>\n          \n          </td>\n          \n          <td>Skip</td>\n          \n          <td>The action was skipped.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">fail\n            \n            <a name="report-action-result-codes-fail"> </a>\n          \n          </td>\n          \n          <td>Fail</td>\n          \n          <td>The action failed.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">warning\n            \n            <a name="report-action-result-codes-warning"> </a>\n          \n          </td>\n          \n          <td>Warning</td>\n          \n          <td>The action passed but with warnings.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">error\n            \n            <a name="report-action-result-codes-error"> </a>\n          \n          </td>\n          \n          <td>Error</td>\n          \n          <td>The action encountered a fatal error and the engine was unable to process.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
      valueInteger: 0,
    },
  ],
  url: "http://hl7.org/fhir/report-action-result-codes",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.721",
    },
  ],
  version: "4.3.0",
  name: "TestReportActionResult",
  title: "TestReportActionResult",
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
  description: "The results of executing an action.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/report-action-result-codes",
  content: "complete",
  concept: [
    { code: "pass", display: "Pass", definition: "The action was successful." },
    { code: "skip", display: "Skip", definition: "The action was skipped." },
    { code: "fail", display: "Fail", definition: "The action failed." },
    {
      code: "warning",
      display: "Warning",
      definition: "The action passed but with warnings.",
    },
    {
      code: "error",
      display: "Error",
      definition:
        "The action encountered a fatal error and the engine was unable to process.",
    },
  ],
};
