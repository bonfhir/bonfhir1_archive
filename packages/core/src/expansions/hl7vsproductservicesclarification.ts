/**
 * Value Set of codes that specify the Product/Service Code.
 * http://terminology.hl7.org/ValueSet/v2-0561
 */
export const Hl7VSProductServicesClarificationCode = {
  /**
   * Data Center Number
   */
  DTCTR: "DTCTR",

  /**
   * Sequence Number
   */
  SEQ: "SEQ",

  /**
   * Diagnostic Approval Number
   */
  DGAPP: "DGAPP",

  /**
   * Claim Center
   */
  CLCTR: "CLCTR",

  /**
   * Encounter Number
   */
  ENC: "ENC",

  /**
   * Out of Province Indicator
   */
  OOP: "OOP",

  /**
   * Good Faith Indicator
   */
  GFTH: "GFTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProductServicesClarificationCode =
  typeof Hl7VSProductServicesClarificationCode[keyof typeof Hl7VSProductServicesClarificationCode];
