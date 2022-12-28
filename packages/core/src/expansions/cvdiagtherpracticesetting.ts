/**
 * A practice setting where cardiovascular diagnostic procedures or therapeutic interventions are performed (e.g., cardiac catheterization lab, echocardiography suite)
 * http://terminology.hl7.org/ValueSet/v3-CVDiagTherPracticeSetting
 */
export const CVDiagTherPracticeSettingCode = {
  /**
   * Cardiovascular diagnostics or therapeutics unit
   */
  CVDX: "CVDX",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CVDiagTherPracticeSettingCode =
  typeof CVDiagTherPracticeSettingCode[keyof typeof CVDiagTherPracticeSettingCode];
