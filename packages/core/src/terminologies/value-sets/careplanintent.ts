/**
 * Codes indicating the degree of authority/intentionality associated with a care plan.
 * http://hl7.org/fhir/ValueSet/care-plan-intent
 */
export const CarePlanIntentCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CarePlanIntentCode =
  typeof CarePlanIntentCode[keyof typeof CarePlanIntentCode];
