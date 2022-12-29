/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Diegueno
 */
export const DieguenoCode = {
  /**
   * Kumeyaay
   */
  Kumeyaay: "x-DIH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DieguenoCode = typeof DieguenoCode[keyof typeof DieguenoCode];
