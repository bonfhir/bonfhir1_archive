/**
 * Value Set of codes specifying a type of limitation.
 * http://terminology.hl7.org/ValueSet/v2-0940
 */
export const Hl7VSVSLimitationTypeCodeCode = {
  /**
   * Limited Coverage Policy
   */
  LimitedCoveragePolicy: "LCP",

  /**
   * Non-FDA Approved Diagnositic Procedure
   */
  NonFDAApprovedDiagnositicProcedure: "NFDA",

  /**
   * Frequency Limited Diagnostics Procedure
   */
  FrequencyLimitedDiagnosticsProcedure: "FLDP",

  /**
   * New Test - Limited Diagnostic History
   */
  NewTestLimitedDiagnosticHistory: "NT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSVSLimitationTypeCodeCode =
  typeof Hl7VSVSLimitationTypeCodeCode[keyof typeof Hl7VSVSLimitationTypeCodeCode];
