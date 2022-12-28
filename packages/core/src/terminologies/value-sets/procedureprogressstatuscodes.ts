/**
 * This value set is provided as an example. The value set to instantiate this attribute should be drawn from a robust terminology code system that consists of or contains concepts to support the procedure performance process.
 * http://hl7.org/fhir/ValueSet/procedure-progress-status-codes
 */
export const ProcedureProgressStatusCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProcedureProgressStatusCodesCode =
  typeof ProcedureProgressStatusCodesCode[keyof typeof ProcedureProgressStatusCodesCode];
