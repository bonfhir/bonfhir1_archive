/**
 * Copy Number Event.
 * http://terminology.hl7.org/ValueSet/copy-number-event
 */
export const CopyNumberEventCode = {
  /**
   * amplification
   */
  amp: "amp",

  /**
   * deletion
   */
  del: "del",

  /**
   * loss of function
   */
  lof: "lof",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CopyNumberEventCode =
  typeof CopyNumberEventCode[keyof typeof CopyNumberEventCode];
