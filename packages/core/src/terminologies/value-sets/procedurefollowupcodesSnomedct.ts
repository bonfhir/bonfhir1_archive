/**
 * Procedure follow up codes: A selection of SNOMED CT codes relevant to procedure follow up.
 * http://hl7.org/fhir/ValueSet/procedure-followup
 */
export const ProcedureFollowUpCodesSNOMEDCTCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProcedureFollowUpCodesSNOMEDCTCode =
  typeof ProcedureFollowUpCodesSNOMEDCTCode[keyof typeof ProcedureFollowUpCodesSNOMEDCTCode];
