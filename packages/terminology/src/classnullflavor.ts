/**
 * **Description:** Subset of null flavors, used for associations as needed for the ITS, and used in InfrastructureRoot.
 * http://terminology.hl7.org/ValueSet/v3-ClassNullFlavor
 */
export const ClassNullFlavorCode = {
  /**
   * asked but unknown
   */
  askedbutunknown: "ASKU",

  /**
   * masked
   */
  masked: "MSK",

  /**
   * not applicable
   */
  notapplicable: "NA",

  /**
   * not asked
   */
  notasked: "NASK",

  /**
   * temporarily unavailable
   */
  temporarilyunavailable: "NAV",

  /**
   * NoInformation
   */
  NoInformation: "NI",

  /**
   * unknown
   */
  unknown: "UNK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClassNullFlavorCode =
  typeof ClassNullFlavorCode[keyof typeof ClassNullFlavorCode];
