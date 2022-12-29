/**
 * <pType of security metadata observation made about the alteration integrity of an IT resource (data, information object, service, or system capability), which indicates the mechanism used for authorized transformations of the resource.</p>
 * http://terminology.hl7.org/ValueSet/v3-SecurityAlterationIntegrityObservationType
 */
export const SecurityAlterationIntegrityObservationTypeCode = {
  /**
   * security alteration integrity observation
   */
  securityalterationintegrityobservation: "SECALTINTOBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityAlterationIntegrityObservationTypeCode =
  typeof SecurityAlterationIntegrityObservationTypeCode[keyof typeof SecurityAlterationIntegrityObservationTypeCode];
