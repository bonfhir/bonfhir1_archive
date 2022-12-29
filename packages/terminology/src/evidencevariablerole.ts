/**
 * The role that the assertion variable plays.
 * http://terminology.hl7.org/ValueSet/variable-role
 */
export const EvidenceVariableRoleCode = {
  /**
   * population
   */
  population: "population",

  /**
   * subpopulation
   */
  subpopulation: "subpopulation",

  /**
   * exposure
   */
  exposure: "exposure",

  /**
   * reference exposure
   */
  referenceexposure: "referenceExposure",

  /**
   * measured variable
   */
  measuredvariable: "measuredVariable",

  /**
   * confounder
   */
  confounder: "confounder",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EvidenceVariableRoleCode =
  typeof EvidenceVariableRoleCode[keyof typeof EvidenceVariableRoleCode];
