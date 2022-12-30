/**
 * Value Set of codes that identify the status the equipment was in at the time the transaction was initiated.
 * http://terminology.hl7.org/ValueSet/v2-0365
 */
export const Hl7VSEquipmentStateCode = {
  /**
   * Initializing
   */
  IN: "IN",

  /**
   * Configuring
   */
  CO: "CO",

  /**
   * Powered Up
   */
  PU: "PU",

  /**
   * Ready to start
   */
  RS: "RS",

  /**
   * Idle
   */
  ID: "ID",

  /**
   * Normal Operation
   */
  OP: "OP",

  /**
   * Clearing
   */
  CL: "CL",

  /**
   * Pausing
   */
  PA: "PA",

  /**
   * Paused
   */
  PD: "PD",

  /**
   * E-stopped
   */
  ES: "ES",

  /**
   * (null) No state change
   */
  "…": "…",

  /**
   * Transport stopped
   */
  TS: "TS",

  /**
   * Sampling stopped
   */
  SS: "SS",

  /**
   * Shutting down
   */
  SD: "SD",

  /**
   * Diagnose
   */
  DI: "DI",

  /**
   * (null) No state change
   */
  "...": "...",

  /**
   * Maintenance
   */
  MA: "MA",

  /**
   * Failure
   */
  FL: "FL",

  /**
   * Unknown
   */
  UNK: "UNK",

  /**
   * Limited test menu
   */
  LT: "LT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEquipmentStateCode =
  typeof Hl7VSEquipmentStateCode[keyof typeof Hl7VSEquipmentStateCode];
