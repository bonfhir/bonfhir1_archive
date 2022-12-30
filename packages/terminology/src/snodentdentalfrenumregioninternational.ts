/**
 * The SNODENT identifiers for the regions of the human frenum within the mouth.

This value set contains content from SNODENT® Copyright American Dental Association (ADA). All rights reserved. SNODENT is a registered trademark of the ADA.

http://www.ada.org/en/member-center/member-benefits/practice-resources/dental-informatics/snodent/licensing-snodent

*Steward:* Attachments WG
 * http://terminology.hl7.org/ValueSet/v3-SnodentDentalFrenumRegionInternational
 */
export const SnodentDentalFrenumRegionInternationalCode = {
  /**
   * Lower labial frenum
   */
  "209615D": "209615D",

  /**
   * Upper labial frenum
   */
  "209620D": "209620D",

  /**
   * Upper buccal frenum
   */
  "209631D": "209631D",

  /**
   * Lower buccal frenum
   */
  "209645D": "209645D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SnodentDentalFrenumRegionInternationalCode =
  typeof SnodentDentalFrenumRegionInternationalCode[keyof typeof SnodentDentalFrenumRegionInternationalCode];
