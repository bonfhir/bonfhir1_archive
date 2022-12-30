/**
 * Concepts which are used to specify the source of a comment, as used in HL7 Version 2.x messaging in the NTE segment.
 * http://terminology.hl7.org/ValueSet/v2-0105
 */
export const Hl7VSSourceOfCommentCode = {
  /**
   * Ancillary (filler) department is source of comment
   */
  L: "L",

  /**
   * Orderer (placer) is source of comment
   */
  P: "P",

  /**
   * Other system is source of comment
   */
  O: "O",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSourceOfCommentCode =
  typeof Hl7VSSourceOfCommentCode[keyof typeof Hl7VSSourceOfCommentCode];
