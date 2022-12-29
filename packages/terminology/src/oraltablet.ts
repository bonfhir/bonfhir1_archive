/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-OralTablet
 */
export const OralTabletCode = {
  /**
   * Oral Tablet
   */
  OralTablet: "ORTAB",

  /**
   * Buccal Tablet
   */
  BuccalTablet: "BUCTAB",

  /**
   * Sustained Release Buccal Tablet
   */
  SustainedReleaseBuccalTablet: "SRBUCTAB",

  /**
   * Caplet
   */
  Caplet: "CAPLET",

  /**
   * Chewable Tablet
   */
  ChewableTablet: "CHEWTAB",

  /**
   * Coated Particles Tablet
   */
  CoatedParticlesTablet: "CPTAB",

  /**
   * Disintegrating Tablet
   */
  DisintegratingTablet: "DISINTAB",

  /**
   * Delayed Release Tablet
   */
  DelayedReleaseTablet: "DRTAB",

  /**
   * Enteric Coated Tablet
   */
  EntericCoatedTablet: "ECTAB",

  /**
   * Extended Release Enteric Coated Tablet
   */
  ExtendedReleaseEntericCoatedTablet: "ERECTAB",

  /**
   * Extended Release Tablet
   */
  ExtendedReleaseTablet: "ERTAB",

  /**
   * 12 Hour Extended Release Tablet
   */
  TwelveHourExtendedReleaseTablet: "ERTAB12",

  /**
   * 24 Hour Extended Release Tablet
   */
  TwentyFourHourExtendedReleaseTablet: "ERTAB24",

  /**
   * Lozenge/Oral Troche
   */
  LozengeOralTroche: "ORTROCHE",

  /**
   * Sublingual Tablet
   */
  SublingualTablet: "SLTAB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OralTabletCode = typeof OralTabletCode[keyof typeof OralTabletCode];
