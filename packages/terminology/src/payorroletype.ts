/**
 * **Description:**PayorRoleType for a particular type of policy or program benefit package or plan where more detail about the coverage administration role of the Payor is required. The functions performed by a Payor qualified by a PayorRoleType may be specified by the PayorParticpationFunction value set.

**Examples:**A Payor that is a TPA may administer a managed care plan without underwriting the risk.
 * http://terminology.hl7.org/ValueSet/v3-PayorRoleType
 */
export const PayorRoleTypeCode = {
  /**
   * PayorRoleType
   */
  _PayorRoleType: "_PayorRoleType",

  /**
   * Enrollment Broker
   */
  ENROLBKR: "ENROLBKR",

  /**
   * Third party administrator
   */
  TPA: "TPA",

  /**
   * Utilization management organization
   */
  UMO: "UMO",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PayorRoleTypeCode =
  typeof PayorRoleTypeCode[keyof typeof PayorRoleTypeCode];
