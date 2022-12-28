/**
 * Codes providing the status of an observation.
 * http://hl7.org/fhir/ValueSet/observation-status
 */
export const ObservationStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationStatusCode =
  typeof ObservationStatusCode[keyof typeof ObservationStatusCode];
