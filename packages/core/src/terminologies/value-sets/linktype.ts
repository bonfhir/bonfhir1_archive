/**
 * The type of link between this patient resource and another patient resource.
 * http://hl7.org/fhir/ValueSet/link-type
 */
export const LinkTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LinkTypeCode = typeof LinkTypeCode[keyof typeof LinkTypeCode];
