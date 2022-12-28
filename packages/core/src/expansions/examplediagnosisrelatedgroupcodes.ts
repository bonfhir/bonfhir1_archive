/**
 * This value set includes example Diagnosis Related Group codes.
 * http://terminology.hl7.org/ValueSet/ex-diagnosisrelatedgroup
 */
export const ExampleDiagnosisRelatedGroupCodesCode = {
  /**
   * Normal Vaginal Delivery
   */
  "100": "100",

  /**
   * Appendectomy - uncomplicated
   */
  "101": "101",

  /**
   * Tooth abscess
   */
  "300": "300",

  /**
   * Head trauma - concussion
   */
  "400": "400",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleDiagnosisRelatedGroupCodesCode =
  typeof ExampleDiagnosisRelatedGroupCodesCode[keyof typeof ExampleDiagnosisRelatedGroupCodesCode];
