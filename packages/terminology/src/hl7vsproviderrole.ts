/**
 * Value Set of codes that specify the functional involvement with the activity being transmitted (e.g., Case Manager, Evaluator, Transcriber, Nurse Care Practitioner, Midwife, Physician Assistant, etc.).
 * http://terminology.hl7.org/ValueSet/v2-0443
 */
export const Hl7VSProviderRoleCode = {
  /**
   * Admitting
   */
  Admitting: "AD",

  /**
   * Administering Provider
   */
  AdministeringProvider: "AP",

  /**
   * Attending
   */
  Attending: "AT",

  /**
   * Collecting Provider
   */
  CollectingProvider: "CLP",

  /**
   * Consulting Provider
   */
  ConsultingProvider: "CP",

  /**
   * Dispensing Provider
   */
  DispensingProvider: "DP",

  /**
   * Entering Provider (probably not the same as transcriptionist?)
   */
  EnteringProviderprobablynotthesameastranscriptionist: "EP",

  /**
   * Family Health Care Professional
   */
  FamilyHealthCareProfessional: "FHCP",

  /**
   * Initiating Provider (as in action by)
   */
  InitiatingProviderasinactionby: "IP",

  /**
   * Medical Director
   */
  MedicalDirector: "MDIR",

  /**
   * Ordering Provider
   */
  OrderingProvider: "OP",

  /**
   * Pharmacist   (not sure how to dissect Pharmacist/Treatment Supplier's Verifier ID)
   */
  PharmacistnotsurehowtodissectPharmacistTreatmentSuppliersVerifierID: "PH",

  /**
   * Primary Care Provider
   */
  PrimaryCareProvider: "PP",

  /**
   * Responsible Observer
   */
  ResponsibleObserver: "RO",

  /**
   * Referring Provider
   */
  ReferringProvider: "RP",

  /**
   * Referred to Provider
   */
  ReferredtoProvider: "RT",

  /**
   * Transcriptionist
   */
  Transcriptionist: "TR",

  /**
   * Primary Interpreter
   */
  PrimaryInterpreter: "PI",

  /**
   * Assistant/Alternate Interpreter
   */
  AssistantAlternateInterpreter: "AI",

  /**
   * Technician
   */
  Technician: "TN",

  /**
   * Verifying Provider
   */
  VerifyingProvider: "VP",

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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProviderRoleCode =
  typeof Hl7VSProviderRoleCode[keyof typeof Hl7VSProviderRoleCode];
