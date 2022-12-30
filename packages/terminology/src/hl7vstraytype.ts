/**
 * Value Set of codes that specify the type of dietary tray.
 * http://terminology.hl7.org/ValueSet/v2-0160
 */
export const Hl7VSTrayTypeCode = {
  /**
   * Early tray
   */
  EARLY: "EARLY",

  /**
   * Late tray
   */
  LATE: "LATE",

  /**
   * Guest tray
   */
  GUEST: "GUEST",

  /**
   * No tray
   */
  NO: "NO",

  /**
   * Tray message only
   */
  MSG: "MSG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTrayTypeCode =
  typeof Hl7VSTrayTypeCode[keyof typeof Hl7VSTrayTypeCode];
