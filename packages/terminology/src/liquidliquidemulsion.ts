/**
 * A two-phase system in which one liquid is dispersed throughout another liquid in the form of small droplets.
 * http://terminology.hl7.org/ValueSet/v3-LiquidLiquidEmulsion
 */
export const LiquidLiquidEmulsionCode = {
  /**
   * Cream
   */
  CRM: "CRM",

  /**
   * Nasal Cream
   */
  NASCRM: "NASCRM",

  /**
   * Ophthalmic Cream
   */
  OPCRM: "OPCRM",

  /**
   * Oral Cream
   */
  ORCRM: "ORCRM",

  /**
   * Otic Cream
   */
  OTCRM: "OTCRM",

  /**
   * Rectal Cream
   */
  RECCRM: "RECCRM",

  /**
   * Topical Cream
   */
  TOPCRM: "TOPCRM",

  /**
   * Vaginal Cream
   */
  VAGCRM: "VAGCRM",

  /**
   * Vaginal Cream with Applicator
   */
  VAGCRMAPL: "VAGCRMAPL",

  /**
   * Lotion
   */
  LTN: "LTN",

  /**
   * Topical Lotion
   */
  TOPLTN: "TOPLTN",

  /**
   * Ointment
   */
  OINT: "OINT",

  /**
   * Nasal Ointment
   */
  NASOINT: "NASOINT",

  /**
   * Ointment with Applicator
   */
  OINTAPL: "OINTAPL",

  /**
   * Ophthalmic Ointment
   */
  OPOINT: "OPOINT",

  /**
   * Otic Ointment
   */
  OTOINT: "OTOINT",

  /**
   * Rectal Ointment
   */
  RECOINT: "RECOINT",

  /**
   * Topical Ointment
   */
  TOPOINT: "TOPOINT",

  /**
   * Vaginal Ointment
   */
  VAGOINT: "VAGOINT",

  /**
   * Vaginal Ointment with Applicator
   */
  VAGOINTAPL: "VAGOINTAPL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LiquidLiquidEmulsionCode =
  typeof LiquidLiquidEmulsionCode[keyof typeof LiquidLiquidEmulsionCode];
