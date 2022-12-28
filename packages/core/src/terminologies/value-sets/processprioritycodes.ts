/**
 * This value set includes the financial processing priority codes.
 * http://hl7.org/fhir/ValueSet/process-priority
 */
export const ProcessPriorityCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProcessPriorityCodesCode =
  typeof ProcessPriorityCodesCode[keyof typeof ProcessPriorityCodesCode];
