export const ResearchStudyReasonStopped = {
  resourceType: "CodeSystem",
  id: "research-study-reason-stopped",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>ResearchStudyReasonStopped</h2>\n      \n      <div>\n        \n        <p>Codes for why the study ended prematurely.</p>\n\n      \n      </div>\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/research-study-reason-stopped defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">accrual-goal-met\n            \n            <a name="research-study-reason-stopped-accrual-goal-met"> </a>\n          \n          </td>\n          \n          <td>Accrual Goal Met</td>\n          \n          <td>The study prematurely ended because the accrual goal was met.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">closed-due-to-toxicity\n            \n            <a name="research-study-reason-stopped-closed-due-to-toxicity"> </a>\n          \n          </td>\n          \n          <td>Closed due to toxicity</td>\n          \n          <td>The study prematurely ended due to toxicity.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">closed-due-to-lack-of-study-progress\n            \n            <a name="research-study-reason-stopped-closed-due-to-lack-of-study-progress"> </a>\n          \n          </td>\n          \n          <td>Closed due to lack of study progress</td>\n          \n          <td>The study prematurely ended due to lack of study progress.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">temporarily-closed-per-study-design\n            \n            <a name="research-study-reason-stopped-temporarily-closed-per-study-design"> </a>\n          \n          </td>\n          \n          <td>Temporarily closed per study design</td>\n          \n          <td>The study prematurely ended temporarily per study design.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "brr",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "draft",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 1,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/research-study-reason-stopped",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1249",
    },
  ],
  version: "4.3.0",
  name: "ResearchStudyReasonStopped",
  title: "ResearchStudyReasonStopped",
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
  description: "Codes for why the study ended prematurely.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/research-study-reason-stopped",
  content: "complete",
  concept: [
    {
      code: "accrual-goal-met",
      display: "Accrual Goal Met",
      definition:
        "The study prematurely ended because the accrual goal was met.",
    },
    {
      code: "closed-due-to-toxicity",
      display: "Closed due to toxicity",
      definition: "The study prematurely ended due to toxicity.",
    },
    {
      code: "closed-due-to-lack-of-study-progress",
      display: "Closed due to lack of study progress",
      definition: "The study prematurely ended due to lack of study progress.",
    },
    {
      code: "temporarily-closed-per-study-design",
      display: "Temporarily closed per study design",
      definition: "The study prematurely ended temporarily per study design.",
    },
  ],
};
