/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Yokuts
 */
export const YokutsCode = {
  /**
   * Yokuts
   */
  Yokuts: "1717-8",

  /**
   * Chukchansi
   */
  Chukchansi: "1718-6",

  /**
   * Tachi
   */
  Tachi: "1719-4",

  /**
   * Tule River
   */
  TuleRiver: "1720-2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type YokutsCode = typeof YokutsCode[keyof typeof YokutsCode];
