/**
 * Indicates the result of a particular allergy test. E.g. Negative, Mild, Moderate, Severe
 * http://terminology.hl7.org/ValueSet/v3-AllergyTestValue
 */
export const AllergyTestValueCode = {
  /**
   * AllergyTestValue
   */
  _AllergyTestValue: "_AllergyTestValue",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllergyTestValueCode =
  typeof AllergyTestValueCode[keyof typeof AllergyTestValueCode];
