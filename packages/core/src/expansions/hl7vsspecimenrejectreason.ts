/**
 * Reasons a specimen may be rejected for a specified observation/result/analysis.  Used in Version 2 messaging in the SPM segment.
 * http://terminology.hl7.org/ValueSet/v2-0490
 */
export const Hl7VSSpecimenRejectReasonCode = {
  /**
   * Expired
   */
  EX: "EX",

  /**
   * Quantity not sufficient
   */
  QS: "QS",

  /**
   * Broken container
   */
  RB: "RB",

  /**
   * Clotting
   */
  RC: "RC",

  /**
   * Missing collection date
   */
  RD: "RD",

  /**
   * Missing patient ID number
   */
  RA: "RA",

  /**
   * Missing patient name
   */
  RE: "RE",

  /**
   * Hemolysis
   */
  RH: "RH",

  /**
   * Identification problem
   */
  RI: "RI",

  /**
   * Labeling
   */
  RM: "RM",

  /**
   * Contamination
   */
  RN: "RN",

  /**
   * Missing phlebotomist ID
   */
  RP: "RP",

  /**
   * Improper storage
   */
  RR: "RR",

  /**
   * Name misspelling
   */
  RS: "RS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecimenRejectReasonCode =
  typeof Hl7VSSpecimenRejectReasonCode[keyof typeof Hl7VSSpecimenRejectReasonCode];
