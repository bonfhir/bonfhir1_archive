/**
 * If field is a list, how to manage the production.
 * http://hl7.org/fhir/ValueSet/map-target-list-mode
 */
export const StructureMapTargetListModeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StructureMapTargetListModeCode =
  typeof StructureMapTargetListModeCode[keyof typeof StructureMapTargetListModeCode];
