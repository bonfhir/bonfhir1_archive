/**
 * The status of a resource narrative.
 * http://hl7.org/fhir/ValueSet/narrative-status
 */
export const NarrativeStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NarrativeStatusCode =
  typeof NarrativeStatusCode[keyof typeof NarrativeStatusCode];
