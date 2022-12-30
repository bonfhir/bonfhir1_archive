/**
 * Value Set of codes that specify the environment in which the provider acts in the role associated with the provider type, and inludes codes for venues outside of formal organized healthcare settings, such as Home. The provider environment is no
 * http://terminology.hl7.org/ValueSet/v2-0406
 */
export const Hl7VSOrganizationUnitTypeCode = {
  /**
   * Home
   */
  H: "H",

  /**
   * Office
   */
  O: "O",

  /**
   * Hospital
   */
  "1": "1",

  /**
   * Physician Clinic
   */
  "2": "2",

  /**
   * Long Term Care
   */
  "3": "3",

  /**
   * Acute Care
   */
  "4": "4",

  /**
   * Other
   */
  "5": "5",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOrganizationUnitTypeCode =
  typeof Hl7VSOrganizationUnitTypeCode[keyof typeof Hl7VSOrganizationUnitTypeCode];
