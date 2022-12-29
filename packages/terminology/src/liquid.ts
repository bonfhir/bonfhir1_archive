/**
 * A state of substance that is an intermediate one entered into as matter goes from solid to gas; liquids are also intermediate in that they have neither the orderliness of a crystal nor the randomness of a gas. (Note: This term should not be used to describe solutions, only pure chemicals in their liquid state.)
 * http://terminology.hl7.org/ValueSet/v3-Liquid
 */
export const LiquidCode = {
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

  /**
   * Oil
   */
  Oil: "OIL",

  /**
   * Topical Oil
   */
  TopicalOil: "TOPOIL",

  /**
   * Solution
   */
  Solution: "SOL",

  /**
   * Drops
   */
  Drops: "DROP",

  /**
   * Nasal Drops
   */
  NasalDrops: "NDROP",

  /**
   * Ophthalmic Drops
   */
  OphthalmicDrops: "OPDROP",

  /**
   * Oral Drops
   */
  OralDrops: "ORDROP",

  /**
   * Otic Drops
   */
  OticDrops: "OTDROP",

  /**
   * Intraperitoneal Solution
   */
  IntraperitonealSolution: "IPSOL",

  /**
   * Irrigation Solution
   */
  IrrigationSolution: "IRSOL",

  /**
   * Douche
   */
  Douche: "DOUCHE",

  /**
   * Enema
   */
  Enema: "ENEMA",

  /**
   * Ophthalmic Irrigation Solution
   */
  OphthalmicIrrigationSolution: "OPIRSOL",

  /**
   * Intravenous Solution
   */
  IntravenousSolution: "IVSOL",

  /**
   * Oral Solution
   */
  OralSolution: "ORALSOL",

  /**
   * Elixir
   */
  Elixir: "ELIXIR",

  /**
   * Mouthwash/Rinse
   */
  MouthwashRinse: "RINSE",

  /**
   * Syrup
   */
  Syrup: "SYRUP",

  /**
   * Rectal Solution
   */
  RectalSolution: "RECSOL",

  /**
   * Topical Solution
   */
  TopicalSolution: "TOPSOL",

  /**
   * Liniment
   */
  Liniment: "LIN",

  /**
   * Mucous Membrane Topical Solution
   */
  MucousMembraneTopicalSolution: "MUCTOPSOL",

  /**
   * Tincture
   */
  Tincture: "TINC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LiquidCode = typeof LiquidCode[keyof typeof LiquidCode];
