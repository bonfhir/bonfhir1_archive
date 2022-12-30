/**
 * The specific determiner indicates that the given Entity is taken as one specific thing instance. For example, a human INSTANCE (quantity = 1,) stands for exactly one human being.
 * http://terminology.hl7.org/ValueSet/v3-EntityDeterminerSpecific
 */
export const EntityDeterminerSpecificCode = {
  /**
   * specific
   */
  INSTANCE: "INSTANCE",

  /**
   * specific group
   */
  GROUP: "GROUP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityDeterminerSpecificCode =
  typeof EntityDeterminerSpecificCode[keyof typeof EntityDeterminerSpecificCode];
