/**
 * Domain values for the Device.Alert\_levelCode
 * http://terminology.hl7.org/ValueSet/v3-DeviceAlertLevel
 */
export const DeviceAlertLevelCode = {
  /**
   * Critical
   */
  Critical: "C",

  /**
   * Normal
   */
  Normal: "N",

  /**
   * Serious
   */
  Serious: "S",

  /**
   * Warning
   */
  Warning: "W",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DeviceAlertLevelCode =
  typeof DeviceAlertLevelCode[keyof typeof DeviceAlertLevelCode];
