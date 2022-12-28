/**
 * The status of the location.
 * http://hl7.org/fhir/ValueSet/encounter-location-status
 */
export const EncounterLocationStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EncounterLocationStatusCode =
  typeof EncounterLocationStatusCode[keyof typeof EncounterLocationStatusCode];
