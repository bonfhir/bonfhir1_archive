/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PedsPracticeSetting
 */
export const PedsPracticeSettingCode = {
  /**
   * Pediatric unit
   */
  PEDU: "PEDU",

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
export type PedsPracticeSettingCode =
  typeof PedsPracticeSettingCode[keyof typeof PedsPracticeSettingCode];
