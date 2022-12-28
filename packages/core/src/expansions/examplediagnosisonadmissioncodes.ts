/**
 * This value set includes example Diagnosis on Admission codes.
 * http://terminology.hl7.org/ValueSet/ex-diagnosis-on-admission
 */
export const ExampleDiagnosisOnAdmissionCodesCode = {
  /**
   * Yes
   */
  yes: "yes",

  /**
   * No
   */
  no: "no",

  /**
   * Unknown
   */
  unknown: "unknown",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleDiagnosisOnAdmissionCodesCode =
  typeof ExampleDiagnosisOnAdmissionCodesCode[keyof typeof ExampleDiagnosisOnAdmissionCodesCode];
