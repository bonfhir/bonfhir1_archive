/**
 * This value set includes example Diagnosis Type codes.
 * http://hl7.org/fhir/ValueSet/ex-diagnosistype
 */
export const ExampleDiagnosisTypeCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleDiagnosisTypeCodesCode =
  typeof ExampleDiagnosisTypeCodesCode[keyof typeof ExampleDiagnosisTypeCodesCode];
