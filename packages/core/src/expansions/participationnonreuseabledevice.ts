/**
 * A device that changes ownership due to the service, e.g., a pacemaker, a prosthesis, an insulin injection equipment (pen), etc. Such material may need to be restocked after he service.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationNon-reuseableDevice
 */
export const ParticipationNonReuseableDeviceCode = {
  /**
   * non-reuseable device
   */
  NRD: "NRD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationNonReuseableDeviceCode =
  typeof ParticipationNonReuseableDeviceCode[keyof typeof ParticipationNonReuseableDeviceCode];
