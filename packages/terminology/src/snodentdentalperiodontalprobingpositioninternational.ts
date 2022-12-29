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
  LingualSurface: "103356D",

  /**
   * Facial surface of tooth
   */
  Facialsurfaceoftooth: "139277D",

  /**
   * Mesial-lingual
   */
  Mesiallingual: "163013D",

  /**
   * Distal-lingual
   */
  Distallingual: "163468D",

  /**
   * Distal-buccal
   */
  Distalbuccal: "163596D",

  /**
   * Mesial-buccal
   */
  Mesialbuccal: "163680D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SnodentDentalPeriodontalProbingPositionInternationalCode =
  typeof SnodentDentalPeriodontalProbingPositionInternationalCode[keyof typeof SnodentDentalPeriodontalProbingPositionInternationalCode];
