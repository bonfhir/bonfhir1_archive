/**
 * Value Set of codes that specify the classification of the organization unit.
 * http://terminology.hl7.org/ValueSet/v2-0474
 */
export const Hl7VSOrganizationUnitTypeOrgCode = {
  /**
   * Department
   */
  Department: "D",

  /**
   * Facility
   */
  Facility: "F",

  /**
   * Local market area
   */
  Localmarketarea: "L",

  /**
   * Subdepartment
   */
  Subdepartment: "U",

  /**
   * Medical Center Area
   */
  MedicalCenterArea: "M",

  /**
   * Subdivision
   */
  Subdivision: "S",

  /**
   * Division
   */
  Division: "V",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOrganizationUnitTypeOrgCode =
  typeof Hl7VSOrganizationUnitTypeOrgCode[keyof typeof Hl7VSOrganizationUnitTypeOrgCode];
