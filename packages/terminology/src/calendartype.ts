/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CalendarType
 */
export const CalendarTypeCode = {
  /**
   * Gregorian
   */
  Gregorian: "GREG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CalendarTypeCode =
  typeof CalendarTypeCode[keyof typeof CalendarTypeCode];
