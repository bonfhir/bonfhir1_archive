/**
 * The status of the measure report.
 * http://hl7.org/fhir/measure-report-status
 */
export const MeasureReportStatusCodeSystem = {
  resourceType: "CodeSystem",
  id: "measure-report-status",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>This code system http://hl7.org/fhir/measure-report-status defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">complete\n            \n            <a name="measure-report-status-complete"> </a>\n          \n          </td>\n          \n          <td>Complete</td>\n          \n          <td>The report is complete and ready for use.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">pending\n            \n            <a name="measure-report-status-pending"> </a>\n          \n          </td>\n          \n          <td>Pending</td>\n          \n          <td>The report is currently being generated.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">error\n            \n            <a name="measure-report-status-error"> </a>\n          \n          </td>\n          \n          <td>Error</td>\n          \n          <td>An error occurred attempting to generate the report.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "cqi",
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
  url: "http://hl7.org/fhir/measure-report-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.777",
    },
  ],
  version: "4.3.0",
  name: "MeasureReportStatus",
  title: "MeasureReportStatus",
  status: "draft",
  experimental: false,
  date: "2021-01-05T10:01:24+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "The status of the measure report.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/measure-report-status",
  content: "complete",
  concept: [
    {
      code: "complete",
      display: "Complete",
      definition: "The report is complete and ready for use.",
    },
    {
      code: "pending",
      display: "Pending",
      definition: "The report is currently being generated.",
    },
    {
      code: "error",
      display: "Error",
      definition: "An error occurred attempting to generate the report.",
    },
  ],
};
