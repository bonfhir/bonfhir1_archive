/**
 * This value set is provided as an example. The value set to instantiate this attribute should be drawn from a robust terminology code system that consists of or contains concepts to support the medication process.
 * http://hl7.org/fhir/ValueSet/reason-medication-given-codes
 */
export const ReasonMedicationGivenCodesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ReasonMedicationGivenCodesCode =
  typeof ReasonMedicationGivenCodesCode[keyof typeof ReasonMedicationGivenCodesCode];
