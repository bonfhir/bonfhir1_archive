/**
 * This value set includes example Diagnosis on Admission codes.
 * http://terminology.hl7.org/ValueSet/ex-diagnosis-on-admission
 */
export const ExampleDiagnosisOnAdmissionCodesCode = {
  /**
   * Yes
   */
  Yes: "yes",

  /**
   * No
   */
  No: "no",

  /**
   * Unknown
   */
  Unknown: "unknown",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleDiagnosisOnAdmissionCodesCode =
  typeof ExampleDiagnosisOnAdmissionCodesCode[keyof typeof ExampleDiagnosisOnAdmissionCodesCode];
