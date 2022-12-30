/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Pidgin
 */
export const PidginCode = {
  /**
   * Chinook Wawa
   */
  "x-CHH": "x-CHH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PidginCode = typeof PidginCode[keyof typeof PidginCode];
