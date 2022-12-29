/**
 * Value Set of codes that identify the status the equipment was in at the time the transaction was initiated.
 * http://terminology.hl7.org/ValueSet/v2-0365
 */
export const Hl7VSEquipmentStateCode = {
  /**
   * Initializing
   */
  Initializing: "IN",

  /**
   * Configuring
   */
  Configuring: "CO",

  /**
   * Powered Up
   */
  PoweredUp: "PU",

  /**
   * Ready to start
   */
  Readytostart: "RS",

  /**
   * Idle
   */
  Idle: "ID",

  /**
   * Normal Operation
   */
  NormalOperation: "OP",

  /**
   * Clearing
   */
  Clearing: "CL",

  /**
   * Pausing
   */
  Pausing: "PA",

  /**
   * Paused
   */
  Paused: "PD",

  /**
   * E-stopped
   */
  Estopped: "ES",

  /**
   * (null) No state change
   */
  nullNostatechange: "…",

  /**
   * Transport stopped
   */
  Transportstopped: "TS",

  /**
   * Sampling stopped
   */
  Samplingstopped: "SS",

  /**
   * Shutting down
   */
  Shuttingdown: "SD",

  /**
   * Diagnose
   */
  Diagnose: "DI",

  /**
   * (null) No state change
   */
  nullNostatechange: "...",

  /**
   * Maintenance
   */
  Maintenance: "MA",

  /**
   * Failure
   */
  Failure: "FL",

  /**
   * Unknown
   */
  Unknown: "UNK",

  /**
   * Limited test menu
   */
  Limitedtestmenu: "LT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEquipmentStateCode =
  typeof Hl7VSEquipmentStateCode[keyof typeof Hl7VSEquipmentStateCode];
