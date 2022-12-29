/**
 * Continued living in private residence requires functional and health care assistance from spouse or life partner.
 * http://terminology.hl7.org/ValueSet/v3-ObservationLivingDependencyValue
 */
export const ObservationLivingDependencyValueCode = {
  /**
   * living dependency
   */
  livingdependency: "LIVDEP",

  /**
   * relative dependent
   */
  relativedependent: "RELDEP",

  /**
   * spouse dependent
   */
  spousedependent: "SPSDEP",

  /**
   * unrelated person dependent
   */
  unrelatedpersondependent: "URELDEP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationLivingDependencyValueCode =
  typeof ObservationLivingDependencyValueCode[keyof typeof ObservationLivingDependencyValueCode];
