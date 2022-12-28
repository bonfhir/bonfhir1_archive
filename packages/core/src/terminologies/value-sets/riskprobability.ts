/**
 * Codes representing the likelihood of a particular outcome in a risk assessment.
 * http://hl7.org/fhir/ValueSet/risk-probability
 */
export const RiskProbabilityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RiskProbabilityCode =
  typeof RiskProbabilityCode[keyof typeof RiskProbabilityCode];
