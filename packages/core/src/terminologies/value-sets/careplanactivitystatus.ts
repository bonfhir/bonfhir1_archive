/**
 * Codes that reflect the current state of a care plan activity within its overall life cycle.
 * http://hl7.org/fhir/ValueSet/care-plan-activity-status
 */
export const CarePlanActivityStatusCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CarePlanActivityStatusCode =
  typeof CarePlanActivityStatusCode[keyof typeof CarePlanActivityStatusCode];
