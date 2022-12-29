/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-LiquidCleanser
 */
export const LiquidCleanserCode = {
  /**
   * Liquid Cleanser
   */
  LiquidCleanser: "LIQCLN",

  /**
   * Medicated Liquid Soap
   */
  MedicatedLiquidSoap: "LIQSOAP",

  /**
   * Shampoo
   */
  Shampoo: "SHMP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LiquidCleanserCode =
  typeof LiquidCleanserCode[keyof typeof LiquidCleanserCode];
