/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PedsPracticeSetting
 */
export const PedsPracticeSettingCode = {
  /**
   * Pediatric unit
   */
  Pediatricunit: "PEDU",

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
export type PedsPracticeSettingCode =
  typeof PedsPracticeSettingCode[keyof typeof PedsPracticeSettingCode];
