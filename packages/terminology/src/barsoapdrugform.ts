/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-BarSoapDrugForm
 */
export const BarSoapDrugFormCode = {
  /**
   * Bar Soap
   */
  BarSoap: "BARSOAP",

  /**
   * Medicated Bar Soap
   */
  MedicatedBarSoap: "MEDBAR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type BarSoapDrugFormCode =
  typeof BarSoapDrugFormCode[keyof typeof BarSoapDrugFormCode];
