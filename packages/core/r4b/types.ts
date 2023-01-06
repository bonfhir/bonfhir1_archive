import type {
  Address,
  Annotation,
  Attachment,
  CodeableConcept,
  CodeableReference,
  Coding,
  ContactDetail,
  ContactPoint,
  Contributor,
  DataRequirement,
  DomainResource,
  Expression,
  Extension,
  FhirResource,
  HumanName,
  Identifier,
  Meta,
  Money,
  Narrative,
  ParameterDefinition,
  Period,
  Quantity,
  Range,
  Ratio,
  RatioRange,
  Reference,
  RelatedArtifact,
  Resource,
  SampledData,
  Signature,
  TriggerDefinition,
  UsageContext,
} from "fhir/r4";

/**
 * All the possible resource types.
 */
export type ResourceType = FhirResource["resourceType"];

/**
 * Allow referencing a resource type from its string ResourceType representation.
 */
export type ExtractResource<TResourceType extends ResourceType> = Extract<
  FhirResource,
  { resourceType: TResourceType }
>;

/**
 * All the resources types for DomainResource only.
 */
export const DomainResourceTypes: string[] = [
  "Account",
  "ActivityDefinition",
  "AdministrableProductDefinition",
  "AdverseEvent",
  "AllergyIntolerance",
  "Appointment",
  "AppointmentResponse",
  "AuditEvent",
  "Basic",
  "BiologicallyDerivedProduct",
  "BodyStructure",
  "CapabilityStatement",
  "CarePlan",
  "CareTeam",
  "CatalogEntry",
  "ChargeItem",
  "ChargeItemDefinition",
  "Citation",
  "Claim",
  "ClaimResponse",
  "ClinicalImpression",
  "ClinicalUseDefinition",
  "CodeSystem",
  "Communication",
  "CommunicationRequest",
  "CompartmentDefinition",
  "Composition",
  "ConceptMap",
  "Condition",
  "Consent",
  "Contract",
  "Coverage",
  "CoverageEligibilityRequest",
  "CoverageEligibilityResponse",
  "DetectedIssue",
  "Device",
  "DeviceDefinition",
  "DeviceMetric",
  "DeviceRequest",
  "DeviceUseStatement",
  "DiagnosticReport",
  "DocumentManifest",
  "DocumentReference",
  "Encounter",
  "Endpoint",
  "EnrollmentRequest",
  "EnrollmentResponse",
  "EpisodeOfCare",
  "EventDefinition",
  "Evidence",
  "EvidenceReport",
  "EvidenceVariable",
  "ExampleScenario",
  "ExplanationOfBenefit",
  "FamilyMemberHistory",
  "Flag",
  "Goal",
  "GraphDefinition",
  "Group",
  "GuidanceResponse",
  "HealthcareService",
  "ImagingStudy",
  "Immunization",
  "ImmunizationEvaluation",
  "ImmunizationRecommendation",
  "ImplementationGuide",
  "Ingredient",
  "InsurancePlan",
  "Invoice",
  "Library",
  "Linkage",
  "List",
  "Location",
  "ManufacturedItemDefinition",
  "Measure",
  "MeasureReport",
  "Media",
  "Medication",
  "MedicationAdministration",
  "MedicationDispense",
  "MedicationKnowledge",
  "MedicationRequest",
  "MedicationStatement",
  "MedicinalProductDefinition",
  "MessageDefinition",
  "MessageHeader",
  "MolecularSequence",
  "NamingSystem",
  "NutritionOrder",
  "NutritionProduct",
  "Observation",
  "ObservationDefinition",
  "OperationDefinition",
  "OperationOutcome",
  "Organization",
  "OrganizationAffiliation",
  "PackagedProductDefinition",
  "Patient",
  "PaymentNotice",
  "PaymentReconciliation",
  "Person",
  "PlanDefinition",
  "Practitioner",
  "PractitionerRole",
  "Procedure",
  "Provenance",
  "Questionnaire",
  "QuestionnaireResponse",
  "RegulatedAuthorization",
  "RelatedPerson",
  "RequestGroup",
  "ResearchDefinition",
  "ResearchElementDefinition",
  "ResearchStudy",
  "ResearchSubject",
  "RiskAssessment",
  "Schedule",
  "SearchParameter",
  "ServiceRequest",
  "Slot",
  "Specimen",
  "SpecimenDefinition",
  "StructureDefinition",
  "StructureMap",
  "Subscription",
  "SubscriptionStatus",
  "SubscriptionTopic",
  "Substance",
  "SubstanceDefinition",
  "SupplyDelivery",
  "SupplyRequest",
  "Task",
  "TerminologyCapabilities",
  "TestReport",
  "TestScript",
  "ValueSet",
  "VerificationResult",
  "VisionPrescription",
];

/**
 * Return true if `resource` is a `DomainResource`.
 */
export function isDomainResource(
  resource: Resource
): resource is DomainResource {
  return DomainResourceTypes.includes(resource.resourceType);
}

export type AnnotatedComplexElement =
  | (Address & { readonly elementType: "Address" })
  | (Annotation & { readonly elementType: "Annotation" })
  | (Attachment & { readonly elementType: "Attachment" })
  | (CodeableConcept & { readonly elementType: "CodeableConcept" })
  | (CodeableReference & { readonly elementType: "CodeableReference" })
  | (Coding & { readonly elementType: "Coding" })
  | (ContactDetail & { readonly elementType: "ContactDetail" })
  | (ContactPoint & { readonly elementType: "ContactPoint" })
  | (Contributor & { readonly elementType: "Contributor" })
  | (DataRequirement & { readonly elementType: "DataRequirement" })
  | (Expression & { readonly elementType: "Expression" })
  | (Extension & { readonly elementType: "Extension" })
  | (HumanName & { readonly elementType: "HumanName" })
  | (Identifier & { readonly elementType: "Identifier" })
  | (Meta & { readonly elementType: "Meta" })
  | (Money & { readonly elementType: "Money" })
  | (Narrative & { readonly elementType: "Narrative" })
  | (ParameterDefinition & { readonly elementType: "ParameterDefinition" })
  | (Period & { readonly elementType: "Period" })
  | (Quantity & { readonly elementType: "Quantity" })
  | (Range & { readonly elementType: "Range" })
  | (Ratio & { readonly elementType: "Ratio" })
  | (RatioRange & { readonly elementType: "RatioRange" })
  | (Reference & { readonly elementType: "Reference" })
  | (RelatedArtifact & { readonly elementType: "RelatedArtifact" })
  | (SampledData & { readonly elementType: "SampledData" })
  | (Signature & { readonly elementType: "Signature" })
  | (TriggerDefinition & { readonly elementType: "TriggerDefinition" })
  | (UsageContext & { readonly elementType: "UsageContext" });

export type ComplexElementType = AnnotatedComplexElement["elementType"];

/**
 * Allow referencing a resource type from its string ResourceType representation.
 */
export type ExtractComplexElement<TComplexElement extends ComplexElementType> =
  Omit<
    Extract<AnnotatedComplexElement, { elementType: TComplexElement }>,
    "elementType"
  >;

export type PrimitiveElementType =
  | "base64Binary"
  | "boolean"
  | "date"
  | "dateTime"
  | "decimal"
  | "instant"
  | "integer"
  | "string"
  | "time"
  | "uri"
  | "xhtml";

/**
 *  Create a new type from T with K attributes required.
 */
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

/**
 * Returns the given `value` as is if it satisfies `Array.isArray` or otherwise
 * wraps the given `value` in an array.
 */
export function asArray<T>(
  value: T
): T extends ReadonlyArray<unknown> ? T : [T] {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return Array.isArray(value) ? (value as any) : [value];
}
