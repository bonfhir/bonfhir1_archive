/**
 * Chew
 * http://terminology.hl7.org/ValueSet/v3-Chew
 */
export const ChewCode = {
  /**
   * Chew, oral
   */
  Cheworal: "CHEW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ChewCode = typeof ChewCode[keyof typeof ChewCode];
