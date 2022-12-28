/**
 * The type of PlanDefinition.
 * http://hl7.org/fhir/ValueSet/plan-definition-type
 */
export const PlanDefinitionTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PlanDefinitionTypeCode =
  typeof PlanDefinitionTypeCode[keyof typeof PlanDefinitionTypeCode];
