/**
 * **Description:** An address line is for either an additional locator, a delivery address or a street address.
 * http://terminology.hl7.org/ValueSet/v3-AddressLine
 */
export const AddressLineCode = {
  /**
   * address line
   */
  addressline: "AL",

  /**
   * delivery address line
   */
  deliveryaddressline: "DAL",

  /**
   * street address line
   */
  streetaddressline: "SAL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AddressLineCode =
  typeof AddressLineCode[keyof typeof AddressLineCode];
