/**
 * A liquid preparation that contains one or more chemical substances dissolved, i.e., molecularly dispersed, in a suitable solvent or mixture of mutually miscible solvents.
 * http://terminology.hl7.org/ValueSet/v3-SolutionDrugForm
 */
export const SolutionDrugFormCode = {
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
export type SolutionDrugFormCode =
  typeof SolutionDrugFormCode[keyof typeof SolutionDrugFormCode];
