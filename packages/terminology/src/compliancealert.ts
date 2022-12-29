/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ComplianceAlert
 */
export const ComplianceAlertCode = {
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
export type ComplianceAlertCode =
  typeof ComplianceAlertCode[keyof typeof ComplianceAlertCode];
