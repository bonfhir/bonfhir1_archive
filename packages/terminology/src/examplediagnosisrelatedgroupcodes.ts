/**
 * This value set includes example Diagnosis Related Group codes.
 * http://terminology.hl7.org/ValueSet/ex-diagnosisrelatedgroup
 */
export const ExampleDiagnosisRelatedGroupCodesCode = {
  /**
   * Normal Vaginal Delivery
   */
  NormalVaginalDelivery: "100",

  /**
   * Appendectomy - uncomplicated
   */
  Appendectomyuncomplicated: "101",

  /**
   * Tooth abscess
   */
  Toothabscess: "300",

  /**
   * Head trauma - concussion
   */
  Headtraumaconcussion: "400",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ExampleDiagnosisRelatedGroupCodesCode =
  typeof ExampleDiagnosisRelatedGroupCodesCode[keyof typeof ExampleDiagnosisRelatedGroupCodesCode];
