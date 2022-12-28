/**
 * The availability status reason of the device.
 * http://hl7.org/fhir/ValueSet/device-status-reason
 */
export const FHIRDeviceStatusReasonCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FHIRDeviceStatusReasonCode =
  typeof FHIRDeviceStatusReasonCode[keyof typeof FHIRDeviceStatusReasonCode];
