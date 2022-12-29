/**
 * Value Set of codes identifying the status of the inventoried item.  The status indicates the current status of the substance.
 * http://terminology.hl7.org/ValueSet/v2-0383
 */
export const Hl7VSSubstanceStatusCode = {
  /**
   * Expired Warning
   */
  ExpiredWarning: "EW",

  /**
   * Expired Error
   */
  ExpiredError: "EE",

  /**
   * Calibration Warning
   */
  CalibrationWarning: "CW",

  /**
   * Calibration Error
   */
  CalibrationError: "CE",

  /**
   * QC Warning
   */
  QCWarning: "QW",

  /**
   * QC Error
   */
  QCError: "QE",

  /**
   * Not Available Warning
   */
  NotAvailableWarning: "NW",

  /**
   * Not Available Error
   */
  NotAvailableError: "NE",

  /**
   * Other Warning
   */
  OtherWarning: "OW",

  /**
   * Other Error
   */
  OtherError: "OE",

  /**
   * OK Status
   */
  OKStatus: "OK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSubstanceStatusCode =
  typeof Hl7VSSubstanceStatusCode[keyof typeof Hl7VSSubstanceStatusCode];
