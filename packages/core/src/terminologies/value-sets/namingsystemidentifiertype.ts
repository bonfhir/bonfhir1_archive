/**
 * Identifies the style of unique identifier used to identify a namespace.
 * http://hl7.org/fhir/ValueSet/namingsystem-identifier-type
 */
export const NamingSystemIdentifierTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NamingSystemIdentifierTypeCode =
  typeof NamingSystemIdentifierTypeCode[keyof typeof NamingSystemIdentifierTypeCode];
