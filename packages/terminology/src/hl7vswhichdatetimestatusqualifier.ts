/**
 * Value Set of codes that specify the status type of objects selected in date range defined by QRF-2 and QRF-3.
 * http://terminology.hl7.org/ValueSet/v2-0157
 */
export const Hl7VSWhichDateTimeStatusQualifierCode = {
  /**
   * Any status
   */
  Anystatus: "ANY",

  /**
   * Current final value, whether final or corrected
   */
  Currentfinalvaluewhetherfinalorcorrected: "CFN",

  /**
   * Corrected only (no final with corrections)
   */
  Correctedonlynofinalwithcorrections: "COR",

  /**
   * Final only (no corrections)
   */
  Finalonlynocorrections: "FIN",

  /**
   * Preliminary
   */
  Preliminary: "PRE",

  /**
   * Report completion date/time
   */
  Reportcompletiondatetime: "REP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSWhichDateTimeStatusQualifierCode =
  typeof Hl7VSWhichDateTimeStatusQualifierCode[keyof typeof Hl7VSWhichDateTimeStatusQualifierCode];
