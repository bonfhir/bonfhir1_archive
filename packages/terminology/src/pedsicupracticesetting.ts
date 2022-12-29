/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PedsICUPracticeSetting
 */
export const PedsICUPracticeSettingCode = {
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
export type PedsICUPracticeSettingCode =
  typeof PedsICUPracticeSettingCode[keyof typeof PedsICUPracticeSettingCode];
