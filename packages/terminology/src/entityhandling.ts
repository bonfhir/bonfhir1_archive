/**
 * Special handling requirements for an Entity.

*Example:*Keep at room temperature; Keep frozen below 0 C; Keep in a dry environment; Keep upright, do not turn upside down.
 * http://terminology.hl7.org/ValueSet/v3-EntityHandling
 */
export const EntityHandlingCode = {
  /**
   * Ambient Temperature
   */
  AmbientTemperature: "AMB",

  /**
   * Body Temperature
   */
  BodyTemperature: "C37",

  /**
   * Critical Ambient temperature
   */
  CriticalAmbienttemperature: "CAMB",

  /**
   * Protect from Air
   */
  ProtectfromAir: "CATM",

  /**
   * Critical frozen
   */
  Criticalfrozen: "CFRZ",

  /**
   * Critical refrigerated temperature
   */
  Criticalrefrigeratedtemperature: "CREF",

  /**
   * Deep Frozen
   */
  DeepFrozen: "DFRZ",

  /**
   * dry
   */
  dry: "DRY",

  /**
   * frozen
   */
  frozen: "FRZ",

  /**
   * Metal Free
   */
  MetalFree: "MTLF",

  /**
   * nitrogen
   */
  nitrogen: "NTR",

  /**
   * Protect from Light
   */
  ProtectfromLight: "PRTL",

  /**
   * do not shake
   */
  donotshake: "PSA",

  /**
   * no shock
   */
  noshock: "PSO",

  /**
   * Refrigerated temperature
   */
  Refrigeratedtemperature: "REF",

  /**
   * Shake before use
   */
  Shakebeforeuse: "SBU",

  /**
   * Ultra frozen
   */
  Ultrafrozen: "UFRZ",

  /**
   * upright
   */
  upright: "UPR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityHandlingCode =
  typeof EntityHandlingCode[keyof typeof EntityHandlingCode];
