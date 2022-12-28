/**
 * Codes that convey the current status of the research study.
 * http://hl7.org/fhir/research-study-status
 */
export const ResearchStudyStatusCodeSystem = {
  resourceType: "CodeSystem",
  id: "research-study-status",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>ResearchStudyStatus</h2>\n      \n      <div>\n        \n        <p>Codes that convey the current status of the research study.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/research-study-status defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">active\n            \n            <a name="research-study-status-active"> </a>\n          \n          </td>\n          \n          <td>Active</td>\n          \n          <td>Study is opened for accrual.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">administratively-completed\n            \n            <a name="research-study-status-administratively-completed"> </a>\n          \n          </td>\n          \n          <td>Administratively Completed</td>\n          \n          <td>Study is completed prematurely and will not resume; patients are no longer examined nor treated.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">approved\n            \n            <a name="research-study-status-approved"> </a>\n          \n          </td>\n          \n          <td>Approved</td>\n          \n          <td>Protocol is approved by the review board.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">closed-to-accrual\n            \n            <a name="research-study-status-closed-to-accrual"> </a>\n          \n          </td>\n          \n          <td>Closed to Accrual</td>\n          \n          <td>Study is closed for accrual; patients can be examined and treated.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">closed-to-accrual-and-intervention\n            \n            <a name="research-study-status-closed-to-accrual-and-intervention"> </a>\n          \n          </td>\n          \n          <td>Closed to Accrual and Intervention</td>\n          \n          <td>Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment or intervention but are still being followed according to the primary objective of the study.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">completed\n            \n            <a name="research-study-status-completed"> </a>\n          \n          </td>\n          \n          <td>Completed</td>\n          \n          <td>Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment\nor intervention but are still being followed according to the primary objective of the study.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">disapproved\n            \n            <a name="research-study-status-disapproved"> </a>\n          \n          </td>\n          \n          <td>Disapproved</td>\n          \n          <td>Protocol was disapproved by the review board.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">in-review\n            \n            <a name="research-study-status-in-review"> </a>\n          \n          </td>\n          \n          <td>In Review</td>\n          \n          <td>Protocol is submitted to the review board for approval.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">temporarily-closed-to-accrual\n            \n            <a name="research-study-status-temporarily-closed-to-accrual"> </a>\n          \n          </td>\n          \n          <td>Temporarily Closed to Accrual</td>\n          \n          <td>Study is temporarily closed for accrual; can be potentially resumed in the future; patients can be examined and treated.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">temporarily-closed-to-accrual-and-intervention\n            \n            <a name="research-study-status-temporarily-closed-to-accrual-and-intervention"> </a>\n          \n          </td>\n          \n          <td>Temporarily Closed to Accrual and Intervention</td>\n          \n          <td>Study is temporarily closed for accrual and intervention and potentially can be resumed in the future.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">withdrawn\n            \n            <a name="research-study-status-withdrawn"> </a>\n          \n          </td>\n          \n          <td>Withdrawn</td>\n          \n          <td>Protocol was withdrawn by the lead organization.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "brr",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://hl7.org/fhir/research-study-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.820",
    },
  ],
  version: "4.3.0",
  name: "ResearchStudyStatus",
  title: "ResearchStudyStatus",
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
  description: "Codes that convey the current status of the research study.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/research-study-status",
  content: "complete",
  concept: [
    {
      code: "active",
      display: "Active",
      definition: "Study is opened for accrual.",
    },
    {
      code: "administratively-completed",
      display: "Administratively Completed",
      definition:
        "Study is completed prematurely and will not resume; patients are no longer examined nor treated.",
    },
    {
      code: "approved",
      display: "Approved",
      definition: "Protocol is approved by the review board.",
    },
    {
      code: "closed-to-accrual",
      display: "Closed to Accrual",
      definition:
        "Study is closed for accrual; patients can be examined and treated.",
    },
    {
      code: "closed-to-accrual-and-intervention",
      display: "Closed to Accrual and Intervention",
      definition:
        "Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment or intervention but are still being followed according to the primary objective of the study.",
    },
    {
      code: "completed",
      display: "Completed",
      definition:
        "Study is closed to accrual and intervention, i.e. the study is closed to enrollment, all study subjects have completed treatment\nor intervention but are still being followed according to the primary objective of the study.",
    },
    {
      code: "disapproved",
      display: "Disapproved",
      definition: "Protocol was disapproved by the review board.",
    },
    {
      code: "in-review",
      display: "In Review",
      definition: "Protocol is submitted to the review board for approval.",
    },
    {
      code: "temporarily-closed-to-accrual",
      display: "Temporarily Closed to Accrual",
      definition:
        "Study is temporarily closed for accrual; can be potentially resumed in the future; patients can be examined and treated.",
    },
    {
      code: "temporarily-closed-to-accrual-and-intervention",
      display: "Temporarily Closed to Accrual and Intervention",
      definition:
        "Study is temporarily closed for accrual and intervention and potentially can be resumed in the future.",
    },
    {
      code: "withdrawn",
      display: "Withdrawn",
      definition: "Protocol was withdrawn by the lead organization.",
    },
  ],
};
