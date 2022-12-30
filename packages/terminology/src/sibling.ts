/**
 * One person who shares a parent or parents with another.
 * http://terminology.hl7.org/ValueSet/v3-Sibling
 */
export const SiblingCode = {
  /**
   * sibling
   */
  SIB: "SIB",

  /**
   * brother
   */
  BRO: "BRO",

  /**
   * half-brother
   */
  HBRO: "HBRO",

  /**
   * natural brother
   */
  NBRO: "NBRO",

  /**
   * twin brother
   */
  TWINBRO: "TWINBRO",

  /**
   * fraternal twin brother
   */
  FTWINBRO: "FTWINBRO",

  /**
   * identical twin brother
   */
  ITWINBRO: "ITWINBRO",

  /**
   * stepbrother
   */
  STPBRO: "STPBRO",

  /**
   * half-sibling
   */
  HSIB: "HSIB",

  /**
   * half-sister
   */
  HSIS: "HSIS",

  /**
   * natural sibling
   */
  NSIB: "NSIB",

  /**
   * natural sister
   */
  NSIS: "NSIS",

  /**
   * twin sister
   */
  TWINSIS: "TWINSIS",

  /**
   * fraternal twin sister
   */
  FTWINSIS: "FTWINSIS",

  /**
   * identical twin sister
   */
  ITWINSIS: "ITWINSIS",

  /**
   * twin
   */
  TWIN: "TWIN",

  /**
   * fraternal twin
   */
  FTWIN: "FTWIN",

  /**
   * identical twin
   */
  ITWIN: "ITWIN",

  /**
   * sister
   */
  SIS: "SIS",

  /**
   * stepsister
   */
  STPSIS: "STPSIS",

  /**
   * step sibling
   */
  STPSIB: "STPSIB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SiblingCode = typeof SiblingCode[keyof typeof SiblingCode];
