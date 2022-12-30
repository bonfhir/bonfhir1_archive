/**
 * A value representing the current state of control associated with the device.

*Examples:* A device can either work autonomously (localRemoteControlStateCode="Local") or it can be controlled by another system (localRemoteControlStateCode="Remote").

*Rationale:* The control status of a device must be communicated between devices prior to remote commands being transmitted. If the device is not in "Remote" status then external commands will be ignored.
 * http://terminology.hl7.org/ValueSet/v3-LocalRemoteControlState
 */
export const LocalRemoteControlStateCode = {
  /**
   * Local
   */
  L: "L",

  /**
   * Remote
   */
  R: "R",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LocalRemoteControlStateCode =
  typeof LocalRemoteControlStateCode[keyof typeof LocalRemoteControlStateCode];
