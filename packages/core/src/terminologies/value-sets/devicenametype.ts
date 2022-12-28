/**
 * The type of name the device is referred by.
 * http://hl7.org/fhir/ValueSet/device-nametype
 */
export const DeviceNameTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DeviceNameTypeCode =
  typeof DeviceNameTypeCode[keyof typeof DeviceNameTypeCode];
