/**
 * A device that does not change ownership due to the service, i.e., a surgical instrument or tool or an endoscope. The distinction between reuseable and non-reuseable must be made in order to know whether material must be re-stocked.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationReusableDevice
 */
export const ParticipationReusableDeviceCode = {
  /**
   * reusable device
   */
  reusabledevice: "RDV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationReusableDeviceCode =
  typeof ParticipationReusableDeviceCode[keyof typeof ParticipationReusableDeviceCode];
