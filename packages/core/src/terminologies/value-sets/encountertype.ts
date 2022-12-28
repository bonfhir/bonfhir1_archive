/**
 * This example value set defines a set of codes that can be used to indicate the type of encounter: a specific code indicating type of service provided.
 * http://hl7.org/fhir/ValueSet/encounter-type
 */
export const EncounterTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EncounterTypeCode =
  typeof EncounterTypeCode[keyof typeof EncounterTypeCode];
