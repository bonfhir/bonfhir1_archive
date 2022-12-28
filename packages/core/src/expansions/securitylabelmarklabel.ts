/**
 * Codes used for displayed Security Label tags. Supports the selection of SecurityLabelMark leaf concepts for use, e.g., in security labels.
 * http://terminology.hl7.org/ValueSet/v3-SecurityLabelMarkLabel
 */
export const SecurityLabelMarkLabelCode = {
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
export type SecurityLabelMarkLabelCode =
  typeof SecurityLabelMarkLabelCode[keyof typeof SecurityLabelMarkLabelCode];
