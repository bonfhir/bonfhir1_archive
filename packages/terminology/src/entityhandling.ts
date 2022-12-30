/**
 * Special handling requirements for an Entity.

*Example:*Keep at room temperature; Keep frozen below 0 C; Keep in a dry environment; Keep upright, do not turn upside down.
 * http://terminology.hl7.org/ValueSet/v3-EntityHandling
 */
export const EntityHandlingCode = {
  /**
   * Ambient Temperature
   */
  AMB: "AMB",

  /**
   * Body Temperature
   */
  C37: "C37",

  /**
   * Critical Ambient temperature
   */
  CAMB: "CAMB",

  /**
   * Protect from Air
   */
  CATM: "CATM",

  /**
   * Critical frozen
   */
  CFRZ: "CFRZ",

  /**
   * Critical refrigerated temperature
   */
  CREF: "CREF",

  /**
   * Deep Frozen
   */
  DFRZ: "DFRZ",

  /**
   * dry
   */
  DRY: "DRY",

  /**
   * frozen
   */
  FRZ: "FRZ",

  /**
   * Metal Free
   */
  MTLF: "MTLF",

  /**
   * nitrogen
   */
  NTR: "NTR",

  /**
   * Protect from Light
   */
  PRTL: "PRTL",

  /**
   * do not shake
   */
  PSA: "PSA",

  /**
   * no shock
   */
  PSO: "PSO",

  /**
   * Refrigerated temperature
   */
  REF: "REF",

  /**
   * Shake before use
   */
  SBU: "SBU",

  /**
   * Ultra frozen
   */
  UFRZ: "UFRZ",

  /**
   * upright
   */
  UPR: "UPR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityHandlingCode =
  typeof EntityHandlingCode[keyof typeof EntityHandlingCode];
