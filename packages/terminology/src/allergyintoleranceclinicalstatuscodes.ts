/**
 * Preferred value set for AllergyIntolerance Clinical Status.
 * http://terminology.hl7.org/ValueSet/allergyintolerance-clinical
 */
export const AllergyIntoleranceClinicalStatusCodesCode = {
  /**
   * Active
   */
  Active: "active",

  /**
   * Inactive
   */
  Inactive: "inactive",

  /**
   * Resolved
   */
  Resolved: "resolved",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllergyIntoleranceClinicalStatusCodesCode =
  typeof AllergyIntoleranceClinicalStatusCodesCode[keyof typeof AllergyIntoleranceClinicalStatusCodesCode];
