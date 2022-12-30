/**
 * A type of container that can hold other containers or other holders.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassHolder
 */
export const EntityClassHolderCode = {
  /**
   * holder
   */
  HOLD: "HOLD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassHolderCode =
  typeof EntityClassHolderCode[keyof typeof EntityClassHolderCode];
