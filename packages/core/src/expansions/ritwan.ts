/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Ritwan
 */
export const RitwanCode = {
  /**
   * Yurok
   */
  "x-YUR": "x-YUR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RitwanCode = typeof RitwanCode[keyof typeof RitwanCode];
