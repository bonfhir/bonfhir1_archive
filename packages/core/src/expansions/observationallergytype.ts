/**
 * Hypersensitivity to an agent caused by an immunologic response to an initial exposure.
 * http://terminology.hl7.org/ValueSet/v3-ObservationAllergyType
 */
export const ObservationAllergyTypeCode = {
  /**
   * Allergy
   */
  ALG: "ALG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationAllergyTypeCode =
  typeof ObservationAllergyTypeCode[keyof typeof ObservationAllergyTypeCode];
