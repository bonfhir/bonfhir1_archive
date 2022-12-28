/**
 * The SNODENT identifiers for regions in the mouth utilized to calculate the Salzmann Malocclusion Severity Index.

This value set contains content from SNODENT® Copyright American Dental Association (ADA). All rights reserved. SNODENT is a registered trademark of the ADA.

http://www.ada.org/en/member-center/member-benefits/practice-resources/dental-informatics/snodent/licensing-snodent

*Steward:* Attachments WG
 * http://terminology.hl7.org/ValueSet/v3-SnodentOralCavityAreaInternational
 */
export const SnodentOralCavityAreaInternationalCode = {
  /**
   * Anterior segment of maxilla
   */
  "210963D": "210963D",

  /**
   * Posterior segment of maxilla
   */
  "210964D": "210964D",

  /**
   * Anterior part of lower alveolar ridge
   */
  "210965D": "210965D",

  /**
   * Posterior part of lower alveolar ridge
   */
  "210966D": "210966D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SnodentOralCavityAreaInternationalCode =
  typeof SnodentOralCavityAreaInternationalCode[keyof typeof SnodentOralCavityAreaInternationalCode];
