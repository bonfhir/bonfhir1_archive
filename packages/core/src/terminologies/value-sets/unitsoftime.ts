/**
 * A unit of time (units from UCUM).
 * http://hl7.org/fhir/ValueSet/units-of-time
 */
export const UnitsOfTimeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UnitsOfTimeCode =
  typeof UnitsOfTimeCode[keyof typeof UnitsOfTimeCode];
