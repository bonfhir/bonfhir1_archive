/**
 * **Definition:** The state representing the fact that the entity is inactive.
 * http://terminology.hl7.org/ValueSet/v3-EntityStatusInactive
 */
export const EntityStatusInactiveCode = {
  /**
   * inactive
   */
  inactive: "inactive",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityStatusInactiveCode =
  typeof EntityStatusInactiveCode[keyof typeof EntityStatusInactiveCode];
