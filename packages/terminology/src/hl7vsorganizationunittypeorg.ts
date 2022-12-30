/**
 * Value Set of codes that specify the classification of the organization unit.
 * http://terminology.hl7.org/ValueSet/v2-0474
 */
export const Hl7VSOrganizationUnitTypeOrgCode = {
  /**
   * Department
   */
  D: "D",

  /**
   * Facility
   */
  F: "F",

  /**
   * Local market area
   */
  L: "L",

  /**
   * Subdepartment
   */
  U: "U",

  /**
   * Medical Center Area
   */
  M: "M",

  /**
   * Subdivision
   */
  S: "S",

  /**
   * Division
   */
  V: "V",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOrganizationUnitTypeOrgCode =
  typeof Hl7VSOrganizationUnitTypeOrgCode[keyof typeof Hl7VSOrganizationUnitTypeOrgCode];
