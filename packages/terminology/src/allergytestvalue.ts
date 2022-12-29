/**
 * Indicates the result of a particular allergy test. E.g. Negative, Mild, Moderate, Severe
 * http://terminology.hl7.org/ValueSet/v3-AllergyTestValue
 */
export const AllergyTestValueCode = {
  /**
   * AllergyTestValue
   */
  AllergyTestValue: "_AllergyTestValue",

  /**
   * no reaction
   */
  noreaction: "A0",

  /**
   * minimal reaction
   */
  minimalreaction: "A1",

  /**
   * mild reaction
   */
  mildreaction: "A2",

  /**
   * moderate reaction
   */
  moderatereaction: "A3",

  /**
   * severe reaction
   */
  severereaction: "A4",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllergyTestValueCode =
  typeof AllergyTestValueCode[keyof typeof AllergyTestValueCode];
