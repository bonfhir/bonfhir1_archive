/**
 * Value Set of codes identifying the status of the inventoried item.  The status indicates the current status of the substance.
 * http://terminology.hl7.org/ValueSet/v2-0383
 */
export const Hl7VSSubstanceStatusCode = {
  /**
   * Expired Warning
   */
  EW: "EW",

  /**
   * Expired Error
   */
  EE: "EE",

  /**
   * Calibration Warning
   */
  CW: "CW",

  /**
   * Calibration Error
   */
  CE: "CE",

  /**
   * QC Warning
   */
  QW: "QW",

  /**
   * QC Error
   */
  QE: "QE",

  /**
   * Not Available Warning
   */
  NW: "NW",

  /**
   * Not Available Error
   */
  NE: "NE",

  /**
   * Other Warning
   */
  OW: "OW",

  /**
   * Other Error
   */
  OE: "OE",

  /**
   * OK Status
   */
  OK: "OK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSubstanceStatusCode =
  typeof Hl7VSSubstanceStatusCode[keyof typeof Hl7VSSubstanceStatusCode];
