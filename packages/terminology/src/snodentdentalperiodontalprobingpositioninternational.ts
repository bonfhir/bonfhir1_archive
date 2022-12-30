/**
 * The SNODENT identifiers for the relative positions around the tooth that are probed and measured in assessing a patient's periodontal health.

This value set contains content from SNODENT® Copyright American Dental Association (ADA). All rights reserved. SNODENT is a registered trademark of the ADA.

http://www.ada.org/en/member-center/member-benefits/practice-resources/dental-informatics/snodent/licensing-snodent

*Steward:* Attachments WG
 * http://terminology.hl7.org/ValueSet/v3-SnodentDentalPeriodontalProbingPositionInternational
 */
export const SnodentDentalPeriodontalProbingPositionInternationalCode = {
  /**
   * Lingual Surface
   */
  "103356D": "103356D",

  /**
   * Facial surface of tooth
   */
  "139277D": "139277D",

  /**
   * Mesial-lingual
   */
  "163013D": "163013D",

  /**
   * Distal-lingual
   */
  "163468D": "163468D",

  /**
   * Distal-buccal
   */
  "163596D": "163596D",

  /**
   * Mesial-buccal
   */
  "163680D": "163680D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SnodentDentalPeriodontalProbingPositionInternationalCode =
  typeof SnodentDentalPeriodontalProbingPositionInternationalCode[keyof typeof SnodentDentalPeriodontalProbingPositionInternationalCode];
