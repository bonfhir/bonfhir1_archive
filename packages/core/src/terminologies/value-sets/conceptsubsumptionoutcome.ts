/**
 * Codes indicating the results of a subsumption check between codes
 * http://hl7.org/fhir/ValueSet/concept-subsumption-outcome
 */
export const ConceptSubsumptionOutcomeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConceptSubsumptionOutcomeCode =
  typeof ConceptSubsumptionOutcomeCode[keyof typeof ConceptSubsumptionOutcomeCode];
