/**
 * Value Set of codes that specify the status type of objects selected in date range defined by QRF-2 and QRF-3.
 * http://terminology.hl7.org/ValueSet/v2-0157
 */
export const Hl7VSWhichDateTimeStatusQualifierCode = {
  /**
   * Any status
   */
  ANY: "ANY",

  /**
   * Current final value, whether final or corrected
   */
  CFN: "CFN",

  /**
   * Corrected only (no final with corrections)
   */
  COR: "COR",

  /**
   * Final only (no corrections)
   */
  FIN: "FIN",

  /**
   * Preliminary
   */
  PRE: "PRE",

  /**
   * Report completion date/time
   */
  REP: "REP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSWhichDateTimeStatusQualifierCode =
  typeof Hl7VSWhichDateTimeStatusQualifierCode[keyof typeof Hl7VSWhichDateTimeStatusQualifierCode];
