/**
 * How a compartment must be linked.
 * http://hl7.org/fhir/ValueSet/graph-compartment-rule
 */
export const GraphCompartmentRuleCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type GraphCompartmentRuleCode =
  typeof GraphCompartmentRuleCode[keyof typeof GraphCompartmentRuleCode];
