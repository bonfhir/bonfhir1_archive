/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-CreeMontagnais
 */
export const CreeMontagnaisCode = {
  /**
   * Cree
   */
  Cree: "_Cree",

  /**
   * Western Cree
   */
  WesternCree: "x-CRP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CreeMontagnaisCode =
  typeof CreeMontagnaisCode[keyof typeof CreeMontagnaisCode];
