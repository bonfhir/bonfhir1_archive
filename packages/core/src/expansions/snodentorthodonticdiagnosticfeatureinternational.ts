/**
 * The SNODENT identifiers for gross patient findings that inform the course of orthodontic treatment to be performed.

This value set contains content from SNODENT® Copyright American Dental Association (ADA). All rights reserved. SNODENT is a registered trademark of the ADA.

http://www.ada.org/en/member-center/member-benefits/practice-resources/dental-informatics/snodent/licensing-snodent

*Steward:* Attachments WG
 * http://terminology.hl7.org/ValueSet/v3-SnodentOrthodonticDiagnosticFeatureInternational
 */
export const SnodentOrthodonticDiagnosticFeatureInternationalCode = {
  /**
   * Gingival Recession
   */
  "133426D": "133426D",

  /**
   * Bimaxillary protrusion
   */
  "157044D": "157044D",

  /**
   * Deep impinging overbite with soft tissue destruction
   */
  "210952D": "210952D",

  /**
   * Anterior crossbite with destruction of oral mucosa
   */
  "210953D": "210953D",

  /**
   * Lip incompetence due to horizontal overbite
   */
  "210954D": "210954D",

  /**
   * Posterior crossbite limited to left side
   */
  "210955D": "210955D",

  /**
   * Posterior crossbite limited to right side
   */
  "210956D": "210956D",

  /**
   * Articulatory defect secondary to dental defect
   */
  "210957D": "210957D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SnodentOrthodonticDiagnosticFeatureInternationalCode =
  typeof SnodentOrthodonticDiagnosticFeatureInternationalCode[keyof typeof SnodentOrthodonticDiagnosticFeatureInternationalCode];
