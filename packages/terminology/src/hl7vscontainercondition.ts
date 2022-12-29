/**
 * Value Set of codes that specify at each receipt the status of the container in which the specimen is shipped in chain of custody cases where specimens are moved from lab to lab.  If the container is compromised in any way (seal broken, container
 * http://terminology.hl7.org/ValueSet/v2-0544
 */
export const Hl7VSContainerConditionCode = {
  /**
   * No suggested values
   */
  Nosuggestedvalues: "...",

  /**
   * Not Body temperature
   */
  NotBodytemperature: "XC37",

  /**
   * Not Ambient temperature
   */
  NotAmbienttemperature: "XAMB",

  /**
   * Not Critical ambient temperature
   */
  NotCriticalambienttemperature: "XCAMB",

  /**
   * Not Refrigerated temperature
   */
  NotRefrigeratedtemperature: "XREF",

  /**
   * Not Critical refrigerated temperature
   */
  NotCriticalrefrigeratedtemperature: "XCREF",

  /**
   * Not Frozen temperature
   */
  NotFrozentemperature: "XFRZ",

  /**
   * Not Critical frozen temperature
   */
  NotCriticalfrozentemperature: "XCFRZ",

  /**
   * Not Deep frozen
   */
  NotDeepfrozen: "XDFRZ",

  /**
   * Not Ultra frozen
   */
  NotUltrafrozen: "XUFRZ",

  /**
   * Not Liquid nitrogen
   */
  NotLiquidnitrogen: "XNTR",

  /**
   * Not Protected from light
   */
  NotProtectedfromlight: "XPRTL",

  /**
   * Exposed to Air
   */
  ExposedtoAir: "XCATM",

  /**
   * Not Dry
   */
  NotDry: "XDRY",

  /**
   * Exposed to shock
   */
  Exposedtoshock: "XPSO",

  /**
   * Shaken
   */
  Shaken: "XPSA",

  /**
   * Not Upright
   */
  NotUpright: "XUPR",

  /**
   * Metal Exposed
   */
  MetalExposed: "XMTLF",

  /**
   * Seal Broken
   */
  SealBroken: "SB",

  /**
   * Container Cracked
   */
  ContainerCracked: "CC",

  /**
   * Container Torn
   */
  ContainerTorn: "CT",

  /**
   * Container Leaking
   */
  ContainerLeaking: "CL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSContainerConditionCode =
  typeof Hl7VSContainerConditionCode[keyof typeof Hl7VSContainerConditionCode];
