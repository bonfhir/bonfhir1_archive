/**
 * Value Set of codes that specify whether a person is currently a valid staff member.
 * http://terminology.hl7.org/ValueSet/v2-0183
 */
export const Hl7VSActiveInactiveCode = {
  /**
   * Active Staff
   */
  ActiveStaff: "A",

  /**
   * Inactive Staff
   */
  InactiveStaff: "I",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSActiveInactiveCode =
  typeof Hl7VSActiveInactiveCode[keyof typeof Hl7VSActiveInactiveCode];
