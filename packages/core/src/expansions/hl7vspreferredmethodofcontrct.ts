/**
 * Value Set of codes that specify which of a group of multiple phone numbers is the preferred method of contact for this person.
 * http://terminology.hl7.org/ValueSet/v2-0185
 */
export const Hl7VSPreferredMethodOfContrctCode = {
  /**
   * Beeper Number
   */
  B: "B",

  /**
   * Cellular Phone Number
   */
  C: "C",

  /**
   * E-Mail Address (for backward compatibility)
   */
  E: "E",

  /**
   * FAX Number
   */
  F: "F",

  /**
   * Home Phone Number
   */
  H: "H",

  /**
   * Office Phone Number
   */
  O: "O",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPreferredMethodOfContrctCode =
  typeof Hl7VSPreferredMethodOfContrctCode[keyof typeof Hl7VSPreferredMethodOfContrctCode];
