export const AppointmentStatus = {
  resourceType: "CodeSystem",
  id: "appointmentstatus",
  meta: {
    lastUpdated: "2022-05-28T13:47:40.239+11:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      \n      <h2>AppointmentStatus</h2>\n      \n      <div>\n        \n        <p>The free/busy status of an appointment.</p>\n\n      \n      </div>\n      \n      <p>This code system http://hl7.org/fhir/appointmentstatus defines the following codes:</p>\n      \n      <table class="codes">\n        \n        <tr>\n          \n          <td style="white-space:nowrap">\n            \n            <b>Code</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Display</b>\n          \n          </td>\n          \n          <td>\n            \n            <b>Definition</b>\n          \n          </td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">proposed\n            \n            <a name="appointmentstatus-proposed"> </a>\n          \n          </td>\n          \n          <td>Proposed</td>\n          \n          <td>None of the participant(s) have finalized their acceptance of the appointment request, and the start/end time might not be set yet.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">pending\n            \n            <a name="appointmentstatus-pending"> </a>\n          \n          </td>\n          \n          <td>Pending</td>\n          \n          <td>Some or all of the participant(s) have not finalized their acceptance of the appointment request.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">booked\n            \n            <a name="appointmentstatus-booked"> </a>\n          \n          </td>\n          \n          <td>Booked</td>\n          \n          <td>All participant(s) have been considered and the appointment is confirmed to go ahead at the date/times specified.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">arrived\n            \n            <a name="appointmentstatus-arrived"> </a>\n          \n          </td>\n          \n          <td>Arrived</td>\n          \n          <td>The patient/patients has/have arrived and is/are waiting to be seen.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">fulfilled\n            \n            <a name="appointmentstatus-fulfilled"> </a>\n          \n          </td>\n          \n          <td>Fulfilled</td>\n          \n          <td>The planning stages of the appointment are now complete, the encounter resource will exist and will track further status changes. Note that an encounter may exist before the appointment status is fulfilled for many reasons.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">cancelled\n            \n            <a name="appointmentstatus-cancelled"> </a>\n          \n          </td>\n          \n          <td>Cancelled</td>\n          \n          <td>The appointment has been cancelled.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">noshow\n            \n            <a name="appointmentstatus-noshow"> </a>\n          \n          </td>\n          \n          <td>No Show</td>\n          \n          <td>Some or all of the participant(s) have not/did not appear for the appointment (usually the patient).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">entered-in-error\n            \n            <a name="appointmentstatus-entered-in-error"> </a>\n          \n          </td>\n          \n          <td>Entered in error</td>\n          \n          <td>This instance should not have been part of this patient\'s medical record.</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">checked-in\n            \n            <a name="appointmentstatus-checked-in"> </a>\n          \n          </td>\n          \n          <td>Checked In</td>\n          \n          <td>When checked in, all pre-encounter administrative work is complete, and the encounter may begin. (where multiple patients are involved, they are all present).</td>\n        \n        </tr>\n        \n        <tr>\n          \n          <td style="white-space:nowrap">waitlist\n            \n            <a name="appointmentstatus-waitlist"> </a>\n          \n          </td>\n          \n          <td>Waitlisted</td>\n          \n          <td>The appointment has been placed on a waitlist, to be scheduled/confirmed in the future when a slot/service is available.\nA specific time might or might not be pre-allocated.</td>\n        \n        </tr>\n      \n      </table>\n    \n    </div>',
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
  url: "http://hl7.org/fhir/appointmentstatus",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.4.485",
    },
  ],
  version: "4.3.0",
  name: "AppointmentStatus",
  title: "AppointmentStatus",
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
  description: "The free/busy status of an appointment.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/appointmentstatus",
  content: "complete",
  concept: [
    {
      code: "proposed",
      display: "Proposed",
      definition:
        "None of the participant(s) have finalized their acceptance of the appointment request, and the start/end time might not be set yet.",
    },
    {
      code: "pending",
      display: "Pending",
      definition:
        "Some or all of the participant(s) have not finalized their acceptance of the appointment request.",
    },
    {
      code: "booked",
      display: "Booked",
      definition:
        "All participant(s) have been considered and the appointment is confirmed to go ahead at the date/times specified.",
    },
    {
      code: "arrived",
      display: "Arrived",
      definition:
        "The patient/patients has/have arrived and is/are waiting to be seen.",
    },
    {
      code: "fulfilled",
      display: "Fulfilled",
      definition:
        "The planning stages of the appointment are now complete, the encounter resource will exist and will track further status changes. Note that an encounter may exist before the appointment status is fulfilled for many reasons.",
    },
    {
      code: "cancelled",
      display: "Cancelled",
      definition: "The appointment has been cancelled.",
    },
    {
      code: "noshow",
      display: "No Show",
      definition:
        "Some or all of the participant(s) have not/did not appear for the appointment (usually the patient).",
    },
    {
      code: "entered-in-error",
      display: "Entered in error",
      definition:
        "This instance should not have been part of this patient's medical record.",
    },
    {
      code: "checked-in",
      display: "Checked In",
      definition:
        "When checked in, all pre-encounter administrative work is complete, and the encounter may begin. (where multiple patients are involved, they are all present).",
    },
    {
      code: "waitlist",
      display: "Waitlisted",
      definition:
        "The appointment has been placed on a waitlist, to be scheduled/confirmed in the future when a slot/service is available.\nA specific time might or might not be pre-allocated.",
    },
  ],
};
