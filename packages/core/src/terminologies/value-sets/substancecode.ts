/**
 * This value set contains concept codes for specific substances. It includes codes from [SNOMED](http://snomed.info/sct) where concept is-a 105590001 (Substance (substance))
 * http://hl7.org/fhir/ValueSet/substance-code
 */
export const SubstanceCodeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceCodeCode =
  typeof SubstanceCodeCode[keyof typeof SubstanceCodeCode];
