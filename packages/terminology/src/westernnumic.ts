/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-WesternNumic
 */
export const WesternNumicCode = {
  /**
   * Mono
   */
  "x-MON": "x-MON",

  /**
   * Northern Paiute-Bannock
   */
  "x-PAO": "x-PAO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type WesternNumicCode =
  typeof WesternNumicCode[keyof typeof WesternNumicCode];
