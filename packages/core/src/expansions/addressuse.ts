/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-AddressUse
 */
export const AddressUseCode = {
  /**
   * _GeneralAddressUse
   */
  _GeneralAddressUse: "_GeneralAddressUse",

  /**
   * _PostalAddressUse
   */
  _PostalAddressUse: "_PostalAddressUse",

  /**
   * _TelecommunicationAddressUse
   */
  _TelecommunicationAddressUse: "_TelecommunicationAddressUse",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AddressUseCode = typeof AddressUseCode[keyof typeof AddressUseCode];
