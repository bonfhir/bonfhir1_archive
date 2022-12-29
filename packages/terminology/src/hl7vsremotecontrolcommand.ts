/**
 * Value Set of codes that identify the comment the component is to initiate.
 * http://terminology.hl7.org/ValueSet/v2-0368
 */
export const Hl7VSRemoteControlCommandCode = {
  /**
   * Sampling
   */
  Sampling: "SA",

  /**
   * Load
   */
  Load: "LO",

  /**
   * Unload
   */
  Unload: "UN",

  /**
   * Lock
   */
  Lock: "LK",

  /**
   * Unlock
   */
  Unlock: "UC",

  /**
   * Transport To
   */
  TransportTo: "TT",

  /**
   * Clear Notification
   */
  ClearNotification: "CN",

  /**
   * Initialize/Initiate
   */
  InitializeInitiate: "IN",

  /**
   * Setup
   */
  Setup: "SU",

  /**
   * Clear
   */
  Clear: "CL",

  /**
   * Pause
   */
  Pause: "PA",

  /**
   * Resume
   */
  Resume: "RE",

  /**
   * Emergency -stop
   */
  Emergencystop: "ES",

  /**
   * Local Control Request
   */
  LocalControlRequest: "LC",

  /**
   * Remote Control Request
   */
  RemoteControlRequest: "RC",

  /**
   * Abort
   */
  Abort: "AB",

  /**
   * Enable Sending Events
   */
  EnableSendingEvents: "EN",

  /**
   * Disable Sending Events
   */
  DisableSendingEvents: "DI",

  /**
   * Execute (command specified in field Parameters (ST) 01394)
   */
  ExecutecommandspecifiedinfieldParametersST01394: "EX",

  /**
   * Aliquot From container
   */
  AliquotFromcontainer: "AF",

  /**
   * Aliquot To container
   */
  AliquotTocontainer: "AT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRemoteControlCommandCode =
  typeof Hl7VSRemoteControlCommandCode[keyof typeof Hl7VSRemoteControlCommandCode];
