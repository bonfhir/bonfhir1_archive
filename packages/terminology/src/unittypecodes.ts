/**
 * This value set includes a smattering of Unit type codes.
 * http://terminology.hl7.org/ValueSet/benefit-unit
 */
export const UnitTypeCodesCode = {
  /**
   * Individual
   */
  Individual: "individual",

  /**
   * Family
   */
  Family: "family",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UnitTypeCodesCode =
  typeof UnitTypeCodesCode[keyof typeof UnitTypeCodesCode];
