/**
 * A two-phase system in which one liquid is dispersed throughout another liquid in the form of small droplets.
 * http://terminology.hl7.org/ValueSet/v3-LiquidLiquidEmulsion
 */
export const LiquidLiquidEmulsionCode = {
  /**
   * Cream
   */
  Cream: "CRM",

  /**
   * Nasal Cream
   */
  NasalCream: "NASCRM",

  /**
   * Ophthalmic Cream
   */
  OphthalmicCream: "OPCRM",

  /**
   * Oral Cream
   */
  OralCream: "ORCRM",

  /**
   * Otic Cream
   */
  OticCream: "OTCRM",

  /**
   * Rectal Cream
   */
  RectalCream: "RECCRM",

  /**
   * Topical Cream
   */
  TopicalCream: "TOPCRM",

  /**
   * Vaginal Cream
   */
  VaginalCream: "VAGCRM",

  /**
   * Vaginal Cream with Applicator
   */
  VaginalCreamwithApplicator: "VAGCRMAPL",

  /**
   * Lotion
   */
  Lotion: "LTN",

  /**
   * Topical Lotion
   */
  TopicalLotion: "TOPLTN",

  /**
   * Ointment
   */
  Ointment: "OINT",

  /**
   * Nasal Ointment
   */
  NasalOintment: "NASOINT",

  /**
   * Ointment with Applicator
   */
  OintmentwithApplicator: "OINTAPL",

  /**
   * Ophthalmic Ointment
   */
  OphthalmicOintment: "OPOINT",

  /**
   * Otic Ointment
   */
  OticOintment: "OTOINT",

  /**
   * Rectal Ointment
   */
  RectalOintment: "RECOINT",

  /**
   * Topical Ointment
   */
  TopicalOintment: "TOPOINT",

  /**
   * Vaginal Ointment
   */
  VaginalOintment: "VAGOINT",

  /**
   * Vaginal Ointment with Applicator
   */
  VaginalOintmentwithApplicator: "VAGOINTAPL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LiquidLiquidEmulsionCode =
  typeof LiquidLiquidEmulsionCode[keyof typeof LiquidLiquidEmulsionCode];
