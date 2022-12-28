/**
 * This value set includes sample ICD-10 codes.
 * http://hl7.org/fhir/ValueSet/icd-10
 */
export const ICD10CodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ICD10CodesCode = typeof ICD10CodesCode[keyof typeof ICD10CodesCode];
