/**
 * If field is a list, how to manage the source.
 * http://hl7.org/fhir/ValueSet/map-source-list-mode
 */
export const StructureMapSourceListModeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StructureMapSourceListModeCode =
  typeof StructureMapSourceListModeCode[keyof typeof StructureMapSourceListModeCode];
