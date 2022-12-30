/**
 * **Description:**Accommodation type. In Intent mood, represents the accommodation type requested. In Event mood, represents accommodation assigned/used. In Definition mood, represents the available accommodation type.
 * http://terminology.hl7.org/ValueSet/v3-HL7AccommodationCode
 */
export const HL7AccommodationCodeCode = {
  /**
   * HL7AccommodationCode
   */
  _HL7AccommodationCode: "_HL7AccommodationCode",

  /**
   * Isolation
   */
  I: "I",

  /**
   * Private
   */
  P: "P",

  /**
   * Suite
   */
  S: "S",

  /**
   * Semi-private
   */
  SP: "SP",

  /**
   * Ward
   */
  W: "W",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HL7AccommodationCodeCode =
  typeof HL7AccommodationCodeCode[keyof typeof HL7AccommodationCodeCode];
