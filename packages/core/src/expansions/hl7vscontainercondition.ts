/**
 * Value Set of codes that specify at each receipt the status of the container in which the specimen is shipped in chain of custody cases where specimens are moved from lab to lab.  If the container is compromised in any way (seal broken, container
 * http://terminology.hl7.org/ValueSet/v2-0544
 */
export const Hl7VSContainerConditionCode = {
  /**
   * No suggested values
   */
  "...": "...",

  /**
   * Not Body temperature
   */
  XC37: "XC37",

  /**
   * Not Ambient temperature
   */
  XAMB: "XAMB",

  /**
   * Not Critical ambient temperature
   */
  XCAMB: "XCAMB",

  /**
   * Not Refrigerated temperature
   */
  XREF: "XREF",

  /**
   * Not Critical refrigerated temperature
   */
  XCREF: "XCREF",

  /**
   * Not Frozen temperature
   */
  XFRZ: "XFRZ",

  /**
   * Not Critical frozen temperature
   */
  XCFRZ: "XCFRZ",

  /**
   * Not Deep frozen
   */
  XDFRZ: "XDFRZ",

  /**
   * Not Ultra frozen
   */
  XUFRZ: "XUFRZ",

  /**
   * Not Liquid nitrogen
   */
  XNTR: "XNTR",

  /**
   * Not Protected from light
   */
  XPRTL: "XPRTL",

  /**
   * Exposed to Air
   */
  XCATM: "XCATM",

  /**
   * Not Dry
   */
  XDRY: "XDRY",

  /**
   * Exposed to shock
   */
  XPSO: "XPSO",

  /**
   * Shaken
   */
  XPSA: "XPSA",

  /**
   * Not Upright
   */
  XUPR: "XUPR",

  /**
   * Metal Exposed
   */
  XMTLF: "XMTLF",

  /**
   * Seal Broken
   */
  SB: "SB",

  /**
   * Container Cracked
   */
  CC: "CC",

  /**
   * Container Torn
   */
  CT: "CT",

  /**
   * Container Leaking
   */
  CL: "CL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSContainerConditionCode =
  typeof Hl7VSContainerConditionCode[keyof typeof Hl7VSContainerConditionCode];
