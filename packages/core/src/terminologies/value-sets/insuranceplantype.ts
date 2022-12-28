/**
 * This example value set defines a set of codes that can be used to indicate a type of insurance plan.
 * http://hl7.org/fhir/ValueSet/insuranceplan-type
 */
export const InsurancePlanTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InsurancePlanTypeCode =
  typeof InsurancePlanTypeCode[keyof typeof InsurancePlanTypeCode];
