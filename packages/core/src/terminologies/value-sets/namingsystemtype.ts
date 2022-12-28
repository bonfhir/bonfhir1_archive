/**
 * Identifies the purpose of the naming system.
 * http://hl7.org/fhir/ValueSet/namingsystem-type
 */
export const NamingSystemTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NamingSystemTypeCode =
  typeof NamingSystemTypeCode[keyof typeof NamingSystemTypeCode];
