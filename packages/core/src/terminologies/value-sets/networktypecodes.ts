/**
 * This value set includes a smattering of Network type codes.
 * http://hl7.org/fhir/ValueSet/benefit-network
 */
export const NetworkTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NetworkTypeCodesCode =
  typeof NetworkTypeCodesCode[keyof typeof NetworkTypeCodesCode];
