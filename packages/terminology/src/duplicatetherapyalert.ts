/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-DuplicateTherapyAlert
 */
export const DuplicateTherapyAlertCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DuplicateTherapyAlertCode =
  typeof DuplicateTherapyAlertCode[keyof typeof DuplicateTherapyAlertCode];
