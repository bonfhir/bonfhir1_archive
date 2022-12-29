/**
 * Codes identifying nation states. Allows for finer grained specification of Entity with classcode <= NAT

*Example:*ISO3166 country codes.
 * http://terminology.hl7.org/ValueSet/v3-NationEntityType
 */
export const NationEntityTypeCode = {
  /**
   * NationEntityType
   */
  NationEntityType: "NAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NationEntityTypeCode =
  typeof NationEntityTypeCode[keyof typeof NationEntityTypeCode];
