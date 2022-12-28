/**
 * NCBI central repository for curating pathogenicity of potentially clinically relevant variants
 * http://hl7.org/fhir/ValueSet/clinvar
 */
export const ClinVarCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ClinVarCode = typeof ClinVarCode[keyof typeof ClinVarCode];
