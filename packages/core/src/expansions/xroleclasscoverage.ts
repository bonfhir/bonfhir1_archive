/**
 * An abstract domain that encompasses the roles that arise in the context of providing, purchasing, and managing health care coverage and insurance.
 * http://terminology.hl7.org/ValueSet/v3-xRoleClassCoverage
 */
export const XRoleClassCoverageCode = {
  /**
   * covered party
   */
  COVPTY: "COVPTY",

  /**
   * policy holder
   */
  POLHOLD: "POLHOLD",

  /**
   * coverage sponsor
   */
  SPNSR: "SPNSR",

  /**
   * underwriter
   */
  UNDWRT: "UNDWRT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XRoleClassCoverageCode =
  typeof XRoleClassCoverageCode[keyof typeof XRoleClassCoverageCode];
