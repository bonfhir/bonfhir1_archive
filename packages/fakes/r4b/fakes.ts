import type { ExtractResource, ResourceType } from "@bonfhir/core/r4b";
import { build } from "@bonfhir/core/r4b";
import type {
  Account,
  ActivityDefinition,
  AdministrableProductDefinition,
  AdverseEvent,
  AllergyIntolerance,
  Appointment,
  AppointmentResponse,
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
  CodeSystem,
  Communication,
  CommunicationRequest,
  CompartmentDefinition,
  Composition,
  ConceptMap,
  Condition,
  Consent,
  Contract,
  Coverage,
  CoverageEligibilityRequest,
  CoverageEligibilityResponse,
  DetectedIssue,
  Device,
  DeviceDefinition,
  DeviceMetric,
  DeviceRequest,
  DeviceUseStatement,
  DiagnosticReport,
  DocumentManifest,
  DocumentReference,
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
  FamilyMemberHistory,
  Flag,
  Goal,
  GraphDefinition,
  Group,
  GuidanceResponse,
  HealthcareService,
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
  MolecularSequence,
  NamingSystem,
  NutritionOrder,
  NutritionProduct,
  Observation,
  ObservationDefinition,
  OperationDefinition,
  OperationOutcome,
  Organization,
  OrganizationAffiliation,
  PackagedProductDefinition,
  Patient,
  PaymentNotice,
  PaymentReconciliation,
  Person,
  PlanDefinition,
  Practitioner,
  PractitionerRole,
  Procedure,
  Provenance,
  Questionnaire,
  QuestionnaireResponse,
  RegulatedAuthorization,
  RelatedPerson,
  RequestGroup,
  ResearchDefinition,
  ResearchElementDefinition,
  ResearchStudy,
  ResearchSubject,
  RiskAssessment,
  Schedule,
  SearchParameter,
  ServiceRequest,
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
  ValueSet,
  VerificationResult,
  VisionPrescription,
} from "fhir/r4";

/**
 * Create a fake FHIR resource.
 * This is NOT synthetic data. Every value is randomized.
 */
export function fake<TResource extends ResourceType>(
  resourceType: TResource,
  override:
    | Partial<Omit<ExtractResource<TResource>, "resourceType">>
    | null
    | undefined
): ExtractResource<TResource> {
  switch (resourceType) {
    case "Account":
      return build(resourceType, {
        ...fakeAccount(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ActivityDefinition":
      return build(resourceType, {
        ...fakeActivityDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "AdministrableProductDefinition":
      return build(resourceType, {
        ...fakeAdministrableProductDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "AdverseEvent":
      return build(resourceType, {
        ...fakeAdverseEvent(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "AllergyIntolerance":
      return build(resourceType, {
        ...fakeAllergyIntolerance(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Appointment":
      return build(resourceType, {
        ...fakeAppointment(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "AppointmentResponse":
      return build(resourceType, {
        ...fakeAppointmentResponse(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "AuditEvent":
      return build(resourceType, {
        ...fakeAuditEvent(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Basic":
      return build(resourceType, {
        ...fakeBasic(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "BiologicallyDerivedProduct":
      return build(resourceType, {
        ...fakeBiologicallyDerivedProduct(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "BodyStructure":
      return build(resourceType, {
        ...fakeBodyStructure(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "CapabilityStatement":
      return build(resourceType, {
        ...fakeCapabilityStatement(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "CarePlan":
      return build(resourceType, {
        ...fakeCarePlan(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "CareTeam":
      return build(resourceType, {
        ...fakeCareTeam(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "CatalogEntry":
      return build(resourceType, {
        ...fakeCatalogEntry(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ChargeItem":
      return build(resourceType, {
        ...fakeChargeItem(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ChargeItemDefinition":
      return build(resourceType, {
        ...fakeChargeItemDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Citation":
      return build(resourceType, {
        ...fakeCitation(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Claim":
      return build(resourceType, {
        ...fakeClaim(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ClaimResponse":
      return build(resourceType, {
        ...fakeClaimResponse(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ClinicalImpression":
      return build(resourceType, {
        ...fakeClinicalImpression(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ClinicalUseDefinition":
      return build(resourceType, {
        ...fakeClinicalUseDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "CodeSystem":
      return build(resourceType, {
        ...fakeCodeSystem(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Communication":
      return build(resourceType, {
        ...fakeCommunication(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "CommunicationRequest":
      return build(resourceType, {
        ...fakeCommunicationRequest(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "CompartmentDefinition":
      return build(resourceType, {
        ...fakeCompartmentDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Composition":
      return build(resourceType, {
        ...fakeComposition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ConceptMap":
      return build(resourceType, {
        ...fakeConceptMap(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Condition":
      return build(resourceType, {
        ...fakeCondition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Consent":
      return build(resourceType, {
        ...fakeConsent(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Contract":
      return build(resourceType, {
        ...fakeContract(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Coverage":
      return build(resourceType, {
        ...fakeCoverage(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "CoverageEligibilityRequest":
      return build(resourceType, {
        ...fakeCoverageEligibilityRequest(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "CoverageEligibilityResponse":
      return build(resourceType, {
        ...fakeCoverageEligibilityResponse(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "DetectedIssue":
      return build(resourceType, {
        ...fakeDetectedIssue(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Device":
      return build(resourceType, {
        ...fakeDevice(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "DeviceDefinition":
      return build(resourceType, {
        ...fakeDeviceDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "DeviceMetric":
      return build(resourceType, {
        ...fakeDeviceMetric(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "DeviceRequest":
      return build(resourceType, {
        ...fakeDeviceRequest(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "DeviceUseStatement":
      return build(resourceType, {
        ...fakeDeviceUseStatement(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "DiagnosticReport":
      return build(resourceType, {
        ...fakeDiagnosticReport(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "DocumentManifest":
      return build(resourceType, {
        ...fakeDocumentManifest(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "DocumentReference":
      return build(resourceType, {
        ...fakeDocumentReference(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Encounter":
      return build(resourceType, {
        ...fakeEncounter(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Endpoint":
      return build(resourceType, {
        ...fakeEndpoint(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "EnrollmentRequest":
      return build(resourceType, {
        ...fakeEnrollmentRequest(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "EnrollmentResponse":
      return build(resourceType, {
        ...fakeEnrollmentResponse(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "EpisodeOfCare":
      return build(resourceType, {
        ...fakeEpisodeOfCare(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "EventDefinition":
      return build(resourceType, {
        ...fakeEventDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Evidence":
      return build(resourceType, {
        ...fakeEvidence(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "EvidenceReport":
      return build(resourceType, {
        ...fakeEvidenceReport(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "EvidenceVariable":
      return build(resourceType, {
        ...fakeEvidenceVariable(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ExampleScenario":
      return build(resourceType, {
        ...fakeExampleScenario(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ExplanationOfBenefit":
      return build(resourceType, {
        ...fakeExplanationOfBenefit(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "FamilyMemberHistory":
      return build(resourceType, {
        ...fakeFamilyMemberHistory(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Flag":
      return build(resourceType, {
        ...fakeFlag(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Goal":
      return build(resourceType, {
        ...fakeGoal(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "GraphDefinition":
      return build(resourceType, {
        ...fakeGraphDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Group":
      return build(resourceType, {
        ...fakeGroup(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "GuidanceResponse":
      return build(resourceType, {
        ...fakeGuidanceResponse(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "HealthcareService":
      return build(resourceType, {
        ...fakeHealthcareService(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ImagingStudy":
      return build(resourceType, {
        ...fakeImagingStudy(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Immunization":
      return build(resourceType, {
        ...fakeImmunization(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ImmunizationEvaluation":
      return build(resourceType, {
        ...fakeImmunizationEvaluation(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ImmunizationRecommendation":
      return build(resourceType, {
        ...fakeImmunizationRecommendation(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ImplementationGuide":
      return build(resourceType, {
        ...fakeImplementationGuide(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Ingredient":
      return build(resourceType, {
        ...fakeIngredient(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "InsurancePlan":
      return build(resourceType, {
        ...fakeInsurancePlan(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Invoice":
      return build(resourceType, {
        ...fakeInvoice(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Library":
      return build(resourceType, {
        ...fakeLibrary(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Linkage":
      return build(resourceType, {
        ...fakeLinkage(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "List":
      return build(resourceType, {
        ...fakeList(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Location":
      return build(resourceType, {
        ...fakeLocation(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ManufacturedItemDefinition":
      return build(resourceType, {
        ...fakeManufacturedItemDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Measure":
      return build(resourceType, {
        ...fakeMeasure(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "MeasureReport":
      return build(resourceType, {
        ...fakeMeasureReport(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Media":
      return build(resourceType, {
        ...fakeMedia(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Medication":
      return build(resourceType, {
        ...fakeMedication(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "MedicationAdministration":
      return build(resourceType, {
        ...fakeMedicationAdministration(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "MedicationDispense":
      return build(resourceType, {
        ...fakeMedicationDispense(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "MedicationKnowledge":
      return build(resourceType, {
        ...fakeMedicationKnowledge(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "MedicationRequest":
      return build(resourceType, {
        ...fakeMedicationRequest(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "MedicationStatement":
      return build(resourceType, {
        ...fakeMedicationStatement(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "MedicinalProductDefinition":
      return build(resourceType, {
        ...fakeMedicinalProductDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "MessageDefinition":
      return build(resourceType, {
        ...fakeMessageDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "MessageHeader":
      return build(resourceType, {
        ...fakeMessageHeader(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "MolecularSequence":
      return build(resourceType, {
        ...fakeMolecularSequence(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "NamingSystem":
      return build(resourceType, {
        ...fakeNamingSystem(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "NutritionOrder":
      return build(resourceType, {
        ...fakeNutritionOrder(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "NutritionProduct":
      return build(resourceType, {
        ...fakeNutritionProduct(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Observation":
      return build(resourceType, {
        ...fakeObservation(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ObservationDefinition":
      return build(resourceType, {
        ...fakeObservationDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "OperationDefinition":
      return build(resourceType, {
        ...fakeOperationDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "OperationOutcome":
      return build(resourceType, {
        ...fakeOperationOutcome(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Organization":
      return build(resourceType, {
        ...fakeOrganization(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "OrganizationAffiliation":
      return build(resourceType, {
        ...fakeOrganizationAffiliation(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "PackagedProductDefinition":
      return build(resourceType, {
        ...fakePackagedProductDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Patient":
      return build(resourceType, {
        ...fakePatient(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "PaymentNotice":
      return build(resourceType, {
        ...fakePaymentNotice(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "PaymentReconciliation":
      return build(resourceType, {
        ...fakePaymentReconciliation(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Person":
      return build(resourceType, {
        ...fakePerson(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "PlanDefinition":
      return build(resourceType, {
        ...fakePlanDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Practitioner":
      return build(resourceType, {
        ...fakePractitioner(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "PractitionerRole":
      return build(resourceType, {
        ...fakePractitionerRole(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Procedure":
      return build(resourceType, {
        ...fakeProcedure(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Provenance":
      return build(resourceType, {
        ...fakeProvenance(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Questionnaire":
      return build(resourceType, {
        ...fakeQuestionnaire(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "QuestionnaireResponse":
      return build(resourceType, {
        ...fakeQuestionnaireResponse(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "RegulatedAuthorization":
      return build(resourceType, {
        ...fakeRegulatedAuthorization(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "RelatedPerson":
      return build(resourceType, {
        ...fakeRelatedPerson(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "RequestGroup":
      return build(resourceType, {
        ...fakeRequestGroup(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ResearchDefinition":
      return build(resourceType, {
        ...fakeResearchDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ResearchElementDefinition":
      return build(resourceType, {
        ...fakeResearchElementDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ResearchStudy":
      return build(resourceType, {
        ...fakeResearchStudy(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ResearchSubject":
      return build(resourceType, {
        ...fakeResearchSubject(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "RiskAssessment":
      return build(resourceType, {
        ...fakeRiskAssessment(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Schedule":
      return build(resourceType, {
        ...fakeSchedule(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "SearchParameter":
      return build(resourceType, {
        ...fakeSearchParameter(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ServiceRequest":
      return build(resourceType, {
        ...fakeServiceRequest(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Slot":
      return build(resourceType, {
        ...fakeSlot(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Specimen":
      return build(resourceType, {
        ...fakeSpecimen(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "SpecimenDefinition":
      return build(resourceType, {
        ...fakeSpecimenDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "StructureDefinition":
      return build(resourceType, {
        ...fakeStructureDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "StructureMap":
      return build(resourceType, {
        ...fakeStructureMap(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Subscription":
      return build(resourceType, {
        ...fakeSubscription(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "SubscriptionStatus":
      return build(resourceType, {
        ...fakeSubscriptionStatus(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "SubscriptionTopic":
      return build(resourceType, {
        ...fakeSubscriptionTopic(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Substance":
      return build(resourceType, {
        ...fakeSubstance(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "SubstanceDefinition":
      return build(resourceType, {
        ...fakeSubstanceDefinition(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "SupplyDelivery":
      return build(resourceType, {
        ...fakeSupplyDelivery(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "SupplyRequest":
      return build(resourceType, {
        ...fakeSupplyRequest(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "Task":
      return build(resourceType, {
        ...fakeTask(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "TerminologyCapabilities":
      return build(resourceType, {
        ...fakeTerminologyCapabilities(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "TestReport":
      return build(resourceType, {
        ...fakeTestReport(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "TestScript":
      return build(resourceType, {
        ...fakeTestScript(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "ValueSet":
      return build(resourceType, {
        ...fakeValueSet(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "VerificationResult":
      return build(resourceType, {
        ...fakeVerificationResult(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    case "VisionPrescription":
      return build(resourceType, {
        ...fakeVisionPrescription(),
        ...override,
      } as unknown as Omit<ExtractResource<TResource>, "resourceType">);
    default:
      throw new Error(`Unsupported fake for resource type ${resourceType}`);
  }
}

function fakeAccount(): Account {
  throw new Error();
}

function fakeActivityDefinition(): ActivityDefinition {
  throw new Error();
}

function fakeAdministrableProductDefinition(): AdministrableProductDefinition {
  throw new Error();
}

function fakeAdverseEvent(): AdverseEvent {
  throw new Error();
}

function fakeAllergyIntolerance(): AllergyIntolerance {
  throw new Error();
}

function fakeAppointment(): Appointment {
  throw new Error();
}

function fakeAppointmentResponse(): AppointmentResponse {
  throw new Error();
}

function fakeAuditEvent(): AuditEvent {
  throw new Error();
}

function fakeBasic(): Basic {
  throw new Error();
}

function fakeBiologicallyDerivedProduct(): BiologicallyDerivedProduct {
  throw new Error();
}

function fakeBodyStructure(): BodyStructure {
  throw new Error();
}

function fakeCapabilityStatement(): CapabilityStatement {
  throw new Error();
}

function fakeCarePlan(): CarePlan {
  throw new Error();
}

function fakeCareTeam(): CareTeam {
  throw new Error();
}

function fakeCatalogEntry(): CatalogEntry {
  throw new Error();
}

function fakeChargeItem(): ChargeItem {
  throw new Error();
}

function fakeChargeItemDefinition(): ChargeItemDefinition {
  throw new Error();
}

function fakeCitation(): Citation {
  throw new Error();
}

function fakeClaim(): Claim {
  throw new Error();
}

function fakeClaimResponse(): ClaimResponse {
  throw new Error();
}

function fakeClinicalImpression(): ClinicalImpression {
  throw new Error();
}

function fakeClinicalUseDefinition(): ClinicalUseDefinition {
  throw new Error();
}

function fakeCodeSystem(): CodeSystem {
  throw new Error();
}

function fakeCommunication(): Communication {
  throw new Error();
}

function fakeCommunicationRequest(): CommunicationRequest {
  throw new Error();
}

function fakeCompartmentDefinition(): CompartmentDefinition {
  throw new Error();
}

function fakeComposition(): Composition {
  throw new Error();
}

function fakeConceptMap(): ConceptMap {
  throw new Error();
}

function fakeCondition(): Condition {
  throw new Error();
}

function fakeConsent(): Consent {
  throw new Error();
}

function fakeContract(): Contract {
  throw new Error();
}

function fakeCoverage(): Coverage {
  throw new Error();
}

function fakeCoverageEligibilityRequest(): CoverageEligibilityRequest {
  throw new Error();
}

function fakeCoverageEligibilityResponse(): CoverageEligibilityResponse {
  throw new Error();
}

function fakeDetectedIssue(): DetectedIssue {
  throw new Error();
}

function fakeDevice(): Device {
  throw new Error();
}

function fakeDeviceDefinition(): DeviceDefinition {
  throw new Error();
}

function fakeDeviceMetric(): DeviceMetric {
  throw new Error();
}

function fakeDeviceRequest(): DeviceRequest {
  throw new Error();
}

function fakeDeviceUseStatement(): DeviceUseStatement {
  throw new Error();
}

function fakeDiagnosticReport(): DiagnosticReport {
  throw new Error();
}

function fakeDocumentManifest(): DocumentManifest {
  throw new Error();
}

function fakeDocumentReference(): DocumentReference {
  throw new Error();
}

function fakeEncounter(): Encounter {
  throw new Error();
}

function fakeEndpoint(): Endpoint {
  throw new Error();
}

function fakeEnrollmentRequest(): EnrollmentRequest {
  throw new Error();
}

function fakeEnrollmentResponse(): EnrollmentResponse {
  throw new Error();
}

function fakeEpisodeOfCare(): EpisodeOfCare {
  throw new Error();
}

function fakeEventDefinition(): EventDefinition {
  throw new Error();
}

function fakeEvidence(): Evidence {
  throw new Error();
}

function fakeEvidenceReport(): EvidenceReport {
  throw new Error();
}

function fakeEvidenceVariable(): EvidenceVariable {
  throw new Error();
}

function fakeExampleScenario(): ExampleScenario {
  throw new Error();
}

function fakeExplanationOfBenefit(): ExplanationOfBenefit {
  throw new Error();
}

function fakeFamilyMemberHistory(): FamilyMemberHistory {
  throw new Error();
}

function fakeFlag(): Flag {
  throw new Error();
}

function fakeGoal(): Goal {
  throw new Error();
}

function fakeGraphDefinition(): GraphDefinition {
  throw new Error();
}

function fakeGroup(): Group {
  throw new Error();
}

function fakeGuidanceResponse(): GuidanceResponse {
  throw new Error();
}

function fakeHealthcareService(): HealthcareService {
  throw new Error();
}

function fakeImagingStudy(): ImagingStudy {
  throw new Error();
}

function fakeImmunization(): Immunization {
  throw new Error();
}

function fakeImmunizationEvaluation(): ImmunizationEvaluation {
  throw new Error();
}

function fakeImmunizationRecommendation(): ImmunizationRecommendation {
  throw new Error();
}

function fakeImplementationGuide(): ImplementationGuide {
  throw new Error();
}

function fakeIngredient(): Ingredient {
  throw new Error();
}

function fakeInsurancePlan(): InsurancePlan {
  throw new Error();
}

function fakeInvoice(): Invoice {
  throw new Error();
}

function fakeLibrary(): Library {
  throw new Error();
}

function fakeLinkage(): Linkage {
  throw new Error();
}

function fakeList(): List {
  throw new Error();
}

function fakeLocation(): Location {
  throw new Error();
}

function fakeManufacturedItemDefinition(): ManufacturedItemDefinition {
  throw new Error();
}

function fakeMeasure(): Measure {
  throw new Error();
}

function fakeMeasureReport(): MeasureReport {
  throw new Error();
}

function fakeMedia(): Media {
  throw new Error();
}

function fakeMedication(): Medication {
  throw new Error();
}

function fakeMedicationAdministration(): MedicationAdministration {
  throw new Error();
}

function fakeMedicationDispense(): MedicationDispense {
  throw new Error();
}

function fakeMedicationKnowledge(): MedicationKnowledge {
  throw new Error();
}

function fakeMedicationRequest(): MedicationRequest {
  throw new Error();
}

function fakeMedicationStatement(): MedicationStatement {
  throw new Error();
}

function fakeMedicinalProductDefinition(): MedicinalProductDefinition {
  throw new Error();
}

function fakeMessageDefinition(): MessageDefinition {
  throw new Error();
}

function fakeMessageHeader(): MessageHeader {
  throw new Error();
}

function fakeMolecularSequence(): MolecularSequence {
  throw new Error();
}

function fakeNamingSystem(): NamingSystem {
  throw new Error();
}

function fakeNutritionOrder(): NutritionOrder {
  throw new Error();
}

function fakeNutritionProduct(): NutritionProduct {
  throw new Error();
}

function fakeObservation(): Observation {
  throw new Error();
}

function fakeObservationDefinition(): ObservationDefinition {
  throw new Error();
}

function fakeOperationDefinition(): OperationDefinition {
  throw new Error();
}

function fakeOperationOutcome(): OperationOutcome {
  throw new Error();
}

function fakeOrganization(): Organization {
  throw new Error();
}

function fakeOrganizationAffiliation(): OrganizationAffiliation {
  throw new Error();
}

function fakePackagedProductDefinition(): PackagedProductDefinition {
  throw new Error();
}

function fakePatient(): Patient {
  throw new Error();
}

function fakePaymentNotice(): PaymentNotice {
  throw new Error();
}

function fakePaymentReconciliation(): PaymentReconciliation {
  throw new Error();
}

function fakePerson(): Person {
  throw new Error();
}

function fakePlanDefinition(): PlanDefinition {
  throw new Error();
}

function fakePractitioner(): Practitioner {
  throw new Error();
}

function fakePractitionerRole(): PractitionerRole {
  throw new Error();
}

function fakeProcedure(): Procedure {
  throw new Error();
}

function fakeProvenance(): Provenance {
  throw new Error();
}

function fakeQuestionnaire(): Questionnaire {
  throw new Error();
}

function fakeQuestionnaireResponse(): QuestionnaireResponse {
  throw new Error();
}

function fakeRegulatedAuthorization(): RegulatedAuthorization {
  throw new Error();
}

function fakeRelatedPerson(): RelatedPerson {
  throw new Error();
}

function fakeRequestGroup(): RequestGroup {
  throw new Error();
}

function fakeResearchDefinition(): ResearchDefinition {
  throw new Error();
}

function fakeResearchElementDefinition(): ResearchElementDefinition {
  throw new Error();
}

function fakeResearchStudy(): ResearchStudy {
  throw new Error();
}

function fakeResearchSubject(): ResearchSubject {
  throw new Error();
}

function fakeRiskAssessment(): RiskAssessment {
  throw new Error();
}

function fakeSchedule(): Schedule {
  throw new Error();
}

function fakeSearchParameter(): SearchParameter {
  throw new Error();
}

function fakeServiceRequest(): ServiceRequest {
  throw new Error();
}

function fakeSlot(): Slot {
  throw new Error();
}

function fakeSpecimen(): Specimen {
  throw new Error();
}

function fakeSpecimenDefinition(): SpecimenDefinition {
  throw new Error();
}

function fakeStructureDefinition(): StructureDefinition {
  throw new Error();
}

function fakeStructureMap(): StructureMap {
  throw new Error();
}

function fakeSubscription(): Subscription {
  throw new Error();
}

function fakeSubscriptionStatus(): SubscriptionStatus {
  throw new Error();
}

function fakeSubscriptionTopic(): SubscriptionTopic {
  throw new Error();
}

function fakeSubstance(): Substance {
  throw new Error();
}

function fakeSubstanceDefinition(): SubstanceDefinition {
  throw new Error();
}

function fakeSupplyDelivery(): SupplyDelivery {
  throw new Error();
}

function fakeSupplyRequest(): SupplyRequest {
  throw new Error();
}

function fakeTask(): Task {
  throw new Error();
}

function fakeTerminologyCapabilities(): TerminologyCapabilities {
  throw new Error();
}

function fakeTestReport(): TestReport {
  throw new Error();
}

function fakeTestScript(): TestScript {
  throw new Error();
}

function fakeValueSet(): ValueSet {
  throw new Error();
}

function fakeVerificationResult(): VerificationResult {
  throw new Error();
}

function fakeVisionPrescription(): VisionPrescription {
  throw new Error();
}
