/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xMedicationOrImmunization
 */
export const XMedicationOrImmunizationCode = {
  /**
   * Drug therapy
   */
  DRUG: "DRUG",

  /**
   * Immunization
   */
  IMMUNIZ: "IMMUNIZ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XMedicationOrImmunizationCode =
  typeof XMedicationOrImmunizationCode[keyof typeof XMedicationOrImmunizationCode];
