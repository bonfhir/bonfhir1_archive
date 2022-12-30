/**
 * There may be an issue with the patient complying with the intentions of the proposed therapy
 * http://terminology.hl7.org/ValueSet/v3-ComplianceDetectedIssueCode
 */
export const ComplianceDetectedIssueCodeCode = {
  /**
   * Compliance Alert
   */
  COMPLY: "COMPLY",

  /**
   * Duplicate Therapy Alert
   */
  DUPTHPY: "DUPTHPY",

  /**
   * duplicate therapeutic alass alert
   */
  DUPTHPCLS: "DUPTHPCLS",

  /**
   * duplicate generic alert
   */
  DUPTHPGEN: "DUPTHPGEN",

  /**
   * commonly abused/misused alert
   */
  ABUSE: "ABUSE",

  /**
   * potential fraud
   */
  FRAUD: "FRAUD",

  /**
   * Poly-orderer Alert
   */
  PLYDOC: "PLYDOC",

  /**
   * Poly-supplier Alert
   */
  PLYPHRM: "PLYPHRM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ComplianceDetectedIssueCodeCode =
  typeof ComplianceDetectedIssueCodeCode[keyof typeof ComplianceDetectedIssueCodeCode];
