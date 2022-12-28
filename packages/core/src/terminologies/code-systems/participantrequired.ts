export const ParticipantRequired = {
  resourceType: "CodeSystem",
  id: "participantrequired",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>ParticipantRequired</h2>\n      \n      <div>\n        \n        <p>Is the Participant required to attend the appointment.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/participantrequired defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">required\n            \n            <a name="participantrequired-required"> </a>\n          \n          </td>\n          \n          <td>Required</td>\n          \n          <td>The participant is required to attend the appointment.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">optional\n            \n            <a name="participantrequired-optional"> </a>\n          \n          </td>\n          \n          <td>Optional</td>\n          \n          <td>The participant may optionally attend the appointment.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">information-only\n            \n            <a name="participantrequired-information-only"> </a>\n          \n          </td>\n          \n          <td>Information Only</td>\n          \n          <td>The participant is excluded from the appointment, and might not be informed of the appointment taking place. (Appointment is about them, not for them - such as 2 doctors discussing results about a patient\'s test).</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
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
  url: "http://hl7.org/fhir/participantrequired",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.489",
    },
  ],
  version: "4.3.0",
  name: "ParticipantRequired",
  title: "ParticipantRequired",
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
  description: "Is the Participant required to attend the appointment.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/participantrequired",
  content: "complete",
  concept: [
    {
      code: "required",
      display: "Required",
      definition: "The participant is required to attend the appointment.",
    },
    {
      code: "optional",
      display: "Optional",
      definition: "The participant may optionally attend the appointment.",
    },
    {
      code: "information-only",
      display: "Information Only",
      definition:
        "The participant is excluded from the appointment, and might not be informed of the appointment taking place. (Appointment is about them, not for them - such as 2 doctors discussing results about a patient's test).",
    },
  ],
};
