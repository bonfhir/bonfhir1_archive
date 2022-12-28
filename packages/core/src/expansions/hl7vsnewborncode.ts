/**
 * Value Set of codes specifying whether the baby was born in or out of the facility.
 * http://terminology.hl7.org/ValueSet/v2-0425
 */
export const Hl7VSNewbornCodeCode = {
  /**
   * Born at home
   */
  "5": "5",

  /**
   * Born en route
   */
  "3": "3",

  /**
   * Born in facility
   */
  "1": "1",

  /**
   * Other
   */
  "4": "4",

  /**
   * Transfer in
   */
  "2": "2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSNewbornCodeCode =
  typeof Hl7VSNewbornCodeCode[keyof typeof Hl7VSNewbornCodeCode];
