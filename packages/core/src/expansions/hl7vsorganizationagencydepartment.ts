/**
 * Value Set of codes that specify the agency or department that assigned a specified identifier.
 * http://terminology.hl7.org/ValueSet/v2-0530
 */
export const Hl7VSOrganizationAgencyDepartmentCode = {
  /**
   * American Express
   */
  AE: "AE",

  /**
   * Drug Enforcement Agency
   */
  DEA: "DEA",

  /**
   * Department of Defense
   */
  DOD: "DOD",

  /**
   * Master Card
   */
  MC: "MC",

  /**
   * Veterans Affairs
   */
  VA: "VA",

  /**
   * Visa
   */
  VI: "VI",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSOrganizationAgencyDepartmentCode =
  typeof Hl7VSOrganizationAgencyDepartmentCode[keyof typeof Hl7VSOrganizationAgencyDepartmentCode];
