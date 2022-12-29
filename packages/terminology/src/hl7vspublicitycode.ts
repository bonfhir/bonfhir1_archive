/**
 * Concepts specifying a level of publicity of information about a patient for a specific visit.
 * http://terminology.hl7.org/ValueSet/v2-0215
 */
export const Hl7VSPublicityCodeCode = {
  /**
   * Family only
   */
  Familyonly: "F",

  /**
   * No Publicity
   */
  NoPublicity: "N",

  /**
   * Other
   */
  Other: "O",

  /**
   * Unknown
   */
  Unknown: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPublicityCodeCode =
  typeof Hl7VSPublicityCodeCode[keyof typeof Hl7VSPublicityCodeCode];
