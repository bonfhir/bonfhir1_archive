/**
 * This example value set defines the set of codes that can be used to indicate a role of a procedure performer.
 * http://hl7.org/fhir/ValueSet/performer-role
 */
export const ProcedurePerformerRoleCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProcedurePerformerRoleCodesCode =
  typeof ProcedurePerformerRoleCodesCode[keyof typeof ProcedurePerformerRoleCodesCode];
