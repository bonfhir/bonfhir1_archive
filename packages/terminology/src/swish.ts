/**
 * Swish
 * http://terminology.hl7.org/ValueSet/v3-Swish
 */
export const SwishCode = {
  /**
   * Swish and spit out, oromucosal
   */
  Swishandspitoutoromucosal: "SWISHSPIT",

  /**
   * Swish and swallow, oromucosal
   */
  Swishandswalloworomucosal: "SWISHSWAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SwishCode = typeof SwishCode[keyof typeof SwishCode];
