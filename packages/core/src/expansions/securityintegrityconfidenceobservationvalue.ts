/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SecurityIntegrityConfidenceObservationValue
 */
export const SecurityIntegrityConfidenceObservationValueCode = {
  /**
   * highly reliable
   */
  HRELIABLE: "HRELIABLE",

  /**
   * reliable
   */
  RELIABLE: "RELIABLE",

  /**
   * uncertain reliability
   */
  UNCERTREL: "UNCERTREL",

  /**
   * unreliable
   */
  UNRELIABLE: "UNRELIABLE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityIntegrityConfidenceObservationValueCode =
  typeof SecurityIntegrityConfidenceObservationValueCode[keyof typeof SecurityIntegrityConfidenceObservationValueCode];
