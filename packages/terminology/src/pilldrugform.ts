/**
 * A small, round solid dosage form containing a medicinal agent intended for oral administration.
 * http://terminology.hl7.org/ValueSet/v3-PillDrugForm
 */
export const PillDrugFormCode = {
  /**
   * Pill
   */
  Pill: "PILL",

  /**
   * Capsule
   */
  Capsule: "CAP",

  /**
   * Oral Capsule
   */
  OralCapsule: "ORCAP",

  /**
   * Enteric Coated Capsule
   */
  EntericCoatedCapsule: "ENTCAP",

  /**
   * Extended Release Enteric Coated Capsule
   */
  ExtendedReleaseEntericCoatedCapsule: "ERENTCAP",

  /**
   * Extended Release Capsule
   */
  ExtendedReleaseCapsule: "ERCAP",

  /**
   * 12 Hour Extended Release Capsule
   */
  TwelveHourExtendedReleaseCapsule: "ERCAP12",

  /**
   * 24 Hour Extended Release Capsule
   */
  TwentyFourHourExtendedReleaseCapsule: "ERCAP24",

  /**
   * Extended Release Enteric Coated Capsule
   */
  ExtendedReleaseEntericCoatedCapsule: "ERECCAP",

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
export type PillDrugFormCode =
  typeof PillDrugFormCode[keyof typeof PillDrugFormCode];
