/**
 * This value set includes a smattering of Unit type codes.
 * http://terminology.hl7.org/ValueSet/benefit-unit
 */
export const UnitTypeCodesCode = {
  /**
   * Individual
   */
  individual: "individual",

  /**
   * Family
   */
  family: "family",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UnitTypeCodesCode =
  typeof UnitTypeCodesCode[keyof typeof UnitTypeCodesCode];
