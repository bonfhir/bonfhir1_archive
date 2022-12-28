/**
 * (X12N 282N00000N)
 * http://terminology.hl7.org/ValueSet/v3-GeneralAcuteCareHospital
 */
export const GeneralAcuteCareHospitalCode = {
  /**
   * Hospitals; General Acute Care Hospital
   */
  GACH: "GACH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GeneralAcuteCareHospitalCode =
  typeof GeneralAcuteCareHospitalCode[keyof typeof GeneralAcuteCareHospitalCode];
