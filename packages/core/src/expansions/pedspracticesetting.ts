/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PedsPracticeSetting
 */
export const PedsPracticeSettingCode = {
  /**
   * Pediatric unit
   */
  PEDU: "PEDU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PedsPracticeSettingCode =
  typeof PedsPracticeSettingCode[keyof typeof PedsPracticeSettingCode];
