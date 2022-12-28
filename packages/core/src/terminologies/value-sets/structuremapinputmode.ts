/**
 * Mode for this instance of data.
 * http://hl7.org/fhir/ValueSet/map-input-mode
 */
export const StructureMapInputModeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StructureMapInputModeCode =
  typeof StructureMapInputModeCode[keyof typeof StructureMapInputModeCode];
