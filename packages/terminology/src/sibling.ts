/**
 * One person who shares a parent or parents with another.
 * http://terminology.hl7.org/ValueSet/v3-Sibling
 */
export const SiblingCode = {
  /**
   * sibling
   */
  sibling: "SIB",

  /**
   * brother
   */
  brother: "BRO",

  /**
   * half-brother
   */
  halfbrother: "HBRO",

  /**
   * natural brother
   */
  naturalbrother: "NBRO",

  /**
   * twin brother
   */
  twinbrother: "TWINBRO",

  /**
   * fraternal twin brother
   */
  fraternaltwinbrother: "FTWINBRO",

  /**
   * identical twin brother
   */
  identicaltwinbrother: "ITWINBRO",

  /**
   * stepbrother
   */
  stepbrother: "STPBRO",

  /**
   * half-sibling
   */
  halfsibling: "HSIB",

  /**
   * half-sister
   */
  halfsister: "HSIS",

  /**
   * natural sibling
   */
  naturalsibling: "NSIB",

  /**
   * natural sister
   */
  naturalsister: "NSIS",

  /**
   * twin sister
   */
  twinsister: "TWINSIS",

  /**
   * fraternal twin sister
   */
  fraternaltwinsister: "FTWINSIS",

  /**
   * identical twin sister
   */
  identicaltwinsister: "ITWINSIS",

  /**
   * twin
   */
  twin: "TWIN",

  /**
   * fraternal twin
   */
  fraternaltwin: "FTWIN",

  /**
   * identical twin
   */
  identicaltwin: "ITWIN",

  /**
   * sister
   */
  sister: "SIS",

  /**
   * stepsister
   */
  stepsister: "STPSIS",

  /**
   * step sibling
   */
  stepsibling: "STPSIB",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SiblingCode = typeof SiblingCode[keyof typeof SiblingCode];
