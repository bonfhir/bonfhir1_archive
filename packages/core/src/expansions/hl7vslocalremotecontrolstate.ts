/**
 * Value Set of codes that identify the current state of control associated with the equipment.   Equipment can either work autonomously ('Local' control state) or it can be controlled by another system, e.g., LAS computer ('Remote' control state)
 * http://terminology.hl7.org/ValueSet/v2-0366
 */
export const Hl7VSLocalRemoteControlStateCode = {
  /**
   * Local
   */
  L: "L",

  /**
   * Remote
   */
  R: "R",

  /**
   * (null) No state change
   */
  "...": "...",

  /**
   * (null) No state change
   */
  "…": "…",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSLocalRemoteControlStateCode =
  typeof Hl7VSLocalRemoteControlStateCode[keyof typeof Hl7VSLocalRemoteControlStateCode];
