/**
 * Something used in delivering the service without being substantially affected by the service (i.e. durable or inert with respect to that particular service.) Examples are: monitoring equipment, tools, but also access/drainage lines, prostheses, pace maker, etc.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationTargetDevice
 */
export const ParticipationTargetDeviceCode = {
  /**
   * device
   */
  device: "DEV",

  /**
   * non-reuseable device
   */
  nonreuseabledevice: "NRD",

  /**
   * reusable device
   */
  reusabledevice: "RDV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationTargetDeviceCode =
  typeof ParticipationTargetDeviceCode[keyof typeof ParticipationTargetDeviceCode];
