/**
 * Value Set of codes that specify codes for an event precipitating/triggering a charge activity.
 * http://terminology.hl7.org/ValueSet/v2-0100
 */
export const Hl7VSWhenToChargeCode = {
  /**
   * On discharge
   */
  D: "D",

  /**
   * On receipt of order
   */
  O: "O",

  /**
   * At time service is completed
   */
  R: "R",

  /**
   * At time service is started
   */
  S: "S",

  /**
   * At a designated date/time
   */
  T: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSWhenToChargeCode =
  typeof Hl7VSWhenToChargeCode[keyof typeof Hl7VSWhenToChargeCode];
