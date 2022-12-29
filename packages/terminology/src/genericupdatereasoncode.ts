/**
 * **Description:**Identifies why a change is being made to a record.
 * http://terminology.hl7.org/ValueSet/v3-GenericUpdateReasonCode
 */
export const GenericUpdateReasonCodeCode = {
  /**
   * information change
   */
  informationchange: "CHGDATA",

  /**
   * error correction
   */
  errorcorrection: "FIXDATA",

  /**
   * merge data
   */
  mergedata: "MDATA",

  /**
   * new information
   */
  newinformation: "NEWDATA",

  /**
   * unmerge data
   */
  unmergedata: "UMDATA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GenericUpdateReasonCodeCode =
  typeof GenericUpdateReasonCodeCode[keyof typeof GenericUpdateReasonCodeCode];
