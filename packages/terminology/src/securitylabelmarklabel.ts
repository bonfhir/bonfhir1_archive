/**
 * Codes used for displayed Security Label tags. Supports the selection of SecurityLabelMark leaf concepts for use, e.g., in security labels.
 * http://terminology.hl7.org/ValueSet/v3-SecurityLabelMarkLabel
 */
export const SecurityLabelMarkLabelCode = {
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
export type SecurityLabelMarkLabelCode =
  typeof SecurityLabelMarkLabelCode[keyof typeof SecurityLabelMarkLabelCode];
