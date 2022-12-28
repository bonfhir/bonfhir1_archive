/**
 * Value Set of codes that specify the pre‑configured dilution to be applied on the instrument, which can be used instead of a numeric declaration.
 * http://terminology.hl7.org/ValueSet/v2-0945
 */
export const Hl7VSAutoDilutionTypeCode = {
  /**
   * Dilution factor 2
   */
  X2: "X2",

  /**
   * Dilution factor 5
   */
  X5: "X5",

  /**
   * Dilution factor 1.23
   */
  D1: "D1",

  /**
   * Dilution factor 1.45
   */
  D2: "D2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSAutoDilutionTypeCode =
  typeof Hl7VSAutoDilutionTypeCode[keyof typeof Hl7VSAutoDilutionTypeCode];
