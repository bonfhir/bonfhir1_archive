/**
 * A person or organization (player) that serves as a financial guarantor for another person or organization (scoper).
 * http://terminology.hl7.org/ValueSet/v3-RoleClassGuarantor
 */
export const RoleClassGuarantorCode = {
  /**
   * guarantor
   */
  GUAR: "GUAR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassGuarantorCode =
  typeof RoleClassGuarantorCode[keyof typeof RoleClassGuarantorCode];
