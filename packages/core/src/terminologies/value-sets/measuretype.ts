/**
 * The type of measure (includes codes from 2.16.840.1.113883.1.11.20368).
 * http://hl7.org/fhir/ValueSet/measure-type
 */
export const MeasureTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MeasureTypeCode =
  typeof MeasureTypeCode[keyof typeof MeasureTypeCode];
