/**
 * This value set is provided as an example. The value set to instantiate this attribute should be drawn from a robust terminology code system that consists of or contains concepts to support the medication process.
 * http://terminology.hl7.org/ValueSet/reason-medication-given-codes
 */
export const ReasonMedicationGivenCodesCode = {
  /**
   * None
   */
  a: "a",

  /**
   * Given as Ordered
   */
  b: "b",

  /**
   * Emergency
   */
  c: "c",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ReasonMedicationGivenCodesCode =
  typeof ReasonMedicationGivenCodesCode[keyof typeof ReasonMedicationGivenCodesCode];
