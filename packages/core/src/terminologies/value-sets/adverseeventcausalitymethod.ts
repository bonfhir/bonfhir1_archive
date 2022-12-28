/**
 * TODO.
 * http://hl7.org/fhir/ValueSet/adverse-event-causality-method
 */
export const AdverseEventCausalityMethodCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdverseEventCausalityMethodCode =
  typeof AdverseEventCausalityMethodCode[keyof typeof AdverseEventCausalityMethodCode];
