/**
 * A Type of medicine that creates an immune protection without the recipient experiencing the disease.
 * http://terminology.hl7.org/ValueSet/v3-VaccineEntityType
 */
export const VaccineEntityTypeCode = {
  /**
   * Vaccine
   */
  Vaccine: "VCCNE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VaccineEntityTypeCode =
  typeof VaccineEntityTypeCode[keyof typeof VaccineEntityTypeCode];
