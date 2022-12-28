/**
 *
 * http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason
 */
export const MedicationRequestStatusReasonCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "medicationrequest-status-reason",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">altchoice<a name="medicationrequest-status-reason-altchoice"> </a></td><td>Try another treatment first</td><td>This therapy has been ordered as a backup to a preferred therapy. This order will be released when and if the preferred therapy is unsuccessful.</td></tr><tr><td style="white-space:nowrap">clarif<a name="medicationrequest-status-reason-clarif"> </a></td><td>Prescription requires clarification</td><td>Clarification is required before the order can be acted upon.</td></tr><tr><td style="white-space:nowrap">drughigh<a name="medicationrequest-status-reason-drughigh"> </a></td><td>Drug level too high</td><td>The current level of the medication in the patient\'s system is too high. The medication is suspended to allow the level to subside to a safer level.</td></tr><tr><td style="white-space:nowrap">hospadm<a name="medicationrequest-status-reason-hospadm"> </a></td><td>Admission to hospital</td><td>The patient has been admitted to a care facility and their community medications are suspended until hospital discharge.</td></tr><tr><td style="white-space:nowrap">labint<a name="medicationrequest-status-reason-labint"> </a></td><td>Lab interference issues</td><td>The therapy would interfere with a planned lab test and the therapy is being withdrawn until the test is completed.</td></tr><tr><td style="white-space:nowrap">non-avail<a name="medicationrequest-status-reason-non-avail"> </a></td><td>Patient not available</td><td>Patient not available for a period of time due to a scheduled therapy, leave of absence or other reason.</td></tr><tr><td style="white-space:nowrap">preg<a name="medicationrequest-status-reason-preg"> </a></td><td>Parent is pregnant/breast feeding</td><td>The patient is pregnant or breast feeding. The therapy will be resumed when the pregnancy is complete and the patient is no longer breastfeeding.</td></tr><tr><td style="white-space:nowrap">salg<a name="medicationrequest-status-reason-salg"> </a></td><td>Allergy</td><td>The patient is believed to be allergic to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.</td></tr><tr><td style="white-space:nowrap">sddi<a name="medicationrequest-status-reason-sddi"> </a></td><td>Drug interacts with another drug</td><td>The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.</td></tr><tr><td style="white-space:nowrap">sdupther<a name="medicationrequest-status-reason-sdupther"> </a></td><td>Duplicate therapy</td><td>The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.</td></tr><tr><td style="white-space:nowrap">sintol<a name="medicationrequest-status-reason-sintol"> </a></td><td>Suspected intolerance</td><td>The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.</td></tr><tr><td style="white-space:nowrap">surg<a name="medicationrequest-status-reason-surg"> </a></td><td>Patient scheduled for surgery.</td><td>The drug is contraindicated for patients receiving surgery and the patient is scheduled to be admitted for surgery in the near future. The drug will be resumed when the patient has sufficiently recovered from the surgery.</td></tr><tr><td style="white-space:nowrap">washout<a name="medicationrequest-status-reason-washout"> </a></td><td>Waiting for old drug to wash out</td><td>The patient was previously receiving a medication contraindicated with the current medication. The current medication will remain on hold until the prior medication has been cleansed from their system.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "phx",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/medicationrequest-status-reason",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1325",
    },
  ],
  version: "4.3.0",
  name: "MedicationRequest Status Reason Codes",
  status: "draft",
  experimental: false,
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/medicationrequest-status-reason",
  content: "complete",
  concept: [
    {
      code: "altchoice",
      display: "Try another treatment first",
      definition:
        "This therapy has been ordered as a backup to a preferred therapy. This order will be released when and if the preferred therapy is unsuccessful.",
    },
    {
      code: "clarif",
      display: "Prescription requires clarification",
      definition:
        "Clarification is required before the order can be acted upon.",
    },
    {
      code: "drughigh",
      display: "Drug level too high",
      definition:
        "The current level of the medication in the patient's system is too high. The medication is suspended to allow the level to subside to a safer level.",
    },
    {
      code: "hospadm",
      display: "Admission to hospital",
      definition:
        "The patient has been admitted to a care facility and their community medications are suspended until hospital discharge.",
    },
    {
      code: "labint",
      display: "Lab interference issues",
      definition:
        "The therapy would interfere with a planned lab test and the therapy is being withdrawn until the test is completed.",
    },
    {
      code: "non-avail",
      display: "Patient not available",
      definition:
        "Patient not available for a period of time due to a scheduled therapy, leave of absence or other reason.",
    },
    {
      code: "preg",
      display: "Parent is pregnant/breast feeding",
      definition:
        "The patient is pregnant or breast feeding. The therapy will be resumed when the pregnancy is complete and the patient is no longer breastfeeding.",
    },
    {
      code: "salg",
      display: "Allergy",
      definition:
        "The patient is believed to be allergic to a substance that is part of the therapy and the therapy is being temporarily withdrawn to confirm.",
    },
    {
      code: "sddi",
      display: "Drug interacts with another drug",
      definition:
        "The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.",
    },
    {
      code: "sdupther",
      display: "Duplicate therapy",
      definition:
        "The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.",
    },
    {
      code: "sintol",
      display: "Suspected intolerance",
      definition:
        "The drug interacts with a short-term treatment that is more urgently required. This order will be resumed when the short-term treatment is complete.",
    },
    {
      code: "surg",
      display: "Patient scheduled for surgery.",
      definition:
        "The drug is contraindicated for patients receiving surgery and the patient is scheduled to be admitted for surgery in the near future. The drug will be resumed when the patient has sufficiently recovered from the surgery.",
    },
    {
      code: "washout",
      display: "Waiting for old drug to wash out",
      definition:
        "The patient was previously receiving a medication contraindicated with the current medication. The current medication will remain on hold until the prior medication has been cleansed from their system.",
    },
  ],
};
