/**
 * A classification that provides the origin of the substance raw material.
 * http://hl7.org/fhir/ValueSet/substance-source-material-type
 */
export const SourceMaterialTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SourceMaterialTypeCode =
  typeof SourceMaterialTypeCode[keyof typeof SourceMaterialTypeCode];
