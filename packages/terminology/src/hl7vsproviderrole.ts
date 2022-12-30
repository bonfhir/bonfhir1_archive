/**
 * Value Set of codes that specify the functional involvement with the activity being transmitted (e.g., Case Manager, Evaluator, Transcriber, Nurse Care Practitioner, Midwife, Physician Assistant, etc.).
 * http://terminology.hl7.org/ValueSet/v2-0443
 */
export const Hl7VSProviderRoleCode = {
  /**
   * Admitting
   */
  AD: "AD",

  /**
   * Administering Provider
   */
  AP: "AP",

  /**
   * Attending
   */
  AT: "AT",

  /**
   * Collecting Provider
   */
  CLP: "CLP",

  /**
   * Consulting Provider
   */
  CP: "CP",

  /**
   * Dispensing Provider
   */
  DP: "DP",

  /**
   * Entering Provider (probably not the same as transcriptionist?)
   */
  EP: "EP",

  /**
   * Family Health Care Professional
   */
  FHCP: "FHCP",

  /**
   * Initiating Provider (as in action by)
   */
  IP: "IP",

  /**
   * Medical Director
   */
  MDIR: "MDIR",

  /**
   * Ordering Provider
   */
  OP: "OP",

  /**
   * Pharmacist   (not sure how to dissect Pharmacist/Treatment Supplier's Verifier ID)
   */
  PH: "PH",

  /**
   * Primary Care Provider
   */
  PP: "PP",

  /**
   * Responsible Observer
   */
  RO: "RO",

  /**
   * Referring Provider
   */
  RP: "RP",

  /**
   * Referred to Provider
   */
  RT: "RT",

  /**
   * Transcriptionist
   */
  TR: "TR",

  /**
   * Primary Interpreter
   */
  PI: "PI",

  /**
   * Assistant/Alternate Interpreter
   */
  AI: "AI",

  /**
   * Technician
   */
  TN: "TN",

  /**
   * Verifying Provider
   */
  VP: "VP",

  /**
   * Verifying Pharmaceutical Supplier   (not sure how to dissect Pharmacist/Treatment Supplier's Verifier ID)
   */
  VPS: "VPS",

  /**
   * Verifying Treatment Supplier   (not sure how to dissect Pharmacist/Treatment Supplier's Verifier ID)
   */
  VTS: "VTS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProviderRoleCode =
  typeof Hl7VSProviderRoleCode[keyof typeof Hl7VSProviderRoleCode];
