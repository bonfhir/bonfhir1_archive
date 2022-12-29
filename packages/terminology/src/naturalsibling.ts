/**
 * The player of the role has both biological parents in common with the scoping entity.
 * http://terminology.hl7.org/ValueSet/v3-NaturalSibling
 */
export const NaturalSiblingCode = {
  /**
   * natural sibling
   */
  naturalsibling: "NSIB",

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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NaturalSiblingCode =
  typeof NaturalSiblingCode[keyof typeof NaturalSiblingCode];
