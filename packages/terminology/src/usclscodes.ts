/**
 * This value set includes a smattering of USCLS codes.
 * http://terminology.hl7.org/ValueSet/service-uscls
 */
export const USCLSCodesCode = {
  /**
   * Exam, comp, primary
   */
  Examcompprimary: "1101",

  /**
   * Exam, comp, mixed
   */
  Examcompmixed: "1102",

  /**
   * Exam, comp, permanent
   */
  Examcomppermanent: "1103",

  /**
   * Exam, recall
   */
  Examrecall: "1201",

  /**
   * Exam, emergency
   */
  Examemergency: "1205",

  /**
   * Radiograph, series (12)
   */
  Radiographseries12: "2101",

  /**
   * Radiograph, series (16)
   */
  Radiographseries16: "2102",

  /**
   * Radiograph, bitewing
   */
  Radiographbitewing: "2141",

  /**
   * Radiograph, panoramic
   */
  Radiographpanoramic: "2601",

  /**
   * Polishing, 1 unit
   */
  Polishing1unit: "11101",

  /**
   * Polishing, 2 unit
   */
  Polishing2unit: "11102",

  /**
   * Polishing, 3 unit
   */
  Polishing3unit: "11103",

  /**
   * Polishing, 4 unit
   */
  Polishing4unit: "11104",

  /**
   * Amalgam, 1 surface
   */
  Amalgam1surface: "21211",

  /**
   * Amalgam, 2 surface
   */
  Amalgam2surface: "21212",

  /**
   * Crown, PFM
   */
  CrownPFM: "27211",

  /**
   * Maryland Bridge
   */
  MarylandBridge: "67211",

  /**
   * Lab, commercial
   */
  Labcommercial: "99111",

  /**
   * Lab, in office
   */
  Labinoffice: "99333",

  /**
   * Expense
   */
  Expense: "99555",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type USCLSCodesCode = typeof USCLSCodesCode[keyof typeof USCLSCodesCode];
