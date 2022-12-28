/**
 * Statement about the degree of clinical certainty that a specific substance was the cause    of the manifestation in a reaction event.
 * http://hl7.org/fhir/ValueSet/reaction-event-certainty
 */
export const AllergyIntoleranceCertaintyCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllergyIntoleranceCertaintyCode =
  typeof AllergyIntoleranceCertaintyCode[keyof typeof AllergyIntoleranceCertaintyCode];
