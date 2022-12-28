/**
 * Overall seriousness of this event for the patient.
 * http://terminology.hl7.org/CodeSystem/adverse-event-seriousness
 */
export const AdverseEventSeriousnessCodeSystem = {
  resourceType: "CodeSystem",
  id: "adverse-event-seriousness",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      \n      <h2>AdverseEventSeriousness</h2>\n      \n      \n      <div>\n        \n        \n        <p>Overall seriousness of this event for the patient.</p>\n\n      \n      \n      </div>\n      \n      \n      <p>This code system http://terminology.hl7.org/CodeSystem/adverse-event-seriousness defines the following codes:</p>\n      \n      \n      <table class="codes">\n        \n        \n        <tr>\n          \n          \n          <td>\n            \n            \n            <b>Lvl</b>\n          \n          \n          </td>\n          \n          \n          <td style="white-space:nowrap">\n            \n            \n            <b>Code</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Display</b>\n          \n          \n          </td>\n          \n          \n          <td>\n            \n            \n            <b>Definition</b>\n          \n          \n          </td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">Non-serious\n            \n            \n            <a name="adverse-event-seriousness-Non-serious"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Non-serious</td>\n          \n          \n          <td>Non-serious.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>1</td>\n          \n          \n          <td style="white-space:nowrap">Serious\n            \n            \n            <a name="adverse-event-seriousness-Serious"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Serious</td>\n          \n          \n          <td>Serious.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  SeriousResultsInDeath\n            \n            \n            <a name="adverse-event-seriousness-SeriousResultsInDeath"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Results in death</td>\n          \n          \n          <td>Results in death.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  SeriousIsLifeThreatening\n            \n            \n            <a name="adverse-event-seriousness-SeriousIsLifeThreatening"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Is Life-threatening</td>\n          \n          \n          <td>Is Life-threatening.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  SeriousResultsInHospitalization\n            \n            \n            <a name="adverse-event-seriousness-SeriousResultsInHospitalization"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Requires or prolongs inpatient hospitalization</td>\n          \n          \n          <td>Requires inpatient hospitalization or causes prolongation of existing hospitalization.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  SeriousResultsInDisability\n            \n            \n            <a name="adverse-event-seriousness-SeriousResultsInDisability"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Results in persistent or significant disability/incapacity</td>\n          \n          \n          <td>Results in persistent or significant disability/incapacity.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  SeriousIsBirthDefect\n            \n            \n            <a name="adverse-event-seriousness-SeriousIsBirthDefect"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Is a congenital anomaly/birth defect</td>\n          \n          \n          <td>Is a congenital anomaly/birth defect.</td>\n        \n        \n        </tr>\n        \n        \n        <tr>\n          \n          \n          <td>2</td>\n          \n          \n          <td style="white-space:nowrap">  SeriousRequiresPreventImpairment\n            \n            \n            <a name="adverse-event-seriousness-SeriousRequiresPreventImpairment"> </a>\n          \n          \n          </td>\n          \n          \n          <td>Requires intervention to prevent permanent impairment</td>\n          \n          \n          <td>Requires intervention to prevent permanent impairment or damage (i.e., an important medical event that requires medical judgement).</td>\n        \n        \n        </tr>\n      \n      \n      </table>\n    \n    \n    </div>',
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
  url: "http://terminology.hl7.org/CodeSystem/adverse-event-seriousness",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.1253",
    },
  ],
  version: "4.3.0",
  name: "AdverseEventSeriousness",
  title: "AdverseEventSeriousness",
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
  description: "Overall seriousness of this event for the patient.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/adverse-event-seriousness",
  hierarchyMeaning: "is-a",
  content: "complete",
  concept: [
    { code: "Non-serious", display: "Non-serious", definition: "Non-serious." },
    {
      code: "Serious",
      display: "Serious",
      definition: "Serious.",
      concept: [
        {
          code: "SeriousResultsInDeath",
          display: "Results in death",
          definition: "Results in death.",
        },
        {
          code: "SeriousIsLifeThreatening",
          display: "Is Life-threatening",
          definition: "Is Life-threatening.",
        },
        {
          code: "SeriousResultsInHospitalization",
          display: "Requires or prolongs inpatient hospitalization",
          definition:
            "Requires inpatient hospitalization or causes prolongation of existing hospitalization.",
        },
        {
          code: "SeriousResultsInDisability",
          display: "Results in persistent or significant disability/incapacity",
          definition:
            "Results in persistent or significant disability/incapacity.",
        },
        {
          code: "SeriousIsBirthDefect",
          display: "Is a congenital anomaly/birth defect",
          definition: "Is a congenital anomaly/birth defect.",
        },
        {
          code: "SeriousRequiresPreventImpairment",
          display: "Requires intervention to prevent permanent impairment",
          definition:
            "Requires intervention to prevent permanent impairment or damage (i.e., an important medical event that requires medical judgement).",
        },
      ],
    },
  ],
};
