/**
 * Value Set of codes that specify the Product/Service Code.
 * http://terminology.hl7.org/ValueSet/v2-0561
 */
export const Hl7VSProductServicesClarificationCode = {
  /**
   * Data Center Number
   */
  DataCenterNumber: "DTCTR",

  /**
   * Sequence Number
   */
  SequenceNumber: "SEQ",

  /**
   * Diagnostic Approval Number
   */
  DiagnosticApprovalNumber: "DGAPP",

  /**
   * Claim Center
   */
  ClaimCenter: "CLCTR",

  /**
   * Encounter Number
   */
  EncounterNumber: "ENC",

  /**
   * Out of Province Indicator
   */
  OutofProvinceIndicator: "OOP",

  /**
   * Good Faith Indicator
   */
  GoodFaithIndicator: "GFTH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProductServicesClarificationCode =
  typeof Hl7VSProductServicesClarificationCode[keyof typeof Hl7VSProductServicesClarificationCode];
