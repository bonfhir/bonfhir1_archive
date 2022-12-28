/**
 * (X12N 283X00000N)
 * http://terminology.hl7.org/ValueSet/v3-RehabilitationHospital
 */
export const RehabilitationHospitalCode = {
  /**
   * Rehabilitation hospital
   */
  RH: "RH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RehabilitationHospitalCode =
  typeof RehabilitationHospitalCode[keyof typeof RehabilitationHospitalCode];
