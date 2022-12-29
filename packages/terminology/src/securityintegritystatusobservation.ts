/**
 * Security observation values used to indicate security integrity status metadata.
 * http://terminology.hl7.org/ValueSet/v3-SecurityIntegrityStatusObservation
 */
export const SecurityIntegrityStatusObservationCode = {
  /**
   * authenticated
   */
  authenticated: "AU",

  /**
   * dictated
   */
  dictated: "DI",

  /**
   * documented
   */
  documented: "DO",

  /**
   * incomplete
   */
  incomplete: "IN",

  /**
   * in progress
   */
  inprogress: "IP",

  /**
   * legally authenticated
   */
  legallyauthenticated: "LA",

  /**
   * nullified document
   */
  nullifieddocument: "NU",

  /**
   * pre-authenticated
   */
  preauthenticated: "PA",

  /**
   * unsigned completed document
   */
  unsignedcompleteddocument: "UC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityIntegrityStatusObservationCode =
  typeof SecurityIntegrityStatusObservationCode[keyof typeof SecurityIntegrityStatusObservationCode];
