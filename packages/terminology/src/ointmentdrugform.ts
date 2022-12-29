/**
 * A semisolid preparation intended for external application to the skin or mucous membranes.
 * http://terminology.hl7.org/ValueSet/v3-OintmentDrugForm
 */
export const OintmentDrugFormCode = {
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
export type OintmentDrugFormCode =
  typeof OintmentDrugFormCode[keyof typeof OintmentDrugFormCode];
