/**
 * TODO (and should this be required?).
 * http://hl7.org/fhir/ValueSet/adverse-event-outcome
 */
export const AdverseEventOutcomeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdverseEventOutcomeCode =
  typeof AdverseEventOutcomeCode[keyof typeof AdverseEventOutcomeCode];
