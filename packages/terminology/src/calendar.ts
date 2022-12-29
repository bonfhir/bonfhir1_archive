/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-Calendar
 */
export const CalendarCode = {
  /**
   * Gregorian
   */
  Gregorian: "GREG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CalendarCode = typeof CalendarCode[keyof typeof CalendarCode];
