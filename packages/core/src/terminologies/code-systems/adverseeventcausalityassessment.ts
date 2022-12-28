/**
 * Codes for the assessment of whether the entity caused the event.
 * http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess
 */
export const AdverseEventCausalityAssessmentCodeSystem = {
  resourceType: "CodeSystem",
  id: "adverse-event-causality-assess",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>AdverseEventCausalityAssessment</h2>\n      \n      <div>\n        \n        <p>Codes for the assessment of whether the entity caused the event.</p>\n\n      \n      </div>\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Certain\n            \n            <a name="adverse-event-causality-assess-Certain"> </a>\n          \n          </td>\n          \n          <td>Certain</td>\n          \n          <td>i) Event or laboratory test abnormality, with plausible time relationship to drug intake; ii) Cannot be explained by disease or other drugs; iii) Response to withdrawal plausible (pharmacologically, pathologically); iv) Event definitive pharmacologically or phenomenologically (i.e. an objective and specific medical disorder or a recognized pharmacological phenomenon); or v) Re-challenge satisfactory, if necessary.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Probably-Likely\n            \n            <a name="adverse-event-causality-assess-Probably-Likely"> </a>\n          \n          </td>\n          \n          <td>Probably/Likely</td>\n          \n          <td>i) Event or laboratory test abnormality, with reasonable time relationship to drug intake; ii) Unlikely to be attributed to disease or other drugs; iii) Response to withdrawal clinically reasonable; or iv) Re-challenge not required.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Possible\n            \n            <a name="adverse-event-causality-assess-Possible"> </a>\n          \n          </td>\n          \n          <td>Possible</td>\n          \n          <td>i) Event or laboratory test abnormality, with reasonable time relationship to drug intake; ii) Could also be explained by disease or other drugs; or iii) Information on drug withdrawal may be lacking or unclear.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Unlikely\n            \n            <a name="adverse-event-causality-assess-Unlikely"> </a>\n          \n          </td>\n          \n          <td>Unlikely</td>\n          \n          <td>i) Event or laboratory test abnormality, with a time to drug intake that makes a relationship improbable (but not impossible); or ii) Disease or other drugs provide plausible explanations.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Conditional-Classified\n            \n            <a name="adverse-event-causality-assess-Conditional-Classified"> </a>\n          \n          </td>\n          \n          <td>Conditional/Classified</td>\n          \n          <td>i) Event or laboratory test abnormality; ii) More data for proper assessment needed; or iii) Additional data under examination.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">Unassessable-Unclassifiable\n            \n            <a name="adverse-event-causality-assess-Unassessable-Unclassifiable"> </a>\n          \n          </td>\n          \n          <td>Unassessable/Unclassifiable</td>\n          \n          <td>i) Report suggesting an adverse reaction; ii) Cannot be judged because information is insufficient or contradictory; or iii) Data cannot be supplemented or verified.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
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
  url: "http://terminology.hl7.org/CodeSystem/adverse-event-causality-assess",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1254",
    },
  ],
  version: "4.3.0",
  name: "AdverseEventCausalityAssessment",
  title: "AdverseEventCausalityAssessment",
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
  description:
    "Codes for the assessment of whether the entity caused the event.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/adverse-event-causality-assess",
  content: "complete",
  concept: [
    {
      code: "Certain",
      display: "Certain",
      definition:
        "i) Event or laboratory test abnormality, with plausible time relationship to drug intake; ii) Cannot be explained by disease or other drugs; iii) Response to withdrawal plausible (pharmacologically, pathologically); iv) Event definitive pharmacologically or phenomenologically (i.e. an objective and specific medical disorder or a recognized pharmacological phenomenon); or v) Re-challenge satisfactory, if necessary.",
    },
    {
      code: "Probably-Likely",
      display: "Probably/Likely",
      definition:
        "i) Event or laboratory test abnormality, with reasonable time relationship to drug intake; ii) Unlikely to be attributed to disease or other drugs; iii) Response to withdrawal clinically reasonable; or iv) Re-challenge not required.",
    },
    {
      code: "Possible",
      display: "Possible",
      definition:
        "i) Event or laboratory test abnormality, with reasonable time relationship to drug intake; ii) Could also be explained by disease or other drugs; or iii) Information on drug withdrawal may be lacking or unclear.",
    },
    {
      code: "Unlikely",
      display: "Unlikely",
      definition:
        "i) Event or laboratory test abnormality, with a time to drug intake that makes a relationship improbable (but not impossible); or ii) Disease or other drugs provide plausible explanations.",
    },
    {
      code: "Conditional-Classified",
      display: "Conditional/Classified",
      definition:
        "i) Event or laboratory test abnormality; ii) More data for proper assessment needed; or iii) Additional data under examination.",
    },
    {
      code: "Unassessable-Unclassifiable",
      display: "Unassessable/Unclassifiable",
      definition:
        "i) Report suggesting an adverse reaction; ii) Cannot be judged because information is insufficient or contradictory; or iii) Data cannot be supplemented or verified.",
    },
  ],
};
