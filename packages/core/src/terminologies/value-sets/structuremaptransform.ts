/**
 * How data is copied/created.
 * http://hl7.org/fhir/ValueSet/map-transform
 */
export const StructureMapTransformCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StructureMapTransformCode =
  typeof StructureMapTransformCode[keyof typeof StructureMapTransformCode];
