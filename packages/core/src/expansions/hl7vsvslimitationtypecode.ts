/**
 * Value Set of codes specifying a type of limitation.
 * http://terminology.hl7.org/ValueSet/v2-0940
 */
export const Hl7VSVSLimitationTypeCodeCode = {
  /**
   * Limited Coverage Policy
   */
  LCP: "LCP",

  /**
   * Non-FDA Approved Diagnositic Procedure
   */
  NFDA: "NFDA",

  /**
   * Frequency Limited Diagnostics Procedure
   */
  FLDP: "FLDP",

  /**
   * New Test - Limited Diagnostic History
   */
  NT: "NT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSVSLimitationTypeCodeCode =
  typeof Hl7VSVSLimitationTypeCodeCode[keyof typeof Hl7VSVSLimitationTypeCodeCode];
