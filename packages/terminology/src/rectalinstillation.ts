/**
 * Instillation, rectal
 * http://terminology.hl7.org/ValueSet/v3-RectalInstillation
 */
export const RectalInstillationCode = {
  /**
   * Instillation, rectal
   */
  RECINSTL: "RECINSTL",

  /**
   * Instillation, rectal tube
   */
  RECTINSTL: "RECTINSTL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RectalInstillationCode =
  typeof RectalInstillationCode[keyof typeof RectalInstillationCode];
