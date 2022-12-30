/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ICUPracticeSetting
 */
export const ICUPracticeSettingCode = {
  /**
   * Intensive care unit
   */
  ICU: "ICU",

  /**
   * Pediatric intensive care unit
   */
  PEDICU: "PEDICU",

  /**
   * Pediatric neonatal intensive care unit
   */
  PEDNICU: "PEDNICU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ICUPracticeSettingCode =
  typeof ICUPracticeSettingCode[keyof typeof ICUPracticeSettingCode];
