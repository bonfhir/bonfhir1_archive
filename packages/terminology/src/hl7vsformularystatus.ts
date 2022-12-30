/**
 * Value Set of codes that specify whether or not the pharmaceutical substance is part of the local formulary.
 * http://terminology.hl7.org/ValueSet/v2-0478
 */
export const Hl7VSFormularyStatusCode = {
  /**
   * Pharmaceutical substance is in the formulary
   */
  Y: "Y",

  /**
   * Pharmaceutical substance is NOT in the formulary
   */
  N: "N",

  /**
   * Pharmaceutical substance is in the formulary, but restrictions apply
   */
  R: "R",

  /**
   * Pharmaceutical substance is in the formulary, but guidelines apply
   */
  G: "G",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSFormularyStatusCode =
  typeof Hl7VSFormularyStatusCode[keyof typeof Hl7VSFormularyStatusCode];
