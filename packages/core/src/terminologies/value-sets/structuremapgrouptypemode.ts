/**
 * If this is the default rule set to apply for the source type, or this combination of types.
 * http://hl7.org/fhir/ValueSet/map-group-type-mode
 */
export const StructureMapGroupTypeModeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StructureMapGroupTypeModeCode =
  typeof StructureMapGroupTypeModeCode[keyof typeof StructureMapGroupTypeModeCode];
