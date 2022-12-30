/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-OralTablet
 */
export const OralTabletCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type OralTabletCode = typeof OralTabletCode[keyof typeof OralTabletCode];
