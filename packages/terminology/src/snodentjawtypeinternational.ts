/**
 * The SNODENT identifiers for the two jaws (mandible and maxilla).

This value set contains content from SNODENT® Copyright American Dental Association (ADA). All rights reserved. SNODENT is a registered trademark of the ADA.

http://www.ada.org/en/member-center/member-benefits/practice-resources/dental-informatics/snodent/licensing-snodent

*Steward:* Attachments WG
 * http://terminology.hl7.org/ValueSet/v3-SnodentJawTypeInternational
 */
export const SnodentJawTypeInternationalCode = {
  /**
   * Bone structure of maxilla
   */
  Bonestructureofmaxilla: "108042D",

  /**
   * Bone structure of mandible
   */
  Bonestructureofmandible: "144511D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SnodentJawTypeInternationalCode =
  typeof SnodentJawTypeInternationalCode[keyof typeof SnodentJawTypeInternationalCode];
