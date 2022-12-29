/**
 * Value Set of codes that specify the agency or department that assigned a specified identifier.
 * http://terminology.hl7.org/ValueSet/v2-0530
 */
export const Hl7VSOrganizationAgencyDepartmentCode = {
  /**
   * American Express
   */
  AmericanExpress: "AE",

  /**
   * Drug Enforcement Agency
   */
  DrugEnforcementAgency: "DEA",

  /**
   * Department of Defense
   */
  DepartmentofDefense: "DOD",

  /**
   * Master Card
   */
  MasterCard: "MC",

  /**
   * Veterans Affairs
   */
  VeteransAffairs: "VA",

  /**
   * Visa
   */
  Visa: "VI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOrganizationAgencyDepartmentCode =
  typeof Hl7VSOrganizationAgencyDepartmentCode[keyof typeof Hl7VSOrganizationAgencyDepartmentCode];
