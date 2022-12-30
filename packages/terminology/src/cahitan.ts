/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Cahitan
 */
export const CahitanCode = {
  /**
   * Yaqui
   */
  "x-YAQ": "x-YAQ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CahitanCode = typeof CahitanCode[keyof typeof CahitanCode];
