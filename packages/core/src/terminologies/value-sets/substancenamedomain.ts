/**
 * The use context of a substance name for example if there is a different name when used as a drug active ingredient as opposed to a food colour additive.
 * http://hl7.org/fhir/ValueSet/substance-name-domain
 */
export const SubstanceNameDomainCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceNameDomainCode =
  typeof SubstanceNameDomainCode[keyof typeof SubstanceNameDomainCode];
