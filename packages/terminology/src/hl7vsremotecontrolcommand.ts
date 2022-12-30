/**
 * Value Set of codes that identify the comment the component is to initiate.
 * http://terminology.hl7.org/ValueSet/v2-0368
 */
export const Hl7VSRemoteControlCommandCode = {
  /**
   * Sampling
   */
  SA: "SA",

  /**
   * Load
   */
  LO: "LO",

  /**
   * Unload
   */
  UN: "UN",

  /**
   * Lock
   */
  LK: "LK",

  /**
   * Unlock
   */
  UC: "UC",

  /**
   * Transport To
   */
  TT: "TT",

  /**
   * Clear Notification
   */
  CN: "CN",

  /**
   * Initialize/Initiate
   */
  IN: "IN",

  /**
   * Setup
   */
  SU: "SU",

  /**
   * Clear
   */
  CL: "CL",

  /**
   * Pause
   */
  PA: "PA",

  /**
   * Resume
   */
  RE: "RE",

  /**
   * Emergency -stop
   */
  ES: "ES",

  /**
   * Local Control Request
   */
  LC: "LC",

  /**
   * Remote Control Request
   */
  RC: "RC",

  /**
   * Abort
   */
  AB: "AB",

  /**
   * Enable Sending Events
   */
  EN: "EN",

  /**
   * Disable Sending Events
   */
  DI: "DI",

  /**
   * Execute (command specified in field Parameters (ST) 01394)
   */
  EX: "EX",

  /**
   * Aliquot From container
   */
  AF: "AF",

  /**
   * Aliquot To container
   */
  AT: "AT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRemoteControlCommandCode =
  typeof Hl7VSRemoteControlCommandCode[keyof typeof Hl7VSRemoteControlCommandCode];
