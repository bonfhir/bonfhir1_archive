/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EquipmentAlertLevel
 */
export const EquipmentAlertLevelCode = {
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
export type EquipmentAlertLevelCode =
  typeof EquipmentAlertLevelCode[keyof typeof EquipmentAlertLevelCode];
