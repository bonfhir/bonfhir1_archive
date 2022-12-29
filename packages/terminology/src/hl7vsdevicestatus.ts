/**
 * Value Set of codes that specify the state of a device.
 * http://terminology.hl7.org/ValueSet/v2-0682
 */
export const Hl7VSDeviceStatusCode = {
  /**
   * Ready
   */
  Ready: "0",

  /**
   * Not Ready
   */
  NotReady: "1",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDeviceStatusCode =
  typeof Hl7VSDeviceStatusCode[keyof typeof Hl7VSDeviceStatusCode];
