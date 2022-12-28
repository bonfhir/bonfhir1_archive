/**
 * A code that indicates how the page is generated.
 * http://hl7.org/fhir/ValueSet/guide-page-generation
 */
export const GuidePageGenerationCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GuidePageGenerationCode =
  typeof GuidePageGenerationCode[keyof typeof GuidePageGenerationCode];
