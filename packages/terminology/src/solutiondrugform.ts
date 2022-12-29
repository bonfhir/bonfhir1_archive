/**
 * A liquid preparation that contains one or more chemical substances dissolved, i.e., molecularly dispersed, in a suitable solvent or mixture of mutually miscible solvents.
 * http://terminology.hl7.org/ValueSet/v3-SolutionDrugForm
 */
export const SolutionDrugFormCode = {
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
export type SolutionDrugFormCode =
  typeof SolutionDrugFormCode[keyof typeof SolutionDrugFormCode];
