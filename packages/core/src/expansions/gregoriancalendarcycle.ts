/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-GregorianCalendarCycle
 */
export const GregorianCalendarCycleCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GregorianCalendarCycleCode =
  typeof GregorianCalendarCycleCode[keyof typeof GregorianCalendarCycleCode];
