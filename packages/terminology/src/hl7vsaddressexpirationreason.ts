/**
 * Value Set of codes that specify the reason this address was marked as "ended".
 * http://terminology.hl7.org/ValueSet/v2-0616
 */
export const Hl7VSAddressExpirationReasonCode = {
  /**
   * Moved
   */
  Moved: "M",

  /**
   * Added in error
   */
  Addedinerror: "E",

  /**
   * On request
   */
  Onrequest: "R",

  /**
   * Corrected
   */
  Corrected: "C",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAddressExpirationReasonCode =
  typeof Hl7VSAddressExpirationReasonCode[keyof typeof Hl7VSAddressExpirationReasonCode];
