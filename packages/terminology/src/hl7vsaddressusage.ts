/**
 * Value Set of codes that specify how an address is intended to be used.
 * http://terminology.hl7.org/ValueSet/v2-0617
 */
export const Hl7VSAddressUsageCode = {
  /**
   * Mailing
   */
  Mailing: "M",

  /**
   * Visit
   */
  Visit: "V",

  /**
   * Classification
   */
  Classification: "C",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAddressUsageCode =
  typeof Hl7VSAddressUsageCode[keyof typeof Hl7VSAddressUsageCode];
