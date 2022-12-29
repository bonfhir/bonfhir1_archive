/**
 * The state representing the fact that the Entity record is currently active.
 * http://terminology.hl7.org/ValueSet/v3-EntityStatusActive
 */
export const EntityStatusActiveCode = {
  /**
   * active
   */
  active: "active",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityStatusActiveCode =
  typeof EntityStatusActiveCode[keyof typeof EntityStatusActiveCode];
