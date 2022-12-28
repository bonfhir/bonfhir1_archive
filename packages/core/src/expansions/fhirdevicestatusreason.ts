/**
 * The availability status reason of the device.
 * http://terminology.hl7.org/ValueSet/device-status-reason
 */
export const FHIRDeviceStatusReasonCode = {
  /**
   * Online
   */
  online: "online",

  /**
   * Paused
   */
  paused: "paused",

  /**
   * Standby
   */
  standby: "standby",

  /**
   * Offline
   */
  offline: "offline",

  /**
   * Not Ready
   */
  "not-ready": "not-ready",

  /**
   * Transducer Disconnected
   */
  "transduc-discon": "transduc-discon",

  /**
   * Hardware Disconnected
   */
  "hw-discon": "hw-discon",

  /**
   * Off
   */
  off: "off",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FHIRDeviceStatusReasonCode =
  typeof FHIRDeviceStatusReasonCode[keyof typeof FHIRDeviceStatusReasonCode];
