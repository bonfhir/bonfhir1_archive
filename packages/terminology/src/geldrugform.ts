/**
 * A semisolid system consisting of either suspensions made up of small inorganic particles or large organic molecules interpenetrated by a liquid.
 * http://terminology.hl7.org/ValueSet/v3-GelDrugForm
 */
export const GelDrugFormCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GelDrugFormCode =
  typeof GelDrugFormCode[keyof typeof GelDrugFormCode];
