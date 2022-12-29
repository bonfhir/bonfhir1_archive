/**
 * Value Set of codes that indicate (in certain systems) whether a lower level source identifier is an initiate or accept type.
 * http://terminology.hl7.org/ValueSet/v2-0332
 */
export const Hl7VSNetworkSourceTypeCode = {
  /**
   * Initiate
   */
  Initiate: "I",

  /**
   * Accept
   */
  Accept: "A",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSNetworkSourceTypeCode =
  typeof Hl7VSNetworkSourceTypeCode[keyof typeof Hl7VSNetworkSourceTypeCode];
