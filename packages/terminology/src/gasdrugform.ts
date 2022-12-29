/**
 * Any elastic aeriform fluid in which the molecules are separated from one another and have free paths.
 * http://terminology.hl7.org/ValueSet/v3-GasDrugForm
 */
export const GasDrugFormCode = {
  /**
   * Gas for Inhalation
   */
  GasforInhalation: "GASINHL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GasDrugFormCode =
  typeof GasDrugFormCode[keyof typeof GasDrugFormCode];
