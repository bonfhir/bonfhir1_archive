/**
 * Value Set of codes that classify an observation definition as intended to measure a patient's state at a point in time.
 * http://terminology.hl7.org/ValueSet/v2-0255
 */
export const Hl7VSDurationCategoriesCode = {
  /**
   * (asterisk) Life of the "unit"
   */
  "*": "*",

  /**
   * 30 minutes
   */
  "30M": "30M",

  /**
   * 1 hour
   */
  "1H": "1H",

  /**
   * 2 hours
   */
  "2H": "2H",

  /**
   * 2 1/2 hours
   */
  "2.5H": "2.5H",

  /**
   * 3 hours
   */
  "3H": "3H",

  /**
   * 4 hours
   */
  "4H": "4H",

  /**
   * 5 hours
   */
  "5H": "5H",

  /**
   * 6 hours
   */
  "6H": "6H",

  /**
   * 7 hours
   */
  "7H": "7H",

  /**
   * 8 hours
   */
  "8H": "8H",

  /**
   * 12 hours
   */
  "12H": "12H",

  /**
   * 24 hours
   */
  "24H": "24H",

  /**
   * 2 days
   */
  "2D": "2D",

  /**
   * 3 days
   */
  "3D": "3D",

  /**
   * 4 days
   */
  "4D": "4D",

  /**
   * 5 days
   */
  "5D": "5D",

  /**
   * 6 days
   */
  "6D": "6D",

  /**
   * 1 week
   */
  "1W": "1W",

  /**
   * 2 weeks
   */
  "2W": "2W",

  /**
   * 3 weeks
   */
  "3W": "3W",

  /**
   * 4 weeks
   */
  "4W": "4W",

  /**
   * 1 months (30 days)
   */
  "1L": "1L",

  /**
   * 2 months
   */
  "2L": "2L",

  /**
   * 3 months
   */
  "3L": "3L",

  /**
   * Life of the "unit"
   */
  LU: "LU",

  /**
   * point in time
   */
  PT: "PT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDurationCategoriesCode =
  typeof Hl7VSDurationCategoriesCode[keyof typeof Hl7VSDurationCategoriesCode];
