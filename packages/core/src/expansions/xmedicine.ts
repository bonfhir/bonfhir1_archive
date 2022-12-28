/**
 * A type of Administered Substance that is manufactured from raw organic or inorganic ingredients and used in the course of a patient's therapy.
 * http://terminology.hl7.org/ValueSet/v3-xMedicine
 */
export const XMedicineCode = {
  /**
   * Blood Product
   */
  BLDPRD: "BLDPRD",

  /**
   * Vaccine
   */
  VCCNE: "VCCNE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XMedicineCode = typeof XMedicineCode[keyof typeof XMedicineCode];
