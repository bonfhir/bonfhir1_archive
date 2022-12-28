/**
 * Value Set of codes that identify the level of care a patient may be afforded when assigned to this location definition.
 * http://terminology.hl7.org/ValueSet/v2-0263
 */
export const Hl7VSLevelOfCareCode = {
  /**
   * Ambulatory
   */
  A: "A",

  /**
   * Emergency
   */
  E: "E",

  /**
   * Isolation
   */
  F: "F",

  /**
   * Intensive care
   */
  N: "N",

  /**
   * Critical care
   */
  C: "C",

  /**
   * Routine
   */
  R: "R",

  /**
   * Surgery
   */
  S: "S",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLevelOfCareCode =
  typeof Hl7VSLevelOfCareCode[keyof typeof Hl7VSLevelOfCareCode];
