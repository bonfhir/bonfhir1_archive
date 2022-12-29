/**
 * The SNODENT identifiers for the stages of dentition an individual progresses through during a lifetime.

This value set contains content from SNODENT® Copyright American Dental Association (ADA). All rights reserved. SNODENT is a registered trademark of the ADA.

http://www.ada.org/en/member-center/member-benefits/practice-resources/dental-informatics/snodent/licensing-snodent

*Steward:* Attachments WG
 * http://terminology.hl7.org/ValueSet/v3-SnodentDentitionStateInternational
 */
export const SnodentDentitionStateInternationalCode = {
  /**
   * Primary Dentition
   */
  PrimaryDentition: "121288D",

  /**
   * Permanent Dentition
   */
  PermanentDentition: "139017D",

  /**
   * Mixed Dentition
   */
  MixedDentition: "210962D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SnodentDentitionStateInternationalCode =
  typeof SnodentDentitionStateInternationalCode[keyof typeof SnodentDentitionStateInternationalCode];
