/**
 * Codes for the stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.
 * http://terminology.hl7.org/CodeSystem/research-study-phase
 */
export const ResearchStudyPhaseCodeSystem = {
  resourceType: "CodeSystem",
  id: "research-study-phase",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>ResearchStudyPhase</h2>\n      \n      <div>\n        \n        <p>Codes for the stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.</p>\n\n      \n      </div>\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/research-study-phase defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">n-a\n            \n            <a name="research-study-phase-n-a"> </a>\n          \n          </td>\n          \n          <td>N/A</td>\n          \n          <td>Trials without phases (for example, studies of devices or behavioral interventions).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">early-phase-1\n            \n            <a name="research-study-phase-early-phase-1"> </a>\n          \n          </td>\n          \n          <td>Early Phase 1</td>\n          \n          <td>Designation for optional exploratory trials conducted in accordance with the United States Food and Drug Administration\'s (FDA) 2006 Guidance on Exploratory Investigational New Drug (IND) Studies. Formerly called Phase 0.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">phase-1\n            \n            <a name="research-study-phase-phase-1"> </a>\n          \n          </td>\n          \n          <td>Phase 1</td>\n          \n          <td>Includes initial studies to determine the metabolism and pharmacologic actions of drugs in humans, the side effects associated with increasing doses, and to gain early evidence of effectiveness; may include healthy participants and/or patients.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">phase-1-phase-2\n            \n            <a name="research-study-phase-phase-1-phase-2"> </a>\n          \n          </td>\n          \n          <td>Phase 1/Phase 2</td>\n          \n          <td>Trials that are a combination of phases 1 and 2.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">phase-2\n            \n            <a name="research-study-phase-phase-2"> </a>\n          \n          </td>\n          \n          <td>Phase 2</td>\n          \n          <td>Includes controlled clinical studies conducted to evaluate the effectiveness of the drug for a particular indication or indications in participants with the disease or condition under study and to determine the common short-term side effects and risks.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">phase-2-phase-3\n            \n            <a name="research-study-phase-phase-2-phase-3"> </a>\n          \n          </td>\n          \n          <td>Phase 2/Phase 3</td>\n          \n          <td>Trials that are a combination of phases 2 and 3.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">phase-3\n            \n            <a name="research-study-phase-phase-3"> </a>\n          \n          </td>\n          \n          <td>Phase 3</td>\n          \n          <td>Includes trials conducted after preliminary evidence suggesting effectiveness of the drug has been obtained, and are intended to gather additional information to evaluate the overall benefit-risk relationship of the drug.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">phase-4\n            \n            <a name="research-study-phase-phase-4"> </a>\n          \n          </td>\n          \n          <td>Phase 4</td>\n          \n          <td>Studies of FDA-approved drugs to delineate additional information including the drug\'s risks, benefits, and optimal use.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://terminology.hl7.org/CodeSystem/research-study-phase",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1247",
    },
  ],
  version: "4.3.0",
  name: "ResearchStudyPhase",
  title: "ResearchStudyPhase",
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
    "Codes for the stage in the progression of a therapy from initial experimental use in humans in clinical trials to post-market evaluation.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/research-study-phase",
  content: "complete",
  concept: [
    {
      code: "n-a",
      display: "N/A",
      definition:
        "Trials without phases (for example, studies of devices or behavioral interventions).",
    },
    {
      code: "early-phase-1",
      display: "Early Phase 1",
      definition:
        "Designation for optional exploratory trials conducted in accordance with the United States Food and Drug Administration's (FDA) 2006 Guidance on Exploratory Investigational New Drug (IND) Studies. Formerly called Phase 0.",
    },
    {
      code: "phase-1",
      display: "Phase 1",
      definition:
        "Includes initial studies to determine the metabolism and pharmacologic actions of drugs in humans, the side effects associated with increasing doses, and to gain early evidence of effectiveness; may include healthy participants and/or patients.",
    },
    {
      code: "phase-1-phase-2",
      display: "Phase 1/Phase 2",
      definition: "Trials that are a combination of phases 1 and 2.",
    },
    {
      code: "phase-2",
      display: "Phase 2",
      definition:
        "Includes controlled clinical studies conducted to evaluate the effectiveness of the drug for a particular indication or indications in participants with the disease or condition under study and to determine the common short-term side effects and risks.",
    },
    {
      code: "phase-2-phase-3",
      display: "Phase 2/Phase 3",
      definition: "Trials that are a combination of phases 2 and 3.",
    },
    {
      code: "phase-3",
      display: "Phase 3",
      definition:
        "Includes trials conducted after preliminary evidence suggesting effectiveness of the drug has been obtained, and are intended to gather additional information to evaluate the overall benefit-risk relationship of the drug.",
    },
    {
      code: "phase-4",
      display: "Phase 4",
      definition:
        "Studies of FDA-approved drugs to delineate additional information including the drug's risks, benefits, and optimal use.",
    },
  ],
};
