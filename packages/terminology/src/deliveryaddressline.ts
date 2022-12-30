/**
 * A delivery address line is frequently used instead of breaking out delivery mode, delivery installation, etc. An address generally has only a delivery address line or a street address line, but not both.
 * http://terminology.hl7.org/ValueSet/v3-DeliveryAddressLine
 */
export const DeliveryAddressLineCode = {
  /**
   * delivery address line
   */
  DAL: "DAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DeliveryAddressLineCode =
  typeof DeliveryAddressLineCode[keyof typeof DeliveryAddressLineCode];
