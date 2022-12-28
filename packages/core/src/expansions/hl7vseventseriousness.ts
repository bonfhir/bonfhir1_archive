/**
 * Value Set of codes that a sender to designate an event as serious or significant.
 * http://terminology.hl7.org/ValueSet/v2-0238
 */
export const Hl7VSEventSeriousnessCode = {
  /**
   * Yes
   */
  Y: "Y",

  /**
   * Significant
   */
  S: "S",

  /**
   * No
   */
  N: "N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEventSeriousnessCode =
  typeof Hl7VSEventSeriousnessCode[keyof typeof Hl7VSEventSeriousnessCode];
