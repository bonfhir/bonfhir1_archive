/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-FoamDrugForm
 */
export const FoamDrugFormCode = {
  /**
   * Foam
   */
  FOAM: "FOAM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FoamDrugFormCode =
  typeof FoamDrugFormCode[keyof typeof FoamDrugFormCode];
