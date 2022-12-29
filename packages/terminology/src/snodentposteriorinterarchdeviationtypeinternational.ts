/**
 * The SNODENT identifiers for dental posterior inter-arch deviations utilized to calculate the Salzmann Malocclusion Severity Index.

This value set contains content from SNODENT® Copyright American Dental Association (ADA). All rights reserved. SNODENT is a registered trademark of the ADA.

http://www.ada.org/en/member-center/member-benefits/practice-resources/dental-informatics/snodent/licensing-snodent

*Steward:* Attachments WG
 * http://terminology.hl7.org/ValueSet/v3-SnodentPosteriorInterarchDeviationTypeInternational
 */
export const SnodentPosteriorInterarchDeviationTypeInternationalCode = {
  /**
   * Posterior crossbite
   */
  Posteriorcrossbite: "127434D",

  /**
   * Posterior open bite
   */
  Posterioropenbite: "141881D",

  /**
   * Anterior deviation of posterior interarch
   */
  Anteriordeviationofposteriorinterarch: "210972D",

  /**
   * Posterior deviation of posterior interarch
   */
  Posteriordeviationofposteriorinterarch: "210974D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SnodentPosteriorInterarchDeviationTypeInternationalCode =
  typeof SnodentPosteriorInterarchDeviationTypeInternationalCode[keyof typeof SnodentPosteriorInterarchDeviationTypeInternationalCode];
