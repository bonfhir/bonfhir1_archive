/**
 * How the referenced structure is used in this mapping.
 * http://hl7.org/fhir/ValueSet/map-model-mode
 */
export const StructureMapModelModeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StructureMapModelModeCode =
  typeof StructureMapModelModeCode[keyof typeof StructureMapModelModeCode];
