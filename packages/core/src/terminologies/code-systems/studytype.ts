/**
 * The type of study the evidence was derived from.
 * http://terminology.hl7.org/CodeSystem/study-type
 */
export const StudyTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "study-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/study-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">RCT\n            \n            <a name="study-type-RCT"> </a>\n          \n          </td>\n          \n          <td>randomized trial</td>\n          \n          <td>randomized controlled trial.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">CCT\n            \n            <a name="study-type-CCT"> </a>\n          \n          </td>\n          \n          <td>controlled trial (non-randomized)</td>\n          \n          <td>controlled (but not randomized) trial.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">cohort\n            \n            <a name="study-type-cohort"> </a>\n          \n          </td>\n          \n          <td>comparative cohort study</td>\n          \n          <td>observational study comparing cohorts.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">case-control\n            \n            <a name="study-type-case-control"> </a>\n          \n          </td>\n          \n          <td>case-control study</td>\n          \n          <td>case-control study.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">series\n            \n            <a name="study-type-series"> </a>\n          \n          </td>\n          \n          <td>uncontrolled cohort or case series</td>\n          \n          <td>uncontrolled cohort or case series.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">case-report\n            \n            <a name="study-type-case-report"> </a>\n          \n          </td>\n          \n          <td>case report</td>\n          \n          <td>a single case report.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">mixed\n            \n            <a name="study-type-mixed"> </a>\n          \n          </td>\n          \n          <td>mixed methods</td>\n          \n          <td>a combination of 1 or more types of studies.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
      valueInteger: 1,
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/study-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1350",
    },
  ],
  version: "4.3.0",
  name: "StudyType",
  title: "StudyType",
  status: "draft",
  experimental: false,
  date: "2020-12-28T16:55:11+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description: "The type of study the evidence was derived from.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/study-type",
  content: "complete",
  concept: [
    {
      code: "RCT",
      display: "randomized trial",
      definition: "randomized controlled trial.",
    },
    {
      code: "CCT",
      display: "controlled trial (non-randomized)",
      definition: "controlled (but not randomized) trial.",
    },
    {
      code: "cohort",
      display: "comparative cohort study",
      definition: "observational study comparing cohorts.",
    },
    {
      code: "case-control",
      display: "case-control study",
      definition: "case-control study.",
    },
    {
      code: "series",
      display: "uncontrolled cohort or case series",
      definition: "uncontrolled cohort or case series.",
    },
    {
      code: "case-report",
      display: "case report",
      definition: "a single case report.",
    },
    {
      code: "mixed",
      display: "mixed methods",
      definition: "a combination of 1 or more types of studies.",
    },
  ],
};
