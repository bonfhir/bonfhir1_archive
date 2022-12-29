/**
 * Value Set of codes that identify the highest level of the alert state (e.g.,highest alert severity) that is associated with the indicated equipment (e.g. processing event, inventory event, QC event).
 * http://terminology.hl7.org/ValueSet/v2-0367
 */
export const Hl7VSAlertLevelCode = {
  /**
   * Normal
   */
  Normal: "N",

  /**
   * Warning
   */
  Warning: "W",

  /**
   * Serious
   */
  Serious: "S",

  /**
   * Critical
   */
  Critical: "C",

  /**
   * (null) No level change
   */
  nullNolevelchange: "...",

  /**
   * (null) No level change
   */
  nullNolevelchange: "…",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAlertLevelCode =
  typeof Hl7VSAlertLevelCode[keyof typeof Hl7VSAlertLevelCode];
