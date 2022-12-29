/**
 * Value Set of codes that specify the type of dietary tray.
 * http://terminology.hl7.org/ValueSet/v2-0160
 */
export const Hl7VSTrayTypeCode = {
  /**
   * Early tray
   */
  Earlytray: "EARLY",

  /**
   * Late tray
   */
  Latetray: "LATE",

  /**
   * Guest tray
   */
  Guesttray: "GUEST",

  /**
   * No tray
   */
  Notray: "NO",

  /**
   * Tray message only
   */
  Traymessageonly: "MSG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTrayTypeCode =
  typeof Hl7VSTrayTypeCode[keyof typeof Hl7VSTrayTypeCode];
