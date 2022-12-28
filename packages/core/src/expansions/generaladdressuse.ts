/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-GeneralAddressUse
 */
export const GeneralAddressUseCode = {
  /**
   * _GeneralAddressUse
   */
  _GeneralAddressUse: "_GeneralAddressUse",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GeneralAddressUseCode =
  typeof GeneralAddressUseCode[keyof typeof GeneralAddressUseCode];
