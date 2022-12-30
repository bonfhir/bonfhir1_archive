/**
 * Value Set of codes that identify the kind of patient document.
 * http://terminology.hl7.org/ValueSet/v2-0270
 */
export const Hl7VSReportTypeCodeCode = {
  /**
   * Autopsy report
   */
  AR: "AR",

  /**
   * Cardiodiagnostics
   */
  CD: "CD",

  /**
   * Consultation
   */
  CN: "CN",

  /**
   * Diagnostic imaging
   */
  DI: "DI",

  /**
   * Discharge summary
   */
  DS: "DS",

  /**
   * Emergency department report
   */
  ED: "ED",

  /**
   * History and physical examination
   */
  HP: "HP",

  /**
   * Operative report
   */
  OP: "OP",

  /**
   * Psychiatric consultation
   */
  PC: "PC",

  /**
   * Psychiatric history and physical examination
   */
  PH: "PH",

  /**
   * Procedure note
   */
  PN: "PN",

  /**
   * Progress note
   */
  PR: "PR",

  /**
   * Surgical pathology
   */
  SP: "SP",

  /**
   * Transfer summary
   */
  TS: "TS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSReportTypeCodeCode =
  typeof Hl7VSReportTypeCodeCode[keyof typeof Hl7VSReportTypeCodeCode];
