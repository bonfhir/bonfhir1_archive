/**
 * A solid dosage form containing medicinal substances with or without suitable diluents.
 * http://terminology.hl7.org/ValueSet/v3-TabletDrugForm
 */
export const TabletDrugFormCode = {
  /**
   * Tablet
   */
  Tablet: "TAB",

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

  /**
   * Vaginal Tablet
   */
  VaginalTablet: "VAGTAB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TabletDrugFormCode =
  typeof TabletDrugFormCode[keyof typeof TabletDrugFormCode];
