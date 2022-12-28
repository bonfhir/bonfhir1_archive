/**
 * Situation codes describing the reason that a procedure, which might otherwise be expected, was not performed, or a procedure that was started and was not completed. Consists of SNOMED CT codes, children of procedure contraindicated (183932001), procedure discontinued (416406003), procedure not done (416237000), procedure not indicated (428119001), procedure not offered (416064006), procedure not wanted (416432009), procedure refused (183944003), and procedure stopped (394908001).
 * http://hl7.org/fhir/ValueSet/procedure-not-performed-reason
 */
export const ProcedureNotPerformedReasonSNOMEDCTCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProcedureNotPerformedReasonSNOMEDCTCode =
  typeof ProcedureNotPerformedReasonSNOMEDCTCode[keyof typeof ProcedureNotPerformedReasonSNOMEDCTCode];
