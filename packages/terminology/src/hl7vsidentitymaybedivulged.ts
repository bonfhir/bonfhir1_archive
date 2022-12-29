/**
 * Value Set of codes that define whether the primary observer has given permission for their identification information to be provided to a product manufacturer.
 * http://terminology.hl7.org/ValueSet/v2-0243
 */
export const Hl7VSIdentityMayBeDivulgedCode = {
  /**
   * Yes
   */
  Yes: "Y",

  /**
   * No
   */
  No: "N",

  /**
   * Not applicable
   */
  Notapplicable: "NA",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSIdentityMayBeDivulgedCode =
  typeof Hl7VSIdentityMayBeDivulgedCode[keyof typeof Hl7VSIdentityMayBeDivulgedCode];
