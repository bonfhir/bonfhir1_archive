/**
 * Code set to define specialized/allowed diets
 * http://terminology.hl7.org/ValueSet/v3-ActDietCode
 */
export const ActDietCodeCode = {
  /**
   * Diet
   */
  DIET: "DIET",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActDietCodeCode =
  typeof ActDietCodeCode[keyof typeof ActDietCodeCode];
