/**
 * Value Set of codes that identify the kind of patient document.
 * http://terminology.hl7.org/ValueSet/v2-0270
 */
export const Hl7VSReportTypeCodeCode = {
  /**
   * Autopsy report
   */
  Autopsyreport: "AR",

  /**
   * Cardiodiagnostics
   */
  Cardiodiagnostics: "CD",

  /**
   * Consultation
   */
  Consultation: "CN",

  /**
   * Diagnostic imaging
   */
  Diagnosticimaging: "DI",

  /**
   * Discharge summary
   */
  Dischargesummary: "DS",

  /**
   * Emergency department report
   */
  Emergencydepartmentreport: "ED",

  /**
   * History and physical examination
   */
  Historyandphysicalexamination: "HP",

  /**
   * Operative report
   */
  Operativereport: "OP",

  /**
   * Psychiatric consultation
   */
  Psychiatricconsultation: "PC",

  /**
   * Psychiatric history and physical examination
   */
  Psychiatrichistoryandphysicalexamination: "PH",

  /**
   * Procedure note
   */
  Procedurenote: "PN",

  /**
   * Progress note
   */
  Progressnote: "PR",

  /**
   * Surgical pathology
   */
  Surgicalpathology: "SP",

  /**
   * Transfer summary
   */
  Transfersummary: "TS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReportTypeCodeCode =
  typeof Hl7VSReportTypeCodeCode[keyof typeof Hl7VSReportTypeCodeCode];
