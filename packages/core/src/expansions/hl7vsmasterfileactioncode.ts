/**
 * Concepts specifying an action for a master file record.  Used in HL7 V2.x messaging in the MFE segment.
 * http://terminology.hl7.org/ValueSet/v2-0180
 */
export const Hl7VSMasterfileActionCodeCode = {
  /**
   * Add record to master file
   */
  MAD: "MAD",

  /**
   * Delete record from master file
   */
  MDL: "MDL",

  /**
   * Update record for master file
   */
  MUP: "MUP",

  /**
   * Deactivate: discontinue using record in master file, but do not delete from database
   */
  MDC: "MDC",

  /**
   * Reactivate deactivated record
   */
  MAC: "MAC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSMasterfileActionCodeCode =
  typeof Hl7VSMasterfileActionCodeCode[keyof typeof Hl7VSMasterfileActionCodeCode];
