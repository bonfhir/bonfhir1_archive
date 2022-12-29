/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SecurityIntegrityConfidenceObservationValue
 */
export const SecurityIntegrityConfidenceObservationValueCode = {
  /**
   * highly reliable
   */
  highlyreliable: "HRELIABLE",

  /**
   * reliable
   */
  reliable: "RELIABLE",

  /**
   * uncertain reliability
   */
  uncertainreliability: "UNCERTREL",

  /**
   * unreliable
   */
  unreliable: "UNRELIABLE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityIntegrityConfidenceObservationValueCode =
  typeof SecurityIntegrityConfidenceObservationValueCode[keyof typeof SecurityIntegrityConfidenceObservationValueCode];
