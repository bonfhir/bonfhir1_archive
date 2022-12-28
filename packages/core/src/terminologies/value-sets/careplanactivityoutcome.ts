/**
 * Example codes indicating the outcome of a care plan activity. Note that these are in no way complete and might not even be appropriate for some uses.
 * http://hl7.org/fhir/ValueSet/care-plan-activity-outcome
 */
export const CarePlanActivityOutcomeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CarePlanActivityOutcomeCode =
  typeof CarePlanActivityOutcomeCode[keyof typeof CarePlanActivityOutcomeCode];
