/**
 * A small, round solid dosage form containing a medicinal agent intended for oral administration.
 * http://terminology.hl7.org/ValueSet/v3-PillDrugForm
 */
export const PillDrugFormCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PillDrugFormCode =
  typeof PillDrugFormCode[keyof typeof PillDrugFormCode];
