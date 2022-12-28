/**
 * Behavior a server can exhibit when a criteria state does not exist (e.g., state prior to a create or after a delete).
 * http://hl7.org/fhir/ValueSet/subscriptiontopic-cr-behavior
 */
export const CriteriaNotExistsBehaviorCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CriteriaNotExistsBehaviorCode =
  typeof CriteriaNotExistsBehaviorCode[keyof typeof CriteriaNotExistsBehaviorCode];
