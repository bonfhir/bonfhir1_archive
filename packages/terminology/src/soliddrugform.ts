/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SolidDrugForm
 */
export const SolidDrugFormCode = {
  /**
   * Bar
   */
  BAR: "BAR",

  /**
   * Bar Soap
   */
  BARSOAP: "BARSOAP",

  /**
   * Medicated Bar Soap
   */
  MEDBAR: "MEDBAR",

  /**
   * Chewable Bar
   */
  CHEWBAR: "CHEWBAR",

  /**
   * Beads
   */
  BEAD: "BEAD",

  /**
   * Cake
   */
  CAKE: "CAKE",

  /**
   * Cement
   */
  CEMENT: "CEMENT",

  /**
   * Crystals
   */
  CRYS: "CRYS",

  /**
   * Disk
   */
  DISK: "DISK",

  /**
   * Flakes
   */
  FLAKE: "FLAKE",

  /**
   * Granules
   */
  GRAN: "GRAN",

  /**
   * ChewingGum
   */
  GUM: "GUM",

  /**
   * Pad
   */
  PAD: "PAD",

  /**
   * Medicated Pad
   */
  MEDPAD: "MEDPAD",

  /**
   * Patch
   */
  PATCH: "PATCH",

  /**
   * Transdermal Patch
   */
  TPATCH: "TPATCH",

  /**
   * 16 Hour Transdermal Patch
   */
  TPATH16: "TPATH16",

  /**
   * 24 Hour Transdermal Patch
   */
  TPATH24: "TPATH24",

  /**
   * Biweekly Transdermal Patch
   */
  TPATH2WK: "TPATH2WK",

  /**
   * 72 Hour Transdermal Patch
   */
  TPATH72: "TPATH72",

  /**
   * Weekly Transdermal Patch
   */
  TPATHWK: "TPATHWK",

  /**
   * Pellet
   */
  PELLET: "PELLET",

  /**
   * Pill
   */
  PILL: "PILL",

  /**
   * Capsule
   */
  CAP: "CAP",

  /**
   * Oral Capsule
   */
  ORCAP: "ORCAP",

  /**
   * Enteric Coated Capsule
   */
  ENTCAP: "ENTCAP",

  /**
   * Extended Release Enteric Coated Capsule
   */
  ERENTCAP: "ERENTCAP",

  /**
   * Extended Release Capsule
   */
  ERCAP: "ERCAP",

  /**
   * 12 Hour Extended Release Capsule
   */
  ERCAP12: "ERCAP12",

  /**
   * 24 Hour Extended Release Capsule
   */
  ERCAP24: "ERCAP24",

  /**
   * Extended Release Enteric Coated Capsule
   */
  ERECCAP: "ERECCAP",

  /**
   * Tablet
   */
  TAB: "TAB",

  /**
   * Oral Tablet
   */
  ORTAB: "ORTAB",

  /**
   * Buccal Tablet
   */
  BUCTAB: "BUCTAB",

  /**
   * Sustained Release Buccal Tablet
   */
  SRBUCTAB: "SRBUCTAB",

  /**
   * Caplet
   */
  CAPLET: "CAPLET",

  /**
   * Chewable Tablet
   */
  CHEWTAB: "CHEWTAB",

  /**
   * Coated Particles Tablet
   */
  CPTAB: "CPTAB",

  /**
   * Disintegrating Tablet
   */
  DISINTAB: "DISINTAB",

  /**
   * Delayed Release Tablet
   */
  DRTAB: "DRTAB",

  /**
   * Enteric Coated Tablet
   */
  ECTAB: "ECTAB",

  /**
   * Extended Release Enteric Coated Tablet
   */
  ERECTAB: "ERECTAB",

  /**
   * Extended Release Tablet
   */
  ERTAB: "ERTAB",

  /**
   * 12 Hour Extended Release Tablet
   */
  ERTAB12: "ERTAB12",

  /**
   * 24 Hour Extended Release Tablet
   */
  ERTAB24: "ERTAB24",

  /**
   * Lozenge/Oral Troche
   */
  ORTROCHE: "ORTROCHE",

  /**
   * Sublingual Tablet
   */
  SLTAB: "SLTAB",

  /**
   * Vaginal Tablet
   */
  VAGTAB: "VAGTAB",

  /**
   * Powder
   */
  POWD: "POWD",

  /**
   * Topical Powder
   */
  TOPPWD: "TOPPWD",

  /**
   * Rectal Powder
   */
  RECPWD: "RECPWD",

  /**
   * Vaginal Powder
   */
  VAGPWD: "VAGPWD",

  /**
   * Suppository
   */
  SUPP: "SUPP",

  /**
   * Rectal Suppository
   */
  RECSUPP: "RECSUPP",

  /**
   * Urethral suppository
   */
  URETHSUPP: "URETHSUPP",

  /**
   * Vaginal Suppository
   */
  VAGSUPP: "VAGSUPP",

  /**
   * Swab
   */
  SWAB: "SWAB",

  /**
   * Medicated swab
   */
  MEDSWAB: "MEDSWAB",

  /**
   * Wafer
   */
  WAFER: "WAFER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SolidDrugFormCode =
  typeof SolidDrugFormCode[keyof typeof SolidDrugFormCode];
