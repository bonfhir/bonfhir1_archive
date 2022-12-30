/**
 * Codes used for displayed Security Label tags. Supports selection of SecurityLabelMark value set with head code for e.g., rules engine policy set purposes.
 * http://terminology.hl7.org/ValueSet/v3-SecurityLabelMark
 */
export const SecurityLabelMarkCode = {
  /**
   * Security Label Mark
   */
  SecurityLabelMark: "SecurityLabelMark",

  /**
   * confidential mark
   */
  ConfidentialMark: "ConfidentialMark",

  /**
   * copy of original mark
   */
  COPYMark: "COPYMark",

  /**
   * deliver only to addressee mark
   */
  DeliverToAddresseeOnlyMark: "DeliverToAddresseeOnlyMark",

  /**
   * prohibition against redisclosure mark
   */
  RedisclosureProhibitionMark: "RedisclosureProhibitionMark",

  /**
   * restricted confidentiality mark
   */
  RestrictedConfidentialityMark: "RestrictedConfidentialityMark",

  /**
   * Draft Mark
   */
  DRAFTMark: "DRAFTMark",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityLabelMarkCode =
  typeof SecurityLabelMarkCode[keyof typeof SecurityLabelMarkCode];
