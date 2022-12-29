/**
 * Concepts describing how a specimen and/or container needs to be handled from the time of collection through the initiation of testing.  Used in Version 2 messaging in the SPM segment.
 * http://terminology.hl7.org/ValueSet/v2-0376
 */
export const Hl7VSSpecialHandlingConsiderationsCode = {
  /**
   * Body temperature
   */
  Bodytemperature: "C37",

  /**
   * Ambient temperature
   */
  Ambienttemperature: "AMB",

  /**
   * Critical ambient temperature
   */
  Criticalambienttemperature: "CAMB",

  /**
   * Refrigerated temperature
   */
  Refrigeratedtemperature: "REF",

  /**
   * Critical refrigerated temperature
   */
  Criticalrefrigeratedtemperature: "CREF",

  /**
   * Frozen temperature
   */
  Frozentemperature: "FRZ",

  /**
   * Critical frozen temperature
   */
  Criticalfrozentemperature: "CFRZ",

  /**
   * Deep frozen
   */
  Deepfrozen: "DFRZ",

  /**
   * Ultra frozen
   */
  Ultrafrozen: "UFRZ",

  /**
   * Liquid nitrogen
   */
  Liquidnitrogen: "NTR",

  /**
   * Protect from light
   */
  Protectfromlight: "PRTL",

  /**
   * Protect from air
   */
  Protectfromair: "CATM",

  /**
   * Dry
   */
  Dry: "DRY",

  /**
   * No shock
   */
  Noshock: "PSO",

  /**
   * Do not shake
   */
  Donotshake: "PSA",

  /**
   * Upright
   */
  Upright: "UPR",

  /**
   * Metal Free
   */
  MetalFree: "MTLF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSpecialHandlingConsiderationsCode =
  typeof Hl7VSSpecialHandlingConsiderationsCode[keyof typeof Hl7VSSpecialHandlingConsiderationsCode];
