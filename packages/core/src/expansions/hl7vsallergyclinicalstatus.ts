/**
 * Value Set of codes specifying the verification status for the allergy.
 * http://terminology.hl7.org/ValueSet/v2-0438
 */
export const Hl7VSAllergyClinicalStatusCode = {
  /**
   * Unconfirmed
   */
  U: "U",

  /**
   * Pending
   */
  P: "P",

  /**
   * Suspect
   */
  S: "S",

  /**
   * Confirmed or verified
   */
  C: "C",

  /**
   * Confirmed but inactive
   */
  I: "I",

  /**
   * Erroneous
   */
  E: "E",

  /**
   * Doubt raised
   */
  D: "D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAllergyClinicalStatusCode =
  typeof Hl7VSAllergyClinicalStatusCode[keyof typeof Hl7VSAllergyClinicalStatusCode];
