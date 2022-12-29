/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SolidDrugForm
 */
export const SolidDrugFormCode = {
  /**
   * Bar
   */
  Bar: "BAR",

  /**
   * Bar Soap
   */
  BarSoap: "BARSOAP",

  /**
   * Medicated Bar Soap
   */
  MedicatedBarSoap: "MEDBAR",

  /**
   * Chewable Bar
   */
  ChewableBar: "CHEWBAR",

  /**
   * Beads
   */
  Beads: "BEAD",

  /**
   * Cake
   */
  Cake: "CAKE",

  /**
   * Cement
   */
  Cement: "CEMENT",

  /**
   * Crystals
   */
  Crystals: "CRYS",

  /**
   * Disk
   */
  Disk: "DISK",

  /**
   * Flakes
   */
  Flakes: "FLAKE",

  /**
   * Granules
   */
  Granules: "GRAN",

  /**
   * ChewingGum
   */
  ChewingGum: "GUM",

  /**
   * Pad
   */
  Pad: "PAD",

  /**
   * Medicated Pad
   */
  MedicatedPad: "MEDPAD",

  /**
   * Patch
   */
  Patch: "PATCH",

  /**
   * Transdermal Patch
   */
  TransdermalPatch: "TPATCH",

  /**
   * 16 Hour Transdermal Patch
   */
  SixteenHourTransdermalPatch: "TPATH16",

  /**
   * 24 Hour Transdermal Patch
   */
  TwentyFourHourTransdermalPatch: "TPATH24",

  /**
   * Biweekly Transdermal Patch
   */
  BiweeklyTransdermalPatch: "TPATH2WK",

  /**
   * 72 Hour Transdermal Patch
   */
  SeventyTwoHourTransdermalPatch: "TPATH72",

  /**
   * Weekly Transdermal Patch
   */
  WeeklyTransdermalPatch: "TPATHWK",

  /**
   * Pellet
   */
  Pellet: "PELLET",

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

  /**
   * Powder
   */
  Powder: "POWD",

  /**
   * Topical Powder
   */
  TopicalPowder: "TOPPWD",

  /**
   * Rectal Powder
   */
  RectalPowder: "RECPWD",

  /**
   * Vaginal Powder
   */
  VaginalPowder: "VAGPWD",

  /**
   * Suppository
   */
  Suppository: "SUPP",

  /**
   * Rectal Suppository
   */
  RectalSuppository: "RECSUPP",

  /**
   * Urethral suppository
   */
  Urethralsuppository: "URETHSUPP",

  /**
   * Vaginal Suppository
   */
  VaginalSuppository: "VAGSUPP",

  /**
   * Swab
   */
  Swab: "SWAB",

  /**
   * Medicated swab
   */
  Medicatedswab: "MEDSWAB",

  /**
   * Wafer
   */
  Wafer: "WAFER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SolidDrugFormCode =
  typeof SolidDrugFormCode[keyof typeof SolidDrugFormCode];
