/**
 * Value Set of codes that specify the state of the data as provided from a device.
 * http://terminology.hl7.org/ValueSet/v2-0667
 */
export const Hl7VSDeviceDataStateCode = {
  /**
   * Real Time Values
   */
  "0": "0",

  /**
   * Historic Values
   */
  "1": "1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDeviceDataStateCode =
  typeof Hl7VSDeviceDataStateCode[keyof typeof Hl7VSDeviceDataStateCode];
