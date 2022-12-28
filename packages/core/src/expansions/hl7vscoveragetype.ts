/**
 * Note that this set of codes is used generally in the US only.
 * http://terminology.hl7.org/ValueSet/v2-0309
 */
export const Hl7VSCoverageTypeCode = {
  /**
   * Hospital/institutional
   */
  H: "H",

  /**
   * Physician/professional
   */
  P: "P",

  /**
   * Both hospital and physician
   */
  B: "B",

  /**
   * Pharmacy
   */
  RX: "RX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCoverageTypeCode =
  typeof Hl7VSCoverageTypeCode[keyof typeof Hl7VSCoverageTypeCode];
