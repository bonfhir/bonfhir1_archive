/**
 * Code of parameter that is input to the guide.
 * http://hl7.org/fhir/ValueSet/guide-parameter-code
 */
export const GuideParameterCodeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GuideParameterCodeCode =
  typeof GuideParameterCodeCode[keyof typeof GuideParameterCodeCode];
