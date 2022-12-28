/**
 * The SNODENT identifiers for the recognized grades of tooth mobility according to the Miller Classification system.

This value set contains content from SNODENT® Copyright American Dental Association (ADA). All rights reserved. SNODENT is a registered trademark of the ADA.

http://www.ada.org/en/member-center/member-benefits/practice-resources/dental-informatics/snodent/licensing-snodent

*Steward:* Attachments WG
 * http://terminology.hl7.org/ValueSet/v3-SnodentDentalToothMobilityMillerClassificationInternational
 */
export const SnodentDentalToothMobilityMillerClassificationInternationalCode = {
  /**
   * Tooth mobility - grade 1
   */
  "116762D": "116762D",

  /**
   * Tooth mobility - grade 2
   */
  "136123D": "136123D",

  /**
   * Tooth mobility - grade 3
   */
  "149641D": "149641D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SnodentDentalToothMobilityMillerClassificationInternationalCode =
  typeof SnodentDentalToothMobilityMillerClassificationInternationalCode[keyof typeof SnodentDentalToothMobilityMillerClassificationInternationalCode];
