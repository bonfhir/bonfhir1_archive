/**
 * A semisolid preparation intended for external application to the skin or mucous membranes.
 * http://terminology.hl7.org/ValueSet/v3-OintmentDrugForm
 */
export const OintmentDrugFormCode = {
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
export type OintmentDrugFormCode =
  typeof OintmentDrugFormCode[keyof typeof OintmentDrugFormCode];
