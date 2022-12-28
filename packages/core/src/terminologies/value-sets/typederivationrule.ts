/**
 * How a type relates to its baseDefinition.
 * http://hl7.org/fhir/ValueSet/type-derivation-rule
 */
export const TypeDerivationRuleCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type TypeDerivationRuleCode =
  typeof TypeDerivationRuleCode[keyof typeof TypeDerivationRuleCode];
