/**
 * Current state of the encounter.
 * http://hl7.org/fhir/ValueSet/encounter-status
 */
export const EncounterStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EncounterStatusCode =
  typeof EncounterStatusCode[keyof typeof EncounterStatusCode];
