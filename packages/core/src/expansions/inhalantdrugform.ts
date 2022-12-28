/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-InhalantDrugForm
 */
export const InhalantDrugFormCode = {
  /**
   * Inhalant
   */
  INHL: "INHL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InhalantDrugFormCode =
  typeof InhalantDrugFormCode[keyof typeof InhalantDrugFormCode];
