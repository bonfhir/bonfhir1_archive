/**
 * Concepts that represent functional involvement of a caregiver or member of a care team with an activity being transmitted (e.g., Case Manager, Evaluator, Transcriber, Nurse Care Practitioner, Midwife, Physician Assistant, etc.)
 * http://terminology.hl7.org/ValueSet/v2-0912
 */
export const Hl7VSParticipationCode = {
  /**
   * Alert Acknowledging Provider
   */
  AlertAcknowledgingProvider: "AAP",

  /**
   * Administration Cosigner
   */
  AdministrationCosigner: "AC",

  /**
   * Admitting Provider
   */
  AdmittingProvider: "AD",

  /**
   * Authorized Performing Health Professional
   */
  AuthorizedPerformingHealthProfessional: "AHP",

  /**
   * Assistant/Alternate Interpreter
   */
  AssistantAlternateInterpreter: "AI",

  /**
   * Administering Provider
   */
  AdministeringProvider: "AP",

  /**
   * Authorized Performing Provider Organization
   */
  AuthorizedPerformingProviderOrganization: "APO",

  /**
   * Assistant Result Interpreter
   */
  AssistantResultInterpreter: "ARI",

  /**
   * Attending Provider
   */
  AttendingProvider: "AT",

  /**
   * Author/Event Initiator
   */
  AuthorEventInitiator: "AUT",

  /**
   * Collecting Provider Organization
   */
  CollectingProviderOrganization: "CLPO",

  /**
   * Consulting Provider
   */
  ConsultingProvider: "CP",

  /**
   * De-Identification Entity
   */
  DeIdentificationEntity: "DIE",

  /**
   * Dispensing Provider
   */
  DispensingProvider: "DP",

  /**
   * Expected Assistant Result Interpreter
   */
  ExpectedAssistantResultInterpreter: "EARI",

  /**
   * Entering Device
   */
  EnteringDevice: "ED",

  /**
   * Entering Organization
   */
  EnteringOrganization: "EO",

  /**
   * Entering Person
   */
  EnteringPerson: "EP",

  /**
   * Expected Principal Result Interpreter
   */
  ExpectedPrincipalResultInterpreter: "EPRI",

  /**
   * Equipment
   */
  Equipment: "EQUIP",

  /**
   * Family Health Care Professional
   */
  FamilyHealthCareProfessional: "FHCP",

  /**
   * From Location
   */
  FromLocation: "FL",

  /**
   * Medical Director
   */
  MedicalDirector: "MDIR",

  /**
   * Ordering Facility
   */
  OrderingFacility: "OF",

  /**
   * Ordering Provider
   */
  OrderingProvider: "OP",

  /**
   * Ordering Provider Organization
   */
  OrderingProviderOrganization: "OPO",

  /**
   * Outside Site(s) Where Observation May Be Performed
   */
  OutsideSitesWhereObservationMayBePerformed: "OS",

  /**
   * Packed by
   */
  Packedby: "PB",

  /**
   * Pharmacist
   */
  Pharmacist: "PH",

  /**
   * Primary Interpreter
   */
  PrimaryInterpreter: "PI",

  /**
   * Performing Organization
   */
  PerformingOrganization: "PO",

  /**
   * Performing Organization Medical Director
   */
  PerformingOrganizationMedicalDirector: "POMD",

  /**
   * Primary Care Provider
   */
  PrimaryCareProvider: "PP",

  /**
   * Patient Preferred Pharmacy
   */
  PatientPreferredPharmacy: "PPH",

  /**
   * Principal Result Interpreter
   */
  PrincipalResultInterpreter: "PRI",

  /**
   * Results Copies To
   */
  ResultsCopiesTo: "RCT",

  /**
   * Referring Health Professional
   */
  ReferringHealthProfessional: "RHP",

  /**
   * Re-Identification Entity
   */
  ReIdentificationEntity: "RIE",

  /**
   * Responsible Observer
   */
  ResponsibleObserver: "RO",

  /**
   * Referring Provider
   */
  ReferringProvider: "RP",

  /**
   * Referring Provider Organization
   */
  ReferringProviderOrganization: "RPO",

  /**
   * Referred to Provider
   */
  ReferredtoProvider: "RT",

  /**
   * Send by
   */
  Sendby: "SB",

  /**
   * Specimen Collector
   */
  SpecimenCollector: "SC",

  /**
   * To Location
   */
  ToLocation: "TL",

  /**
   * Technician
   */
  Technician: "TN",

  /**
   * Transcriptionist
   */
  Transcriptionist: "TR",

  /**
   * Verifier (Verifying Person)
   */
  VerifierVerifyingPerson: "VP",

  /**
   * Verifying Pharmaceutical Supplier   (not sure how to dissect Pharmacist/Treatment Supplier's Verifier ID)
   */
  VerifyingPharmaceuticalSuppliernotsurehowtodissectPharmacistTreatmentSuppliersVerifierID:
    "VPS",

  /**
   * Verifying Treatment Supplier   (not sure how to dissect Pharmacist/Treatment Supplier's Verifier ID)
   */
  VerifyingTreatmentSuppliernotsurehowtodissectPharmacistTreatmentSuppliersVerifierID:
    "VTS",

  /**
   * Waypoint
   */
  Waypoint: "WAY",

  /**
   * Waypoint Recipient
   */
  WaypointRecipient: "WAYR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSParticipationCode =
  typeof Hl7VSParticipationCode[keyof typeof Hl7VSParticipationCode];
