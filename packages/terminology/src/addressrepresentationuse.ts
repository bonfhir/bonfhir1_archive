/**
 * **Description:**Identifies the different representations of a Address. The representation may affect how the address is used. (E.g. use of Ideographic for formal communications.)
 * http://terminology.hl7.org/ValueSet/v3-AddressRepresentationUse
 */
export const AddressRepresentationUseCode = {
  /**
   * Alphabetic
   */
  Alphabetic: "ABC",

  /**
   * Ideographic
   */
  Ideographic: "IDE",

  /**
   * Syllabic
   */
  Syllabic: "SYL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AddressRepresentationUseCode =
  typeof AddressRepresentationUseCode[keyof typeof AddressRepresentationUseCode];
