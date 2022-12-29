/**
 * A substance (player) added to a mixture (scoper) to prevent microorganisms (fungi, bacteria) to spoil the mixture.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassPreservative
 */
export const RoleClassPreservativeCode = {
  /**
   * preservative
   */
  preservative: "PRSV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassPreservativeCode =
  typeof RoleClassPreservativeCode[keyof typeof RoleClassPreservativeCode];
