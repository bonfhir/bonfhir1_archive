/**
 * The outcome of the processing.
 * http://hl7.org/fhir/ValueSet/remittance-outcome
 */
export const RemittanceOutcomeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RemittanceOutcomeCode =
  typeof RemittanceOutcomeCode[keyof typeof RemittanceOutcomeCode];
