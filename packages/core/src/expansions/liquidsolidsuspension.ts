/**
 * A liquid preparation which consists of solid particles dispersed throughout a liquid phase in which the particles are not soluble.
 * http://terminology.hl7.org/ValueSet/v3-LiquidSolidSuspension
 */
export const LiquidSolidSuspensionCode = {
  /**
   * Gel
   */
  GEL: "GEL",

  /**
   * Gel with Applicator
   */
  GELAPL: "GELAPL",

  /**
   * Nasal Gel
   */
  NASGEL: "NASGEL",

  /**
   * Ophthalmic Gel
   */
  OPGEL: "OPGEL",

  /**
   * Otic Gel
   */
  OTGEL: "OTGEL",

  /**
   * Topical Gel
   */
  TOPGEL: "TOPGEL",

  /**
   * Urethral Gel
   */
  URETHGEL: "URETHGEL",

  /**
   * Vaginal Gel
   */
  VAGGEL: "VAGGEL",

  /**
   * Vaginal Gel with Applicator
   */
  VGELAPL: "VGELAPL",

  /**
   * Paste
   */
  PASTE: "PASTE",

  /**
   * Pudding
   */
  PUD: "PUD",

  /**
   * Toothpaste
   */
  TPASTE: "TPASTE",

  /**
   * Suspension
   */
  SUSP: "SUSP",

  /**
   * Intrathecal Suspension
   */
  ITSUSP: "ITSUSP",

  /**
   * Ophthalmic Suspension
   */
  OPSUSP: "OPSUSP",

  /**
   * Oral Suspension
   */
  ORSUSP: "ORSUSP",

  /**
   * Extended-Release Suspension
   */
  ERSUSP: "ERSUSP",

  /**
   * 12 Hour Extended-Release Suspension
   */
  ERSUSP12: "ERSUSP12",

  /**
   * 24 Hour Extended Release Suspension
   */
  ERSUSP24: "ERSUSP24",

  /**
   * Otic Suspension
   */
  OTSUSP: "OTSUSP",

  /**
   * Rectal Suspension
   */
  RECSUSP: "RECSUSP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LiquidSolidSuspensionCode =
  typeof LiquidSolidSuspensionCode[keyof typeof LiquidSolidSuspensionCode];
