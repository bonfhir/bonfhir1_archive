/**
 * How to interpret the context.
 * http://hl7.org/fhir/ValueSet/map-context-type
 */
export const StructureMapContextTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StructureMapContextTypeCode =
  typeof StructureMapContextTypeCode[keyof typeof StructureMapContextTypeCode];
