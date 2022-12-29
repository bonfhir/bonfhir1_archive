/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  Account,
  ActivityDefinition,
  Address,
  AdministrableProductDefinition,
  AdverseEvent,
  AllergyIntolerance,
  Annotation,
  Appointment,
  AppointmentResponse,
  Attachment,
  AuditEvent,
  Basic,
  BiologicallyDerivedProduct,
  BodyStructure,
  CapabilityStatement,
  CarePlan,
  CareTeam,
  CatalogEntry,
  ChargeItem,
  ChargeItemDefinition,
  Citation,
  Claim,
  ClaimResponse,
  ClinicalImpression,
  ClinicalUseDefinition,
  CodeableConcept,
  CodeableReference,
  CodeSystem,
  Coding,
  Communication,
  CommunicationRequest,
  CompartmentDefinition,
  Composition,
  ConceptMap,
  Condition,
  Consent,
  ContactDetail,
  ContactPoint,
  Contract,
  Contributor,
  Coverage,
  CoverageEligibilityRequest,
  CoverageEligibilityResponse,
  DataRequirement,
  DetectedIssue,
  Device,
  DeviceDefinition,
  DeviceMetric,
  DeviceRequest,
  DeviceUseStatement,
  DiagnosticReport,
  DocumentManifest,
  DocumentReference,
  ElementDefinitionType,
  Encounter,
  Endpoint,
  EnrollmentRequest,
  EnrollmentResponse,
  EpisodeOfCare,
  EventDefinition,
  Evidence,
  EvidenceReport,
  EvidenceVariable,
  ExampleScenario,
  ExplanationOfBenefit,
  Expression,
  Extension,
  FamilyMemberHistory,
  FhirResource,
  Flag,
  Goal,
  GraphDefinition,
  Group,
  GuidanceResponse,
  HealthcareService,
  HumanName,
  Identifier,
  ImagingStudy,
  Immunization,
  ImmunizationEvaluation,
  ImmunizationRecommendation,
  ImplementationGuide,
  Ingredient,
  InsurancePlan,
  Invoice,
  Library,
  Linkage,
  List,
  Location,
  ManufacturedItemDefinition,
  Measure,
  MeasureReport,
  Media,
  Medication,
  MedicationAdministration,
  MedicationDispense,
  MedicationKnowledge,
  MedicationRequest,
  MedicationStatement,
  MedicinalProductDefinition,
  MessageDefinition,
  MessageHeader,
  Meta,
  MolecularSequence,
  Money,
  NamingSystem,
  Narrative,
  NutritionOrder,
  NutritionProduct,
  Observation,
  ObservationDefinition,
  OperationDefinition,
  OperationOutcome,
  Organization,
  OrganizationAffiliation,
  PackagedProductDefinition,
  ParameterDefinition,
  Patient,
  PaymentNotice,
  PaymentReconciliation,
  Period,
  Person,
  PlanDefinition,
  Practitioner,
  PractitionerRole,
  Procedure,
  Provenance,
  Quantity,
  Questionnaire,
  QuestionnaireResponse,
  Range,
  Ratio,
  RatioRange,
  Reference,
  RegulatedAuthorization,
  RelatedArtifact,
  RelatedPerson,
  RequestGroup,
  ResearchDefinition,
  ResearchElementDefinition,
  ResearchStudy,
  ResearchSubject,
  RiskAssessment,
  SampledData,
  Schedule,
  SearchParameter,
  ServiceRequest,
  Signature,
  Slot,
  Specimen,
  SpecimenDefinition,
  StructureDefinition,
  StructureMap,
  Subscription,
  SubscriptionStatus,
  SubscriptionTopic,
  Substance,
  SubstanceDefinition,
  SupplyDelivery,
  SupplyRequest,
  Task,
  TerminologyCapabilities,
  TestReport,
  TestScript,
  TriggerDefinition,
  UsageContext,
  ValueSet,
  VerificationResult,
  VisionPrescription,
} from "fhir/r4";

export function narrative<TResourceType extends FhirResource>(
  resource: TResourceType
): Narrative {
  switch (resource.resourceType) {
    case "Account":
      return narrativeAccount(resource);
    case "ActivityDefinition":
      return narrativeActivityDefinition(resource);
    case "AdministrableProductDefinition":
      return narrativeAdministrableProductDefinition(resource);
    case "AdverseEvent":
      return narrativeAdverseEvent(resource);
    case "AllergyIntolerance":
      return narrativeAllergyIntolerance(resource);
    case "Appointment":
      return narrativeAppointment(resource);
    case "AppointmentResponse":
      return narrativeAppointmentResponse(resource);
    case "AuditEvent":
      return narrativeAuditEvent(resource);
    case "Basic":
      return narrativeBasic(resource);
    case "BiologicallyDerivedProduct":
      return narrativeBiologicallyDerivedProduct(resource);
    case "BodyStructure":
      return narrativeBodyStructure(resource);
    case "CapabilityStatement":
      return narrativeCapabilityStatement(resource);
    case "CarePlan":
      return narrativeCarePlan(resource);
    case "CareTeam":
      return narrativeCareTeam(resource);
    case "CatalogEntry":
      return narrativeCatalogEntry(resource);
    case "ChargeItem":
      return narrativeChargeItem(resource);
    case "ChargeItemDefinition":
      return narrativeChargeItemDefinition(resource);
    case "Citation":
      return narrativeCitation(resource);
    case "Claim":
      return narrativeClaim(resource);
    case "ClaimResponse":
      return narrativeClaimResponse(resource);
    case "ClinicalImpression":
      return narrativeClinicalImpression(resource);
    case "ClinicalUseDefinition":
      return narrativeClinicalUseDefinition(resource);
    case "CodeSystem":
      return narrativeCodeSystem(resource);
    case "Communication":
      return narrativeCommunication(resource);
    case "CommunicationRequest":
      return narrativeCommunicationRequest(resource);
    case "CompartmentDefinition":
      return narrativeCompartmentDefinition(resource);
    case "Composition":
      return narrativeComposition(resource);
    case "ConceptMap":
      return narrativeConceptMap(resource);
    case "Condition":
      return narrativeCondition(resource);
    case "Consent":
      return narrativeConsent(resource);
    case "Contract":
      return narrativeContract(resource);
    case "Coverage":
      return narrativeCoverage(resource);
    case "CoverageEligibilityRequest":
      return narrativeCoverageEligibilityRequest(resource);
    case "CoverageEligibilityResponse":
      return narrativeCoverageEligibilityResponse(resource);
    case "DetectedIssue":
      return narrativeDetectedIssue(resource);
    case "Device":
      return narrativeDevice(resource);
    case "DeviceDefinition":
      return narrativeDeviceDefinition(resource);
    case "DeviceMetric":
      return narrativeDeviceMetric(resource);
    case "DeviceRequest":
      return narrativeDeviceRequest(resource);
    case "DeviceUseStatement":
      return narrativeDeviceUseStatement(resource);
    case "DiagnosticReport":
      return narrativeDiagnosticReport(resource);
    case "DocumentManifest":
      return narrativeDocumentManifest(resource);
    case "DocumentReference":
      return narrativeDocumentReference(resource);
    case "Encounter":
      return narrativeEncounter(resource);
    case "Endpoint":
      return narrativeEndpoint(resource);
    case "EnrollmentRequest":
      return narrativeEnrollmentRequest(resource);
    case "EnrollmentResponse":
      return narrativeEnrollmentResponse(resource);
    case "EpisodeOfCare":
      return narrativeEpisodeOfCare(resource);
    case "EventDefinition":
      return narrativeEventDefinition(resource);
    case "Evidence":
      return narrativeEvidence(resource);
    case "EvidenceReport":
      return narrativeEvidenceReport(resource);
    case "EvidenceVariable":
      return narrativeEvidenceVariable(resource);
    case "ExampleScenario":
      return narrativeExampleScenario(resource);
    case "ExplanationOfBenefit":
      return narrativeExplanationOfBenefit(resource);
    case "FamilyMemberHistory":
      return narrativeFamilyMemberHistory(resource);
    case "Flag":
      return narrativeFlag(resource);
    case "Goal":
      return narrativeGoal(resource);
    case "GraphDefinition":
      return narrativeGraphDefinition(resource);
    case "Group":
      return narrativeGroup(resource);
    case "GuidanceResponse":
      return narrativeGuidanceResponse(resource);
    case "HealthcareService":
      return narrativeHealthcareService(resource);
    case "ImagingStudy":
      return narrativeImagingStudy(resource);
    case "Immunization":
      return narrativeImmunization(resource);
    case "ImmunizationEvaluation":
      return narrativeImmunizationEvaluation(resource);
    case "ImmunizationRecommendation":
      return narrativeImmunizationRecommendation(resource);
    case "ImplementationGuide":
      return narrativeImplementationGuide(resource);
    case "Ingredient":
      return narrativeIngredient(resource);
    case "InsurancePlan":
      return narrativeInsurancePlan(resource);
    case "Invoice":
      return narrativeInvoice(resource);
    case "Library":
      return narrativeLibrary(resource);
    case "Linkage":
      return narrativeLinkage(resource);
    case "List":
      return narrativeList(resource);
    case "Location":
      return narrativeLocation(resource);
    case "ManufacturedItemDefinition":
      return narrativeManufacturedItemDefinition(resource);
    case "Measure":
      return narrativeMeasure(resource);
    case "MeasureReport":
      return narrativeMeasureReport(resource);
    case "Media":
      return narrativeMedia(resource);
    case "Medication":
      return narrativeMedication(resource);
    case "MedicationAdministration":
      return narrativeMedicationAdministration(resource);
    case "MedicationDispense":
      return narrativeMedicationDispense(resource);
    case "MedicationKnowledge":
      return narrativeMedicationKnowledge(resource);
    case "MedicationRequest":
      return narrativeMedicationRequest(resource);
    case "MedicationStatement":
      return narrativeMedicationStatement(resource);
    case "MedicinalProductDefinition":
      return narrativeMedicinalProductDefinition(resource);
    case "MessageDefinition":
      return narrativeMessageDefinition(resource);
    case "MessageHeader":
      return narrativeMessageHeader(resource);
    case "MolecularSequence":
      return narrativeMolecularSequence(resource);
    case "NamingSystem":
      return narrativeNamingSystem(resource);
    case "NutritionOrder":
      return narrativeNutritionOrder(resource);
    case "NutritionProduct":
      return narrativeNutritionProduct(resource);
    case "Observation":
      return narrativeObservation(resource);
    case "ObservationDefinition":
      return narrativeObservationDefinition(resource);
    case "OperationDefinition":
      return narrativeOperationDefinition(resource);
    case "OperationOutcome":
      return narrativeOperationOutcome(resource);
    case "Organization":
      return narrativeOrganization(resource);
    case "OrganizationAffiliation":
      return narrativeOrganizationAffiliation(resource);
    case "PackagedProductDefinition":
      return narrativePackagedProductDefinition(resource);
    case "Patient":
      return narrativePatient(resource);
    case "PaymentNotice":
      return narrativePaymentNotice(resource);
    case "PaymentReconciliation":
      return narrativePaymentReconciliation(resource);
    case "Person":
      return narrativePerson(resource);
    case "PlanDefinition":
      return narrativePlanDefinition(resource);
    case "Practitioner":
      return narrativePractitioner(resource);
    case "PractitionerRole":
      return narrativePractitionerRole(resource);
    case "Procedure":
      return narrativeProcedure(resource);
    case "Provenance":
      return narrativeProvenance(resource);
    case "Questionnaire":
      return narrativeQuestionnaire(resource);
    case "QuestionnaireResponse":
      return narrativeQuestionnaireResponse(resource);
    case "RegulatedAuthorization":
      return narrativeRegulatedAuthorization(resource);
    case "RelatedPerson":
      return narrativeRelatedPerson(resource);
    case "RequestGroup":
      return narrativeRequestGroup(resource);
    case "ResearchDefinition":
      return narrativeResearchDefinition(resource);
    case "ResearchElementDefinition":
      return narrativeResearchElementDefinition(resource);
    case "ResearchStudy":
      return narrativeResearchStudy(resource);
    case "ResearchSubject":
      return narrativeResearchSubject(resource);
    case "RiskAssessment":
      return narrativeRiskAssessment(resource);
    case "Schedule":
      return narrativeSchedule(resource);
    case "SearchParameter":
      return narrativeSearchParameter(resource);
    case "ServiceRequest":
      return narrativeServiceRequest(resource);
    case "Slot":
      return narrativeSlot(resource);
    case "Specimen":
      return narrativeSpecimen(resource);
    case "SpecimenDefinition":
      return narrativeSpecimenDefinition(resource);
    case "StructureDefinition":
      return narrativeStructureDefinition(resource);
    case "StructureMap":
      return narrativeStructureMap(resource);
    case "Subscription":
      return narrativeSubscription(resource);
    case "SubscriptionStatus":
      return narrativeSubscriptionStatus(resource);
    case "SubscriptionTopic":
      return narrativeSubscriptionTopic(resource);
    case "Substance":
      return narrativeSubstance(resource);
    case "SubstanceDefinition":
      return narrativeSubstanceDefinition(resource);
    case "SupplyDelivery":
      return narrativeSupplyDelivery(resource);
    case "SupplyRequest":
      return narrativeSupplyRequest(resource);
    case "Task":
      return narrativeTask(resource);
    case "TerminologyCapabilities":
      return narrativeTerminologyCapabilities(resource);
    case "TestReport":
      return narrativeTestReport(resource);
    case "TestScript":
      return narrativeTestScript(resource);
    case "ValueSet":
      return narrativeValueSet(resource);
    case "VerificationResult":
      return narrativeVerificationResult(resource);
    case "VisionPrescription":
      return narrativeVisionPrescription(resource);
    default:
      throw new Error(
        `Unsupported narrative for resource type ${resource.resourceType}`
      );
  }
}

function narrativeAccount(resource: Account): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Location",
          "http://hl7.org/fhir/StructureDefinition/HealthcareService",
          "http://hl7.org/fhir/StructureDefinition/Organization",
        ],
      },
    },
    {
      attr: "Service Period",
      value: resource.servicePeriod,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Coverage",
      value: resource.coverage,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Owner",
      value: resource.owner,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "string" },
    },
  ]);
}

function narrativeActivityDefinition(resource: ActivityDefinition): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Effective Period",
      value: resource.effectivePeriod,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Kind",
      value: resource.kind,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Do Not Perform",
      value: resource.doNotPerform,
      max: "1",
      type: { code: "boolean" },
    },
  ]);
}

function narrativeAdministrableProductDefinition(
  resource: AdministrableProductDefinition
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Form Of",
      value: resource.formOf,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition",
        ],
      },
    },
    {
      attr: "Administrable Dose Form",
      value: resource.administrableDoseForm,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Unit Of Presentation",
      value: resource.unitOfPresentation,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Produced From",
      value: resource.producedFrom,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition",
        ],
      },
    },
    {
      attr: "Ingredient",
      value: resource.ingredient,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Device",
      value: resource.device,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/DeviceDefinition",
        ],
      },
    },
    {
      attr: "Property",
      value: resource.property,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Route Of Administration",
      value: resource.routeOfAdministration,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeAdverseEvent(resource: AdverseEvent): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "1",
      type: { code: "Identifier" },
    },
    {
      attr: "Actuality",
      value: resource.actuality,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Event",
      value: resource.event,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Detected",
      value: resource.detected,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Recorded Date",
      value: resource.recordedDate,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Resulting Condition",
      value: resource.resultingCondition,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Condition"],
      },
    },
    {
      attr: "Location",
      value: resource.location,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Location"],
      },
    },
    {
      attr: "Seriousness",
      value: resource.seriousness,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Severity",
      value: resource.severity,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Outcome",
      value: resource.outcome,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Recorder",
      value: resource.recorder,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
    {
      attr: "Contributor",
      value: resource.contributor,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Device",
        ],
      },
    },
    {
      attr: "Suspect Entity",
      value: resource.suspectEntity,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Subject Medical History",
      value: resource.subjectMedicalHistory,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Condition",
          "http://hl7.org/fhir/StructureDefinition/Observation",
          "http://hl7.org/fhir/StructureDefinition/AllergyIntolerance",
          "http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory",
          "http://hl7.org/fhir/StructureDefinition/Immunization",
          "http://hl7.org/fhir/StructureDefinition/Procedure",
          "http://hl7.org/fhir/StructureDefinition/Media",
          "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        ],
      },
    },
    {
      attr: "Reference Document",
      value: resource.referenceDocument,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        ],
      },
    },
    {
      attr: "Study",
      value: resource.study,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ResearchStudy",
        ],
      },
    },
  ]);
}

function narrativeAllergyIntolerance(resource: AllergyIntolerance): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Clinical Status",
      value: resource.clinicalStatus,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Verification Status",
      value: resource.verificationStatus,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "*",
      type: { code: "code" },
    },
    {
      attr: "Criticality",
      value: resource.criticality,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Patient",
      value: resource.patient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
    {
      attr: "Asserter",
      value: resource.asserter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
      },
    },
  ]);
}

function narrativeAppointment(resource: Appointment): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Cancelation Reason",
      value: resource.cancelationReason,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Service Category",
      value: resource.serviceCategory,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Service Type",
      value: resource.serviceType,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Specialty",
      value: resource.specialty,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Appointment Type",
      value: resource.appointmentType,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Reason Code",
      value: resource.reasonCode,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Start",
      value: resource.start,
      max: "1",
      type: { code: "instant" },
    },
    {
      attr: "End",
      value: resource.end,
      max: "1",
      type: { code: "instant" },
    },
  ]);
}

function narrativeAppointmentResponse(
  resource: AppointmentResponse
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Appointment",
      value: resource.appointment,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Appointment"],
      },
    },
    {
      attr: "Participant Type",
      value: resource.participantType,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Actor",
      value: resource.actor,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/HealthcareService",
          "http://hl7.org/fhir/StructureDefinition/Location",
        ],
      },
    },
    {
      attr: "Participant Status",
      value: resource.participantStatus,
      max: "1",
      type: { code: "code" },
    },
  ]);
}

function narrativeAuditEvent(resource: AuditEvent): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "Coding" },
    },
    {
      attr: "Subtype",
      value: resource.subtype,
      max: "*",
      type: { code: "Coding" },
    },
    {
      attr: "Action",
      value: resource.action,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Recorded",
      value: resource.recorded,
      max: "1",
      type: { code: "instant" },
    },
    {
      attr: "Outcome",
      value: resource.outcome,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Outcome Desc",
      value: resource.outcomeDesc,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Purpose Of Event",
      value: resource.purposeOfEvent,
      max: "*",
      type: { code: "CodeableConcept" },
    },
  ]);
}

function narrativeBasic(resource: Basic): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
    {
      attr: "Created",
      value: resource.created,
      max: "1",
      type: { code: "date" },
    },
    {
      attr: "Author",
      value: resource.author,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/Organization",
        ],
      },
    },
  ]);
}

function narrativeBiologicallyDerivedProduct(
  resource: BiologicallyDerivedProduct
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
  ]);
}

function narrativeBodyStructure(resource: BodyStructure): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Active",
      value: resource.active,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Morphology",
      value: resource.morphology,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Location",
      value: resource.location,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Patient",
      value: resource.patient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
  ]);
}

function narrativeCapabilityStatement(
  resource: CapabilityStatement
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Kind",
      value: resource.kind,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Instantiates",
      value: resource.instantiates,
      max: "*",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/CapabilityStatement",
        ],
      },
    },
    {
      attr: "Imports",
      value: resource.imports,
      max: "*",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/CapabilityStatement",
        ],
      },
    },
    {
      attr: "Software",
      value: resource.software,
      max: "1",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Implementation",
      value: resource.implementation,
      max: "1",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Fhir Version",
      value: resource.fhirVersion,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Format",
      value: resource.format,
      max: "*",
      type: { code: "code" },
    },
    {
      attr: "Patch Format",
      value: resource.patchFormat,
      max: "*",
      type: { code: "code" },
    },
    {
      attr: "Implementation Guide",
      value: resource.implementationGuide,
      max: "*",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ImplementationGuide",
        ],
      },
    },
    {
      attr: "Rest",
      value: resource.rest,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Messaging",
      value: resource.messaging,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Document",
      value: resource.document,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeCarePlan(resource: CarePlan): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Instantiates Canonical",
      value: resource.instantiatesCanonical,
      max: "*",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
          "http://hl7.org/fhir/StructureDefinition/Questionnaire",
          "http://hl7.org/fhir/StructureDefinition/Measure",
          "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
          "http://hl7.org/fhir/StructureDefinition/OperationDefinition",
        ],
      },
    },
    {
      attr: "Instantiates Uri",
      value: resource.instantiatesUri,
      max: "*",
      type: { code: "uri" },
    },
    {
      attr: "Based On",
      value: resource.basedOn,
      max: "*",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-hierarchy",
            valueBoolean: true,
          },
        ],
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/CarePlan"],
      },
    },
    {
      attr: "Replaces",
      value: resource.replaces,
      max: "*",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-hierarchy",
            valueBoolean: true,
          },
        ],
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/CarePlan"],
      },
    },
    {
      attr: "Part Of",
      value: resource.partOf,
      max: "*",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-hierarchy",
            valueBoolean: true,
          },
        ],
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/CarePlan"],
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Intent",
      value: resource.intent,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
      },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Period",
      value: resource.period,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Created",
      value: resource.created,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Author",
      value: resource.author,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/CareTeam",
        ],
      },
    },
    {
      attr: "Addresses",
      value: resource.addresses,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Condition"],
      },
    },
  ]);
}

function narrativeCareTeam(resource: CareTeam): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
      },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Period",
      value: resource.period,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Managing Organization",
      value: resource.managingOrganization,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
  ]);
}

function narrativeCatalogEntry(resource: CatalogEntry): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Orderable",
      value: resource.orderable,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Referenced Item",
      value: resource.referencedItem,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Medication",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/HealthcareService",
          "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
          "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
          "http://hl7.org/fhir/StructureDefinition/SpecimenDefinition",
          "http://hl7.org/fhir/StructureDefinition/ObservationDefinition",
          "http://hl7.org/fhir/StructureDefinition/Binary",
        ],
      },
    },
  ]);
}

function narrativeChargeItem(resource: ChargeItem): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
      },
    },
    {
      attr: "Context",
      value: resource.context,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Encounter",
          "http://hl7.org/fhir/StructureDefinition/EpisodeOfCare",
        ],
      },
    },
    {
      attr: "Quantity",
      value: resource.quantity,
      max: "1",
      type: { code: "Quantity" },
    },
    {
      attr: "Bodysite",
      value: resource.bodysite,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Enterer",
      value: resource.enterer,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
    {
      attr: "Entered Date",
      value: resource.enteredDate,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Account",
      value: resource.account,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Account"],
      },
    },
  ]);
}

function narrativeChargeItemDefinition(
  resource: ChargeItemDefinition
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Derived From Uri",
      value: resource.derivedFromUri,
      max: "*",
      type: { code: "uri" },
    },
    {
      attr: "Part Of",
      value: resource.partOf,
      max: "*",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition",
        ],
      },
    },
    {
      attr: "Replaces",
      value: resource.replaces,
      max: "*",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition",
        ],
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Effective Period",
      value: resource.effectivePeriod,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
  ]);
}

function narrativeCitation(resource: Citation): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Effective Period",
      value: resource.effectivePeriod,
      max: "1",
      type: { code: "Period" },
    },
  ]);
}

function narrativeClaim(resource: Claim): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Use",
      value: resource.use,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Patient",
      value: resource.patient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
    {
      attr: "Billable Period",
      value: resource.billablePeriod,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Created",
      value: resource.created,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Insurer",
      value: resource.insurer,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Provider",
      value: resource.provider,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
        ],
      },
    },
    {
      attr: "Priority",
      value: resource.priority,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Insurance",
      value: resource.insurance,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeClaimResponse(resource: ClaimResponse): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Use",
      value: resource.use,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Patient",
      value: resource.patient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
    {
      attr: "Created",
      value: resource.created,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Insurer",
      value: resource.insurer,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Request",
      value: resource.request,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Claim"],
      },
    },
    {
      attr: "Outcome",
      value: resource.outcome,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Total",
      value: resource.total,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeClinicalImpression(resource: ClinicalImpression): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
      },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Assessor",
      value: resource.assessor,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
      },
    },
    {
      attr: "Problem",
      value: resource.problem,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Condition",
          "http://hl7.org/fhir/StructureDefinition/AllergyIntolerance",
        ],
      },
    },
  ]);
}

function narrativeClinicalUseDefinition(
  resource: ClinicalUseDefinition
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition",
          "http://hl7.org/fhir/StructureDefinition/Medication",
          "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
          "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/DeviceDefinition",
          "http://hl7.org/fhir/StructureDefinition/Substance",
        ],
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Contraindication",
      value: resource.contraindication,
      max: "1",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Indication",
      value: resource.indication,
      max: "1",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Interaction",
      value: resource.interaction,
      max: "1",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Population",
      value: resource.population,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Group"],
      },
    },
    {
      attr: "Undesirable Effect",
      value: resource.undesirableEffect,
      max: "1",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Warning",
      value: resource.warning,
      max: "1",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeCodeSystem(resource: CodeSystem): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Case Sensitive",
      value: resource.caseSensitive,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Value Set",
      value: resource.valueSet,
      max: "1",
      type: {
        code: "canonical",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/ValueSet"],
      },
    },
    {
      attr: "Hierarchy Meaning",
      value: resource.hierarchyMeaning,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Compositional",
      value: resource.compositional,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Version Needed",
      value: resource.versionNeeded,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Content",
      value: resource.content,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Supplements",
      value: resource.supplements,
      max: "1",
      type: {
        code: "canonical",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/CodeSystem"],
      },
    },
    {
      attr: "Count",
      value: resource.count,
      max: "1",
      type: { code: "unsignedInt" },
    },
    {
      attr: "Filter",
      value: resource.filter,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Property",
      value: resource.property,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeCommunication(resource: Communication): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Instantiates Canonical",
      value: resource.instantiatesCanonical,
      max: "*",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
          "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
          "http://hl7.org/fhir/StructureDefinition/Measure",
          "http://hl7.org/fhir/StructureDefinition/OperationDefinition",
          "http://hl7.org/fhir/StructureDefinition/Questionnaire",
        ],
      },
    },
    {
      attr: "Instantiates Uri",
      value: resource.instantiatesUri,
      max: "*",
      type: { code: "uri" },
    },
    {
      attr: "Based On",
      value: resource.basedOn,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
    {
      attr: "Part Of",
      value: resource.partOf,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Status Reason",
      value: resource.statusReason,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Priority",
      value: resource.priority,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
      },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Reason Code",
      value: resource.reasonCode,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Reason Reference",
      value: resource.reasonReference,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Condition",
          "http://hl7.org/fhir/StructureDefinition/Observation",
          "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
          "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        ],
      },
    },
  ]);
}

function narrativeCommunicationRequest(
  resource: CommunicationRequest
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Based On",
      value: resource.basedOn,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
    {
      attr: "Replaces",
      value: resource.replaces,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/CommunicationRequest",
        ],
      },
    },
    {
      attr: "Group Identifier",
      value: resource.groupIdentifier,
      max: "1",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Priority",
      value: resource.priority,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Do Not Perform",
      value: resource.doNotPerform,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Authored On",
      value: resource.authoredOn,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Requester",
      value: resource.requester,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/Device",
        ],
      },
    },
    {
      attr: "Sender",
      value: resource.sender,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/HealthcareService",
        ],
      },
    },
    {
      attr: "Reason Code",
      value: resource.reasonCode,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Reason Reference",
      value: resource.reasonReference,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Condition",
          "http://hl7.org/fhir/StructureDefinition/Observation",
          "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
          "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        ],
      },
    },
  ]);
}

function narrativeCompartmentDefinition(
  resource: CompartmentDefinition
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Search",
      value: resource.search,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Resource",
      value: resource.resource,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeComposition(resource: Composition): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "1",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Author",
      value: resource.author,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/Organization",
        ],
      },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Confidentiality",
      value: resource.confidentiality,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Custodian",
      value: resource.custodian,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Event",
      value: resource.event,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeConceptMap(resource: ConceptMap): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "1",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
  ]);
}

function narrativeCondition(resource: Condition): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Clinical Status",
      value: resource.clinicalStatus,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Verification Status",
      value: resource.verificationStatus,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Body Site",
      value: resource.bodySite,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
      },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Recorded Date",
      value: resource.recordedDate,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Recorder",
      value: resource.recorder,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
    {
      attr: "Asserter",
      value: resource.asserter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
  ]);
}

function narrativeConsent(resource: Consent): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Scope",
      value: resource.scope,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Patient",
      value: resource.patient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
    {
      attr: "Date Time",
      value: resource.dateTime,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Performer",
      value: resource.performer,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
      },
    },
    {
      attr: "Organization",
      value: resource.organization,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Policy Rule",
      value: resource.policyRule,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Verification",
      value: resource.verification,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Provision",
      value: resource.provision,
      max: "1",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeContract(resource: Contract): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Issued",
      value: resource.issued,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Applies",
      value: resource.applies,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Sub Type",
      value: resource.subType,
      max: "*",
      type: { code: "CodeableConcept" },
    },
  ]);
}

function narrativeCoverage(resource: Coverage): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Policy Holder",
      value: resource.policyHolder,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/Organization",
        ],
      },
    },
    {
      attr: "Subscriber",
      value: resource.subscriber,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
    {
      attr: "Subscriber Id",
      value: resource.subscriberId,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Beneficiary",
      value: resource.beneficiary,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
    {
      attr: "Dependent",
      value: resource.dependent,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Period",
      value: resource.period,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Payor",
      value: resource.payor,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
    {
      attr: "Order",
      value: resource.order,
      max: "1",
      type: { code: "positiveInt" },
    },
    {
      attr: "Network",
      value: resource.network,
      max: "1",
      type: { code: "string" },
    },
  ]);
}

function narrativeCoverageEligibilityRequest(
  resource: CoverageEligibilityRequest
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Purpose",
      value: resource.purpose,
      max: "*",
      type: { code: "code" },
    },
    {
      attr: "Patient",
      value: resource.patient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
    {
      attr: "Created",
      value: resource.created,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Insurer",
      value: resource.insurer,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
  ]);
}

function narrativeCoverageEligibilityResponse(
  resource: CoverageEligibilityResponse
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Purpose",
      value: resource.purpose,
      max: "*",
      type: { code: "code" },
    },
    {
      attr: "Patient",
      value: resource.patient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
    {
      attr: "Created",
      value: resource.created,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Request",
      value: resource.request,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest",
        ],
      },
    },
    {
      attr: "Outcome",
      value: resource.outcome,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Insurer",
      value: resource.insurer,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
  ]);
}

function narrativeDetectedIssue(resource: DetectedIssue): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Severity",
      value: resource.severity,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Patient",
      value: resource.patient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
    {
      attr: "Author",
      value: resource.author,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Device",
        ],
      },
    },
    {
      attr: "Implicated",
      value: resource.implicated,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
  ]);
}

function narrativeDevice(resource: Device): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Udi Carrier",
      value: resource.udiCarrier,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Safety",
      value: resource.safety,
      max: "*",
      type: { code: "CodeableConcept" },
    },
  ]);
}

function narrativeDeviceDefinition(resource: DeviceDefinition): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Safety",
      value: resource.safety,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Parent Device",
      value: resource.parentDevice,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/DeviceDefinition",
        ],
      },
    },
  ]);
}

function narrativeDeviceMetric(resource: DeviceMetric): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Unit",
      value: resource.unit,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Source",
      value: resource.source,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Device"],
      },
    },
    {
      attr: "Parent",
      value: resource.parent,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Device"],
      },
    },
    {
      attr: "Operational Status",
      value: resource.operationalStatus,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Color",
      value: resource.color,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Measurement Period",
      value: resource.measurementPeriod,
      max: "1",
      type: { code: "Timing" },
    },
    {
      attr: "Calibration",
      value: resource.calibration,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeDeviceRequest(resource: DeviceRequest): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Instantiates Canonical",
      value: resource.instantiatesCanonical,
      max: "*",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
          "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
        ],
      },
    },
    {
      attr: "Instantiates Uri",
      value: resource.instantiatesUri,
      max: "*",
      type: { code: "uri" },
    },
    {
      attr: "Based On",
      value: resource.basedOn,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
    {
      attr: "Prior Request",
      value: resource.priorRequest,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
    {
      attr: "Group Identifier",
      value: resource.groupIdentifier,
      max: "1",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Intent",
      value: resource.intent,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Priority",
      value: resource.priority,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/Location",
          "http://hl7.org/fhir/StructureDefinition/Device",
        ],
      },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Authored On",
      value: resource.authoredOn,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Requester",
      value: resource.requester,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
        ],
      },
    },
    {
      attr: "Performer Type",
      value: resource.performerType,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Performer",
      value: resource.performer,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/CareTeam",
          "http://hl7.org/fhir/StructureDefinition/HealthcareService",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
    {
      attr: "Reason Code",
      value: resource.reasonCode,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Reason Reference",
      value: resource.reasonReference,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Condition",
          "http://hl7.org/fhir/StructureDefinition/Observation",
          "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
          "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        ],
      },
    },
  ]);
}

function narrativeDeviceUseStatement(resource: DeviceUseStatement): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Based On",
      value: resource.basedOn,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
        ],
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
      },
    },
    {
      attr: "Derived From",
      value: resource.derivedFrom,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
          "http://hl7.org/fhir/StructureDefinition/Procedure",
          "http://hl7.org/fhir/StructureDefinition/Claim",
          "http://hl7.org/fhir/StructureDefinition/Observation",
          "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
          "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        ],
      },
    },
    {
      attr: "Recorded On",
      value: resource.recordedOn,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Source",
      value: resource.source,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
    {
      attr: "Device",
      value: resource.device,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Device"],
      },
    },
    {
      attr: "Reason Code",
      value: resource.reasonCode,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Reason Reference",
      value: resource.reasonReference,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Condition",
          "http://hl7.org/fhir/StructureDefinition/Observation",
          "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
          "http://hl7.org/fhir/StructureDefinition/DocumentReference",
          "http://hl7.org/fhir/StructureDefinition/Media",
        ],
      },
    },
    {
      attr: "Body Site",
      value: resource.bodySite,
      max: "1",
      type: { code: "CodeableConcept" },
    },
  ]);
}

function narrativeDiagnosticReport(resource: DiagnosticReport): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Location",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Procedure",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/Medication",
          "http://hl7.org/fhir/StructureDefinition/Substance",
        ],
      },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Issued",
      value: resource.issued,
      max: "1",
      type: { code: "instant" },
    },
    {
      attr: "Performer",
      value: resource.performer,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/CareTeam",
        ],
      },
    },
    {
      attr: "Results Interpreter",
      value: resource.resultsInterpreter,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/CareTeam",
        ],
      },
    },
    {
      attr: "Media",
      value: resource.media,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeDocumentManifest(resource: DocumentManifest): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Master Identifier",
      value: resource.masterIdentifier,
      max: "1",
      type: { code: "Identifier" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/Device",
        ],
      },
    },
    {
      attr: "Author",
      value: resource.author,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Content",
      value: resource.content,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
  ]);
}

function narrativeDocumentReference(resource: DocumentReference): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Master Identifier",
      value: resource.masterIdentifier,
      max: "1",
      type: { code: "Identifier" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Doc Status",
      value: resource.docStatus,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/Device",
        ],
      },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "instant" },
    },
    {
      attr: "Author",
      value: resource.author,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
    {
      attr: "Relates To",
      value: resource.relatesTo,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Security Label",
      value: resource.securityLabel,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Content",
      value: resource.content,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Context",
      value: resource.context,
      max: "1",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeEncounter(resource: Encounter): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Class",
      value: resource.class,
      max: "1",
      type: { code: "Coding" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Service Type",
      value: resource.serviceType,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
      },
    },
    {
      attr: "Episode Of Care",
      value: resource.episodeOfCare,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/EpisodeOfCare",
        ],
      },
    },
    {
      attr: "Participant",
      value: resource.participant,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Appointment",
      value: resource.appointment,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Appointment"],
      },
    },
    {
      attr: "Reason Code",
      value: resource.reasonCode,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Reason Reference",
      value: resource.reasonReference,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Condition",
          "http://hl7.org/fhir/StructureDefinition/Procedure",
          "http://hl7.org/fhir/StructureDefinition/Observation",
          "http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
        ],
      },
    },
    {
      attr: "Diagnosis",
      value: resource.diagnosis,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeEndpoint(resource: Endpoint): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Connection Type",
      value: resource.connectionType,
      max: "1",
      type: { code: "Coding" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Managing Organization",
      value: resource.managingOrganization,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Period",
      value: resource.period,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Payload Type",
      value: resource.payloadType,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Payload Mime Type",
      value: resource.payloadMimeType,
      max: "*",
      type: { code: "code" },
    },
    {
      attr: "Address",
      value: resource.address,
      max: "1",
      type: { code: "url" },
    },
  ]);
}

function narrativeEnrollmentRequest(resource: EnrollmentRequest): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
  ]);
}

function narrativeEnrollmentResponse(resource: EnrollmentResponse): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
  ]);
}

function narrativeEpisodeOfCare(resource: EpisodeOfCare): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Diagnosis",
      value: resource.diagnosis,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Patient",
      value: resource.patient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
    {
      attr: "Managing Organization",
      value: resource.managingOrganization,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Period",
      value: resource.period,
      max: "1",
      type: { code: "Period" },
    },
  ]);
}

function narrativeEventDefinition(resource: EventDefinition): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Approval Date",
      value: resource.approvalDate,
      max: "1",
      type: { code: "date" },
    },
    {
      attr: "Last Review Date",
      value: resource.lastReviewDate,
      max: "1",
      type: { code: "date" },
    },
    {
      attr: "Effective Period",
      value: resource.effectivePeriod,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Trigger",
      value: resource.trigger,
      max: "*",
      type: { code: "TriggerDefinition" },
    },
  ]);
}

function narrativeEvidence(resource: Evidence): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Author",
      value: resource.author,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Endorser",
      value: resource.endorser,
      max: "*",
      type: { code: "ContactDetail" },
    },
  ]);
}

function narrativeEvidenceReport(resource: EvidenceReport): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Related Identifier",
      value: resource.relatedIdentifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Author",
      value: resource.author,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Endorser",
      value: resource.endorser,
      max: "*",
      type: { code: "ContactDetail" },
    },
  ]);
}

function narrativeEvidenceVariable(resource: EvidenceVariable): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Short Title",
      value: resource.shortTitle,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Characteristic",
      value: resource.characteristic,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Handling",
      value: resource.handling,
      max: "1",
      type: { code: "code" },
    },
  ]);
}

function narrativeExampleScenario(resource: ExampleScenario): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
  ]);
}

function narrativeExplanationOfBenefit(
  resource: ExplanationOfBenefit
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Use",
      value: resource.use,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Patient",
      value: resource.patient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
    {
      attr: "Billable Period",
      value: resource.billablePeriod,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Created",
      value: resource.created,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Insurer",
      value: resource.insurer,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Provider",
      value: resource.provider,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
        ],
      },
    },
    {
      attr: "Outcome",
      value: resource.outcome,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Insurance",
      value: resource.insurance,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Total",
      value: resource.total,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeFamilyMemberHistory(
  resource: FamilyMemberHistory
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Instantiates Canonical",
      value: resource.instantiatesCanonical,
      max: "*",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
          "http://hl7.org/fhir/StructureDefinition/Questionnaire",
          "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
          "http://hl7.org/fhir/StructureDefinition/Measure",
          "http://hl7.org/fhir/StructureDefinition/OperationDefinition",
        ],
      },
    },
    {
      attr: "Instantiates Uri",
      value: resource.instantiatesUri,
      max: "*",
      type: { code: "uri" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Data Absent Reason",
      value: resource.dataAbsentReason,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Patient",
      value: resource.patient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Relationship",
      value: resource.relationship,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Sex",
      value: resource.sex,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Estimated Age",
      value: resource.estimatedAge,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Reason Code",
      value: resource.reasonCode,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Reason Reference",
      value: resource.reasonReference,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Condition",
          "http://hl7.org/fhir/StructureDefinition/Observation",
          "http://hl7.org/fhir/StructureDefinition/AllergyIntolerance",
          "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
          "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
          "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        ],
      },
    },
  ]);
}

function narrativeFlag(resource: Flag): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Location",
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
          "http://hl7.org/fhir/StructureDefinition/Medication",
          "http://hl7.org/fhir/StructureDefinition/Procedure",
        ],
      },
    },
    {
      attr: "Period",
      value: resource.period,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Author",
      value: resource.author,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
      },
    },
  ]);
}

function narrativeGoal(resource: Goal): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Lifecycle Status",
      value: resource.lifecycleStatus,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Achievement Status",
      value: resource.achievementStatus,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Priority",
      value: resource.priority,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/Organization",
        ],
      },
    },
    {
      attr: "Status Date",
      value: resource.statusDate,
      max: "1",
      type: { code: "date" },
    },
    {
      attr: "Expressed By",
      value: resource.expressedBy,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
  ]);
}

function narrativeGraphDefinition(resource: GraphDefinition): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Start",
      value: resource.start,
      max: "1",
      type: { code: "code" },
    },
  ]);
}

function narrativeGroup(resource: Group): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Active",
      value: resource.active,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Actual",
      value: resource.actual,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Quantity",
      value: resource.quantity,
      max: "1",
      type: { code: "unsignedInt" },
    },
    {
      attr: "Managing Entity",
      value: resource.managingEntity,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
      },
    },
  ]);
}

function narrativeGuidanceResponse(resource: GuidanceResponse): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Request Identifier",
      value: resource.requestIdentifier,
      max: "1",
      type: { code: "Identifier" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
  ]);
}

function narrativeHealthcareService(resource: HealthcareService): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Active",
      value: resource.active,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Provided By",
      value: resource.providedBy,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Specialty",
      value: resource.specialty,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Location",
      value: resource.location,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Location"],
      },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Comment",
      value: resource.comment,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Photo",
      value: resource.photo,
      max: "1",
      type: { code: "Attachment" },
    },
  ]);
}

function narrativeImagingStudy(resource: ImagingStudy): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Modality",
      value: resource.modality,
      max: "*",
      type: { code: "Coding" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
      },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Started",
      value: resource.started,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Based On",
      value: resource.basedOn,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/CarePlan",
          "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
          "http://hl7.org/fhir/StructureDefinition/Appointment",
          "http://hl7.org/fhir/StructureDefinition/AppointmentResponse",
          "http://hl7.org/fhir/StructureDefinition/Task",
        ],
      },
    },
    {
      attr: "Referrer",
      value: resource.referrer,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
      },
    },
    {
      attr: "Interpreter",
      value: resource.interpreter,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
      },
    },
    {
      attr: "Endpoint",
      value: resource.endpoint,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Endpoint"],
      },
    },
    {
      attr: "Number Of Series",
      value: resource.numberOfSeries,
      max: "1",
      type: { code: "unsignedInt" },
    },
    {
      attr: "Number Of Instances",
      value: resource.numberOfInstances,
      max: "1",
      type: { code: "unsignedInt" },
    },
    {
      attr: "Procedure Reference",
      value: resource.procedureReference,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Procedure"],
      },
    },
    {
      attr: "Procedure Code",
      value: resource.procedureCode,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Location",
      value: resource.location,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Location"],
      },
    },
    {
      attr: "Reason Code",
      value: resource.reasonCode,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Reason Reference",
      value: resource.reasonReference,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Condition",
          "http://hl7.org/fhir/StructureDefinition/Observation",
          "http://hl7.org/fhir/StructureDefinition/Media",
          "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
          "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        ],
      },
    },
    {
      attr: "Note",
      value: resource.note,
      max: "*",
      type: { code: "Annotation" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Series",
      value: resource.series,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeImmunization(resource: Immunization): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Vaccine Code",
      value: resource.vaccineCode,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Patient",
      value: resource.patient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
    {
      attr: "Primary Source",
      value: resource.primarySource,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Performer",
      value: resource.performer,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Note",
      value: resource.note,
      max: "*",
      type: { code: "Annotation" },
    },
    {
      attr: "Is Subpotent",
      value: resource.isSubpotent,
      max: "1",
      type: { code: "boolean" },
    },
  ]);
}

function narrativeImmunizationEvaluation(
  resource: ImmunizationEvaluation
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Patient",
      value: resource.patient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
    {
      attr: "Target Disease",
      value: resource.targetDisease,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Immunization Event",
      value: resource.immunizationEvent,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Immunization"],
      },
    },
    {
      attr: "Dose Status",
      value: resource.doseStatus,
      max: "1",
      type: { code: "CodeableConcept" },
    },
  ]);
}

function narrativeImmunizationRecommendation(
  resource: ImmunizationRecommendation
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Patient",
      value: resource.patient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Recommendation",
      value: resource.recommendation,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeImplementationGuide(
  resource: ImplementationGuide
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Package Id",
      value: resource.packageId,
      max: "1",
      type: { code: "id" },
    },
    {
      attr: "License",
      value: resource.license,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Fhir Version",
      value: resource.fhirVersion,
      max: "*",
      type: { code: "code" },
    },
    {
      attr: "Depends On",
      value: resource.dependsOn,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Global",
      value: resource.global,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeIngredient(resource: Ingredient): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "1",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "For",
      value: resource.for,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition",
          "http://hl7.org/fhir/StructureDefinition/AdministrableProductDefinition",
          "http://hl7.org/fhir/StructureDefinition/ManufacturedItemDefinition",
        ],
      },
    },
    {
      attr: "Role",
      value: resource.role,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Function",
      value: resource.function,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Allergenic Indicator",
      value: resource.allergenicIndicator,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Manufacturer",
      value: resource.manufacturer,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Substance",
      value: resource.substance,
      max: "1",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeInsurancePlan(resource: InsurancePlan): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Owned By",
      value: resource.ownedBy,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Administered By",
      value: resource.administeredBy,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Coverage Area",
      value: resource.coverageArea,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Location"],
      },
    },
  ]);
}

function narrativeInvoice(resource: Invoice): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
      },
    },
    {
      attr: "Recipient",
      value: resource.recipient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Total Net",
      value: resource.totalNet,
      max: "1",
      type: { code: "Money" },
    },
    {
      attr: "Total Gross",
      value: resource.totalGross,
      max: "1",
      type: { code: "Money" },
    },
  ]);
}

function narrativeLibrary(resource: Library): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Effective Period",
      value: resource.effectivePeriod,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Content",
      value: resource.content,
      max: "*",
      type: { code: "Attachment" },
    },
  ]);
}

function narrativeLinkage(resource: Linkage): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Active",
      value: resource.active,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Author",
      value: resource.author,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
        ],
      },
    },
    {
      attr: "Item",
      value: resource.item,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeList(resource: List): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Mode",
      value: resource.mode,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Location",
        ],
      },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Source",
      value: resource.source,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Device",
        ],
      },
    },
  ]);
}

function narrativeLocation(resource: Location): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Operational Status",
      value: resource.operationalStatus,
      max: "1",
      type: { code: "Coding" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Mode",
      value: resource.mode,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Physical Type",
      value: resource.physicalType,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Managing Organization",
      value: resource.managingOrganization,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
  ]);
}

function narrativeManufacturedItemDefinition(
  resource: ManufacturedItemDefinition
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Manufactured Dose Form",
      value: resource.manufacturedDoseForm,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Unit Of Presentation",
      value: resource.unitOfPresentation,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Manufacturer",
      value: resource.manufacturer,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Ingredient",
      value: resource.ingredient,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Property",
      value: resource.property,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeMeasure(resource: Measure): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Effective Period",
      value: resource.effectivePeriod,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Disclaimer",
      value: resource.disclaimer,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Scoring",
      value: resource.scoring,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Composite Scoring",
      value: resource.compositeScoring,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Risk Adjustment",
      value: resource.riskAdjustment,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Rate Aggregation",
      value: resource.rateAggregation,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Rationale",
      value: resource.rationale,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Clinical Recommendation Statement",
      value: resource.clinicalRecommendationStatement,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Improvement Notation",
      value: resource.improvementNotation,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Definition",
      value: resource.definition,
      max: "*",
      type: { code: "markdown" },
    },
    {
      attr: "Guidance",
      value: resource.guidance,
      max: "1",
      type: { code: "markdown" },
    },
  ]);
}

function narrativeMeasureReport(resource: MeasureReport): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Measure",
      value: resource.measure,
      max: "1",
      type: {
        code: "canonical",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Measure"],
      },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Location",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
      },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Reporter",
      value: resource.reporter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Location",
          "http://hl7.org/fhir/StructureDefinition/Organization",
        ],
      },
    },
    {
      attr: "Period",
      value: resource.period,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Improvement Notation",
      value: resource.improvementNotation,
      max: "1",
      type: { code: "CodeableConcept" },
    },
  ]);
}

function narrativeMedia(resource: Media): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Based On",
      value: resource.basedOn,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
          "http://hl7.org/fhir/StructureDefinition/CarePlan",
        ],
      },
    },
    {
      attr: "Part Of",
      value: resource.partOf,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Modality",
      value: resource.modality,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "View",
      value: resource.view,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Specimen",
          "http://hl7.org/fhir/StructureDefinition/Location",
        ],
      },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Issued",
      value: resource.issued,
      max: "1",
      type: { code: "instant" },
    },
    {
      attr: "Operator",
      value: resource.operator,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/CareTeam",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
    {
      attr: "Reason Code",
      value: resource.reasonCode,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Body Site",
      value: resource.bodySite,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Device Name",
      value: resource.deviceName,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Device",
      value: resource.device,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/DeviceMetric",
          "http://hl7.org/fhir/StructureDefinition/Device",
        ],
      },
    },
    {
      attr: "Height",
      value: resource.height,
      max: "1",
      type: { code: "positiveInt" },
    },
    {
      attr: "Width",
      value: resource.width,
      max: "1",
      type: { code: "positiveInt" },
    },
    {
      attr: "Frames",
      value: resource.frames,
      max: "1",
      type: { code: "positiveInt" },
    },
    {
      attr: "Duration",
      value: resource.duration,
      max: "1",
      type: { code: "decimal" },
    },
    {
      attr: "Content",
      value: resource.content,
      max: "1",
      type: { code: "Attachment" },
    },
  ]);
}

function narrativeMedication(resource: Medication): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Manufacturer",
      value: resource.manufacturer,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Amount",
      value: resource.amount,
      max: "1",
      type: { code: "Ratio" },
    },
  ]);
}

function narrativeMedicationAdministration(
  resource: MedicationAdministration
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Instantiates",
      value: resource.instantiates,
      max: "*",
      type: { code: "uri" },
    },
    {
      attr: "Part Of",
      value: resource.partOf,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
          "http://hl7.org/fhir/StructureDefinition/Procedure",
        ],
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
      },
    },
    {
      attr: "Performer",
      value: resource.performer,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeMedicationDispense(resource: MedicationDispense): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
      },
    },
    {
      attr: "When Prepared",
      value: resource.whenPrepared,
      max: "1",
      type: { code: "dateTime" },
    },
  ]);
}

function narrativeMedicationKnowledge(
  resource: MedicationKnowledge
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Manufacturer",
      value: resource.manufacturer,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Amount",
      value: resource.amount,
      max: "1",
      type: {
        code: "Quantity",
        profile: ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"],
      },
    },
    {
      attr: "Synonym",
      value: resource.synonym,
      max: "*",
      type: { code: "string" },
    },
  ]);
}

function narrativeMedicationRequest(resource: MedicationRequest): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Intent",
      value: resource.intent,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Priority",
      value: resource.priority,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Do Not Perform",
      value: resource.doNotPerform,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
      },
    },
    {
      attr: "Authored On",
      value: resource.authoredOn,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Requester",
      value: resource.requester,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/Device",
        ],
      },
    },
    {
      attr: "Performer Type",
      value: resource.performerType,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Instantiates Canonical",
      value: resource.instantiatesCanonical,
      max: "*",
      type: { code: "canonical" },
    },
    {
      attr: "Instantiates Uri",
      value: resource.instantiatesUri,
      max: "*",
      type: { code: "uri" },
    },
    {
      attr: "Based On",
      value: resource.basedOn,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/CarePlan",
          "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
          "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
          "http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
        ],
      },
    },
    {
      attr: "Group Identifier",
      value: resource.groupIdentifier,
      max: "1",
      type: { code: "Identifier" },
    },
  ]);
}

function narrativeMedicationStatement(
  resource: MedicationStatement
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Based On",
      value: resource.basedOn,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
          "http://hl7.org/fhir/StructureDefinition/CarePlan",
          "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
        ],
      },
    },
    {
      attr: "Part Of",
      value: resource.partOf,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
          "http://hl7.org/fhir/StructureDefinition/MedicationDispense",
          "http://hl7.org/fhir/StructureDefinition/MedicationStatement",
          "http://hl7.org/fhir/StructureDefinition/Procedure",
          "http://hl7.org/fhir/StructureDefinition/Observation",
        ],
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
      },
    },
    {
      attr: "Context",
      value: resource.context,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Encounter",
          "http://hl7.org/fhir/StructureDefinition/EpisodeOfCare",
        ],
      },
    },
    {
      attr: "Date Asserted",
      value: resource.dateAsserted,
      max: "1",
      type: { code: "dateTime" },
    },
  ]);
}

function narrativeMedicinalProductDefinition(
  resource: MedicinalProductDefinition
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Domain",
      value: resource.domain,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Status Date",
      value: resource.statusDate,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Combined Pharmaceutical Dose Form",
      value: resource.combinedPharmaceuticalDoseForm,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Route",
      value: resource.route,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Indication",
      value: resource.indication,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Legal Status Of Supply",
      value: resource.legalStatusOfSupply,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Additional Monitoring Indicator",
      value: resource.additionalMonitoringIndicator,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Special Measures",
      value: resource.specialMeasures,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Pediatric Use Indicator",
      value: resource.pediatricUseIndicator,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Classification",
      value: resource.classification,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Marketing Status",
      value: resource.marketingStatus,
      max: "*",
      type: { code: "MarketingStatus" },
    },
    {
      attr: "Packaged Medicinal Product",
      value: resource.packagedMedicinalProduct,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Ingredient",
      value: resource.ingredient,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Impurity",
      value: resource.impurity,
      max: "*",
      type: {
        code: "CodeableReference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/SubstanceDefinition",
        ],
      },
    },
    {
      attr: "Attached Document",
      value: resource.attachedDocument,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        ],
      },
    },
    {
      attr: "Master File",
      value: resource.masterFile,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        ],
      },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Clinical Trial",
      value: resource.clinicalTrial,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ResearchStudy",
        ],
      },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "*",
      type: { code: "Coding" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Cross Reference",
      value: resource.crossReference,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Operation",
      value: resource.operation,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Characteristic",
      value: resource.characteristic,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeMessageDefinition(resource: MessageDefinition): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Replaces",
      value: resource.replaces,
      max: "*",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/MessageDefinition",
        ],
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Purpose",
      value: resource.purpose,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Base",
      value: resource.base,
      max: "1",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/MessageDefinition",
        ],
      },
    },
    {
      attr: "Parent",
      value: resource.parent,
      max: "*",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
          "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
        ],
      },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Focus",
      value: resource.focus,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeMessageHeader(resource: MessageHeader): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Destination",
      value: resource.destination,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Sender",
      value: resource.sender,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
        ],
      },
    },
    {
      attr: "Enterer",
      value: resource.enterer,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
      },
    },
    {
      attr: "Author",
      value: resource.author,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
      },
    },
    {
      attr: "Source",
      value: resource.source,
      max: "1",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Responsible",
      value: resource.responsible,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
        ],
      },
    },
    {
      attr: "Reason",
      value: resource.reason,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Response",
      value: resource.response,
      max: "1",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Focus",
      value: resource.focus,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
    {
      attr: "Definition",
      value: resource.definition,
      max: "1",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/MessageDefinition",
        ],
      },
    },
  ]);
}

function narrativeMolecularSequence(resource: MolecularSequence): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Coordinate System",
      value: resource.coordinateSystem,
      max: "1",
      type: { code: "integer" },
    },
    {
      attr: "Patient",
      value: resource.patient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
    {
      attr: "Specimen",
      value: resource.specimen,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Specimen"],
      },
    },
    {
      attr: "Device",
      value: resource.device,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Device"],
      },
    },
    {
      attr: "Performer",
      value: resource.performer,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Quantity",
      value: resource.quantity,
      max: "1",
      type: { code: "Quantity" },
    },
    {
      attr: "Reference Seq",
      value: resource.referenceSeq,
      max: "1",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Variant",
      value: resource.variant,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Observed Seq",
      value: resource.observedSeq,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Quality",
      value: resource.quality,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Read Coverage",
      value: resource.readCoverage,
      max: "1",
      type: { code: "integer" },
    },
    {
      attr: "Repository",
      value: resource.repository,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Pointer",
      value: resource.pointer,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/MolecularSequence",
        ],
      },
    },
    {
      attr: "Structure Variant",
      value: resource.structureVariant,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeNamingSystem(resource: NamingSystem): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Kind",
      value: resource.kind,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Unique Id",
      value: resource.uniqueId,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeNutritionOrder(resource: NutritionOrder): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Instantiates Canonical",
      value: resource.instantiatesCanonical,
      max: "*",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
          "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
        ],
      },
    },
    {
      attr: "Instantiates Uri",
      value: resource.instantiatesUri,
      max: "*",
      type: { code: "uri" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Intent",
      value: resource.intent,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Patient",
      value: resource.patient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
    {
      attr: "Date Time",
      value: resource.dateTime,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Orderer",
      value: resource.orderer,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
      },
    },
  ]);
}

function narrativeNutritionProduct(resource: NutritionProduct): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Manufacturer",
      value: resource.manufacturer,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Nutrient",
      value: resource.nutrient,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeObservation(resource: Observation): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Based On",
      value: resource.basedOn,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/CarePlan",
          "http://hl7.org/fhir/StructureDefinition/DeviceRequest",
          "http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation",
          "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
          "http://hl7.org/fhir/StructureDefinition/NutritionOrder",
          "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
        ],
      },
    },
    {
      attr: "Part Of",
      value: resource.partOf,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
          "http://hl7.org/fhir/StructureDefinition/MedicationDispense",
          "http://hl7.org/fhir/StructureDefinition/MedicationStatement",
          "http://hl7.org/fhir/StructureDefinition/Procedure",
          "http://hl7.org/fhir/StructureDefinition/Immunization",
          "http://hl7.org/fhir/StructureDefinition/ImagingStudy",
        ],
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Location",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Procedure",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/Medication",
          "http://hl7.org/fhir/StructureDefinition/Substance",
        ],
      },
    },
    {
      attr: "Focus",
      value: resource.focus,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Issued",
      value: resource.issued,
      max: "1",
      type: { code: "instant" },
    },
    {
      attr: "Performer",
      value: resource.performer,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/CareTeam",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
    {
      attr: "Has Member",
      value: resource.hasMember,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Observation",
          "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
          "http://hl7.org/fhir/StructureDefinition/MolecularSequence",
        ],
      },
    },
    {
      attr: "Derived From",
      value: resource.derivedFrom,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/DocumentReference",
          "http://hl7.org/fhir/StructureDefinition/ImagingStudy",
          "http://hl7.org/fhir/StructureDefinition/Media",
          "http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse",
          "http://hl7.org/fhir/StructureDefinition/Observation",
          "http://hl7.org/fhir/StructureDefinition/MolecularSequence",
        ],
      },
    },
    {
      attr: "Component",
      value: resource.component,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeObservationDefinition(
  resource: ObservationDefinition
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
  ]);
}

function narrativeOperationDefinition(
  resource: OperationDefinition
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Kind",
      value: resource.kind,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Affects State",
      value: resource.affectsState,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Base",
      value: resource.base,
      max: "1",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/OperationDefinition",
        ],
      },
    },
    {
      attr: "Resource",
      value: resource.resource,
      max: "*",
      type: { code: "code" },
    },
    {
      attr: "System",
      value: resource.system,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Instance",
      value: resource.instance,
      max: "1",
      type: { code: "boolean" },
    },
  ]);
}

function narrativeOperationOutcome(resource: OperationOutcome): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Issue",
      value: resource.issue,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeOrganization(resource: Organization): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Active",
      value: resource.active,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Part Of",
      value: resource.partOf,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-hierarchy",
            valueBoolean: true,
          },
        ],
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
  ]);
}

function narrativeOrganizationAffiliation(
  resource: OrganizationAffiliation
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Active",
      value: resource.active,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Period",
      value: resource.period,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Organization",
      value: resource.organization,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Participating Organization",
      value: resource.participatingOrganization,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Network",
      value: resource.network,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Specialty",
      value: resource.specialty,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Location",
      value: resource.location,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Location"],
      },
    },
    {
      attr: "Telecom",
      value: resource.telecom,
      max: "*",
      type: { code: "ContactPoint" },
    },
  ]);
}

function narrativePackagedProductDefinition(
  resource: PackagedProductDefinition
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Package For",
      value: resource.packageFor,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition",
        ],
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Status Date",
      value: resource.statusDate,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Contained Item Quantity",
      value: resource.containedItemQuantity,
      max: "*",
      type: { code: "Quantity" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Legal Status Of Supply",
      value: resource.legalStatusOfSupply,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Marketing Status",
      value: resource.marketingStatus,
      max: "*",
      type: { code: "MarketingStatus" },
    },
    {
      attr: "Characteristic",
      value: resource.characteristic,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Copackaged Indicator",
      value: resource.copackagedIndicator,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Manufacturer",
      value: resource.manufacturer,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Package",
      value: resource.package,
      max: "1",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativePatient(resource: Patient): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Active",
      value: resource.active,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "*",
      type: { code: "HumanName" },
    },
    {
      attr: "Telecom",
      value: resource.telecom,
      max: "*",
      type: { code: "ContactPoint" },
    },
    {
      attr: "Gender",
      value: resource.gender,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Birth Date",
      value: resource.birthDate,
      max: "1",
      type: { code: "date" },
    },
    {
      attr: "Address",
      value: resource.address,
      max: "*",
      type: { code: "Address" },
    },
    {
      attr: "Managing Organization",
      value: resource.managingOrganization,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Link",
      value: resource.link,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativePaymentNotice(resource: PaymentNotice): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Created",
      value: resource.created,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Payment",
      value: resource.payment,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/PaymentReconciliation",
        ],
      },
    },
    {
      attr: "Recipient",
      value: resource.recipient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Amount",
      value: resource.amount,
      max: "1",
      type: { code: "Money" },
    },
  ]);
}

function narrativePaymentReconciliation(
  resource: PaymentReconciliation
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Period",
      value: resource.period,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Created",
      value: resource.created,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Payment Issuer",
      value: resource.paymentIssuer,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Payment Date",
      value: resource.paymentDate,
      max: "1",
      type: { code: "date" },
    },
    {
      attr: "Payment Amount",
      value: resource.paymentAmount,
      max: "1",
      type: { code: "Money" },
    },
  ]);
}

function narrativePerson(resource: Person): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "*",
      type: { code: "HumanName" },
    },
    {
      attr: "Telecom",
      value: resource.telecom,
      max: "*",
      type: { code: "ContactPoint" },
    },
    {
      attr: "Gender",
      value: resource.gender,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Birth Date",
      value: resource.birthDate,
      max: "1",
      type: { code: "date" },
    },
    {
      attr: "Managing Organization",
      value: resource.managingOrganization,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Active",
      value: resource.active,
      max: "1",
      type: { code: "boolean" },
    },
  ]);
}

function narrativePlanDefinition(resource: PlanDefinition): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Effective Period",
      value: resource.effectivePeriod,
      max: "1",
      type: { code: "Period" },
    },
  ]);
}

function narrativePractitioner(resource: Practitioner): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Active",
      value: resource.active,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "*",
      type: { code: "HumanName" },
    },
    {
      attr: "Telecom",
      value: resource.telecom,
      max: "*",
      type: { code: "ContactPoint" },
    },
    {
      attr: "Address",
      value: resource.address,
      max: "*",
      type: { code: "Address" },
    },
    {
      attr: "Gender",
      value: resource.gender,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Birth Date",
      value: resource.birthDate,
      max: "1",
      type: { code: "date" },
    },
  ]);
}

function narrativePractitionerRole(resource: PractitionerRole): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Active",
      value: resource.active,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Period",
      value: resource.period,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Practitioner",
      value: resource.practitioner,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Practitioner"],
      },
    },
    {
      attr: "Organization",
      value: resource.organization,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Specialty",
      value: resource.specialty,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Location",
      value: resource.location,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Location"],
      },
    },
    {
      attr: "Telecom",
      value: resource.telecom,
      max: "*",
      type: { code: "ContactPoint" },
    },
  ]);
}

function narrativeProcedure(resource: Procedure): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Instantiates Canonical",
      value: resource.instantiatesCanonical,
      max: "*",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
          "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
          "http://hl7.org/fhir/StructureDefinition/Measure",
          "http://hl7.org/fhir/StructureDefinition/OperationDefinition",
          "http://hl7.org/fhir/StructureDefinition/Questionnaire",
        ],
      },
    },
    {
      attr: "Instantiates Uri",
      value: resource.instantiatesUri,
      max: "*",
      type: { code: "uri" },
    },
    {
      attr: "Based On",
      value: resource.basedOn,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/CarePlan",
          "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
        ],
      },
    },
    {
      attr: "Part Of",
      value: resource.partOf,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Procedure",
          "http://hl7.org/fhir/StructureDefinition/Observation",
          "http://hl7.org/fhir/StructureDefinition/MedicationAdministration",
        ],
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Status Reason",
      value: resource.statusReason,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
      },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Recorder",
      value: resource.recorder,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
      },
    },
    {
      attr: "Asserter",
      value: resource.asserter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
      },
    },
    {
      attr: "Performer",
      value: resource.performer,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Location",
      value: resource.location,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Location"],
      },
    },
    {
      attr: "Reason Code",
      value: resource.reasonCode,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Reason Reference",
      value: resource.reasonReference,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Condition",
          "http://hl7.org/fhir/StructureDefinition/Observation",
          "http://hl7.org/fhir/StructureDefinition/Procedure",
          "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
          "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        ],
      },
    },
    {
      attr: "Body Site",
      value: resource.bodySite,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Outcome",
      value: resource.outcome,
      max: "1",
      type: { code: "CodeableConcept" },
    },
  ]);
}

function narrativeProvenance(resource: Provenance): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Target",
      value: resource.target,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
    {
      attr: "Recorded",
      value: resource.recorded,
      max: "1",
      type: { code: "instant" },
    },
  ]);
}

function narrativeQuestionnaire(resource: Questionnaire): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Subject Type",
      value: resource.subjectType,
      max: "*",
      type: { code: "code" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Effective Period",
      value: resource.effectivePeriod,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "*",
      type: { code: "Coding" },
    },
  ]);
}

function narrativeQuestionnaireResponse(
  resource: QuestionnaireResponse
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "1",
      type: { code: "Identifier" },
    },
    {
      attr: "Based On",
      value: resource.basedOn,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/CarePlan",
          "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
        ],
      },
    },
    {
      attr: "Part Of",
      value: resource.partOf,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Observation",
          "http://hl7.org/fhir/StructureDefinition/Procedure",
        ],
      },
    },
    {
      attr: "Questionnaire",
      value: resource.questionnaire,
      max: "1",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Questionnaire",
        ],
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Authored",
      value: resource.authored,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Author",
      value: resource.author,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/Organization",
        ],
      },
    },
    {
      attr: "Source",
      value: resource.source,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
  ]);
}

function narrativeRegulatedAuthorization(
  resource: RegulatedAuthorization
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/MedicinalProductDefinition",
          "http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct",
          "http://hl7.org/fhir/StructureDefinition/NutritionProduct",
          "http://hl7.org/fhir/StructureDefinition/PackagedProductDefinition",
          "http://hl7.org/fhir/StructureDefinition/SubstanceDefinition",
          "http://hl7.org/fhir/StructureDefinition/DeviceDefinition",
          "http://hl7.org/fhir/StructureDefinition/ResearchStudy",
          "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
          "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
          "http://hl7.org/fhir/StructureDefinition/ObservationDefinition",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Location",
        ],
      },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Region",
      value: resource.region,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Status Date",
      value: resource.statusDate,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Validity Period",
      value: resource.validityPeriod,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Indication",
      value: resource.indication,
      max: "1",
      type: {
        code: "CodeableReference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ClinicalUseDefinition",
        ],
      },
    },
    {
      attr: "Intended Use",
      value: resource.intendedUse,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Basis",
      value: resource.basis,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Holder",
      value: resource.holder,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Regulator",
      value: resource.regulator,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Case",
      value: resource.case,
      max: "1",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeRelatedPerson(resource: RelatedPerson): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Active",
      value: resource.active,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Patient",
      value: resource.patient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
    {
      attr: "Relationship",
      value: resource.relationship,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "*",
      type: { code: "HumanName" },
    },
    {
      attr: "Telecom",
      value: resource.telecom,
      max: "*",
      type: { code: "ContactPoint" },
    },
    {
      attr: "Gender",
      value: resource.gender,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Birth Date",
      value: resource.birthDate,
      max: "1",
      type: { code: "date" },
    },
    {
      attr: "Address",
      value: resource.address,
      max: "*",
      type: { code: "Address" },
    },
  ]);
}

function narrativeRequestGroup(resource: RequestGroup): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Instantiates Canonical",
      value: resource.instantiatesCanonical,
      max: "*",
      type: { code: "canonical" },
    },
    {
      attr: "Instantiates Uri",
      value: resource.instantiatesUri,
      max: "*",
      type: { code: "uri" },
    },
    {
      attr: "Group Identifier",
      value: resource.groupIdentifier,
      max: "1",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Intent",
      value: resource.intent,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Priority",
      value: resource.priority,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
  ]);
}

function narrativeResearchDefinition(resource: ResearchDefinition): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Effective Period",
      value: resource.effectivePeriod,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Population",
      value: resource.population,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ResearchElementDefinition",
        ],
      },
    },
    {
      attr: "Exposure",
      value: resource.exposure,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ResearchElementDefinition",
        ],
      },
    },
    {
      attr: "Exposure Alternative",
      value: resource.exposureAlternative,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ResearchElementDefinition",
        ],
      },
    },
    {
      attr: "Outcome",
      value: resource.outcome,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ResearchElementDefinition",
        ],
      },
    },
  ]);
}

function narrativeResearchElementDefinition(
  resource: ResearchElementDefinition
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Short Title",
      value: resource.shortTitle,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Effective Period",
      value: resource.effectivePeriod,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Characteristic",
      value: resource.characteristic,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeResearchStudy(resource: ResearchStudy): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Protocol",
      value: resource.protocol,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
        ],
      },
    },
    {
      attr: "Part Of",
      value: resource.partOf,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ResearchStudy",
        ],
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Primary Purpose Type",
      value: resource.primaryPurposeType,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Phase",
      value: resource.phase,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Focus",
      value: resource.focus,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Condition",
      value: resource.condition,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Keyword",
      value: resource.keyword,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Location",
      value: resource.location,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Enrollment",
      value: resource.enrollment,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Group"],
      },
    },
    {
      attr: "Period",
      value: resource.period,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Sponsor",
      value: resource.sponsor,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Principal Investigator",
      value: resource.principalInvestigator,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
      },
    },
    {
      attr: "Site",
      value: resource.site,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Location"],
      },
    },
    {
      attr: "Reason Stopped",
      value: resource.reasonStopped,
      max: "1",
      type: { code: "CodeableConcept" },
    },
  ]);
}

function narrativeResearchSubject(resource: ResearchSubject): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Period",
      value: resource.period,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Study",
      value: resource.study,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ResearchStudy",
        ],
      },
    },
    {
      attr: "Individual",
      value: resource.individual,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
  ]);
}

function narrativeRiskAssessment(resource: RiskAssessment): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Method",
      value: resource.method,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
        ],
      },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Condition",
      value: resource.condition,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Condition"],
      },
    },
    {
      attr: "Performer",
      value: resource.performer,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Device",
        ],
      },
    },
  ]);
}

function narrativeSchedule(resource: Schedule): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Active",
      value: resource.active,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Service Category",
      value: resource.serviceCategory,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Service Type",
      value: resource.serviceType,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Specialty",
      value: resource.specialty,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Actor",
      value: resource.actor,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/HealthcareService",
          "http://hl7.org/fhir/StructureDefinition/Location",
        ],
      },
    },
    {
      attr: "Planning Horizon",
      value: resource.planningHorizon,
      max: "1",
      type: { code: "Period" },
    },
  ]);
}

function narrativeSearchParameter(resource: SearchParameter): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Base",
      value: resource.base,
      max: "*",
      type: { code: "code" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "code" },
    },
  ]);
}

function narrativeServiceRequest(resource: ServiceRequest): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Instantiates Canonical",
      value: resource.instantiatesCanonical,
      max: "*",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
          "http://hl7.org/fhir/StructureDefinition/PlanDefinition",
        ],
      },
    },
    {
      attr: "Instantiates Uri",
      value: resource.instantiatesUri,
      max: "*",
      type: { code: "uri" },
    },
    {
      attr: "Based On",
      value: resource.basedOn,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/CarePlan",
          "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
          "http://hl7.org/fhir/StructureDefinition/MedicationRequest",
        ],
      },
    },
    {
      attr: "Replaces",
      value: resource.replaces,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ServiceRequest",
        ],
      },
    },
    {
      attr: "Requisition",
      value: resource.requisition,
      max: "1",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Intent",
      value: resource.intent,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Priority",
      value: resource.priority,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Do Not Perform",
      value: resource.doNotPerform,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Order Detail",
      value: resource.orderDetail,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/Location",
          "http://hl7.org/fhir/StructureDefinition/Device",
        ],
      },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Authored On",
      value: resource.authoredOn,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Requester",
      value: resource.requester,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/Device",
        ],
      },
    },
    {
      attr: "Performer Type",
      value: resource.performerType,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Performer",
      value: resource.performer,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/CareTeam",
          "http://hl7.org/fhir/StructureDefinition/HealthcareService",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
    {
      attr: "Location Code",
      value: resource.locationCode,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Location Reference",
      value: resource.locationReference,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Location"],
      },
    },
    {
      attr: "Reason Code",
      value: resource.reasonCode,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Reason Reference",
      value: resource.reasonReference,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Condition",
          "http://hl7.org/fhir/StructureDefinition/Observation",
          "http://hl7.org/fhir/StructureDefinition/DiagnosticReport",
          "http://hl7.org/fhir/StructureDefinition/DocumentReference",
        ],
      },
    },
    {
      attr: "Specimen",
      value: resource.specimen,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Specimen"],
      },
    },
    {
      attr: "Body Site",
      value: resource.bodySite,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Patient Instruction",
      value: resource.patientInstruction,
      max: "1",
      type: { code: "string" },
    },
  ]);
}

function narrativeSlot(resource: Slot): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Service Category",
      value: resource.serviceCategory,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Service Type",
      value: resource.serviceType,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Specialty",
      value: resource.specialty,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Appointment Type",
      value: resource.appointmentType,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Schedule",
      value: resource.schedule,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Schedule"],
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Start",
      value: resource.start,
      max: "1",
      type: { code: "instant" },
    },
    {
      attr: "End",
      value: resource.end,
      max: "1",
      type: { code: "instant" },
    },
  ]);
}

function narrativeSpecimen(resource: Specimen): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Accession Identifier",
      value: resource.accessionIdentifier,
      max: "1",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Subject",
      value: resource.subject,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Group",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Substance",
          "http://hl7.org/fhir/StructureDefinition/Location",
        ],
      },
    },
    {
      attr: "Received Time",
      value: resource.receivedTime,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Condition",
      value: resource.condition,
      max: "*",
      type: { code: "CodeableConcept" },
    },
  ]);
}

function narrativeSpecimenDefinition(resource: SpecimenDefinition): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "1",
      type: { code: "Identifier" },
    },
    {
      attr: "Type Collected",
      value: resource.typeCollected,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Patient Preparation",
      value: resource.patientPreparation,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Time Aspect",
      value: resource.timeAspect,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Collection",
      value: resource.collection,
      max: "*",
      type: { code: "CodeableConcept" },
    },
  ]);
}

function narrativeStructureDefinition(
  resource: StructureDefinition
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Keyword",
      value: resource.keyword,
      max: "*",
      type: { code: "Coding" },
    },
    {
      attr: "Fhir Version",
      value: resource.fhirVersion,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Kind",
      value: resource.kind,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Abstract",
      value: resource.abstract,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Context",
      value: resource.context,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Context Invariant",
      value: resource.contextInvariant,
      max: "*",
      type: { code: "string" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Base Definition",
      value: resource.baseDefinition,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-hierarchy",
            valueBoolean: true,
          },
        ],
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/StructureDefinition",
        ],
      },
    },
    {
      attr: "Derivation",
      value: resource.derivation,
      max: "1",
      type: { code: "code" },
    },
  ]);
}

function narrativeStructureMap(resource: StructureMap): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Structure",
      value: resource.structure,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Import",
      value: resource.import,
      max: "*",
      type: {
        code: "canonical",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/StructureMap"],
      },
    },
    {
      attr: "Group",
      value: resource.group,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeSubscription(resource: Subscription): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactPoint" },
    },
    {
      attr: "End",
      value: resource.end,
      max: "1",
      type: { code: "instant" },
    },
    {
      attr: "Reason",
      value: resource.reason,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Criteria",
      value: resource.criteria,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Error",
      value: resource.error,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Channel",
      value: resource.channel,
      max: "1",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeSubscriptionStatus(resource: SubscriptionStatus): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Type",
      value: resource.type,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Events Since Subscription Start",
      value: resource.eventsSinceSubscriptionStart,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Subscription",
      value: resource.subscription,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Subscription"],
      },
    },
    {
      attr: "Topic",
      value: resource.topic,
      max: "1",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/SubscriptionTopic",
        ],
      },
    },
    {
      attr: "Error",
      value: resource.error,
      max: "*",
      type: { code: "CodeableConcept" },
    },
  ]);
}

function narrativeSubscriptionTopic(resource: SubscriptionTopic): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Derived From",
      value: resource.derivedFrom,
      max: "*",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/SubscriptionTopic",
        ],
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Effective Period",
      value: resource.effectivePeriod,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Resource Trigger",
      value: resource.resourceTrigger,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Event Trigger",
      value: resource.eventTrigger,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Can Filter By",
      value: resource.canFilterBy,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Notification Shape",
      value: resource.notificationShape,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeSubstance(resource: Substance): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Instance",
      value: resource.instance,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Ingredient",
      value: resource.ingredient,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeSubstanceDefinition(
  resource: SubstanceDefinition
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Classification",
      value: resource.classification,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Domain",
      value: resource.domain,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Grade",
      value: resource.grade,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Information Source",
      value: resource.informationSource,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Citation"],
      },
    },
    {
      attr: "Note",
      value: resource.note,
      max: "*",
      type: { code: "Annotation" },
    },
    {
      attr: "Manufacturer",
      value: resource.manufacturer,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Supplier",
      value: resource.supplier,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Organization"],
      },
    },
    {
      attr: "Moiety",
      value: resource.moiety,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Property",
      value: resource.property,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Molecular Weight",
      value: resource.molecularWeight,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Structure",
      value: resource.structure,
      max: "1",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Relationship",
      value: resource.relationship,
      max: "*",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Source Material",
      value: resource.sourceMaterial,
      max: "1",
      type: { code: "BackboneElement" },
    },
  ]);
}

function narrativeSupplyDelivery(resource: SupplyDelivery): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Based On",
      value: resource.basedOn,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/SupplyRequest",
        ],
      },
    },
    {
      attr: "Part Of",
      value: resource.partOf,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/SupplyDelivery",
          "http://hl7.org/fhir/StructureDefinition/Contract",
        ],
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
  ]);
}

function narrativeSupplyRequest(resource: SupplyRequest): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Category",
      value: resource.category,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Priority",
      value: resource.priority,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Quantity",
      value: resource.quantity,
      max: "1",
      type: { code: "Quantity" },
    },
    {
      attr: "Authored On",
      value: resource.authoredOn,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Requester",
      value: resource.requester,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
          "http://hl7.org/fhir/StructureDefinition/Device",
        ],
      },
    },
    {
      attr: "Supplier",
      value: resource.supplier,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/HealthcareService",
        ],
      },
    },
  ]);
}

function narrativeTask(resource: Task): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Instantiates Canonical",
      value: resource.instantiatesCanonical,
      max: "1",
      type: {
        code: "canonical",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/ActivityDefinition",
        ],
      },
    },
    {
      attr: "Instantiates Uri",
      value: resource.instantiatesUri,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Based On",
      value: resource.basedOn,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
    {
      attr: "Group Identifier",
      value: resource.groupIdentifier,
      max: "1",
      type: { code: "Identifier" },
    },
    {
      attr: "Part Of",
      value: resource.partOf,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Task"],
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Status Reason",
      value: resource.statusReason,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Business Status",
      value: resource.businessStatus,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Intent",
      value: resource.intent,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Code",
      value: resource.code,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Description",
      value: resource.description,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Focus",
      value: resource.focus,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
    {
      attr: "For",
      value: resource.for,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
    {
      attr: "Encounter",
      value: resource.encounter,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Encounter"],
      },
    },
    {
      attr: "Execution Period",
      value: resource.executionPeriod,
      max: "1",
      type: { code: "Period" },
    },
    {
      attr: "Last Modified",
      value: resource.lastModified,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Requester",
      value: resource.requester,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
    {
      attr: "Owner",
      value: resource.owner,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
          "http://hl7.org/fhir/StructureDefinition/Organization",
          "http://hl7.org/fhir/StructureDefinition/CareTeam",
          "http://hl7.org/fhir/StructureDefinition/HealthcareService",
          "http://hl7.org/fhir/StructureDefinition/Patient",
          "http://hl7.org/fhir/StructureDefinition/Device",
          "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
        ],
      },
    },
    {
      attr: "Location",
      value: resource.location,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Location"],
      },
    },
  ]);
}

function narrativeTerminologyCapabilities(
  resource: TerminologyCapabilities
): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Copyright",
      value: resource.copyright,
      max: "1",
      type: { code: "markdown" },
    },
    {
      attr: "Kind",
      value: resource.kind,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Software",
      value: resource.software,
      max: "1",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Implementation",
      value: resource.implementation,
      max: "1",
      type: { code: "BackboneElement" },
    },
    {
      attr: "Locked Date",
      value: resource.lockedDate,
      max: "1",
      type: { code: "boolean" },
    },
  ]);
}

function narrativeTestReport(resource: TestReport): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "1",
      type: { code: "Identifier" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Test Script",
      value: resource.testScript,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/TestScript"],
      },
    },
    {
      attr: "Result",
      value: resource.result,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Score",
      value: resource.score,
      max: "1",
      type: { code: "decimal" },
    },
    {
      attr: "Tester",
      value: resource.tester,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Issued",
      value: resource.issued,
      max: "1",
      type: { code: "dateTime" },
    },
  ]);
}

function narrativeTestScript(resource: TestScript): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "1",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
  ]);
}

function narrativeValueSet(resource: ValueSet): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Url",
      value: resource.url,
      max: "1",
      type: { code: "uri" },
    },
    {
      attr: "Identifier",
      value: resource.identifier,
      max: "*",
      type: { code: "Identifier" },
    },
    {
      attr: "Version",
      value: resource.version,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Name",
      value: resource.name,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Title",
      value: resource.title,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Experimental",
      value: resource.experimental,
      max: "1",
      type: { code: "boolean" },
    },
    {
      attr: "Date",
      value: resource.date,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Publisher",
      value: resource.publisher,
      max: "1",
      type: { code: "string" },
    },
    {
      attr: "Contact",
      value: resource.contact,
      max: "*",
      type: { code: "ContactDetail" },
    },
    {
      attr: "Use Context",
      value: resource.useContext,
      max: "*",
      type: { code: "UsageContext" },
    },
    {
      attr: "Jurisdiction",
      value: resource.jurisdiction,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Immutable",
      value: resource.immutable,
      max: "1",
      type: { code: "boolean" },
    },
  ]);
}

function narrativeVerificationResult(resource: VerificationResult): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Target",
      value: resource.target,
      max: "*",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Resource"],
      },
    },
    {
      attr: "Target Location",
      value: resource.targetLocation,
      max: "*",
      type: { code: "string" },
    },
    {
      attr: "Need",
      value: resource.need,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Status Date",
      value: resource.statusDate,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Validation Type",
      value: resource.validationType,
      max: "1",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Validation Process",
      value: resource.validationProcess,
      max: "*",
      type: { code: "CodeableConcept" },
    },
    {
      attr: "Failure Action",
      value: resource.failureAction,
      max: "1",
      type: { code: "CodeableConcept" },
    },
  ]);
}

function narrativeVisionPrescription(resource: VisionPrescription): Narrative {
  return buildNarrative([
    {
      attr: "Id",
      value: resource.id,
      max: "1",
      type: {
        extension: [
          {
            url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fhir-type",
            valueUrl: "id",
          },
        ],
        code: "http://hl7.org/fhirpath/System.String",
      },
    },
    {
      attr: "Status",
      value: resource.status,
      max: "1",
      type: { code: "code" },
    },
    {
      attr: "Created",
      value: resource.created,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Patient",
      value: resource.patient,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: ["http://hl7.org/fhir/StructureDefinition/Patient"],
      },
    },
    {
      attr: "Date Written",
      value: resource.dateWritten,
      max: "1",
      type: { code: "dateTime" },
    },
    {
      attr: "Prescriber",
      value: resource.prescriber,
      max: "1",
      type: {
        code: "Reference",
        targetProfile: [
          "http://hl7.org/fhir/StructureDefinition/Practitioner",
          "http://hl7.org/fhir/StructureDefinition/PractitionerRole",
        ],
      },
    },
    {
      attr: "Lens Specification",
      value: resource.lensSpecification,
      max: "*",
      type: { code: "BackboneElement" },
    },
  ]);
}

export interface NarrativeComponent {
  attr: string;
  value: any;
  max: "1" | "*";
  type: ElementDefinitionType;
}

export function buildNarrative(components: NarrativeComponent[]): Narrative {
  return {
    status: "generated",
    div: `<div xmlns="http://www.w3.org/1999/xhtml" class="fhir-narrative"><ul>${components
      .map(renderNarrativeComponentValue)
      .filter((x) => !!x)}</ul></div>`,
  };
}

export function renderNarrativeComponentValue(
  component: NarrativeComponent
): string | undefined {
  try {
    if (!component.value) {
      return undefined;
    }

    switch (component.type?.code) {
      default:
        if (component.max === "*") {
          if (!Array.isArray(component.value) || !component.value.length) {
            return undefined;
          }

          return `<li><span class="fhir-attr">${
            component.attr
          }</span>: <span class="fhir-value">${component.value.join(
            ", "
          )}</span></li>`;
        }

        if (!component.value.trim()) {
          return undefined;
        }

        return `<li><span class="fhir-attr">${component.attr}</span>: <span class="fhir-value">${component.value}</span></li>`;
    }
  } catch {
    return undefined;
  }
}

/**
 * Return a text representation for an element
 */
export function narrativeTextForAddress(
  element: Address | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Use", element.use],
    ["Type", element.type],
    ["Text", element.text],
    ["Line", element.line],
    ["City", element.city],
    ["District", element.district],
    ["State", element.state],
    ["Postal Code", element.postalCode],
    ["Country", element.country],
    ["Period", element.period],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForAnnotation(
  element: Annotation | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Time", element.time],
    ["Text", element.text],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForAttachment(
  element: Attachment | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Content Type", element.contentType],
    ["Language", element.language],
    ["Url", element.url],
    ["Size", element.size],
    ["Hash", element.hash],
    ["Title", element.title],
    ["Creation", element.creation],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForCodeableConcept(
  element: CodeableConcept | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Coding", element.coding],
    ["Text", element.text],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForCodeableReference(
  element: CodeableReference | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Concept", element.concept],
    ["Reference", element.reference],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForCoding(
  element: Coding | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["System", element.system],
    ["Version", element.version],
    ["Code", element.code],
    ["Display", element.display],
    ["User Selected", element.userSelected],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForContactDetail(
  element: ContactDetail | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Name", element.name],
    ["Telecom", element.telecom],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForContactPoint(
  element: ContactPoint | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["System", element.system],
    ["Value", element.value],
    ["Use", element.use],
    ["Rank", element.rank],
    ["Period", element.period],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForContributor(
  element: Contributor | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Type", element.type],
    ["Name", element.name],
    ["Contact", element.contact],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForDataRequirement(
  element: DataRequirement | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Type", element.type],
    ["Profile", element.profile],
    ["Must Support", element.mustSupport],
    ["Code Filter", element.codeFilter],
    ["Date Filter", element.dateFilter],
    ["Limit", element.limit],
    ["Sort", element.sort],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForExpression(
  element: Expression | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Description", element.description],
    ["Name", element.name],
    ["Language", element.language],
    ["Expression", element.expression],
    ["Reference", element.reference],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForExtension(
  element: Extension | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return []
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForHumanName(
  element: HumanName | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Use", element.use],
    ["Text", element.text],
    ["Family", element.family],
    ["Given", element.given],
    ["Prefix", element.prefix],
    ["Suffix", element.suffix],
    ["Period", element.period],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForIdentifier(
  element: Identifier | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Use", element.use],
    ["Type", element.type],
    ["System", element.system],
    ["Value", element.value],
    ["Period", element.period],
    ["Assigner", element.assigner],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForMeta(
  element: Meta | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Version Id", element.versionId],
    ["Last Updated", element.lastUpdated],
    ["Source", element.source],
    ["Profile", element.profile],
    ["Security", element.security],
    ["Tag", element.tag],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForMoney(
  element: Money | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Value", element.value],
    ["Currency", element.currency],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForParameterDefinition(
  element: ParameterDefinition | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Name", element.name],
    ["Use", element.use],
    ["Min", element.min],
    ["Max", element.max],
    ["Documentation", element.documentation],
    ["Type", element.type],
    ["Profile", element.profile],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForPeriod(
  element: Period | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Start", element.start],
    ["End", element.end],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForQuantity(
  element: Quantity | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Value", element.value],
    ["Comparator", element.comparator],
    ["Unit", element.unit],
    ["System", element.system],
    ["Code", element.code],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForRange(
  element: Range | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Low", element.low],
    ["High", element.high],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForRatio(
  element: Ratio | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Numerator", element.numerator],
    ["Denominator", element.denominator],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForRatioRange(
  element: RatioRange | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Low Numerator", element.lowNumerator],
    ["High Numerator", element.highNumerator],
    ["Denominator", element.denominator],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForReference(
  element: Reference | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Reference", element.reference],
    ["Type", element.type],
    ["Identifier", element.identifier],
    ["Display", element.display],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForRelatedArtifact(
  element: RelatedArtifact | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Type", element.type],
    ["Label", element.label],
    ["Display", element.display],
    ["Citation", element.citation],
    ["Url", element.url],
    ["Document", element.document],
    ["Resource", element.resource],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForSampledData(
  element: SampledData | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Origin", element.origin],
    ["Period", element.period],
    ["Factor", element.factor],
    ["Lower Limit", element.lowerLimit],
    ["Upper Limit", element.upperLimit],
    ["Dimensions", element.dimensions],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForSignature(
  element: Signature | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Type", element.type],
    ["When", element.when],
    ["Who", element.who],
    ["On Behalf Of", element.onBehalfOf],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForTriggerDefinition(
  element: TriggerDefinition | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [
    ["Type", element.type],
    ["Name", element.name],
    ["Data", element.data],
    ["Condition", element.condition],
  ]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
/**
 * Return a text representation for an element
 */
export function narrativeTextForUsageContext(
  element: UsageContext | null | undefined
): string | undefined {
  if (!element) {
    return undefined;
  }

  return [["Code", element.code]]
    .filter((x) => !!`${x[1] || ""}`.trim())
    .map(
      (x) =>
        `<span class="fhir-element-attr">${x[0]}</span>: <span class="fhir-element-attr">${x[1]}</span>`
    )
    .join(" ");
}
