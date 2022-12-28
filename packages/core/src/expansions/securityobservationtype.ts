/**
 * Type of security metadata observation made about an IT resource (data, information object, service, or system capability), which may be used to make access control decisions. Security metadata are used in security labels. According to ISO/TS 22600-3:2009(E) A.9.1.7 SECURITY LABEL MATCHING, Security label matching compares the initiatorâ€™s clearance to the targetâ€™s security label. All of the following must be true for authorization to be granted:

 *  The security policy identifiers shall be identical,
 *  The classification level of the initiator shall be greater than or equal to that of the target (that is, there shall be at least one value in the classification list of the clearance greater than or equal to the classification of the target), and
 *  For each security category in the target label, there shall be a security category of the same type in the initiatorâ€™s clearance and the initiatorâ€™s classification level shall dominate that of the target.
 * http://terminology.hl7.org/ValueSet/v3-SecurityObservationType
 */
export const SecurityObservationTypeCode = {
  /**
   * SecurityObservationType
   */
  SECOBS: "SECOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityObservationTypeCode =
  typeof SecurityObservationTypeCode[keyof typeof SecurityObservationTypeCode];
