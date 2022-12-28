/**
 * The availability status of the device.
 * http://hl7.org/fhir/ValueSet/device-status
 */
export const FHIRDeviceStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FHIRDeviceStatusCode =
  typeof FHIRDeviceStatusCode[keyof typeof FHIRDeviceStatusCode];
