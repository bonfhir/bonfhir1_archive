/**
 * A version specific list of the data types defined by the FHIR specification for use as an element  type (any of the FHIR defined data types).
 * http://hl7.org/fhir/ValueSet/data-types
 */
export const DataTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DataTypeCode = typeof DataTypeCode[keyof typeof DataTypeCode];
