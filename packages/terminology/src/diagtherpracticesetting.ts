/**
 * A practice setting where diagnostic procedures or therapeutic interventions are performed
 * http://terminology.hl7.org/ValueSet/v3-DiagTherPracticeSetting
 */
export const DiagTherPracticeSettingCode = {
  /**
   * Diagnostics or therapeutics unit
   */
  Diagnosticsortherapeuticsunit: "DX",

  /**
   * Cardiovascular diagnostics or therapeutics unit
   */
  Cardiovasculardiagnosticsortherapeuticsunit: "CVDX",

  /**
   * Cardiac catheterization lab
   */
  Cardiaccatheterizationlab: "CATH",

  /**
   * Echocardiography lab
   */
  Echocardiographylab: "ECHO",

  /**
   * Gastroenterology diagnostics or therapeutics lab
   */
  Gastroenterologydiagnosticsortherapeuticslab: "GIDX",

  /**
   * Endoscopy lab
   */
  Endoscopylab: "ENDOS",

  /**
   * Radiology diagnostics or therapeutics unit
   */
  Radiologydiagnosticsortherapeuticsunit: "RADDX",

  /**
   * Radiation oncology unit
   */
  Radiationoncologyunit: "RADO",

  /**
   * Neuroradiology unit
   */
  Neuroradiologyunit: "RNEU",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DiagTherPracticeSettingCode =
  typeof DiagTherPracticeSettingCode[keyof typeof DiagTherPracticeSettingCode];
