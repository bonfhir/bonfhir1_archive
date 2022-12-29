/**
 * The 'typical' state. Excludes "nullified" which represents the termination state of an Entity record instance that was created in error.
 * http://terminology.hl7.org/ValueSet/v3-EntityStatusNormal
 */
export const EntityStatusNormalCode = {
  /**
   * normal
   */
  normal: "normal",

  /**
   * active
   */
  active: "active",

  /**
   * inactive
   */
  inactive: "inactive",

  /**
   * terminated
   */
  terminated: "terminated",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityStatusNormalCode =
  typeof EntityStatusNormalCode[keyof typeof EntityStatusNormalCode];
