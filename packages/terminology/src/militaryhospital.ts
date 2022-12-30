/**
 * A health care facility operated by the Department of Defense or other military operation.
 * http://terminology.hl7.org/ValueSet/v3-MilitaryHospital
 */
export const MilitaryHospitalCode = {
  /**
   * Military Hospital
   */
  MHSP: "MHSP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MilitaryHospitalCode =
  typeof MilitaryHospitalCode[keyof typeof MilitaryHospitalCode];
