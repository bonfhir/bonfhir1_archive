/**
 * There may be an issue with the patient complying with the intentions of the proposed therapy
 * http://terminology.hl7.org/ValueSet/v3-ComplianceDetectedIssueCode
 */
export const ComplianceDetectedIssueCodeCode = {
  /**
   * Compliance Alert
   */
  ComplianceAlert: "COMPLY",

  /**
   * Duplicate Therapy Alert
   */
  DuplicateTherapyAlert: "DUPTHPY",

  /**
   * duplicate therapeutic alass alert
   */
  duplicatetherapeuticalassalert: "DUPTHPCLS",

  /**
   * duplicate generic alert
   */
  duplicategenericalert: "DUPTHPGEN",

  /**
   * commonly abused/misused alert
   */
  commonlyabusedmisusedalert: "ABUSE",

  /**
   * potential fraud
   */
  potentialfraud: "FRAUD",

  /**
   * Poly-orderer Alert
   */
  PolyordererAlert: "PLYDOC",

  /**
   * Poly-supplier Alert
   */
  PolysupplierAlert: "PLYPHRM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ComplianceDetectedIssueCodeCode =
  typeof ComplianceDetectedIssueCodeCode[keyof typeof ComplianceDetectedIssueCodeCode];
