/**
 * Reasons a specimen may be rejected for a specified observation/result/analysis.  Used in Version 2 messaging in the SPM segment.
 * http://terminology.hl7.org/ValueSet/v2-0490
 */
export const Hl7VSSpecimenRejectReasonCode = {
  /**
   * Expired
   */
  Expired: "EX",

  /**
   * Quantity not sufficient
   */
  Quantitynotsufficient: "QS",

  /**
   * Broken container
   */
  Brokencontainer: "RB",

  /**
   * Clotting
   */
  Clotting: "RC",

  /**
   * Missing collection date
   */
  Missingcollectiondate: "RD",

  /**
   * Missing patient ID number
   */
  MissingpatientIDnumber: "RA",

  /**
   * Missing patient name
   */
  Missingpatientname: "RE",

  /**
   * Hemolysis
   */
  Hemolysis: "RH",

  /**
   * Identification problem
   */
  Identificationproblem: "RI",

  /**
   * Labeling
   */
  Labeling: "RM",

  /**
   * Contamination
   */
  Contamination: "RN",

  /**
   * Missing phlebotomist ID
   */
  MissingphlebotomistID: "RP",

  /**
   * Improper storage
   */
  Improperstorage: "RR",

  /**
   * Name misspelling
   */
  Namemisspelling: "RS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecimenRejectReasonCode =
  typeof Hl7VSSpecimenRejectReasonCode[keyof typeof Hl7VSSpecimenRejectReasonCode];
