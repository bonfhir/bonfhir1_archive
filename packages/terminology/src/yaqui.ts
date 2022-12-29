/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Yaqui
 */
export const YaquiCode = {
  /**
   * Yaqui
   */
  Yaqui: "1711-1",

  /**
   * Barrio Libre
   */
  BarrioLibre: "1712-9",

  /**
   * Pascua Yaqui
   */
  PascuaYaqui: "1713-7",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type YaquiCode = typeof YaquiCode[keyof typeof YaquiCode];
