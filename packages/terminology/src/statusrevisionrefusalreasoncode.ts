/**
 * Indicates why the act revision (status update) is being refused.
 * http://terminology.hl7.org/ValueSet/v3-StatusRevisionRefusalReasonCode
 */
export const StatusRevisionRefusalReasonCodeCode = {
  /**
   * StatusRevisionRefusalReasonCode
   */
  StatusRevisionRefusalReasonCode: "_StatusRevisionRefusalReasonCode",

  /**
   * no record match
   */
  norecordmatch: "NORECMTCH",

  /**
   * in requested state
   */
  inrequestedstate: "INRQSTATE",

  /**
   * no user permission
   */
  nouserpermission: "NOUSERPERM",

  /**
   * fully filled
   */
  fullyfilled: "FILLED",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StatusRevisionRefusalReasonCodeCode =
  typeof StatusRevisionRefusalReasonCodeCode[keyof typeof StatusRevisionRefusalReasonCodeCode];
