/**
 * Value Set of codes that allow the specification of certain types of values within the date/time range.
 * http://terminology.hl7.org/ValueSet/v2-0158
 */
export const Hl7VSDateTimeSelectionQualifierCode = {
  /**
   * First value within range
   */
  "1ST": "1ST",

  /**
   * All values within the range
   */
  ALL: "ALL",

  /**
   * Last value within the range
   */
  LST: "LST",

  /**
   * All values within the range returned in reverse chronological order (This is the default if not otherwise specified.)
   */
  REV: "REV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDateTimeSelectionQualifierCode =
  typeof Hl7VSDateTimeSelectionQualifierCode[keyof typeof Hl7VSDateTimeSelectionQualifierCode];
