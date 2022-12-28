/**
 * This value set includes a smattering of USCLS codes.
 * http://terminology.hl7.org/ValueSet/service-uscls
 */
export const USCLSCodesCode = {
  /**
   * Exam, comp, primary
   */
  "1101": "1101",

  /**
   * Exam, comp, mixed
   */
  "1102": "1102",

  /**
   * Exam, comp, permanent
   */
  "1103": "1103",

  /**
   * Exam, recall
   */
  "1201": "1201",

  /**
   * Exam, emergency
   */
  "1205": "1205",

  /**
   * Radiograph, series (12)
   */
  "2101": "2101",

  /**
   * Radiograph, series (16)
   */
  "2102": "2102",

  /**
   * Radiograph, bitewing
   */
  "2141": "2141",

  /**
   * Radiograph, panoramic
   */
  "2601": "2601",

  /**
   * Polishing, 1 unit
   */
  "11101": "11101",

  /**
   * Polishing, 2 unit
   */
  "11102": "11102",

  /**
   * Polishing, 3 unit
   */
  "11103": "11103",

  /**
   * Polishing, 4 unit
   */
  "11104": "11104",

  /**
   * Amalgam, 1 surface
   */
  "21211": "21211",

  /**
   * Amalgam, 2 surface
   */
  "21212": "21212",

  /**
   * Crown, PFM
   */
  "27211": "27211",

  /**
   * Maryland Bridge
   */
  "67211": "67211",

  /**
   * Lab, commercial
   */
  "99111": "99111",

  /**
   * Lab, in office
   */
  "99333": "99333",

  /**
   * Expense
   */
  "99555": "99555",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type USCLSCodesCode = typeof USCLSCodesCode[keyof typeof USCLSCodesCode];
