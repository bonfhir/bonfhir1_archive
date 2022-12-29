/**
 * The SNODENT identifiers for dental anterior inter-arch deviations utilized to calculate the Salzmann Malocclusion Severity Index.

This value set contains content from SNODENT® Copyright American Dental Association (ADA). All rights reserved. SNODENT is a registered trademark of the ADA.

http://www.ada.org/en/member-center/member-benefits/practice-resources/dental-informatics/snodent/licensing-snodent

*Steward:* Attachments WG
 * http://terminology.hl7.org/ValueSet/v3-SnodentAnteriorInterarchDeviationTypeInternational
 */
export const SnodentAnteriorInterarchDeviationTypeInternationalCode = {
  /**
   * Anterior open bite
   */
  Anterioropenbite: "121344D",

  /**
   * Anterior crossbite
   */
  Anteriorcrossbite: "137027D",

  /**
   * Overjet
   */
  Overjet: "197703D",

  /**
   * Overbite
   */
  Overbite: "210967D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SnodentAnteriorInterarchDeviationTypeInternationalCode =
  typeof SnodentAnteriorInterarchDeviationTypeInternationalCode[keyof typeof SnodentAnteriorInterarchDeviationTypeInternationalCode];
