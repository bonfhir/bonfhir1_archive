/**
 * Corresponds to the Entity class
 * http://terminology.hl7.org/ValueSet/v3-EntityClassRoot
 */
export const EntityClassRootCode = {
  /**
   * entity
   */
  ENT: "ENT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassRootCode =
  typeof EntityClassRootCode[keyof typeof EntityClassRootCode];
