/**
 * Status codes indicating the 'standards' level of an artifact
 * http://hl7.org/fhir/ValueSet/standards-status
 */
export const StandardsStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StandardsStatusCode =
  typeof StandardsStatusCode[keyof typeof StandardsStatusCode];
