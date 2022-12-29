/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-VaginalFoam
 */
export const VaginalFoamCode = {
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
export type VaginalFoamCode =
  typeof VaginalFoamCode[keyof typeof VaginalFoamCode];
