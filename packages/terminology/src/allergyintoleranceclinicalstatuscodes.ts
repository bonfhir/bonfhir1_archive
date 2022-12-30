/**
 * Preferred value set for AllergyIntolerance Clinical Status.
 * http://terminology.hl7.org/ValueSet/allergyintolerance-clinical
 */
export const AllergyIntoleranceClinicalStatusCodesCode = {
  /**
   * Active
   */
  active: "active",

  /**
   * Inactive
   */
  inactive: "inactive",

  /**
   * Resolved
   */
  resolved: "resolved",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllergyIntoleranceClinicalStatusCodesCode =
  typeof AllergyIntoleranceClinicalStatusCodesCode[keyof typeof AllergyIntoleranceClinicalStatusCodesCode];
