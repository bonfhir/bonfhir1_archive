/**
 * This example value set defines the set of codes that can be used to indicate a reason for a procedure.
 * http://hl7.org/fhir/ValueSet/procedure-reason
 */
export const ProcedureReasonCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProcedureReasonCodesCode =
  typeof ProcedureReasonCodesCode[keyof typeof ProcedureReasonCodesCode];
