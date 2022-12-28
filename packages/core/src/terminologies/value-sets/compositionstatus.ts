/**
 * The workflow/clinical status of the composition.
 * http://hl7.org/fhir/ValueSet/composition-status
 */
export const CompositionStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CompositionStatusCode =
  typeof CompositionStatusCode[keyof typeof CompositionStatusCode];
