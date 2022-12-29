/**
 * The SNODENT identifiers for patient conditions that may preclude starting orthodontic treatment.

This value set contains content from SNODENT® Copyright American Dental Association (ADA). All rights reserved. SNODENT is a registered trademark of the ADA.

http://www.ada.org/en/member-center/member-benefits/practice-resources/dental-informatics/snodent/licensing-snodent

*Steward:* Attachments WG
 * http://terminology.hl7.org/ValueSet/v3-SnodentOrthodonticTreatmentPreconditionInternational
 */
export const SnodentOrthodonticTreatmentPreconditionInternationalCode = {
  /**
   * Defective dental restoration
   */
  Defectivedentalrestoration: "138900D",

  /**
   * Poor oral hygiene
   */
  Poororalhygiene: "140234D",

  /**
   * Temporomandibular joint disorder
   */
  Temporomandibularjointdisorder: "143353D",

  /**
   * Active dental caries
   */
  Activedentalcaries: "210116D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SnodentOrthodonticTreatmentPreconditionInternationalCode =
  typeof SnodentOrthodonticTreatmentPreconditionInternationalCode[keyof typeof SnodentOrthodonticTreatmentPreconditionInternationalCode];
