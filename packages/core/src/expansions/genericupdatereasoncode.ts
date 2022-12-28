/**
 * **Description:**Identifies why a change is being made to a record.
 * http://terminology.hl7.org/ValueSet/v3-GenericUpdateReasonCode
 */
export const GenericUpdateReasonCodeCode = {
  /**
   * information change
   */
  CHGDATA: "CHGDATA",

  /**
   * error correction
   */
  FIXDATA: "FIXDATA",

  /**
   * merge data
   */
  MDATA: "MDATA",

  /**
   * new information
   */
  NEWDATA: "NEWDATA",

  /**
   * unmerge data
   */
  UMDATA: "UMDATA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GenericUpdateReasonCodeCode =
  typeof GenericUpdateReasonCodeCode[keyof typeof GenericUpdateReasonCodeCode];
