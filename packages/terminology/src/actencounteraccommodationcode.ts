/**
 * Accommodation type. In Intent mood, represents the accommodation type requested. In Event mood, represents accommodation assigned/used. In Definition mood, represents the available accommodation type.
 * http://terminology.hl7.org/ValueSet/v3-ActEncounterAccommodationCode
 */
export const ActEncounterAccommodationCodeCode = {
  /**
   * HL7AccommodationCode
   */
  HL7AccommodationCode: "_HL7AccommodationCode",

  /**
   * Isolation
   */
  Isolation: "I",

  /**
   * Private
   */
  Private: "P",

  /**
   * Suite
   */
  Suite: "S",

  /**
   * Semi-private
   */
  Semiprivate: "SP",

  /**
   * Ward
   */
  Ward: "W",

  /**
   * HCPCSAccommodationCode
   */
  HCPCSAccommodationCode: "_HCPCSAccommodationCode",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActEncounterAccommodationCodeCode =
  typeof ActEncounterAccommodationCodeCode[keyof typeof ActEncounterAccommodationCodeCode];
