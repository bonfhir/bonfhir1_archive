/**
 * Continued living in private residence requires functional and health care assistance from spouse or life partner.
 * http://terminology.hl7.org/ValueSet/v3-ObservationLivingDependencyValue
 */
export const ObservationLivingDependencyValueCode = {
  /**
   * living dependency
   */
  LIVDEP: "LIVDEP",

  /**
   * relative dependent
   */
  RELDEP: "RELDEP",

  /**
   * spouse dependent
   */
  SPSDEP: "SPSDEP",

  /**
   * unrelated person dependent
   */
  URELDEP: "URELDEP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObservationLivingDependencyValueCode =
  typeof ObservationLivingDependencyValueCode[keyof typeof ObservationLivingDependencyValueCode];
