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
  confidentialmark: "ConfidentialMark",

  /**
   * copy of original mark
   */
  copyoforiginalmark: "COPYMark",

  /**
   * deliver only to addressee mark
   */
  deliveronlytoaddresseemark: "DeliverToAddresseeOnlyMark",

  /**
   * prohibition against redisclosure mark
   */
  prohibitionagainstredisclosuremark: "RedisclosureProhibitionMark",

  /**
   * restricted confidentiality mark
   */
  restrictedconfidentialitymark: "RestrictedConfidentialityMark",

  /**
   * Draft Mark
   */
  DraftMark: "DRAFTMark",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityLabelMarkCode =
  typeof SecurityLabelMarkCode[keyof typeof SecurityLabelMarkCode];
