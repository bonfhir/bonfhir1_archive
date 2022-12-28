/**
 * One of the resource types defined as part of this version of FHIR.
 * http://hl7.org/fhir/resource-types
 */
export const ResourceTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "resource-types",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/resource-types defines the following codes:</p><table class="codes"><tr><td><b>Lvl</b></td><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td>1</td><td style="white-space:nowrap">Resource<a name="resource-types-Resource"> </a></td><td>Resource</td><td>--- Abstract Type! ---This is the base resource type for everything.</td></tr><tr><td>2</td><td style="white-space:nowrap">  Binary<a name="resource-types-Binary"> </a></td><td>Binary</td><td>A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.</td></tr><tr><td>2</td><td style="white-space:nowrap">  Bundle<a name="resource-types-Bundle"> </a></td><td>Bundle</td><td>A container for a collection of resources.</td></tr><tr><td>2</td><td style="white-space:nowrap">  DomainResource<a name="resource-types-DomainResource"> </a></td><td>DomainResource</td><td>--- Abstract Type! ---A resource that includes narrative, extensions, and contained resources.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Account<a name="resource-types-Account"> </a></td><td>Account</td><td>A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ActivityDefinition<a name="resource-types-ActivityDefinition"> </a></td><td>ActivityDefinition</td><td>This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.</td></tr><tr><td>3</td><td style="white-space:nowrap">    AdministrableProductDefinition<a name="resource-types-AdministrableProductDefinition"> </a></td><td>AdministrableProductDefinition</td><td>A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed).</td></tr><tr><td>3</td><td style="white-space:nowrap">    AdverseEvent<a name="resource-types-AdverseEvent"> </a></td><td>AdverseEvent</td><td>Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.</td></tr><tr><td>3</td><td style="white-space:nowrap">    AllergyIntolerance<a name="resource-types-AllergyIntolerance"> </a></td><td>AllergyIntolerance</td><td>Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Appointment<a name="resource-types-Appointment"> </a></td><td>Appointment</td><td>A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).</td></tr><tr><td>3</td><td style="white-space:nowrap">    AppointmentResponse<a name="resource-types-AppointmentResponse"> </a></td><td>AppointmentResponse</td><td>A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.</td></tr><tr><td>3</td><td style="white-space:nowrap">    AuditEvent<a name="resource-types-AuditEvent"> </a></td><td>AuditEvent</td><td>A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Basic<a name="resource-types-Basic"> </a></td><td>Basic</td><td>Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don\'t map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.</td></tr><tr><td>3</td><td style="white-space:nowrap">    BiologicallyDerivedProduct<a name="resource-types-BiologicallyDerivedProduct"> </a></td><td>BiologicallyDerivedProduct</td><td>A material substance originating from a biological entity intended to be transplanted or infused\ninto another (possibly the same) biological entity.</td></tr><tr><td>3</td><td style="white-space:nowrap">    BodyStructure<a name="resource-types-BodyStructure"> </a></td><td>BodyStructure</td><td>Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.</td></tr><tr><td>3</td><td style="white-space:nowrap">    CapabilityStatement<a name="resource-types-CapabilityStatement"> </a></td><td>CapabilityStatement</td><td>A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.</td></tr><tr><td>3</td><td style="white-space:nowrap">    CarePlan<a name="resource-types-CarePlan"> </a></td><td>CarePlan</td><td>Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.</td></tr><tr><td>3</td><td style="white-space:nowrap">    CareTeam<a name="resource-types-CareTeam"> </a></td><td>CareTeam</td><td>The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.</td></tr><tr><td>3</td><td style="white-space:nowrap">    CatalogEntry<a name="resource-types-CatalogEntry"> </a></td><td>CatalogEntry</td><td>Catalog entries are wrappers that contextualize items included in a catalog.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ChargeItem<a name="resource-types-ChargeItem"> </a></td><td>ChargeItem</td><td>The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ChargeItemDefinition<a name="resource-types-ChargeItemDefinition"> </a></td><td>ChargeItemDefinition</td><td>The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Citation<a name="resource-types-Citation"> </a></td><td>Citation</td><td>The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Claim<a name="resource-types-Claim"> </a></td><td>Claim</td><td>A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ClaimResponse<a name="resource-types-ClaimResponse"> </a></td><td>ClaimResponse</td><td>This resource provides the adjudication details from the processing of a Claim resource.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ClinicalImpression<a name="resource-types-ClinicalImpression"> </a></td><td>ClinicalImpression</td><td>A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient\'s condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called &quot;ClinicalImpression&quot; rather than &quot;ClinicalAssessment&quot; to avoid confusion with the recording of assessment tools such as Apgar score.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ClinicalUseDefinition<a name="resource-types-ClinicalUseDefinition"> </a></td><td>ClinicalUseDefinition</td><td>A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure.</td></tr><tr><td>3</td><td style="white-space:nowrap">    CodeSystem<a name="resource-types-CodeSystem"> </a></td><td>CodeSystem</td><td>The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Communication<a name="resource-types-Communication"> </a></td><td>Communication</td><td>An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.</td></tr><tr><td>3</td><td style="white-space:nowrap">    CommunicationRequest<a name="resource-types-CommunicationRequest"> </a></td><td>CommunicationRequest</td><td>A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.</td></tr><tr><td>3</td><td style="white-space:nowrap">    CompartmentDefinition<a name="resource-types-CompartmentDefinition"> </a></td><td>CompartmentDefinition</td><td>A compartment definition that defines how resources are accessed on a server.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Composition<a name="resource-types-Composition"> </a></td><td>Composition</td><td>A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).</td></tr><tr><td>3</td><td style="white-space:nowrap">    ConceptMap<a name="resource-types-ConceptMap"> </a></td><td>ConceptMap</td><td>A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Condition<a name="resource-types-Condition"> </a></td><td>Condition</td><td>A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Consent<a name="resource-types-Consent"> </a></td><td>Consent</td><td>A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Contract<a name="resource-types-Contract"> </a></td><td>Contract</td><td>Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Coverage<a name="resource-types-Coverage"> </a></td><td>Coverage</td><td>Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.</td></tr><tr><td>3</td><td style="white-space:nowrap">    CoverageEligibilityRequest<a name="resource-types-CoverageEligibilityRequest"> </a></td><td>CoverageEligibilityRequest</td><td>The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.</td></tr><tr><td>3</td><td style="white-space:nowrap">    CoverageEligibilityResponse<a name="resource-types-CoverageEligibilityResponse"> </a></td><td>CoverageEligibilityResponse</td><td>This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.</td></tr><tr><td>3</td><td style="white-space:nowrap">    DetectedIssue<a name="resource-types-DetectedIssue"> </a></td><td>DetectedIssue</td><td>Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Device<a name="resource-types-Device"> </a></td><td>Device</td><td>A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.</td></tr><tr><td>3</td><td style="white-space:nowrap">    DeviceDefinition<a name="resource-types-DeviceDefinition"> </a></td><td>DeviceDefinition</td><td>The characteristics, operational status and capabilities of a medical-related component of a medical device.</td></tr><tr><td>3</td><td style="white-space:nowrap">    DeviceMetric<a name="resource-types-DeviceMetric"> </a></td><td>DeviceMetric</td><td>Describes a measurement, calculation or setting capability of a medical device.</td></tr><tr><td>3</td><td style="white-space:nowrap">    DeviceRequest<a name="resource-types-DeviceRequest"> </a></td><td>DeviceRequest</td><td>Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.</td></tr><tr><td>3</td><td style="white-space:nowrap">    DeviceUseStatement<a name="resource-types-DeviceUseStatement"> </a></td><td>DeviceUseStatement</td><td>A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.</td></tr><tr><td>3</td><td style="white-space:nowrap">    DiagnosticReport<a name="resource-types-DiagnosticReport"> </a></td><td>DiagnosticReport</td><td>The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.</td></tr><tr><td>3</td><td style="white-space:nowrap">    DocumentManifest<a name="resource-types-DocumentManifest"> </a></td><td>DocumentManifest</td><td>A collection of documents compiled for a purpose together with metadata that applies to the collection.</td></tr><tr><td>3</td><td style="white-space:nowrap">    DocumentReference<a name="resource-types-DocumentReference"> </a></td><td>DocumentReference</td><td>A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Encounter<a name="resource-types-Encounter"> </a></td><td>Encounter</td><td>An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Endpoint<a name="resource-types-Endpoint"> </a></td><td>Endpoint</td><td>The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.</td></tr><tr><td>3</td><td style="white-space:nowrap">    EnrollmentRequest<a name="resource-types-EnrollmentRequest"> </a></td><td>EnrollmentRequest</td><td>This resource provides the insurance enrollment details to the insurer regarding a specified coverage.</td></tr><tr><td>3</td><td style="white-space:nowrap">    EnrollmentResponse<a name="resource-types-EnrollmentResponse"> </a></td><td>EnrollmentResponse</td><td>This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.</td></tr><tr><td>3</td><td style="white-space:nowrap">    EpisodeOfCare<a name="resource-types-EpisodeOfCare"> </a></td><td>EpisodeOfCare</td><td>An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.</td></tr><tr><td>3</td><td style="white-space:nowrap">    EventDefinition<a name="resource-types-EventDefinition"> </a></td><td>EventDefinition</td><td>The EventDefinition resource provides a reusable description of when a particular event can occur.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Evidence<a name="resource-types-Evidence"> </a></td><td>Evidence</td><td>The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (eg population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence.</td></tr><tr><td>3</td><td style="white-space:nowrap">    EvidenceReport<a name="resource-types-EvidenceReport"> </a></td><td>EvidenceReport</td><td>The EvidenceReport Resource is a specialized container for a collection of resources and codable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts.</td></tr><tr><td>3</td><td style="white-space:nowrap">    EvidenceVariable<a name="resource-types-EvidenceVariable"> </a></td><td>EvidenceVariable</td><td>The EvidenceVariable resource describes an element that knowledge (Evidence) is about.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ExampleScenario<a name="resource-types-ExampleScenario"> </a></td><td>ExampleScenario</td><td>Example of workflow instance.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ExplanationOfBenefit<a name="resource-types-ExplanationOfBenefit"> </a></td><td>ExplanationOfBenefit</td><td>This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.</td></tr><tr><td>3</td><td style="white-space:nowrap">    FamilyMemberHistory<a name="resource-types-FamilyMemberHistory"> </a></td><td>FamilyMemberHistory</td><td>Significant health conditions for a person related to the patient relevant in the context of care for the patient.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Flag<a name="resource-types-Flag"> </a></td><td>Flag</td><td>Prospective warnings of potential issues when providing care to the patient.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Goal<a name="resource-types-Goal"> </a></td><td>Goal</td><td>Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.</td></tr><tr><td>3</td><td style="white-space:nowrap">    GraphDefinition<a name="resource-types-GraphDefinition"> </a></td><td>GraphDefinition</td><td>A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Group<a name="resource-types-Group"> </a></td><td>Group</td><td>Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn\'t an Organization.</td></tr><tr><td>3</td><td style="white-space:nowrap">    GuidanceResponse<a name="resource-types-GuidanceResponse"> </a></td><td>GuidanceResponse</td><td>A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.</td></tr><tr><td>3</td><td style="white-space:nowrap">    HealthcareService<a name="resource-types-HealthcareService"> </a></td><td>HealthcareService</td><td>The details of a healthcare service available at a location.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ImagingStudy<a name="resource-types-ImagingStudy"> </a></td><td>ImagingStudy</td><td>Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Immunization<a name="resource-types-Immunization"> </a></td><td>Immunization</td><td>Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ImmunizationEvaluation<a name="resource-types-ImmunizationEvaluation"> </a></td><td>ImmunizationEvaluation</td><td>Describes a comparison of an immunization event against published recommendations to determine if the administration is &quot;valid&quot; in relation to those  recommendations.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ImmunizationRecommendation<a name="resource-types-ImmunizationRecommendation"> </a></td><td>ImmunizationRecommendation</td><td>A patient\'s point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ImplementationGuide<a name="resource-types-ImplementationGuide"> </a></td><td>ImplementationGuide</td><td>A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Ingredient<a name="resource-types-Ingredient"> </a></td><td>Ingredient</td><td>An ingredient of a manufactured item or pharmaceutical product.</td></tr><tr><td>3</td><td style="white-space:nowrap">    InsurancePlan<a name="resource-types-InsurancePlan"> </a></td><td>InsurancePlan</td><td>Details of a Health Insurance product/plan provided by an organization.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Invoice<a name="resource-types-Invoice"> </a></td><td>Invoice</td><td>Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Library<a name="resource-types-Library"> </a></td><td>Library</td><td>The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Linkage<a name="resource-types-Linkage"> </a></td><td>Linkage</td><td>Identifies two or more records (resource instances) that refer to the same real-world &quot;occurrence&quot;.</td></tr><tr><td>3</td><td style="white-space:nowrap">    List<a name="resource-types-List"> </a></td><td>List</td><td>A list is a curated collection of resources.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Location<a name="resource-types-Location"> </a></td><td>Location</td><td>Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ManufacturedItemDefinition<a name="resource-types-ManufacturedItemDefinition"> </a></td><td>ManufacturedItemDefinition</td><td>The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Measure<a name="resource-types-Measure"> </a></td><td>Measure</td><td>The Measure resource provides the definition of a quality measure.</td></tr><tr><td>3</td><td style="white-space:nowrap">    MeasureReport<a name="resource-types-MeasureReport"> </a></td><td>MeasureReport</td><td>The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Media<a name="resource-types-Media"> </a></td><td>Media</td><td>A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Medication<a name="resource-types-Medication"> </a></td><td>Medication</td><td>This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.</td></tr><tr><td>3</td><td style="white-space:nowrap">    MedicationAdministration<a name="resource-types-MedicationAdministration"> </a></td><td>MedicationAdministration</td><td>Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.</td></tr><tr><td>3</td><td style="white-space:nowrap">    MedicationDispense<a name="resource-types-MedicationDispense"> </a></td><td>MedicationDispense</td><td>Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.</td></tr><tr><td>3</td><td style="white-space:nowrap">    MedicationKnowledge<a name="resource-types-MedicationKnowledge"> </a></td><td>MedicationKnowledge</td><td>Information about a medication that is used to support knowledge.</td></tr><tr><td>3</td><td style="white-space:nowrap">    MedicationRequest<a name="resource-types-MedicationRequest"> </a></td><td>MedicationRequest</td><td>An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called &quot;MedicationRequest&quot; rather than &quot;MedicationPrescription&quot; or &quot;MedicationOrder&quot; to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.</td></tr><tr><td>3</td><td style="white-space:nowrap">    MedicationStatement<a name="resource-types-MedicationStatement"> </a></td><td>MedicationStatement</td><td>A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient\'s memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains. \n\nThe primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient\'s memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.</td></tr><tr><td>3</td><td style="white-space:nowrap">    MedicinalProductDefinition<a name="resource-types-MedicinalProductDefinition"> </a></td><td>MedicinalProductDefinition</td><td>Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use, drug catalogs, to support prescribing, adverse events management etc.).</td></tr><tr><td>3</td><td style="white-space:nowrap">    MessageDefinition<a name="resource-types-MessageDefinition"> </a></td><td>MessageDefinition</td><td>Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.</td></tr><tr><td>3</td><td style="white-space:nowrap">    MessageHeader<a name="resource-types-MessageHeader"> </a></td><td>MessageHeader</td><td>The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.</td></tr><tr><td>3</td><td style="white-space:nowrap">    MolecularSequence<a name="resource-types-MolecularSequence"> </a></td><td>MolecularSequence</td><td>Raw data describing a biological sequence.</td></tr><tr><td>3</td><td style="white-space:nowrap">    NamingSystem<a name="resource-types-NamingSystem"> </a></td><td>NamingSystem</td><td>A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a &quot;System&quot; used within the Identifier and Coding data types.</td></tr><tr><td>3</td><td style="white-space:nowrap">    NutritionOrder<a name="resource-types-NutritionOrder"> </a></td><td>NutritionOrder</td><td>A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.</td></tr><tr><td>3</td><td style="white-space:nowrap">    NutritionProduct<a name="resource-types-NutritionProduct"> </a></td><td>NutritionProduct</td><td>A food or fluid product that is consumed by patients.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Observation<a name="resource-types-Observation"> </a></td><td>Observation</td><td>Measurements and simple assertions made about a patient, device or other subject.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ObservationDefinition<a name="resource-types-ObservationDefinition"> </a></td><td>ObservationDefinition</td><td>Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.</td></tr><tr><td>3</td><td style="white-space:nowrap">    OperationDefinition<a name="resource-types-OperationDefinition"> </a></td><td>OperationDefinition</td><td>A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).</td></tr><tr><td>3</td><td style="white-space:nowrap">    OperationOutcome<a name="resource-types-OperationOutcome"> </a></td><td>OperationOutcome</td><td>A collection of error, warning, or information messages that result from a system action.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Organization<a name="resource-types-Organization"> </a></td><td>Organization</td><td>A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.</td></tr><tr><td>3</td><td style="white-space:nowrap">    OrganizationAffiliation<a name="resource-types-OrganizationAffiliation"> </a></td><td>OrganizationAffiliation</td><td>Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.</td></tr><tr><td>3</td><td style="white-space:nowrap">    PackagedProductDefinition<a name="resource-types-PackagedProductDefinition"> </a></td><td>PackagedProductDefinition</td><td>A medically related item or items, in a container or package.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Patient<a name="resource-types-Patient"> </a></td><td>Patient</td><td>Demographics and other administrative information about an individual or animal receiving care or other health-related services.</td></tr><tr><td>3</td><td style="white-space:nowrap">    PaymentNotice<a name="resource-types-PaymentNotice"> </a></td><td>PaymentNotice</td><td>This resource provides the status of the payment for goods and services rendered, and the request and response resource references.</td></tr><tr><td>3</td><td style="white-space:nowrap">    PaymentReconciliation<a name="resource-types-PaymentReconciliation"> </a></td><td>PaymentReconciliation</td><td>This resource provides the details including amount of a payment and allocates the payment items being paid.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Person<a name="resource-types-Person"> </a></td><td>Person</td><td>Demographics and administrative information about a person independent of a specific health-related context.</td></tr><tr><td>3</td><td style="white-space:nowrap">    PlanDefinition<a name="resource-types-PlanDefinition"> </a></td><td>PlanDefinition</td><td>This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical and non-clinical artifacts such as clinical decision support rules, order sets, protocols, and drug quality specifications.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Practitioner<a name="resource-types-Practitioner"> </a></td><td>Practitioner</td><td>A person who is directly or indirectly involved in the provisioning of healthcare.</td></tr><tr><td>3</td><td style="white-space:nowrap">    PractitionerRole<a name="resource-types-PractitionerRole"> </a></td><td>PractitionerRole</td><td>A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Procedure<a name="resource-types-Procedure"> </a></td><td>Procedure</td><td>An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Provenance<a name="resource-types-Provenance"> </a></td><td>Provenance</td><td>Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Questionnaire<a name="resource-types-Questionnaire"> </a></td><td>Questionnaire</td><td>A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.</td></tr><tr><td>3</td><td style="white-space:nowrap">    QuestionnaireResponse<a name="resource-types-QuestionnaireResponse"> </a></td><td>QuestionnaireResponse</td><td>A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.</td></tr><tr><td>3</td><td style="white-space:nowrap">    RegulatedAuthorization<a name="resource-types-RegulatedAuthorization"> </a></td><td>RegulatedAuthorization</td><td>Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product.</td></tr><tr><td>3</td><td style="white-space:nowrap">    RelatedPerson<a name="resource-types-RelatedPerson"> </a></td><td>RelatedPerson</td><td>Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.</td></tr><tr><td>3</td><td style="white-space:nowrap">    RequestGroup<a name="resource-types-RequestGroup"> </a></td><td>RequestGroup</td><td>A group of related requests that can be used to capture intended activities that have inter-dependencies such as &quot;give this medication after that one&quot;.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ResearchDefinition<a name="resource-types-ResearchDefinition"> </a></td><td>ResearchDefinition</td><td>The ResearchDefinition resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ResearchElementDefinition<a name="resource-types-ResearchElementDefinition"> </a></td><td>ResearchElementDefinition</td><td>The ResearchElementDefinition resource describes a &quot;PICO&quot; element that knowledge (evidence, assertion, recommendation) is about.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ResearchStudy<a name="resource-types-ResearchStudy"> </a></td><td>ResearchStudy</td><td>A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ResearchSubject<a name="resource-types-ResearchSubject"> </a></td><td>ResearchSubject</td><td>A physical entity which is the primary unit of operational and/or administrative interest in a study.</td></tr><tr><td>3</td><td style="white-space:nowrap">    RiskAssessment<a name="resource-types-RiskAssessment"> </a></td><td>RiskAssessment</td><td>An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Schedule<a name="resource-types-Schedule"> </a></td><td>Schedule</td><td>A container for slots of time that may be available for booking appointments.</td></tr><tr><td>3</td><td style="white-space:nowrap">    SearchParameter<a name="resource-types-SearchParameter"> </a></td><td>SearchParameter</td><td>A search parameter that defines a named search item that can be used to search/filter on a resource.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ServiceRequest<a name="resource-types-ServiceRequest"> </a></td><td>ServiceRequest</td><td>A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Slot<a name="resource-types-Slot"> </a></td><td>Slot</td><td>A slot of time on a schedule that may be available for booking appointments.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Specimen<a name="resource-types-Specimen"> </a></td><td>Specimen</td><td>A sample to be used for analysis.</td></tr><tr><td>3</td><td style="white-space:nowrap">    SpecimenDefinition<a name="resource-types-SpecimenDefinition"> </a></td><td>SpecimenDefinition</td><td>A kind of specimen with associated set of requirements.</td></tr><tr><td>3</td><td style="white-space:nowrap">    StructureDefinition<a name="resource-types-StructureDefinition"> </a></td><td>StructureDefinition</td><td>A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.</td></tr><tr><td>3</td><td style="white-space:nowrap">    StructureMap<a name="resource-types-StructureMap"> </a></td><td>StructureMap</td><td>A Map of relationships between 2 structures that can be used to transform data.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Subscription<a name="resource-types-Subscription"> </a></td><td>Subscription</td><td>The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined &quot;channel&quot; so that another system can take an appropriate action.</td></tr><tr><td>3</td><td style="white-space:nowrap">    SubscriptionStatus<a name="resource-types-SubscriptionStatus"> </a></td><td>SubscriptionStatus</td><td>The SubscriptionStatus resource describes the state of a Subscription during notifications.</td></tr><tr><td>3</td><td style="white-space:nowrap">    SubscriptionTopic<a name="resource-types-SubscriptionTopic"> </a></td><td>SubscriptionTopic</td><td>Describes a stream of resource state changes identified by trigger criteria and annotated with labels useful to filter projections from this topic.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Substance<a name="resource-types-Substance"> </a></td><td>Substance</td><td>A homogeneous material with a definite composition.</td></tr><tr><td>3</td><td style="white-space:nowrap">    SubstanceDefinition<a name="resource-types-SubstanceDefinition"> </a></td><td>SubstanceDefinition</td><td>The detailed description of a substance, typically at a level beyond what is used for prescribing.</td></tr><tr><td>3</td><td style="white-space:nowrap">    SupplyDelivery<a name="resource-types-SupplyDelivery"> </a></td><td>SupplyDelivery</td><td>Record of delivery of what is supplied.</td></tr><tr><td>3</td><td style="white-space:nowrap">    SupplyRequest<a name="resource-types-SupplyRequest"> </a></td><td>SupplyRequest</td><td>A record of a request for a medication, substance or device used in the healthcare setting.</td></tr><tr><td>3</td><td style="white-space:nowrap">    Task<a name="resource-types-Task"> </a></td><td>Task</td><td>A task to be performed.</td></tr><tr><td>3</td><td style="white-space:nowrap">    TerminologyCapabilities<a name="resource-types-TerminologyCapabilities"> </a></td><td>TerminologyCapabilities</td><td>A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.</td></tr><tr><td>3</td><td style="white-space:nowrap">    TestReport<a name="resource-types-TestReport"> </a></td><td>TestReport</td><td>A summary of information based on the results of executing a TestScript.</td></tr><tr><td>3</td><td style="white-space:nowrap">    TestScript<a name="resource-types-TestScript"> </a></td><td>TestScript</td><td>A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.</td></tr><tr><td>3</td><td style="white-space:nowrap">    ValueSet<a name="resource-types-ValueSet"> </a></td><td>ValueSet</td><td>A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).</td></tr><tr><td>3</td><td style="white-space:nowrap">    VerificationResult<a name="resource-types-VerificationResult"> </a></td><td>VerificationResult</td><td>Describes validation requirements, source(s), status and dates for one or more elements.</td></tr><tr><td>3</td><td style="white-space:nowrap">    VisionPrescription<a name="resource-types-VisionPrescription"> </a></td><td>VisionPrescription</td><td>An authorization for the provision of glasses and/or contact lenses to a patient.</td></tr><tr><td>2</td><td style="white-space:nowrap">  Parameters<a name="resource-types-Parameters"> </a></td><td>Parameters</td><td>This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it.</td></tr></table><p><b>Additional Language Displays</b></p><table class="codes"><tr><td><b>Code</b></td><td><b>English (English, en)</b></td><td><b>Spanish (es)</b></td><td><b>French (fr)</b></td><td><b>Italian (it)</b></td><td><b>中文 (Chinese, zh)</b></td></tr><tr><td>Resource</td><td>Resource</td><td>Recurso</td><td></td><td></td><td>资源</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/valueset-special-status",
      valueString:
        "This Code System is normative - it is generated based on the information defined in this specification. The definition will remain fixed  across versions, but the actual contents will change from version to version",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "normative",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      valueCode: "4.0.0",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "inm",
    },
  ],
  url: "http://hl7.org/fhir/resource-types",
  version: "4.3.0",
  name: "ResourceType",
  title: "ResourceType",
  status: "active",
  experimental: false,
  date: "2022-05-28T12:47:40+10:00",
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
    "One of the resource types defined as part of this version of FHIR.",
  caseSensitive: true,
  hierarchyMeaning: "is-a",
  content: "complete",
  concept: [
    {
      code: "Resource",
      display: "Resource",
      definition:
        "--- Abstract Type! ---This is the base resource type for everything.",
      designation: [
        {
          language: "en",
          use: {
            system: "http://terminology.hl7.org/CodeSystem/designation-usage",
            code: "display",
          },
          value: "Resource",
        },
        {
          language: "es",
          use: {
            system: "http://terminology.hl7.org/CodeSystem/designation-usage",
            code: "display",
          },
          value: "Recurso",
        },
        {
          language: "zh",
          use: {
            system: "http://terminology.hl7.org/CodeSystem/designation-usage",
            code: "display",
          },
          value: "资源",
        },
      ],
      concept: [
        {
          code: "Binary",
          display: "Binary",
          definition:
            "A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc.",
          designation: [
            {
              language: "en",
              use: {
                system:
                  "http://terminology.hl7.org/CodeSystem/designation-usage",
                code: "display",
              },
              value: "Binary",
            },
            {
              language: "it",
              use: {
                system:
                  "http://terminology.hl7.org/CodeSystem/designation-usage",
                code: "display",
              },
              value: "Binario",
            },
            {
              language: "fr",
              use: {
                system:
                  "http://terminology.hl7.org/CodeSystem/designation-usage",
                code: "display",
              },
              value: "Binaire",
            },
            {
              language: "es",
              use: {
                system:
                  "http://terminology.hl7.org/CodeSystem/designation-usage",
                code: "display",
              },
              value: "Binario",
            },
            {
              language: "zh",
              use: {
                system:
                  "http://terminology.hl7.org/CodeSystem/designation-usage",
                code: "display",
              },
              value: "二进制资源",
            },
          ],
        },
        {
          code: "Bundle",
          display: "Bundle",
          definition: "A container for a collection of resources.",
          designation: [
            {
              language: "en",
              use: {
                system:
                  "http://terminology.hl7.org/CodeSystem/designation-usage",
                code: "display",
              },
              value: "Bundle",
            },
            {
              language: "fr",
              use: {
                system:
                  "http://terminology.hl7.org/CodeSystem/designation-usage",
                code: "display",
              },
              value: "Paquet",
            },
            {
              language: "es",
              use: {
                system:
                  "http://terminology.hl7.org/CodeSystem/designation-usage",
                code: "display",
              },
              value: "Paquete",
            },
            {
              language: "zh",
              use: {
                system:
                  "http://terminology.hl7.org/CodeSystem/designation-usage",
                code: "display",
              },
              value: "捆束",
            },
          ],
        },
        {
          code: "DomainResource",
          display: "DomainResource",
          definition:
            "--- Abstract Type! ---A resource that includes narrative, extensions, and contained resources.",
          designation: [
            {
              language: "en",
              use: {
                system:
                  "http://terminology.hl7.org/CodeSystem/designation-usage",
                code: "display",
              },
              value: "DomainResource",
            },
            {
              language: "es",
              use: {
                system:
                  "http://terminology.hl7.org/CodeSystem/designation-usage",
                code: "display",
              },
              value: "RecursoDeDominio",
            },
            {
              language: "zh",
              use: {
                system:
                  "http://terminology.hl7.org/CodeSystem/designation-usage",
                code: "display",
              },
              value: "领域资源",
            },
          ],
          concept: [
            {
              code: "Account",
              display: "Account",
              definition:
                "A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Account",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Cuenta",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "账户",
                },
              ],
            },
            {
              code: "ActivityDefinition",
              display: "ActivityDefinition",
              definition:
                "This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ActivityDefinition",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DefinizioneAttivita",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DefinicionDeActividad",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "活动定义",
                },
              ],
            },
            {
              code: "AdministrableProductDefinition",
              display: "AdministrableProductDefinition",
              definition:
                "A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed).",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "AdministrableProductDefinition",
                },
              ],
            },
            {
              code: "AdverseEvent",
              display: "AdverseEvent",
              definition:
                "Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "AdverseEvent",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EventoAvverso",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EventoAdverso",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "不良事件",
                },
              ],
            },
            {
              code: "AllergyIntolerance",
              display: "AllergyIntolerance",
              definition:
                "Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "AllergyIntolerance",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "AllergiaIntolleranza",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "IntoléranceAllergique",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "AllergiaIntolerancia",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "变态反应与不耐性",
                },
              ],
            },
            {
              code: "Appointment",
              display: "Appointment",
              definition:
                "A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Appointment",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Appuntamento",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RendezVous",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Cita",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "预约",
                },
              ],
            },
            {
              code: "AppointmentResponse",
              display: "AppointmentResponse",
              definition:
                "A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "AppointmentResponse",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RispostaAppuntamento",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RéponseRendezVous",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "CitaRespuesta",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "预约响应",
                },
              ],
            },
            {
              code: "AuditEvent",
              display: "AuditEvent",
              definition:
                "A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "AuditEvent",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ÉvènementSécurité",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EventoSeguridad",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "审计事件",
                },
              ],
            },
            {
              code: "Basic",
              display: "Basic",
              definition:
                "Basic is used for handling concepts not yet defined in FHIR, narrative-only resources that don't map to an existing resource, and custom resources not appropriate for inclusion in the FHIR specification.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Basic",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Basique",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Basico",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "初级资源",
                },
              ],
            },
            {
              code: "BiologicallyDerivedProduct",
              display: "BiologicallyDerivedProduct",
              definition:
                "A material substance originating from a biological entity intended to be transplanted or infused\ninto another (possibly the same) biological entity.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "BiologicallyDerivedProduct",
                },
              ],
            },
            {
              code: "BodyStructure",
              display: "BodyStructure",
              definition:
                "Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "BodyStructure",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "StrutturaDelCorpo",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "MorphologieDeCorps",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EstructuraDelCuerpo",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "身体结构",
                },
              ],
            },
            {
              code: "CapabilityStatement",
              display: "CapabilityStatement",
              definition:
                "A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "CapabilityStatement",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DeclaracionDeCapacidad",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "能力声明",
                },
              ],
            },
            {
              code: "CarePlan",
              display: "CarePlan",
              definition:
                "Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "CarePlan",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "PianoDiCura",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "PlanDeSoins",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "PlanDeCuidado",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "照护计划",
                },
              ],
            },
            {
              code: "CareTeam",
              display: "CareTeam",
              definition:
                "The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care for a patient.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "CareTeam",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EquipoDeCuidado",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "照护团队",
                },
              ],
            },
            {
              code: "CatalogEntry",
              display: "CatalogEntry",
              definition:
                "Catalog entries are wrappers that contextualize items included in a catalog.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "CatalogEntry",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EntradaDeCatalogo",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "条目定义",
                },
              ],
            },
            {
              code: "ChargeItem",
              display: "ChargeItem",
              definition:
                "The resource ChargeItem describes the provision of healthcare provider products for a certain patient, therefore referring not only to the product, but containing in addition details of the provision, like date, time, amounts and participating organizations and persons. Main Usage of the ChargeItem is to enable the billing process and internal cost allocation.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ChargeItem",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "CargoDeItem",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "收费项目",
                },
              ],
            },
            {
              code: "ChargeItemDefinition",
              display: "ChargeItemDefinition",
              definition:
                "The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ChargeItemDefinition",
                },
              ],
            },
            {
              code: "Citation",
              display: "Citation",
              definition:
                "The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Citation",
                },
              ],
            },
            {
              code: "Claim",
              display: "Claim",
              definition:
                "A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Claim",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Réclamation",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Reclamación / Factura",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "赔单",
                },
              ],
            },
            {
              code: "ClaimResponse",
              display: "ClaimResponse",
              definition:
                "This resource provides the adjudication details from the processing of a Claim resource.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ClaimResponse",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RéponseARéclamation",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "赔单请求",
                },
              ],
            },
            {
              code: "ClinicalImpression",
              display: "ClinicalImpression",
              definition:
                'A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient\'s condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.',
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ClinicalImpression",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ImpressioneClinica",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ImpressionClinique",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "HallazgoClinico",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "临床印象",
                },
              ],
            },
            {
              code: "ClinicalUseDefinition",
              display: "ClinicalUseDefinition",
              definition:
                "A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ClinicalUseDefinition",
                },
              ],
            },
            {
              code: "CodeSystem",
              display: "CodeSystem",
              definition:
                "The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "CodeSystem",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "SistemaDiCodifica",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "SistemaDeCodigos",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "代码系统",
                },
              ],
            },
            {
              code: "Communication",
              display: "Communication",
              definition:
                "An occurrence of information being transmitted; e.g. an alert that was sent to a responsible provider, a public health agency that was notified about a reportable condition.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Communication",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Comunicazione",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Communication",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Comunicación",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "通讯",
                },
              ],
            },
            {
              code: "CommunicationRequest",
              display: "CommunicationRequest",
              definition:
                "A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "CommunicationRequest",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RichiestaDiComunicazione",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DemandeDeCommunication",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ComunicaciónRequerimiento",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "通讯请求",
                },
              ],
            },
            {
              code: "CompartmentDefinition",
              display: "CompartmentDefinition",
              definition:
                "A compartment definition that defines how resources are accessed on a server.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "CompartmentDefinition",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DefinicionDeCompartimento",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "逻辑区块定义",
                },
              ],
            },
            {
              code: "Composition",
              display: "Composition",
              definition:
                "A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.).",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Composition",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Composizione",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Composition",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Composición",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "组合式文书",
                },
              ],
            },
            {
              code: "ConceptMap",
              display: "ConceptMap",
              definition:
                "A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ConceptMap",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "MappaDiConcetti",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "CarteDeConcepts",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "MapaDeConceptos",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "概念映射",
                },
              ],
            },
            {
              code: "Condition",
              display: "Condition",
              definition:
                "A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Condition",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Condizione",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Condition",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Condición",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "情况",
                },
              ],
            },
            {
              code: "Consent",
              display: "Consent",
              definition:
                "A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Consent",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Consenso",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Consentimiento",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "同意书",
                },
              ],
            },
            {
              code: "Contract",
              display: "Contract",
              definition:
                "Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Contract",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Contratto",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Contrat",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Contato",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "合同",
                },
              ],
            },
            {
              code: "Coverage",
              display: "Coverage",
              definition:
                "Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Coverage",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Copertura",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Couverture",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Cobertura",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "保险责任",
                },
              ],
            },
            {
              code: "CoverageEligibilityRequest",
              display: "CoverageEligibilityRequest",
              definition:
                "The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "CoverageEligibilityRequest",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RichiestaEleggibilitaCopertura",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "CouvertureDemandeEligibilité",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "资格请求",
                },
              ],
            },
            {
              code: "CoverageEligibilityResponse",
              display: "CoverageEligibilityResponse",
              definition:
                "This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "CoverageEligibilityResponse",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RispostaEleggibilitaCopertura",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RéponseEligibilitéCouverture",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "资格响应",
                },
              ],
            },
            {
              code: "DetectedIssue",
              display: "DetectedIssue",
              definition:
                "Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DetectedIssue",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ProblemaRilevato",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Problème Détecté",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Problema-Detectado /ProblemaDetectado",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "已发现问题",
                },
              ],
            },
            {
              code: "Device",
              display: "Device",
              definition:
                "A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Device",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Dispositivo",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Dispositif",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Dispositivo",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "装置",
                },
              ],
            },
            {
              code: "DeviceDefinition",
              display: "DeviceDefinition",
              definition:
                "The characteristics, operational status and capabilities of a medical-related component of a medical device.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DeviceDefinition",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DéfinitionDeDispositif",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DefiniciónDeDispositivo",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "装置组件",
                },
              ],
            },
            {
              code: "DeviceMetric",
              display: "DeviceMetric",
              definition:
                "Describes a measurement, calculation or setting capability of a medical device.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DeviceMetric",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "MétriqueDispositif",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "MetricaDeDispositivo",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "装置指标",
                },
              ],
            },
            {
              code: "DeviceRequest",
              display: "DeviceRequest",
              definition:
                "Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DeviceRequest",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RichiestaDispositivo",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DemandeUtilisationDispositif",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "SolicitudDeDispositivo",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "装置请求",
                },
              ],
            },
            {
              code: "DeviceUseStatement",
              display: "DeviceUseStatement",
              definition:
                "A record of a device being used by a patient where the record is the result of a report from the patient or another clinician.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DeviceUseStatement",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "装置使用声明",
                },
              ],
            },
            {
              code: "DiagnosticReport",
              display: "DiagnosticReport",
              definition:
                "The findings and interpretation of diagnostic  tests performed on patients, groups of patients, devices, and locations, and/or specimens derived from these. The report includes clinical context such as requesting and provider information, and some mix of atomic results, images, textual and coded interpretations, and formatted representation of diagnostic reports.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DiagnosticReport",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RefertoDiagnostico",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RapportDiagnostique",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "诊断报告",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "InformeDiagnostico",
                },
              ],
            },
            {
              code: "DocumentManifest",
              display: "DocumentManifest",
              definition:
                "A collection of documents compiled for a purpose together with metadata that applies to the collection.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DocumentManifest",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Manifeste",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "文档清单",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ManifestoDocumento",
                },
              ],
            },
            {
              code: "DocumentReference",
              display: "DocumentReference",
              definition:
                "A reference to a document of any kind for any purpose. Provides metadata about the document so that the document can be discovered and managed. The scope of a document is any seralized object with a mime-type, so includes formal patient centric documents (CDA), cliical notes, scanned paper, and non-patient specific documents like policy text.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DocumentReference",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RiferimentoDocumento",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RéférenceDocument",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ReferenciaDocumento",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "文档引用",
                },
              ],
            },
            {
              code: "Encounter",
              display: "Encounter",
              definition:
                "An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Encounter",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Venue",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "就医过程",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Encuentro",
                },
              ],
            },
            {
              code: "Endpoint",
              display: "Endpoint",
              definition:
                "The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b or a REST endpoint for another FHIR server. This may include any security context information.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Endpoint",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Endpoint",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "端点",
                },
              ],
            },
            {
              code: "EnrollmentRequest",
              display: "EnrollmentRequest",
              definition:
                "This resource provides the insurance enrollment details to the insurer regarding a specified coverage.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EnrollmentRequest",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RichiestaIscrizione",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DemandeInscription",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "SolicitudDeEnrolamiento",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "保险注册请求",
                },
              ],
            },
            {
              code: "EnrollmentResponse",
              display: "EnrollmentResponse",
              definition:
                "This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EnrollmentResponse",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RispostaIscrizione",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RéponseInscription",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RespuestaDeEnrolamiento",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "保险注册响应",
                },
              ],
            },
            {
              code: "EpisodeOfCare",
              display: "EpisodeOfCare",
              definition:
                "An association between a patient and an organization / healthcare provider(s) during which time encounters may occur. The managing organization assumes a level of responsibility for the patient during this time.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EpisodeOfCare",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EpisodioDiCura",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ÉpisodeDeSoins",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EpisodioDeCuidado",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "照护服务节段",
                },
              ],
            },
            {
              code: "EventDefinition",
              display: "EventDefinition",
              definition:
                "The EventDefinition resource provides a reusable description of when a particular event can occur.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EventDefinition",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DefinizioneEvento",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DefinitionDeEvento",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "事件定义",
                },
              ],
            },
            {
              code: "Evidence",
              display: "Evidence",
              definition:
                "The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (eg population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Evidence",
                },
              ],
            },
            {
              code: "EvidenceReport",
              display: "EvidenceReport",
              definition:
                "The EvidenceReport Resource is a specialized container for a collection of resources and codable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EvidenceReport",
                },
              ],
            },
            {
              code: "EvidenceVariable",
              display: "EvidenceVariable",
              definition:
                "The EvidenceVariable resource describes an element that knowledge (Evidence) is about.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EvidenceVariable",
                },
              ],
            },
            {
              code: "ExampleScenario",
              display: "ExampleScenario",
              definition: "Example of workflow instance.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ExampleScenario",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ScenarioDiEsempio",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EjemploDeEscenario",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "示例场景",
                },
              ],
            },
            {
              code: "ExplanationOfBenefit",
              display: "ExplanationOfBenefit",
              definition:
                "This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ExplanationOfBenefit",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ExplicationDuBénéfice",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "赔付说明",
                },
              ],
            },
            {
              code: "FamilyMemberHistory",
              display: "FamilyMemberHistory",
              definition:
                "Significant health conditions for a person related to the patient relevant in the context of care for the patient.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "FamilyMemberHistory",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "HistoireMembreFamille",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "HistorialMiembroFamiliar",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "家族史",
                },
              ],
            },
            {
              code: "Flag",
              display: "Flag",
              definition:
                "Prospective warnings of potential issues when providing care to the patient.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Flag",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Drapeau",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Bandera",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "标记",
                },
              ],
            },
            {
              code: "Goal",
              display: "Goal",
              definition:
                "Describes the intended objective(s) for a patient, group or organization care, for example, weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Goal",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "But",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Objetivo",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "目标",
                },
              ],
            },
            {
              code: "GraphDefinition",
              display: "GraphDefinition",
              definition:
                "A formal computable definition of a graph of resources - that is, a coherent set of resources that form a graph by following references. The Graph Definition resource defines a set and makes rules about the set.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "GraphDefinition",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DefinitionGrafico",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "图形定义",
                },
              ],
            },
            {
              code: "Group",
              display: "Group",
              definition:
                "Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Group",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Gruppo",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Groupe",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Grupo",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "群组",
                },
              ],
            },
            {
              code: "GuidanceResponse",
              display: "GuidanceResponse",
              definition:
                "A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "GuidanceResponse",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RespuestaDeOrientacion",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "指导意见响应",
                },
              ],
            },
            {
              code: "HealthcareService",
              display: "HealthcareService",
              definition:
                "The details of a healthcare service available at a location.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "HealthcareService",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ServizioSanitario",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ServiceDeSanté",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ServicioDeCuidado",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "医疗保健服务项目",
                },
              ],
            },
            {
              code: "ImagingStudy",
              display: "ImagingStudy",
              definition:
                "Representation of the content produced in a DICOM imaging study. A study comprises a set of series, each of which includes a set of Service-Object Pair Instances (SOP Instances - images or other data) acquired or produced in a common context.  A series is of only one modality (e.g. X-ray, CT, MR, ultrasound), but a study may have multiple series of different modalities.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ImagingStudy",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EtudeImagerie",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EstudioImagen  / EstudioImagen",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "成像检查",
                },
              ],
            },
            {
              code: "Immunization",
              display: "Immunization",
              definition:
                "Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Immunization",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Immunizzazione",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Immunisation",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "免疫接种",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Inmunización",
                },
              ],
            },
            {
              code: "ImmunizationEvaluation",
              display: "ImmunizationEvaluation",
              definition:
                'Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.',
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ImmunizationEvaluation",
                },
              ],
            },
            {
              code: "ImmunizationRecommendation",
              display: "ImmunizationRecommendation",
              definition:
                "A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ImmunizationRecommendation",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RecommendationImmunisation",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "免疫接种建议",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RecomendaciónInmunización /",
                },
              ],
            },
            {
              code: "ImplementationGuide",
              display: "ImplementationGuide",
              definition:
                "A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ImplementationGuide",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "GuiaDeImplementacion",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "实施指南",
                },
              ],
            },
            {
              code: "Ingredient",
              display: "Ingredient",
              definition:
                "An ingredient of a manufactured item or pharmaceutical product.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Ingredient",
                },
              ],
            },
            {
              code: "InsurancePlan",
              display: "InsurancePlan",
              definition:
                "Details of a Health Insurance product/plan provided by an organization.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "InsurancePlan",
                },
              ],
            },
            {
              code: "Invoice",
              display: "Invoice",
              definition:
                "Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Invoice",
                },
              ],
            },
            {
              code: "Library",
              display: "Library",
              definition:
                "The Library resource is a general-purpose container for knowledge asset definitions. It can be used to describe and expose existing knowledge assets such as logic libraries and information model descriptions, as well as to describe a collection of knowledge assets.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Library",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Librería",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "库",
                },
              ],
            },
            {
              code: "Linkage",
              display: "Linkage",
              definition:
                'Identifies two or more records (resource instances) that refer to the same real-world "occurrence".',
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Linkage",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Enlace / Conexión / Vinculo / Acoplamiento ",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "链接关系",
                },
              ],
            },
            {
              code: "List",
              display: "List",
              definition: "A list is a curated collection of resources.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "List",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Lista",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Liste",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "列表",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Lista",
                },
              ],
            },
            {
              code: "Location",
              display: "Location",
              definition:
                "Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Location",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Localisation",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "位置",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Locacion",
                },
              ],
            },
            {
              code: "ManufacturedItemDefinition",
              display: "ManufacturedItemDefinition",
              definition:
                "The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ManufacturedItemDefinition",
                },
              ],
            },
            {
              code: "Measure",
              display: "Measure",
              definition:
                "The Measure resource provides the definition of a quality measure.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Measure",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Misura",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Medida",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "指标",
                },
              ],
            },
            {
              code: "MeasureReport",
              display: "MeasureReport",
              definition:
                "The MeasureReport resource contains the results of the calculation of a measure; and optionally a reference to the resources involved in that calculation.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "MeasureReport",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ReporteMedida",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "指标报告",
                },
              ],
            },
            {
              code: "Media",
              display: "Media",
              definition:
                "A photo, video, or audio recording acquired or used in healthcare. The actual content may be inline or provided by direct reference.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Media",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Media",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Média",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Medio",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "媒体",
                },
              ],
            },
            {
              code: "Medication",
              display: "Medication",
              definition:
                "This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Medication",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Médication",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "药物",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Medicación /Medicamento",
                },
              ],
            },
            {
              code: "MedicationAdministration",
              display: "MedicationAdministration",
              definition:
                "Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "MedicationAdministration",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "AdministrationMédicaments",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "药物施用",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "AdministraciónMedicación / AdministracionMedicamento",
                },
              ],
            },
            {
              code: "MedicationDispense",
              display: "MedicationDispense",
              definition:
                "Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "MedicationDispense",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DispensationMédicaments",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "药物配发",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DispensaciónMedicación /DispensacionMedicamento",
                },
              ],
            },
            {
              code: "MedicationKnowledge",
              display: "MedicationKnowledge",
              definition:
                "Information about a medication that is used to support knowledge.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "MedicationKnowledge",
                },
              ],
            },
            {
              code: "MedicationRequest",
              display: "MedicationRequest",
              definition:
                'An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns.',
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "MedicationRequest",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "PrescriptionMédicamenteuseTODO",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "药物请求",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "PrescripciónMedicaciónTODO  /PrescripcionMedicamento",
                },
              ],
            },
            {
              code: "MedicationStatement",
              display: "MedicationStatement",
              definition:
                "A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains. \n\nThe primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "MedicationStatement",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ÉtatMédication",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "药物声明",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ResumenMedicación /ResumenMedicamento",
                },
              ],
            },
            {
              code: "MedicinalProductDefinition",
              display: "MedicinalProductDefinition",
              definition:
                "Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use, drug catalogs, to support prescribing, adverse events management etc.).",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "MedicinalProductDefinition",
                },
              ],
            },
            {
              code: "MessageDefinition",
              display: "MessageDefinition",
              definition:
                "Defines the characteristics of a message that can be shared between systems, including the type of event that initiates the message, the content to be transmitted and what response(s), if any, are permitted.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "MessageDefinition",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DefinizioneMessaggio",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DefinicionMensaje",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "消息定义",
                },
              ],
            },
            {
              code: "MessageHeader",
              display: "MessageHeader",
              definition:
                "The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "MessageHeader",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EntêteMessage",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "消息标头",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "CabeceraMensaje",
                },
              ],
            },
            {
              code: "MolecularSequence",
              display: "MolecularSequence",
              definition: "Raw data describing a biological sequence.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "MolecularSequence",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "SecuenciaMolecular",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "分子序列",
                },
              ],
            },
            {
              code: "NamingSystem",
              display: "NamingSystem",
              definition:
                'A curated namespace that issues unique symbols within that namespace for the identification of concepts, people, devices, etc.  Represents a "System" used within the Identifier and Coding data types.',
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "NamingSystem",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "SystèmeDeNommage",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "SistemaDeNombres",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "命名系统",
                },
              ],
            },
            {
              code: "NutritionOrder",
              display: "NutritionOrder",
              definition:
                "A request to supply a diet, formula feeding (enteral) or oral nutritional supplement to a patient/resident.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "NutritionOrder",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "OrdreNutrition",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "OrdenNutrición",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "营养医嘱",
                },
              ],
            },
            {
              code: "NutritionProduct",
              display: "NutritionProduct",
              definition:
                "A food or fluid product that is consumed by patients.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "NutritionProduct",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ProduitNutritionnel",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ProductoNutricional",
                },
              ],
            },
            {
              code: "Observation",
              display: "Observation",
              definition:
                "Measurements and simple assertions made about a patient, device or other subject.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Observation",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Osservazione",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Observation",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "观察",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Observación",
                },
              ],
            },
            {
              code: "ObservationDefinition",
              display: "ObservationDefinition",
              definition:
                "Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ObservationDefinition",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DefinizioneOsservazione",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DefinicionDeEspecimen",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "观察定义",
                },
              ],
            },
            {
              code: "OperationDefinition",
              display: "OperationDefinition",
              definition:
                "A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "OperationDefinition",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DefinizioneOperazione",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DéfinitionOpération",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DefinicionDeOperacion",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "操作定义",
                },
              ],
            },
            {
              code: "OperationOutcome",
              display: "OperationOutcome",
              definition:
                "A collection of error, warning, or information messages that result from a system action.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "OperationOutcome",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RisultatoOperazione",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RésultatOpération",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "操作结局",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ResultadoOperación",
                },
              ],
            },
            {
              code: "Organization",
              display: "Organization",
              definition:
                "A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Organization",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Organizzazione",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Organisation",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "组织机构",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Organización",
                },
              ],
            },
            {
              code: "OrganizationAffiliation",
              display: "OrganizationAffiliation",
              definition:
                "Defines an affiliation/assotiation/relationship between 2 distinct oganizations, that is not a part-of relationship/sub-division relationship.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "OrganizationAffiliation",
                },
              ],
            },
            {
              code: "PackagedProductDefinition",
              display: "PackagedProductDefinition",
              definition:
                "A medically related item or items, in a container or package.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "PackagedProductDefinition",
                },
              ],
            },
            {
              code: "Patient",
              display: "Patient",
              definition:
                "Demographics and other administrative information about an individual or animal receiving care or other health-related services.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Patient",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Paziente",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Patient",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "患者",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Paciente",
                },
              ],
            },
            {
              code: "PaymentNotice",
              display: "PaymentNotice",
              definition:
                "This resource provides the status of the payment for goods and services rendered, and the request and response resource references.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "PaymentNotice",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "AvvisoDiPagamento",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "AvisPaiement",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "AvisoDePago",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "付款通知",
                },
              ],
            },
            {
              code: "PaymentReconciliation",
              display: "PaymentReconciliation",
              definition:
                "This resource provides the details including amount of a payment and allocates the payment items being paid.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "PaymentReconciliation",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RiconciliazionePagamento",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RéconciliationPaiement",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ConciliacionDePago",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "付款对账",
                },
              ],
            },
            {
              code: "Person",
              display: "Person",
              definition:
                "Demographics and administrative information about a person independent of a specific health-related context.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Person",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Persona",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Personne",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Persona",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "人员",
                },
              ],
            },
            {
              code: "PlanDefinition",
              display: "PlanDefinition",
              definition:
                "This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical and non-clinical artifacts such as clinical decision support rules, order sets, protocols, and drug quality specifications.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "PlanDefinition",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DefinicionDePlan",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "计划定义",
                },
              ],
            },
            {
              code: "Practitioner",
              display: "Practitioner",
              definition:
                "A person who is directly or indirectly involved in the provisioning of healthcare.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Practitioner",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Praticien",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "执业人员",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Practicante / Profesional",
                },
              ],
            },
            {
              code: "PractitionerRole",
              display: "PractitionerRole",
              definition:
                "A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "PractitionerRole",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RolProfesional",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "执业人员角色",
                },
              ],
            },
            {
              code: "Procedure",
              display: "Procedure",
              definition:
                "An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Procedure",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Procedura",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Procédure",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "操作项目",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Procedimiento",
                },
              ],
            },
            {
              code: "Provenance",
              display: "Provenance",
              definition:
                "Provenance of a resource is a record that describes entities and processes involved in producing and delivering or otherwise influencing that resource. Provenance provides a critical foundation for assessing authenticity, enabling trust, and allowing reproducibility. Provenance assertions are a form of contextual metadata and can themselves become important records with their own provenance. Provenance statement indicates clinical significance in terms of confidence in authenticity, reliability, and trustworthiness, integrity, and stage in lifecycle (e.g. Document Completion - has the artifact been legally authenticated), all of which may impact security, privacy, and trust policies.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Provenance",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Provenienza",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Provenance",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "出处",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Procedencia",
                },
              ],
            },
            {
              code: "Questionnaire",
              display: "Questionnaire",
              definition:
                "A structured set of questions intended to guide the collection of answers from end-users. Questionnaires provide detailed control over order, presentation, phraseology and grouping to allow coherent, consistent data collection.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Questionnaire",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Questionario",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Questionnaire",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "调查问卷",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Cuestionario",
                },
              ],
            },
            {
              code: "QuestionnaireResponse",
              display: "QuestionnaireResponse",
              definition:
                "A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "QuestionnaireResponse",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RispostaQuestionario",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RéponseQuestionnaire",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RespuestaAlCuestionario",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "调查问卷答复",
                },
              ],
            },
            {
              code: "RegulatedAuthorization",
              display: "RegulatedAuthorization",
              definition:
                "Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RegulatedAuthorization",
                },
              ],
            },
            {
              code: "RelatedPerson",
              display: "RelatedPerson",
              definition:
                "Information about a person that is involved in the care for a patient, but who is not the target of healthcare, nor has a formal responsibility in the care process.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RelatedPerson",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "PersonaCorrelata",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "PersonneEnRelation",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "PersonaRelacionada",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "相关人员",
                },
              ],
            },
            {
              code: "RequestGroup",
              display: "RequestGroup",
              definition:
                'A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one".',
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RequestGroup",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "GruppoDiRichieste",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "GrupoDeSolicitudes",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "请求分组",
                },
              ],
            },
            {
              code: "ResearchDefinition",
              display: "ResearchDefinition",
              definition:
                "The ResearchDefinition resource describes the conditional state (population and any exposures being compared within the population) and outcome (if specified) that the knowledge (evidence, assertion, recommendation) is about.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ResearchDefinition",
                },
              ],
            },
            {
              code: "ResearchElementDefinition",
              display: "ResearchElementDefinition",
              definition:
                'The ResearchElementDefinition resource describes a "PICO" element that knowledge (evidence, assertion, recommendation) is about.',
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ResearchElementDefinition",
                },
              ],
            },
            {
              code: "ResearchStudy",
              display: "ResearchStudy",
              definition:
                "A process where a researcher or organization plans and then executes a series of steps intended to increase the field of healthcare-related knowledge.  This includes studies of safety, efficacy, comparative effectiveness and other information about medications, devices, therapies and other interventional and investigative techniques.  A ResearchStudy involves the gathering of information about human or animal subjects.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ResearchStudy",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EstudioDeInvestigacion",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "调查研究",
                },
              ],
            },
            {
              code: "ResearchSubject",
              display: "ResearchSubject",
              definition:
                "A physical entity which is the primary unit of operational and/or administrative interest in a study.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ResearchSubject",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "SujetoDeInvestigacion",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "研究主题",
                },
              ],
            },
            {
              code: "RiskAssessment",
              display: "RiskAssessment",
              definition:
                "An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RiskAssessment",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ÉvaluationRisques",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EvaluacionDeRiesgo",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "风险评估",
                },
              ],
            },
            {
              code: "Schedule",
              display: "Schedule",
              definition:
                "A container for slots of time that may be available for booking appointments.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Schedule",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Agenda",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "日程安排",
                },
              ],
            },
            {
              code: "SearchParameter",
              display: "SearchParameter",
              definition:
                "A search parameter that defines a named search item that can be used to search/filter on a resource.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "SearchParameter",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ParametroDiRicerca",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ParamètreRecherche",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ParametroDeBusqueda",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "搜索参数",
                },
              ],
            },
            {
              code: "ServiceRequest",
              display: "ServiceRequest",
              definition:
                "A record of a request for service such as diagnostic investigations, treatments, or operations to be performed.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ServiceRequest",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RichiestaDiServizio",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DemandeService",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "PeticiónServicio",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "服务项目请求",
                },
              ],
            },
            {
              code: "Slot",
              display: "Slot",
              definition:
                "A slot of time on a schedule that may be available for booking appointments.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Slot",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Slot",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "槽位",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Hueco / Zocalo / Espacio",
                },
              ],
            },
            {
              code: "Specimen",
              display: "Specimen",
              definition: "A sample to be used for analysis.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Specimen",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Campione",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Spécimen",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "标本",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Especimen",
                },
              ],
            },
            {
              code: "SpecimenDefinition",
              display: "SpecimenDefinition",
              definition:
                "A kind of specimen with associated set of requirements.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "SpecimenDefinition",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DefinizioneCampione",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DefinicionDeEspecimen",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "标本定义",
                },
              ],
            },
            {
              code: "StructureDefinition",
              display: "StructureDefinition",
              definition:
                "A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "StructureDefinition",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DefinizioneStruttura",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DéfinitionStructure",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "DefinicionDeEstructura",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "结构定义",
                },
              ],
            },
            {
              code: "StructureMap",
              display: "StructureMap",
              definition:
                "A Map of relationships between 2 structures that can be used to transform data.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "StructureMap",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "MapaDeEstructura",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "结构映射",
                },
              ],
            },
            {
              code: "Subscription",
              display: "Subscription",
              definition:
                'The subscription resource is used to define a push-based subscription from a server to another system. Once a subscription is registered with the server, the server checks every resource that is created or updated, and if the resource matches the given criteria, it sends a message on the defined "channel" so that another system can take an appropriate action.',
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Subscription",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Sottoscrizione",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Souscription",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "订阅",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Suscripción",
                },
              ],
            },
            {
              code: "SubscriptionStatus",
              display: "SubscriptionStatus",
              definition:
                "The SubscriptionStatus resource describes the state of a Subscription during notifications.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "SubscriptionStatus",
                },
              ],
            },
            {
              code: "SubscriptionTopic",
              display: "SubscriptionTopic",
              definition:
                "Describes a stream of resource state changes identified by trigger criteria and annotated with labels useful to filter projections from this topic.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "SubscriptionTopic",
                },
              ],
            },
            {
              code: "Substance",
              display: "Substance",
              definition: "A homogeneous material with a definite composition.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Substance",
                },
                {
                  language: "it",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Sostanza",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Substance",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "物质",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Sustancia",
                },
              ],
            },
            {
              code: "SubstanceDefinition",
              display: "SubstanceDefinition",
              definition:
                "The detailed description of a substance, typically at a level beyond what is used for prescribing.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "SubstanceDefinition",
                },
              ],
            },
            {
              code: "SupplyDelivery",
              display: "SupplyDelivery",
              definition: "Record of delivery of what is supplied.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "SupplyDelivery",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Supply Livraison",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "供应交付",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Entrega de Suministro",
                },
              ],
            },
            {
              code: "SupplyRequest",
              display: "SupplyRequest",
              definition:
                "A record of a request for a medication, substance or device used in the healthcare setting.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "SupplyRequest",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Demande d'approvisionnement",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "供应请求",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Solicitud de Suministro",
                },
              ],
            },
            {
              code: "Task",
              display: "Task",
              definition: "A task to be performed.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Task",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "Tarea",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "任务",
                },
              ],
            },
            {
              code: "TerminologyCapabilities",
              display: "TerminologyCapabilities",
              definition:
                "A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "TerminologyCapabilities",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "CapacidadTerminologica",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "术语服务能力",
                },
              ],
            },
            {
              code: "TestReport",
              display: "TestReport",
              definition:
                "A summary of information based on the results of executing a TestScript.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "TestReport",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "RapportTest",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ReporteDePrueba",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "测试报告",
                },
              ],
            },
            {
              code: "TestScript",
              display: "TestScript",
              definition:
                "A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "TestScript",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ScriptTest",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ScriptDePrueba",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "测试脚本",
                },
              ],
            },
            {
              code: "ValueSet",
              display: "ValueSet",
              definition:
                "A ValueSet resource instance specifies a set of codes drawn from one or more code systems, intended for use in a particular context. Value sets link between [[[CodeSystem]]] definitions and their use in [coded elements](terminologies.html).",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ValueSet",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "EnsembleValeurs",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "取值集合",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "ConjuntoValores / ConjuntoDeValores",
                },
              ],
            },
            {
              code: "VerificationResult",
              display: "VerificationResult",
              definition:
                "Describes validation requirements, source(s), status and dates for one or more elements.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "VerificationResult",
                },
              ],
            },
            {
              code: "VisionPrescription",
              display: "VisionPrescription",
              definition:
                "An authorization for the provision of glasses and/or contact lenses to a patient.",
              designation: [
                {
                  language: "en",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "VisionPrescription",
                },
                {
                  language: "fr",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "PrescriptionVision",
                },
                {
                  language: "es",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "PrescripcionDeVision",
                },
                {
                  language: "zh",
                  use: {
                    system:
                      "http://terminology.hl7.org/CodeSystem/designation-usage",
                    code: "display",
                  },
                  value: "视力处方",
                },
              ],
            },
          ],
        },
        {
          code: "Parameters",
          display: "Parameters",
          definition:
            "This resource is a non-persisted resource used to pass information into and back from an [operation](operations.html). It has no other use, and there is no RESTful endpoint associated with it.",
          designation: [
            {
              language: "en",
              use: {
                system:
                  "http://terminology.hl7.org/CodeSystem/designation-usage",
                code: "display",
              },
              value: "Parameters",
            },
            {
              language: "es",
              use: {
                system:
                  "http://terminology.hl7.org/CodeSystem/designation-usage",
                code: "display",
              },
              value: "Parametros",
            },
            {
              language: "zh",
              use: {
                system:
                  "http://terminology.hl7.org/CodeSystem/designation-usage",
                code: "display",
              },
              value: "参数",
            },
          ],
        },
      ],
    },
  ],
};
