/**
 * The availability status reason of the device.
 * http://terminology.hl7.org/ValueSet/device-status-reason
 */
export const FHIRDeviceStatusReasonCode = {
  /**
   * Online
   */
  Online: "online",

  /**
   * Paused
   */
  Paused: "paused",

  /**
   * Standby
   */
  Standby: "standby",

  /**
   * Offline
   */
  Offline: "offline",

  /**
   * Not Ready
   */
  NotReady: "not-ready",

  /**
   * Transducer Disconnected
   */
  TransducerDisconnected: "transduc-discon",

  /**
   * Hardware Disconnected
   */
  HardwareDisconnected: "hw-discon",

  /**
   * Off
   */
  Off: "off",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FHIRDeviceStatusReasonCode =
  typeof FHIRDeviceStatusReasonCode[keyof typeof FHIRDeviceStatusReasonCode];
