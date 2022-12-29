/**
 * The SNODENT identifiers for the relative location of a human tooth root that is being observed for furcation.

This value set contains content from SNODENT® Copyright American Dental Association (ADA). All rights reserved. SNODENT is a registered trademark of the ADA.

http://www.ada.org/en/member-center/member-benefits/practice-resources/dental-informatics/snodent/licensing-snodent

*Steward:* Attachments WG
 * http://terminology.hl7.org/ValueSet/v3-SnodentDentalToothFurcationSiteInternational
 */
export const SnodentDentalToothFurcationSiteInternationalCode = {
  /**
   * Lingual Surface
   */
  LingualSurface: "103356D",

  /**
   * Buccal Surface
   */
  BuccalSurface: "103387D",

  /**
   * Mesial Surface
   */
  MesialSurface: "132513D",

  /**
   * Distal Surface
   */
  DistalSurface: "146014D",

  /**
   * Mesial-lingual
   */
  Mesiallingual: "163013D",

  /**
   * Distal-lingual
   */
  Distallingual: "163468D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SnodentDentalToothFurcationSiteInternationalCode =
  typeof SnodentDentalToothFurcationSiteInternationalCode[keyof typeof SnodentDentalToothFurcationSiteInternationalCode];
