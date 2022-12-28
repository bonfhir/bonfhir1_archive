/**
 * Concepts describing how a specimen and/or container needs to be handled from the time of collection through the initiation of testing.  Used in Version 2 messaging in the SPM segment.
 * http://terminology.hl7.org/ValueSet/v2-0376
 */
export const Hl7VSSpecialHandlingConsiderationsCode = {
  /**
   * Body temperature
   */
  C37: "C37",

  /**
   * Ambient temperature
   */
  AMB: "AMB",

  /**
   * Critical ambient temperature
   */
  CAMB: "CAMB",

  /**
   * Refrigerated temperature
   */
  REF: "REF",

  /**
   * Critical refrigerated temperature
   */
  CREF: "CREF",

  /**
   * Frozen temperature
   */
  FRZ: "FRZ",

  /**
   * Critical frozen temperature
   */
  CFRZ: "CFRZ",

  /**
   * Deep frozen
   */
  DFRZ: "DFRZ",

  /**
   * Ultra frozen
   */
  UFRZ: "UFRZ",

  /**
   * Liquid nitrogen
   */
  NTR: "NTR",

  /**
   * Protect from light
   */
  PRTL: "PRTL",

  /**
   * Protect from air
   */
  CATM: "CATM",

  /**
   * Dry
   */
  DRY: "DRY",

  /**
   * No shock
   */
  PSO: "PSO",

  /**
   * Do not shake
   */
  PSA: "PSA",

  /**
   * Upright
   */
  UPR: "UPR",

  /**
   * Metal Free
   */
  MTLF: "MTLF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecialHandlingConsiderationsCode =
  typeof Hl7VSSpecialHandlingConsiderationsCode[keyof typeof Hl7VSSpecialHandlingConsiderationsCode];
