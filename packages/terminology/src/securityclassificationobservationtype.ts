/**
 * Type of security metadata observation made about the classification of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions.

Security classification is defined by ISO/IEC 2382-8:1998(E/F)/ T-REC-X.812-1995 as: "The determination of which specific degree of protection against access the data or information requires, together with a designation of that degree of protection." Security classification metadata is based on an analysis of applicable policies and the risk of financial, reputational, or other harm that could result from unauthorized disclosure.
 * http://terminology.hl7.org/ValueSet/v3-SecurityClassificationObservationType
 */
export const SecurityClassificationObservationTypeCode = {
  /**
   * security classification observation
   */
  securityclassificationobservation: "SECCLASSOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityClassificationObservationTypeCode =
  typeof SecurityClassificationObservationTypeCode[keyof typeof SecurityClassificationObservationTypeCode];
