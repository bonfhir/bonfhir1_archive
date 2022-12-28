/**
 * Hypersensitivity to an agent caused by a mechanism other than an immunologic response to an initial exposure
 * http://terminology.hl7.org/ValueSet/v3-ObservationNonAllergyIntoleranceType
 */
export const ObservationNonAllergyIntoleranceTypeCode = {
  /**
   * Non-Allergy Intolerance
   */
  NAINT: "NAINT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationNonAllergyIntoleranceTypeCode =
  typeof ObservationNonAllergyIntoleranceTypeCode[keyof typeof ObservationNonAllergyIntoleranceTypeCode];
