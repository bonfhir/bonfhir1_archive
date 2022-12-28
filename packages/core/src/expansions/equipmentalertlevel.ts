/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EquipmentAlertLevel
 */
export const EquipmentAlertLevelCode = {
  /**
   * Critical
   */
  C: "C",

  /**
   * Normal
   */
  N: "N",

  /**
   * Serious
   */
  S: "S",

  /**
   * Warning
   */
  W: "W",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EquipmentAlertLevelCode =
  typeof EquipmentAlertLevelCode[keyof typeof EquipmentAlertLevelCode];
