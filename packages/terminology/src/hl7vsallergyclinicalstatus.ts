/**
 * Value Set of codes specifying the verification status for the allergy.
 * http://terminology.hl7.org/ValueSet/v2-0438
 */
export const Hl7VSAllergyClinicalStatusCode = {
  /**
   * Unconfirmed
   */
  Unconfirmed: "U",

  /**
   * Pending
   */
  Pending: "P",

  /**
   * Suspect
   */
  Suspect: "S",

  /**
   * Confirmed or verified
   */
  Confirmedorverified: "C",

  /**
   * Confirmed but inactive
   */
  Confirmedbutinactive: "I",

  /**
   * Erroneous
   */
  Erroneous: "E",

  /**
   * Doubt raised
   */
  Doubtraised: "D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAllergyClinicalStatusCode =
  typeof Hl7VSAllergyClinicalStatusCode[keyof typeof Hl7VSAllergyClinicalStatusCode];
