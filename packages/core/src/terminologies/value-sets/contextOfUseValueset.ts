/**
 * This value set defines a base set of codes that can be used to indicate that the content in a resource was developed with a focus and intent of supporting use within particular contexts.
 * http://hl7.org/fhir/ValueSet/use-context
 */
export const ContextofUseValueSetCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ContextofUseValueSetCode =
  typeof ContextofUseValueSetCode[keyof typeof ContextofUseValueSetCode];
