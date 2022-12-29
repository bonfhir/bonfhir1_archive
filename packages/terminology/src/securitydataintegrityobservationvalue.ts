/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SecurityDataIntegrityObservationValue
 */
export const SecurityDataIntegrityObservationValueCode = {
  /**
   * cryptographic hash function
   */
  cryptographichashfunction: "CRYTOHASH",

  /**
   * digital signature
   */
  digitalsignature: "DIGSIG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityDataIntegrityObservationValueCode =
  typeof SecurityDataIntegrityObservationValueCode[keyof typeof SecurityDataIntegrityObservationValueCode];
