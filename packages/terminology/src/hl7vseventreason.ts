/**
 * Value Set of codes that specify the reason for an event.
 * http://terminology.hl7.org/ValueSet/v2-0062
 */
export const Hl7VSEventReasonCode = {
  /**
   * Patient request
   */
  "01": "01",

  /**
   * Physician/health practitioner order
   */
  "02": "02",

  /**
   * Census management
   */
  "03": "03",

  /**
   * Other
   */
  O: "O",

  /**
   * Unknown
   */
  U: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEventReasonCode =
  typeof Hl7VSEventReasonCode[keyof typeof Hl7VSEventReasonCode];
