/**
 * A practice setting where GI procedures (such as endoscopies) are performed
 * http://terminology.hl7.org/ValueSet/v3-GIDiagTherPracticeSetting
 */
export const GIDiagTherPracticeSettingCode = {
  /**
   * Gastroenterology diagnostics or therapeutics lab
   */
  GIDX: "GIDX",

  /**
   * Endoscopy lab
   */
  ENDOS: "ENDOS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GIDiagTherPracticeSettingCode =
  typeof GIDiagTherPracticeSettingCode[keyof typeof GIDiagTherPracticeSettingCode];
