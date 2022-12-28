/**
 * A list of the base types defined by this version of the FHIR specification - types that are defined, but for which only specializations actually are created.
 * http://hl7.org/fhir/ValueSet/abstract-types
 */
export const AbstractTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AbstractTypeCode =
  typeof AbstractTypeCode[keyof typeof AbstractTypeCode];
