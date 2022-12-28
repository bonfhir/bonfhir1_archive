/**
 * The player of the role has both biological parents in common with the scoping entity.
 * http://terminology.hl7.org/ValueSet/v3-NaturalSibling
 */
export const NaturalSiblingCode = {
  /**
   * natural sibling
   */
  NSIB: "NSIB",

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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NaturalSiblingCode =
  typeof NaturalSiblingCode[keyof typeof NaturalSiblingCode];
