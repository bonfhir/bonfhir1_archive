/**
 * Resource types defined as part of FHIR that can be represented as in-line definitions of a care plan activity.
 * http://hl7.org/fhir/ValueSet/care-plan-activity-kind
 */
export const CarePlanActivityKindCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CarePlanActivityKindCode =
  typeof CarePlanActivityKindCode[keyof typeof CarePlanActivityKindCode];
