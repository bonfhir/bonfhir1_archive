/**
 * The type of measure (includes codes from 2.16.840.1.113883.1.11.20368).
 * http://terminology.hl7.org/CodeSystem/measure-type
 */
export const MeasureTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "measure-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/measure-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">process\n            \n            <a name="measure-type-process"> </a>\n          \n          </td>\n          \n          <td>Process</td>\n          \n          <td>A measure which focuses on a process which leads to a certain outcome, meaning that a scientific basis exists for believing that the process, when executed well, will increase the probability of achieving a desired outcome.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">outcome\n            \n            <a name="measure-type-outcome"> </a>\n          \n          </td>\n          \n          <td>Outcome</td>\n          \n          <td>A measure that indicates the result of the performance (or non-performance) of a function or process.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">structure\n            \n            <a name="measure-type-structure"> </a>\n          \n          </td>\n          \n          <td>Structure</td>\n          \n          <td>A measure that focuses on a health care provider\'s capacity, systems, and processes to provide high-quality care.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">patient-reported-outcome\n            \n            <a name="measure-type-patient-reported-outcome"> </a>\n          \n          </td>\n          \n          <td>Patient Reported Outcome</td>\n          \n          <td>A measure that focuses on patient-reported information such as patient engagement or patient experience measures.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">composite\n            \n            <a name="measure-type-composite"> </a>\n          \n          </td>\n          \n          <td>Composite</td>\n          \n          <td>A measure that combines multiple component measures in to a single quality measure.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://terminology.hl7.org/CodeSystem/measure-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1233",
    },
  ],
  version: "4.3.0",
  name: "MeasureType",
  title: "MeasureType",
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
  description:
    "The type of measure (includes codes from 2.16.840.1.113883.1.11.20368).",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/measure-type",
  content: "complete",
  concept: [
    {
      code: "process",
      display: "Process",
      definition:
        "A measure which focuses on a process which leads to a certain outcome, meaning that a scientific basis exists for believing that the process, when executed well, will increase the probability of achieving a desired outcome.",
    },
    {
      code: "outcome",
      display: "Outcome",
      definition:
        "A measure that indicates the result of the performance (or non-performance) of a function or process.",
    },
    {
      code: "structure",
      display: "Structure",
      definition:
        "A measure that focuses on a health care provider's capacity, systems, and processes to provide high-quality care.",
    },
    {
      code: "patient-reported-outcome",
      display: "Patient Reported Outcome",
      definition:
        "A measure that focuses on patient-reported information such as patient engagement or patient experience measures.",
    },
    {
      code: "composite",
      display: "Composite",
      definition:
        "A measure that combines multiple component measures in to a single quality measure.",
    },
  ],
};
