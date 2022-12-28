/**
 * Codes that define what the server is capable of.
 * http://hl7.org/fhir/ValueSet/smart-capabilities
 */
export const SmartCapabilitiesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SmartCapabilitiesCode =
  typeof SmartCapabilitiesCode[keyof typeof SmartCapabilitiesCode];
