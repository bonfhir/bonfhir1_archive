/**
 * Indicates the result of a particular allergy test. E.g. Negative, Mild, Moderate, Severe
 * http://terminology.hl7.org/ValueSet/v3-AllergyTestValue
 */
export const AllergyTestValueCode = {
  /**
   * AllergyTestValue
   */
  _AllergyTestValue: "_AllergyTestValue",

  /**
   * no reaction
   */
  A0: "A0",

  /**
   * minimal reaction
   */
  A1: "A1",

  /**
   * mild reaction
   */
  A2: "A2",

  /**
   * moderate reaction
   */
  A3: "A3",

  /**
   * severe reaction
   */
  A4: "A4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllergyTestValueCode =
  typeof AllergyTestValueCode[keyof typeof AllergyTestValueCode];
