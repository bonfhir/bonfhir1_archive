/**
 * The current status of the test report.
 * http://hl7.org/fhir/report-status-codes
 */
export const TestReportStatusCodeSystem = {
  resourceType: "CodeSystem",
  id: "report-status-codes",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>TestReportStatus</h2>\n      \n      <div>\n        \n        <p>The current status of the test report.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/report-status-codes defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">completed\n            \n            <a name="report-status-codes-completed"> </a>\n          \n          </td>\n          \n          <td>Completed</td>\n          \n          <td>All test operations have completed.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">in-progress\n            \n            <a name="report-status-codes-in-progress"> </a>\n          \n          </td>\n          \n          <td>In Progress</td>\n          \n          <td>A test operations is currently executing.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">waiting\n            \n            <a name="report-status-codes-waiting"> </a>\n          \n          </td>\n          \n          <td>Waiting</td>\n          \n          <td>A test operation is waiting for an external client request.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">stopped\n            \n            <a name="report-status-codes-stopped"> </a>\n          \n          </td>\n          \n          <td>Stopped</td>\n          \n          <td>The test script execution was manually stopped.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">entered-in-error\n            \n            <a name="report-status-codes-entered-in-error"> </a>\n          \n          </td>\n          \n          <td>Entered In Error</td>\n          \n          <td>This test report was entered or created in error.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/report-status-codes",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.725",
    },
  ],
  version: "4.3.0",
  name: "TestReportStatus",
  title: "TestReportStatus",
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
  description: "The current status of the test report.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/report-status-codes",
  content: "complete",
  concept: [
    {
      code: "completed",
      display: "Completed",
      definition: "All test operations have completed.",
    },
    {
      code: "in-progress",
      display: "In Progress",
      definition: "A test operations is currently executing.",
    },
    {
      code: "waiting",
      display: "Waiting",
      definition: "A test operation is waiting for an external client request.",
    },
    {
      code: "stopped",
      display: "Stopped",
      definition: "The test script execution was manually stopped.",
    },
    {
      code: "entered-in-error",
      display: "Entered In Error",
      definition: "This test report was entered or created in error.",
    },
  ],
};
