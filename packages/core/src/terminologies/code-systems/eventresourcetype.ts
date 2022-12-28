export const EventResourceType = {
  resourceType: "CodeSystem",
  id: "event-resource-types",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/event-resource-types defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">ChargeItem<a name="event-resource-types-ChargeItem"> </a></td><td>ChargeItem</td><td>Item containing charge code(s) associated with the provision of healthcare provider products.</td></tr><tr><td style="white-space:nowrap">ClaimResponse<a name="event-resource-types-ClaimResponse"> </a></td><td>ClaimResponse</td><td>Remittance resource.</td></tr><tr><td style="white-space:nowrap">ClinicalImpression<a name="event-resource-types-ClinicalImpression"> </a></td><td>ClinicalImpression</td><td>A clinical assessment performed when planning treatments and management strategies for a patient.</td></tr><tr><td style="white-space:nowrap">Communication<a name="event-resource-types-Communication"> </a></td><td>Communication</td><td>A record of information transmitted from a sender to a receiver.</td></tr><tr><td style="white-space:nowrap">Composition<a name="event-resource-types-Composition"> </a></td><td>Composition</td><td>A set of resources composed into a single coherent clinical statement with clinical attestation.</td></tr><tr><td style="white-space:nowrap">Condition<a name="event-resource-types-Condition"> </a></td><td>Condition</td><td>Detailed information about conditions, problems or diagnoses.</td></tr><tr><td style="white-space:nowrap">Consent<a name="event-resource-types-Consent"> </a></td><td>Consent</td><td>A healthcare consumer\'s policy choices to permits or denies recipients or roles to perform actions for specific purposes and periods of time.</td></tr><tr><td style="white-space:nowrap">Coverage<a name="event-resource-types-Coverage"> </a></td><td>Coverage</td><td>Insurance or medical plan or a payment agreement.</td></tr><tr><td style="white-space:nowrap">DeviceUseStatement<a name="event-resource-types-DeviceUseStatement"> </a></td><td>DeviceUseStatement</td><td>Record of use of a device.</td></tr><tr><td style="white-space:nowrap">DiagnosticReport<a name="event-resource-types-DiagnosticReport"> </a></td><td>DiagnosticReport</td><td>A Diagnostic report - a combination of request information, atomic results, images, interpretation, as well as formatted reports.</td></tr><tr><td style="white-space:nowrap">DocumentManifest<a name="event-resource-types-DocumentManifest"> </a></td><td>DocumentManifest</td><td>A list that defines a set of documents.</td></tr><tr><td style="white-space:nowrap">DocumentReference<a name="event-resource-types-DocumentReference"> </a></td><td>DocumentReference</td><td>A reference to a document.</td></tr><tr><td style="white-space:nowrap">Encounter<a name="event-resource-types-Encounter"> </a></td><td>Encounter</td><td>An interaction during which services are provided to the patient.</td></tr><tr><td style="white-space:nowrap">EnrollmentResponse<a name="event-resource-types-EnrollmentResponse"> </a></td><td>EnrollmentResponse</td><td>EnrollmentResponse resource.</td></tr><tr><td style="white-space:nowrap">EpisodeOfCare<a name="event-resource-types-EpisodeOfCare"> </a></td><td>EpisodeOfCare</td><td>An association of a Patient with an Organization and  Healthcare Provider(s) for a period of time that the Organization assumes some level of responsibility.</td></tr><tr><td style="white-space:nowrap">ExplanationOfBenefit<a name="event-resource-types-ExplanationOfBenefit"> </a></td><td>ExplanationOfBenefit</td><td>Explanation of Benefit resource.</td></tr><tr><td style="white-space:nowrap">FamilyMemberHistory<a name="event-resource-types-FamilyMemberHistory"> </a></td><td>FamilyMemberHistory</td><td>Information about patient\'s relatives, relevant for patient.</td></tr><tr><td style="white-space:nowrap">GuidanceResponse<a name="event-resource-types-GuidanceResponse"> </a></td><td>GuidanceResponse</td><td>The formal response to a guidance request.</td></tr><tr><td style="white-space:nowrap">ImagingStudy<a name="event-resource-types-ImagingStudy"> </a></td><td>ImagingStudy</td><td>A set of images produced in single study (one or more series of references images).</td></tr><tr><td style="white-space:nowrap">Immunization<a name="event-resource-types-Immunization"> </a></td><td>Immunization</td><td>Immunization event information.</td></tr><tr><td style="white-space:nowrap">MeasureReport<a name="event-resource-types-MeasureReport"> </a></td><td>MeasureReport</td><td>Results of a measure evaluation.</td></tr><tr><td style="white-space:nowrap">Media<a name="event-resource-types-Media"> </a></td><td>Media</td><td>A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.</td></tr><tr><td style="white-space:nowrap">MedicationAdministration<a name="event-resource-types-MedicationAdministration"> </a></td><td>MedicationAdministration</td><td>Administration of medication to a patient.</td></tr><tr><td style="white-space:nowrap">MedicationDispense<a name="event-resource-types-MedicationDispense"> </a></td><td>MedicationDispense</td><td>Dispensing a medication to a named patient.</td></tr><tr><td style="white-space:nowrap">MedicationStatement<a name="event-resource-types-MedicationStatement"> </a></td><td>MedicationStatement</td><td>Record of medication being taken by a patient.</td></tr><tr><td style="white-space:nowrap">Observation<a name="event-resource-types-Observation"> </a></td><td>Observation</td><td>Measurements and simple assertions.</td></tr><tr><td style="white-space:nowrap">PaymentNotice<a name="event-resource-types-PaymentNotice"> </a></td><td>PaymentNotice</td><td>PaymentNotice request.</td></tr><tr><td style="white-space:nowrap">PaymentReconciliation<a name="event-resource-types-PaymentReconciliation"> </a></td><td>PaymentReconciliation</td><td>PaymentReconciliation resource.</td></tr><tr><td style="white-space:nowrap">Procedure<a name="event-resource-types-Procedure"> </a></td><td>Procedure</td><td>An action that is being or was performed on a patient.</td></tr><tr><td style="white-space:nowrap">ProcessResponse<a name="event-resource-types-ProcessResponse"> </a></td><td>ProcessResponse</td><td>ProcessResponse resource.</td></tr><tr><td style="white-space:nowrap">QuestionnaireResponse<a name="event-resource-types-QuestionnaireResponse"> </a></td><td>QuestionnaireResponse</td><td>A structured set of questions and their answers.</td></tr><tr><td style="white-space:nowrap">RiskAssessment<a name="event-resource-types-RiskAssessment"> </a></td><td>RiskAssessment</td><td>Potential outcomes for a subject with likelihood.</td></tr><tr><td style="white-space:nowrap">SupplyDelivery<a name="event-resource-types-SupplyDelivery"> </a></td><td>SupplyDelivery</td><td>Delivery of bulk Supplies.</td></tr><tr><td style="white-space:nowrap">Task<a name="event-resource-types-Task"> </a></td><td>Task</td><td>A task to be performed.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "vocab",
    },
  ],
  url: "http://hl7.org/fhir/event-resource-types",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1061",
    },
  ],
  version: "4.3.0",
  name: "EventResourceType",
  title: "EventResourceType",
  status: "draft",
  experimental: false,
  date: "2022-05-28T12:47:40+10:00",
  description:
    "A list of all the event resource types defined in this version of the FHIR specification.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/event-resource-types",
  content: "complete",
  concept: [
    {
      code: "ChargeItem",
      display: "ChargeItem",
      definition:
        "Item containing charge code(s) associated with the provision of healthcare provider products.",
    },
    {
      code: "ClaimResponse",
      display: "ClaimResponse",
      definition: "Remittance resource.",
    },
    {
      code: "ClinicalImpression",
      display: "ClinicalImpression",
      definition:
        "A clinical assessment performed when planning treatments and management strategies for a patient.",
    },
    {
      code: "Communication",
      display: "Communication",
      definition:
        "A record of information transmitted from a sender to a receiver.",
    },
    {
      code: "Composition",
      display: "Composition",
      definition:
        "A set of resources composed into a single coherent clinical statement with clinical attestation.",
    },
    {
      code: "Condition",
      display: "Condition",
      definition:
        "Detailed information about conditions, problems or diagnoses.",
    },
    {
      code: "Consent",
      display: "Consent",
      definition:
        "A healthcare consumer's policy choices to permits or denies recipients or roles to perform actions for specific purposes and periods of time.",
    },
    {
      code: "Coverage",
      display: "Coverage",
      definition: "Insurance or medical plan or a payment agreement.",
    },
    {
      code: "DeviceUseStatement",
      display: "DeviceUseStatement",
      definition: "Record of use of a device.",
    },
    {
      code: "DiagnosticReport",
      display: "DiagnosticReport",
      definition:
        "A Diagnostic report - a combination of request information, atomic results, images, interpretation, as well as formatted reports.",
    },
    {
      code: "DocumentManifest",
      display: "DocumentManifest",
      definition: "A list that defines a set of documents.",
    },
    {
      code: "DocumentReference",
      display: "DocumentReference",
      definition: "A reference to a document.",
    },
    {
      code: "Encounter",
      display: "Encounter",
      definition:
        "An interaction during which services are provided to the patient.",
    },
    {
      code: "EnrollmentResponse",
      display: "EnrollmentResponse",
      definition: "EnrollmentResponse resource.",
    },
    {
      code: "EpisodeOfCare",
      display: "EpisodeOfCare",
      definition:
        "An association of a Patient with an Organization and  Healthcare Provider(s) for a period of time that the Organization assumes some level of responsibility.",
    },
    {
      code: "ExplanationOfBenefit",
      display: "ExplanationOfBenefit",
      definition: "Explanation of Benefit resource.",
    },
    {
      code: "FamilyMemberHistory",
      display: "FamilyMemberHistory",
      definition:
        "Information about patient's relatives, relevant for patient.",
    },
    {
      code: "GuidanceResponse",
      display: "GuidanceResponse",
      definition: "The formal response to a guidance request.",
    },
    {
      code: "ImagingStudy",
      display: "ImagingStudy",
      definition:
        "A set of images produced in single study (one or more series of references images).",
    },
    {
      code: "Immunization",
      display: "Immunization",
      definition: "Immunization event information.",
    },
    {
      code: "MeasureReport",
      display: "MeasureReport",
      definition: "Results of a measure evaluation.",
    },
    {
      code: "Media",
      display: "Media",
      definition:
        "A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.",
    },
    {
      code: "MedicationAdministration",
      display: "MedicationAdministration",
      definition: "Administration of medication to a patient.",
    },
    {
      code: "MedicationDispense",
      display: "MedicationDispense",
      definition: "Dispensing a medication to a named patient.",
    },
    {
      code: "MedicationStatement",
      display: "MedicationStatement",
      definition: "Record of medication being taken by a patient.",
    },
    {
      code: "Observation",
      display: "Observation",
      definition: "Measurements and simple assertions.",
    },
    {
      code: "PaymentNotice",
      display: "PaymentNotice",
      definition: "PaymentNotice request.",
    },
    {
      code: "PaymentReconciliation",
      display: "PaymentReconciliation",
      definition: "PaymentReconciliation resource.",
    },
    {
      code: "Procedure",
      display: "Procedure",
      definition: "An action that is being or was performed on a patient.",
    },
    {
      code: "ProcessResponse",
      display: "ProcessResponse",
      definition: "ProcessResponse resource.",
    },
    {
      code: "QuestionnaireResponse",
      display: "QuestionnaireResponse",
      definition: "A structured set of questions and their answers.",
    },
    {
      code: "RiskAssessment",
      display: "RiskAssessment",
      definition: "Potential outcomes for a subject with likelihood.",
    },
    {
      code: "SupplyDelivery",
      display: "SupplyDelivery",
      definition: "Delivery of bulk Supplies.",
    },
    { code: "Task", display: "Task", definition: "A task to be performed." },
  ],
};
