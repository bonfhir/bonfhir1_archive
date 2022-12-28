/**
 * Value Set of codes that specify whether the patient wants to donate his/her organs and whether an organ donor card or similar documentation is on file with the healthcare organization.
 * http://terminology.hl7.org/ValueSet/v2-0316
 */
export const Hl7VSOrganDonorCode = {
  /**
   * Yes, patient is a documented donor and documentation is on file
   */
  Y: "Y",

  /**
   * Yes, patient is a documented donor, but documentation is not on file
   */
  F: "F",

  /**
   * No, patient has not agreed to be a donor
   */
  N: "N",

  /**
   * No, patient is not a documented donor, but information was provided
   */
  I: "I",

  /**
   * Patient leaves organ donation decision to relatives
   */
  R: "R",

  /**
   * Patient leaves organ donation decision to a specific person
   */
  P: "P",

  /**
   * Unknown
   */
  U: "U",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOrganDonorCode =
  typeof Hl7VSOrganDonorCode[keyof typeof Hl7VSOrganDonorCode];
