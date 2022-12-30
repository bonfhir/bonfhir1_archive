/**
 * This value set includes a smattering of Network type codes.
 * http://terminology.hl7.org/ValueSet/benefit-network
 */
export const NetworkTypeCodesCode = {
  /**
   * In Network
   */
  in: "in",

  /**
   * Out of Network
   */
  out: "out",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NetworkTypeCodesCode =
  typeof NetworkTypeCodesCode[keyof typeof NetworkTypeCodesCode];
