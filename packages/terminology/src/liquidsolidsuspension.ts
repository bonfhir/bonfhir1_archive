/**
 * A liquid preparation which consists of solid particles dispersed throughout a liquid phase in which the particles are not soluble.
 * http://terminology.hl7.org/ValueSet/v3-LiquidSolidSuspension
 */
export const LiquidSolidSuspensionCode = {
  /**
   * Gel
   */
  Gel: "GEL",

  /**
   * Gel with Applicator
   */
  GelwithApplicator: "GELAPL",

  /**
   * Nasal Gel
   */
  NasalGel: "NASGEL",

  /**
   * Ophthalmic Gel
   */
  OphthalmicGel: "OPGEL",

  /**
   * Otic Gel
   */
  OticGel: "OTGEL",

  /**
   * Topical Gel
   */
  TopicalGel: "TOPGEL",

  /**
   * Urethral Gel
   */
  UrethralGel: "URETHGEL",

  /**
   * Vaginal Gel
   */
  VaginalGel: "VAGGEL",

  /**
   * Vaginal Gel with Applicator
   */
  VaginalGelwithApplicator: "VGELAPL",

  /**
   * Paste
   */
  Paste: "PASTE",

  /**
   * Pudding
   */
  Pudding: "PUD",

  /**
   * Toothpaste
   */
  Toothpaste: "TPASTE",

  /**
   * Suspension
   */
  Suspension: "SUSP",

  /**
   * Intrathecal Suspension
   */
  IntrathecalSuspension: "ITSUSP",

  /**
   * Ophthalmic Suspension
   */
  OphthalmicSuspension: "OPSUSP",

  /**
   * Oral Suspension
   */
  OralSuspension: "ORSUSP",

  /**
   * Extended-Release Suspension
   */
  ExtendedReleaseSuspension: "ERSUSP",

  /**
   * 12 Hour Extended-Release Suspension
   */
  TwelveHourExtendedReleaseSuspension: "ERSUSP12",

  /**
   * 24 Hour Extended Release Suspension
   */
  TwentyFourHourExtendedReleaseSuspension: "ERSUSP24",

  /**
   * Otic Suspension
   */
  OticSuspension: "OTSUSP",

  /**
   * Rectal Suspension
   */
  RectalSuspension: "RECSUSP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LiquidSolidSuspensionCode =
  typeof LiquidSolidSuspensionCode[keyof typeof LiquidSolidSuspensionCode];
