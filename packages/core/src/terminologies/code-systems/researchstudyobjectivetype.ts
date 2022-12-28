/**
 * Codes for the kind of study objective.
 * http://terminology.hl7.org/CodeSystem/research-study-objective-type
 */
export const ResearchStudyObjectiveTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "research-study-objective-type",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>ResearchStudyObjectiveType</h2>\n      \n      <div>\n        \n        <p>Codes for the kind of study objective.</p>\n\n      \n      </div>\n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/research-study-objective-type defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">primary\n            \n            <a name="research-study-objective-type-primary"> </a>\n          \n          </td>\n          \n          <td>Primary</td>\n          \n          <td>The main question to be answered, and the one that drives any statistical planning for the study—e.g., calculation of the sample size to provide the appropriate power for statistical testing.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">secondary\n            \n            <a name="research-study-objective-type-secondary"> </a>\n          \n          </td>\n          \n          <td>Secondary</td>\n          \n          <td>Question to be answered in the study that is of lesser importance than the primary objective.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">exploratory\n            \n            <a name="research-study-objective-type-exploratory"> </a>\n          \n          </td>\n          \n          <td>Exploratory</td>\n          \n          <td>Exploratory questions to be answered in the study.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "brr",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/research-study-objective-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1248",
    },
  ],
  version: "4.3.0",
  name: "ResearchStudyObjectiveType",
  title: "ResearchStudyObjectiveType",
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
  description: "Codes for the kind of study objective.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/research-study-objective-type",
  content: "complete",
  concept: [
    {
      code: "primary",
      display: "Primary",
      definition:
        "The main question to be answered, and the one that drives any statistical planning for the study—e.g., calculation of the sample size to provide the appropriate power for statistical testing.",
    },
    {
      code: "secondary",
      display: "Secondary",
      definition:
        "Question to be answered in the study that is of lesser importance than the primary objective.",
    },
    {
      code: "exploratory",
      display: "Exploratory",
      definition: "Exploratory questions to be answered in the study.",
    },
  ],
};
