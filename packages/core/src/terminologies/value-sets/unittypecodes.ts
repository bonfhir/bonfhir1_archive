/**
 * This value set includes a smattering of Unit type codes.
 * http://hl7.org/fhir/ValueSet/benefit-unit
 */
export const UnitTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UnitTypeCodesCode =
  typeof UnitTypeCodesCode[keyof typeof UnitTypeCodesCode];
