/**
 * Value Set of codes that identify the level of care a patient may be afforded when assigned to this location definition.
 * http://terminology.hl7.org/ValueSet/v2-0263
 */
export const Hl7VSLevelOfCareCode = {
  /**
   * Ambulatory
   */
  Ambulatory: "A",

  /**
   * Emergency
   */
  Emergency: "E",

  /**
   * Isolation
   */
  Isolation: "F",

  /**
   * Intensive care
   */
  Intensivecare: "N",

  /**
   * Critical care
   */
  Criticalcare: "C",

  /**
   * Routine
   */
  Routine: "R",

  /**
   * Surgery
   */
  Surgery: "S",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLevelOfCareCode =
  typeof Hl7VSLevelOfCareCode[keyof typeof Hl7VSLevelOfCareCode];
