/**
 * A material target that is brought forth (produced) in the service (e.g., specimen in a specimen collection, access or drainage in a placement service, medication package in a dispense service). It doesn't matter whether the material produced had existence prior to the service, or whether it is created in the service (e.g., in supply services the product is taken from a stock).
 * http://terminology.hl7.org/ValueSet/v3-ParticipationProduct
 */
export const ParticipationProductCode = {
  /**
   * product
   */
  product: "PRD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationProductCode =
  typeof ParticipationProductCode[keyof typeof ParticipationProductCode];
