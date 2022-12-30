/**
 * Accommodation type. In Intent mood, represents the accommodation type requested. In Event mood, represents accommodation assigned/used. In Definition mood, represents the available accommodation type.
 * http://terminology.hl7.org/ValueSet/v3-ActEncounterAccommodationCode
 */
export const ActEncounterAccommodationCodeCode = {
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

  /**
   * HCPCSAccommodationCode
   */
  _HCPCSAccommodationCode: "_HCPCSAccommodationCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActEncounterAccommodationCodeCode =
  typeof ActEncounterAccommodationCodeCode[keyof typeof ActEncounterAccommodationCodeCode];
