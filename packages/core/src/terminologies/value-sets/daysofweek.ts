/**
 * The days of the week.
 * http://hl7.org/fhir/ValueSet/days-of-week
 */
export const DaysOfWeekCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DaysOfWeekCode = typeof DaysOfWeekCode[keyof typeof DaysOfWeekCode];
