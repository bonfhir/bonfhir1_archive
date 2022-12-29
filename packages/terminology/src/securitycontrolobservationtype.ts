/**
 * Type of security metadata observation made about the control of an IT resource (data, information object, service, or system capability), which may be used to make access control decisions. Security control metadata conveys instructions for secure distribution, transmission, storage or use.
 * http://terminology.hl7.org/ValueSet/v3-SecurityControlObservationType
 */
export const SecurityControlObservationTypeCode = {
  /**
   * security control observation
   */
  securitycontrolobservation: "SECCONOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityControlObservationTypeCode =
  typeof SecurityControlObservationTypeCode[keyof typeof SecurityControlObservationTypeCode];
