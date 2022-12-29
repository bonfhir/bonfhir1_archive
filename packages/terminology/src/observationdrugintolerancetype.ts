/**
 * Hypersensitivity resulting in an adverse reaction upon exposure to a drug.
 * http://terminology.hl7.org/ValueSet/v3-ObservationDrugIntoleranceType
 */
export const ObservationDrugIntoleranceTypeCode = {
  /**
   * Drug Intolerance
   */
  DrugIntolerance: "DINT",

  /**
   * Drug Allergy
   */
  DrugAllergy: "DALG",

  /**
   * Drug Non-Allergy Intolerance
   */
  DrugNonAllergyIntolerance: "DNAINT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationDrugIntoleranceTypeCode =
  typeof ObservationDrugIntoleranceTypeCode[keyof typeof ObservationDrugIntoleranceTypeCode];
