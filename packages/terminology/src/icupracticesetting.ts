/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ICUPracticeSetting
 */
export const ICUPracticeSettingCode = {
  /**
   * Intensive care unit
   */
  Intensivecareunit: "ICU",

  /**
   * Pediatric intensive care unit
   */
  Pediatricintensivecareunit: "PEDICU",

  /**
   * Pediatric neonatal intensive care unit
   */
  Pediatricneonatalintensivecareunit: "PEDNICU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ICUPracticeSettingCode =
  typeof ICUPracticeSettingCode[keyof typeof ICUPracticeSettingCode];
