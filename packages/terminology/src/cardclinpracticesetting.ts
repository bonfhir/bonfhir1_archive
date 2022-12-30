/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CardClinPracticeSetting
 */
export const CardClinPracticeSettingCode = {
  /**
   * Ambulatory Health Care Facilities; Clinic/Center; Rehabilitation: Cardiac Facilities
   */
  CARD: "CARD",

  /**
   * Pediatric cardiology clinic
   */
  PEDCARD: "PEDCARD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CardClinPracticeSettingCode =
  typeof CardClinPracticeSettingCode[keyof typeof CardClinPracticeSettingCode];
