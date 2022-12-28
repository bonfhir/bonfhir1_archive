/**
 * The lifecycle status of an artifact.
 * http://hl7.org/fhir/ValueSet/publication-status
 */
export const PublicationStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PublicationStatusCode =
  typeof PublicationStatusCode[keyof typeof PublicationStatusCode];
