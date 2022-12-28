export const GuidanceResponseStatus = {
  resourceType: "CodeSystem",
  id: "guidance-response-status",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>GuidanceResponseStatus</h2>\n      \n      <div>\n        \n        <p>The status of a guidance response.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/guidance-response-status defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">success\n            \n            <a name="guidance-response-status-success"> </a>\n          \n          </td>\n          \n          <td>Success</td>\n          \n          <td>The request was processed successfully.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">data-requested\n            \n            <a name="guidance-response-status-data-requested"> </a>\n          \n          </td>\n          \n          <td>Data Requested</td>\n          \n          <td>The request was processed successfully, but more data may result in a more complete evaluation.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">data-required\n            \n            <a name="guidance-response-status-data-required"> </a>\n          \n          </td>\n          \n          <td>Data Required</td>\n          \n          <td>The request was processed, but more data is required to complete the evaluation.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">in-progress\n            \n            <a name="guidance-response-status-in-progress"> </a>\n          \n          </td>\n          \n          <td>In Progress</td>\n          \n          <td>The request is currently being processed.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">failure\n            \n            <a name="guidance-response-status-failure"> </a>\n          \n          </td>\n          \n          <td>Failure</td>\n          \n          <td>The request was not processed successfully.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">entered-in-error\n            \n            <a name="guidance-response-status-entered-in-error"> </a>\n          \n          </td>\n          \n          <td>Entered In Error</td>\n          \n          <td>The response was entered in error.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
      valueInteger: 2,
    },
  ],
  url: "http://hl7.org/fhir/guidance-response-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.818",
    },
  ],
  version: "4.3.0",
  name: "GuidanceResponseStatus",
  title: "GuidanceResponseStatus",
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
  description: "The status of a guidance response.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/guidance-response-status",
  content: "complete",
  concept: [
    {
      code: "success",
      display: "Success",
      definition: "The request was processed successfully.",
    },
    {
      code: "data-requested",
      display: "Data Requested",
      definition:
        "The request was processed successfully, but more data may result in a more complete evaluation.",
    },
    {
      code: "data-required",
      display: "Data Required",
      definition:
        "The request was processed, but more data is required to complete the evaluation.",
    },
    {
      code: "in-progress",
      display: "In Progress",
      definition: "The request is currently being processed.",
    },
    {
      code: "failure",
      display: "Failure",
      definition: "The request was not processed successfully.",
    },
    {
      code: "entered-in-error",
      display: "Entered In Error",
      definition: "The response was entered in error.",
    },
  ],
};
