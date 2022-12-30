/**
 * A practice setting where radiology services (diagnostic or therapeutic) are provided (X12N 261QR0200N)
 * http://terminology.hl7.org/ValueSet/v3-RadDiagTherPracticeSetting
 */
export const RadDiagTherPracticeSettingCode = {
  /**
   * Radiology diagnostics or therapeutics unit
   */
  RADDX: "RADDX",

  /**
   * Radiation oncology unit
   */
  RADO: "RADO",

  /**
   * Neuroradiology unit
   */
  RNEU: "RNEU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RadDiagTherPracticeSettingCode =
  typeof RadDiagTherPracticeSettingCode[keyof typeof RadDiagTherPracticeSettingCode];
