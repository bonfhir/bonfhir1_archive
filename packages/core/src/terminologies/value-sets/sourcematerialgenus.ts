/**
 * The genus of an organism, typically referring to the Latin epithet of the genus element of the plant/animal scientific name.
 * http://hl7.org/fhir/ValueSet/substance-source-material-genus
 */
export const SourceMaterialGenusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SourceMaterialGenusCode =
  typeof SourceMaterialGenusCode[keyof typeof SourceMaterialGenusCode];
