/**
 * A practice setting where diagnostic procedures or therapeutic interventions are performed
 * http://terminology.hl7.org/ValueSet/v3-DiagTherPracticeSetting
 */
export const DiagTherPracticeSettingCode = {
  /**
   * Diagnostics or therapeutics unit
   */
  DX: "DX",

  /**
   * Cardiovascular diagnostics or therapeutics unit
   */
  CVDX: "CVDX",

  /**
   * Cardiac catheterization lab
   */
  CATH: "CATH",

  /**
   * Echocardiography lab
   */
  ECHO: "ECHO",

  /**
   * Gastroenterology diagnostics or therapeutics lab
   */
  GIDX: "GIDX",

  /**
   * Endoscopy lab
   */
  ENDOS: "ENDOS",

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
export type DiagTherPracticeSettingCode =
  typeof DiagTherPracticeSettingCode[keyof typeof DiagTherPracticeSettingCode];
