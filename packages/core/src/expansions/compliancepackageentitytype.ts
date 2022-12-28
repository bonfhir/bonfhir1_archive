/**
 * A container intended to contain sufficient material for more than one use, but grouped or organized to provide individual access to sufficient material for a single use. Often used to ensure that the proper type and amount of material is consumed/expended for each use.
 * http://terminology.hl7.org/ValueSet/v3-CompliancePackageEntityType
 */
export const CompliancePackageEntityTypeCode = {
  /**
   * Compliance Package
   */
  COMPPKG: "COMPPKG",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CompliancePackageEntityTypeCode =
  typeof CompliancePackageEntityTypeCode[keyof typeof CompliancePackageEntityTypeCode];
