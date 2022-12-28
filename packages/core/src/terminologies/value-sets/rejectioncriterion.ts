/**
 * Criterion for rejection of the specimen by laboratory.
 * http://hl7.org/fhir/ValueSet/rejection-criteria
 */
export const RejectionCriterionCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RejectionCriterionCode =
  typeof RejectionCriterionCode[keyof typeof RejectionCriterionCode];
