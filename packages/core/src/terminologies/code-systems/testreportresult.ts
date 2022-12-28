export const TestReportResult = {
  resourceType: "CodeSystem",
  id: "report-result-codes",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>TestReportResult</h2>\n      \n      <div>\n        \n        <p>The reported execution result.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/report-result-codes defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">pass\n            \n            <a name="report-result-codes-pass"> </a>\n          \n          </td>\n          \n          <td>Pass</td>\n          \n          <td>All test operations successfully passed all asserts.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">fail\n            \n            <a name="report-result-codes-fail"> </a>\n          \n          </td>\n          \n          <td>Fail</td>\n          \n          <td>One or more test operations failed one or more asserts.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">pending\n            \n            <a name="report-result-codes-pending"> </a>\n          \n          </td>\n          \n          <td>Pending</td>\n          \n          <td>One or more test operations is pending execution completion.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/report-result-codes",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.719",
    },
  ],
  version: "4.3.0",
  name: "TestReportResult",
  title: "TestReportResult",
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
  description: "The reported execution result.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/report-result-codes",
  content: "complete",
  concept: [
    {
      code: "pass",
      display: "Pass",
      definition: "All test operations successfully passed all asserts.",
    },
    {
      code: "fail",
      display: "Fail",
      definition: "One or more test operations failed one or more asserts.",
    },
    {
      code: "pending",
      display: "Pending",
      definition:
        "One or more test operations is pending execution completion.",
    },
  ],
};
