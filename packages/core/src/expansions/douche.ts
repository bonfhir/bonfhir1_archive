/**
 * Douche
 * http://terminology.hl7.org/ValueSet/v3-Douche
 */
export const DoucheCode = {
  /**
   * Douche, vaginal
   */
  DOUCHE: "DOUCHE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DoucheCode = typeof DoucheCode[keyof typeof DoucheCode];
