export const RequestResourceType = {
  resourceType: "CodeSystem",
  id: "request-resource-types",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/request-resource-types defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">Appointment<a name="request-resource-types-Appointment"> </a></td><td>Appointment</td><td>A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).</td></tr><tr><td style="white-space:nowrap">AppointmentResponse<a name="request-resource-types-AppointmentResponse"> </a></td><td>AppointmentResponse</td><td>A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.</td></tr><tr><td style="white-space:nowrap">CarePlan<a name="request-resource-types-CarePlan"> </a></td><td>CarePlan</td><td>Healthcare plan for patient or group.</td></tr><tr><td style="white-space:nowrap">Claim<a name="request-resource-types-Claim"> </a></td><td>Claim</td><td>Claim, Pre-determination or Pre-authorization.</td></tr><tr><td style="white-space:nowrap">CommunicationRequest<a name="request-resource-types-CommunicationRequest"> </a></td><td>CommunicationRequest</td><td>A request for information to be sent to a receiver.</td></tr><tr><td style="white-space:nowrap">Contract<a name="request-resource-types-Contract"> </a></td><td>Contract</td><td>Legal Agreement.</td></tr><tr><td style="white-space:nowrap">DeviceRequest<a name="request-resource-types-DeviceRequest"> </a></td><td>DeviceRequest</td><td>Medical device request.</td></tr><tr><td style="white-space:nowrap">EnrollmentRequest<a name="request-resource-types-EnrollmentRequest"> </a></td><td>EnrollmentRequest</td><td>Enrollment request.</td></tr><tr><td style="white-space:nowrap">ImmunizationRecommendation<a name="request-resource-types-ImmunizationRecommendation"> </a></td><td>ImmunizationRecommendation</td><td>Guidance or advice relating to an immunization.</td></tr><tr><td style="white-space:nowrap">MedicationRequest<a name="request-resource-types-MedicationRequest"> </a></td><td>MedicationRequest</td><td>Ordering of medication for patient or group.</td></tr><tr><td style="white-space:nowrap">NutritionOrder<a name="request-resource-types-NutritionOrder"> </a></td><td>NutritionOrder</td><td>Diet, formula or nutritional supplement request.</td></tr><tr><td style="white-space:nowrap">ServiceRequest<a name="request-resource-types-ServiceRequest"> </a></td><td>ServiceRequest</td><td>A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.</td></tr><tr><td style="white-space:nowrap">SupplyRequest<a name="request-resource-types-SupplyRequest"> </a></td><td>SupplyRequest</td><td>Request for a medication, substance or device.</td></tr><tr><td style="white-space:nowrap">Task<a name="request-resource-types-Task"> </a></td><td>Task</td><td>A task to be performed.</td></tr><tr><td style="white-space:nowrap">VisionPrescription<a name="request-resource-types-VisionPrescription"> </a></td><td>VisionPrescription</td><td>Prescription for vision correction products for a patient.</td></tr></table></div>',
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
      valueInteger: 3,
    },
  ],
  url: "http://hl7.org/fhir/request-resource-types",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1059",
    },
  ],
  version: "4.3.0",
  name: "RequestResourceType",
  title: "RequestResourceType",
  status: "draft",
  experimental: false,
  date: "2022-05-28T12:47:40+10:00",
  description:
    "A list of all the request resource types defined in this version of the FHIR specification.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/request-resource-types",
  content: "complete",
  concept: [
    {
      code: "Appointment",
      display: "Appointment",
      definition:
        "A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).",
    },
    {
      code: "AppointmentResponse",
      display: "AppointmentResponse",
      definition:
        "A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.",
    },
    {
      code: "CarePlan",
      display: "CarePlan",
      definition: "Healthcare plan for patient or group.",
    },
    {
      code: "Claim",
      display: "Claim",
      definition: "Claim, Pre-determination or Pre-authorization.",
    },
    {
      code: "CommunicationRequest",
      display: "CommunicationRequest",
      definition: "A request for information to be sent to a receiver.",
    },
    { code: "Contract", display: "Contract", definition: "Legal Agreement." },
    {
      code: "DeviceRequest",
      display: "DeviceRequest",
      definition: "Medical device request.",
    },
    {
      code: "EnrollmentRequest",
      display: "EnrollmentRequest",
      definition: "Enrollment request.",
    },
    {
      code: "ImmunizationRecommendation",
      display: "ImmunizationRecommendation",
      definition: "Guidance or advice relating to an immunization.",
    },
    {
      code: "MedicationRequest",
      display: "MedicationRequest",
      definition: "Ordering of medication for patient or group.",
    },
    {
      code: "NutritionOrder",
      display: "NutritionOrder",
      definition: "Diet, formula or nutritional supplement request.",
    },
    {
      code: "ServiceRequest",
      display: "ServiceRequest",
      definition:
        "A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.",
    },
    {
      code: "SupplyRequest",
      display: "SupplyRequest",
      definition: "Request for a medication, substance or device.",
    },
    { code: "Task", display: "Task", definition: "A task to be performed." },
    {
      code: "VisionPrescription",
      display: "VisionPrescription",
      definition: "Prescription for vision correction products for a patient.",
    },
  ],
};
