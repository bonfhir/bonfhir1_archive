/**
 * Codes for the main intent of the study.
 * http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type
 */
export const ResearchStudyPrimaryPurposeTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "research-study-prim-purp-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>ResearchStudyPrimaryPurposeType</h2>\n      \n      <div>\n        \n        <p>Codes for the main intent of the study.</p>\n\n      \n      </div>\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">treatment\n            \n            <a name="research-study-prim-purp-type-treatment"> </a>\n          \n          </td>\n          \n          <td>Treatment</td>\n          \n          <td>One or more interventions are being evaluated for treating a disease, syndrome, or condition.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">prevention\n            \n            <a name="research-study-prim-purp-type-prevention"> </a>\n          \n          </td>\n          \n          <td>Prevention</td>\n          \n          <td>One or more interventions are being assessed for preventing the development of a specific disease or health condition.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">diagnostic\n            \n            <a name="research-study-prim-purp-type-diagnostic"> </a>\n          \n          </td>\n          \n          <td>Diagnostic</td>\n          \n          <td>One or more interventions are being evaluated for identifying a disease or health condition.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">supportive-care\n            \n            <a name="research-study-prim-purp-type-supportive-care"> </a>\n          \n          </td>\n          \n          <td>Supportive Care</td>\n          \n          <td>One or more interventions are evaluated for maximizing comfort, minimizing side effects, or mitigating against a decline in the participant\'s health or function.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">screening\n            \n            <a name="research-study-prim-purp-type-screening"> </a>\n          \n          </td>\n          \n          <td>Screening</td>\n          \n          <td>One or more interventions are assessed or examined for identifying a condition, or risk factors for a condition, in people who are not yet known to have the condition or risk factor.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">health-services-research\n            \n            <a name="research-study-prim-purp-type-health-services-research"> </a>\n          \n          </td>\n          \n          <td>Health Services Research</td>\n          \n          <td>One or more interventions for evaluating the delivery, processes, management, organization, or financing of healthcare.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">basic-science\n            \n            <a name="research-study-prim-purp-type-basic-science"> </a>\n          \n          </td>\n          \n          <td>Basic Science</td>\n          \n          <td>One or more interventions for examining the basic mechanism of action (for example, physiology or biomechanics of an intervention).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">device-feasibility\n            \n            <a name="research-study-prim-purp-type-device-feasibility"> </a>\n          \n          </td>\n          \n          <td>Device Feasibility</td>\n          \n          <td>An intervention of a device product is being evaluated to determine the feasibility of the product or to test a prototype device and not health outcomes. Such studies are conducted to confirm the design and operating specifications of a device before beginning a full clinical trial.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://terminology.hl7.org/CodeSystem/research-study-prim-purp-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1250",
    },
  ],
  version: "4.3.0",
  name: "ResearchStudyPrimaryPurposeType",
  title: "ResearchStudyPrimaryPurposeType",
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
  description: "Codes for the main intent of the study.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/research-study-prim-purp-type",
  content: "complete",
  concept: [
    {
      code: "treatment",
      display: "Treatment",
      definition:
        "One or more interventions are being evaluated for treating a disease, syndrome, or condition.",
    },
    {
      code: "prevention",
      display: "Prevention",
      definition:
        "One or more interventions are being assessed for preventing the development of a specific disease or health condition.",
    },
    {
      code: "diagnostic",
      display: "Diagnostic",
      definition:
        "One or more interventions are being evaluated for identifying a disease or health condition.",
    },
    {
      code: "supportive-care",
      display: "Supportive Care",
      definition:
        "One or more interventions are evaluated for maximizing comfort, minimizing side effects, or mitigating against a decline in the participant's health or function.",
    },
    {
      code: "screening",
      display: "Screening",
      definition:
        "One or more interventions are assessed or examined for identifying a condition, or risk factors for a condition, in people who are not yet known to have the condition or risk factor.",
    },
    {
      code: "health-services-research",
      display: "Health Services Research",
      definition:
        "One or more interventions for evaluating the delivery, processes, management, organization, or financing of healthcare.",
    },
    {
      code: "basic-science",
      display: "Basic Science",
      definition:
        "One or more interventions for examining the basic mechanism of action (for example, physiology or biomechanics of an intervention).",
    },
    {
      code: "device-feasibility",
      display: "Device Feasibility",
      definition:
        "An intervention of a device product is being evaluated to determine the feasibility of the product or to test a prototype device and not health outcomes. Such studies are conducted to confirm the design and operating specifications of a device before beginning a full clinical trial.",
    },
  ],
};
