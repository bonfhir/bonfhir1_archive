/**
 * \*\* none supplied \*\*
 * http://terminology.hl7.org/ValueSet/v3-ActStatusActiveSuspendedObsolete
 */
export const ActStatusActiveSuspendedObsoleteCode = {
  /**
   * active
   */
  active: "active",

  /**
   * obsolete
   */
  obsolete: "obsolete",

  /**
   * suspended
   */
  suspended: "suspended",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActStatusActiveSuspendedObsoleteCode =
  typeof ActStatusActiveSuspendedObsoleteCode[keyof typeof ActStatusActiveSuspendedObsoleteCode];
