/**
 * The SNODENT identifiers for tooth-specific abnormalities that impact orthodontic treatment.

This value set contains content from SNODENT® Copyright American Dental Association (ADA). All rights reserved. SNODENT is a registered trademark of the ADA.

http://www.ada.org/en/member-center/member-benefits/practice-resources/dental-informatics/snodent/licensing-snodent

*Steward:* Attachments WG
 * http://terminology.hl7.org/ValueSet/v3-SnodentDentalAbnormalityInternational
 */
export const SnodentDentalAbnormalityInternationalCode = {
  /**
   * Tooth Absent
   */
  "100203D": "100203D",

  /**
   * Impacted tooth
   */
  "104161D": "104161D",

  /**
   * Supernumerary tooth
   */
  "116259D": "116259D",

  /**
   * Ankylosis of tooth
   */
  "127066D": "127066D",

  /**
   * Ectopic tooth
   */
  "139347D": "139347D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SnodentDentalAbnormalityInternationalCode =
  typeof SnodentDentalAbnormalityInternationalCode[keyof typeof SnodentDentalAbnormalityInternationalCode];
