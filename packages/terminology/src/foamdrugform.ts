/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-FoamDrugForm
 */
export const FoamDrugFormCode = {
  /**
   * Foam
   */
  Foam: "FOAM",

  /**
   * Foam with Applicator
   */
  FoamwithApplicator: "FOAMAPL",

  /**
   * Rectal foam
   */
  Rectalfoam: "RECFORM",

  /**
   * Vaginal foam
   */
  Vaginalfoam: "VAGFOAM",

  /**
   * Vaginal foam with applicator
   */
  Vaginalfoamwithapplicator: "VAGFOAMAPL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FoamDrugFormCode =
  typeof FoamDrugFormCode[keyof typeof FoamDrugFormCode];
