/**
 * The gender of a person used for adminstrative purposes (as opposed to clinical gender)
 * http://terminology.hl7.org/ValueSet/v3-AdministrativeGender
 */
export const AdministrativeGenderCode = {
  /**
   * Female
   */
  F: "F",

  /**
   * Male
   */
  M: "M",

  /**
   * Undifferentiated
   */
  UN: "UN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdministrativeGenderCode =
  typeof AdministrativeGenderCode[keyof typeof AdministrativeGenderCode];
