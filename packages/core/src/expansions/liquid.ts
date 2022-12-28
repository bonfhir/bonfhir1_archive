/**
 * A state of substance that is an intermediate one entered into as matter goes from solid to gas; liquids are also intermediate in that they have neither the orderliness of a crystal nor the randomness of a gas. (Note: This term should not be used to describe solutions, only pure chemicals in their liquid state.)
 * http://terminology.hl7.org/ValueSet/v3-Liquid
 */
export const LiquidCode = {
  /**
   * Liquid Cleanser
   */
  LIQCLN: "LIQCLN",

  /**
   * Medicated Liquid Soap
   */
  LIQSOAP: "LIQSOAP",

  /**
   * Shampoo
   */
  SHMP: "SHMP",

  /**
   * Oil
   */
  OIL: "OIL",

  /**
   * Topical Oil
   */
  TOPOIL: "TOPOIL",

  /**
   * Solution
   */
  SOL: "SOL",

  /**
   * Drops
   */
  DROP: "DROP",

  /**
   * Nasal Drops
   */
  NDROP: "NDROP",

  /**
   * Ophthalmic Drops
   */
  OPDROP: "OPDROP",

  /**
   * Oral Drops
   */
  ORDROP: "ORDROP",

  /**
   * Otic Drops
   */
  OTDROP: "OTDROP",

  /**
   * Intraperitoneal Solution
   */
  IPSOL: "IPSOL",

  /**
   * Irrigation Solution
   */
  IRSOL: "IRSOL",

  /**
   * Douche
   */
  DOUCHE: "DOUCHE",

  /**
   * Enema
   */
  ENEMA: "ENEMA",

  /**
   * Ophthalmic Irrigation Solution
   */
  OPIRSOL: "OPIRSOL",

  /**
   * Intravenous Solution
   */
  IVSOL: "IVSOL",

  /**
   * Oral Solution
   */
  ORALSOL: "ORALSOL",

  /**
   * Elixir
   */
  ELIXIR: "ELIXIR",

  /**
   * Mouthwash/Rinse
   */
  RINSE: "RINSE",

  /**
   * Syrup
   */
  SYRUP: "SYRUP",

  /**
   * Rectal Solution
   */
  RECSOL: "RECSOL",

  /**
   * Topical Solution
   */
  TOPSOL: "TOPSOL",

  /**
   * Liniment
   */
  LIN: "LIN",

  /**
   * Mucous Membrane Topical Solution
   */
  MUCTOPSOL: "MUCTOPSOL",

  /**
   * Tincture
   */
  TINC: "TINC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LiquidCode = typeof LiquidCode[keyof typeof LiquidCode];
