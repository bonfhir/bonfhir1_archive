/**
 * Extra measures defined for a Medicinal Product, such as a requirement to conduct post-authorisation studies.
 * http://hl7.org/fhir/ValueSet/medicinal-product-special-measures
 */
export const SpecialMeasuresCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SpecialMeasuresCode =
  typeof SpecialMeasuresCode[keyof typeof SpecialMeasuresCode];
