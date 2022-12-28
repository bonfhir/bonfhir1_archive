/**
 * An anatomical origin of the source material within an organism.
 * http://hl7.org/fhir/ValueSet/substance-source-material-part
 */
export const SourceMaterialPartCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SourceMaterialPartCode =
  typeof SourceMaterialPartCode[keyof typeof SourceMaterialPartCode];
