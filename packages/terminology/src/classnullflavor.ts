/**
 * **Description:** Subset of null flavors, used for associations as needed for the ITS, and used in InfrastructureRoot.
 * http://terminology.hl7.org/ValueSet/v3-ClassNullFlavor
 */
export const ClassNullFlavorCode = {
  /**
   * asked but unknown
   */
  ASKU: "ASKU",

  /**
   * masked
   */
  MSK: "MSK",

  /**
   * not applicable
   */
  NA: "NA",

  /**
   * not asked
   */
  NASK: "NASK",

  /**
   * temporarily unavailable
   */
  NAV: "NAV",

  /**
   * NoInformation
   */
  NI: "NI",

  /**
   * unknown
   */
  UNK: "UNK",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClassNullFlavorCode =
  typeof ClassNullFlavorCode[keyof typeof ClassNullFlavorCode];
