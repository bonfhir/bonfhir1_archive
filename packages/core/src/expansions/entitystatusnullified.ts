/**
 * The state representing the termination of an Entity record instance that was created in error.
 * http://terminology.hl7.org/ValueSet/v3-EntityStatusNullified
 */
export const EntityStatusNullifiedCode = {
  /**
   * nullified
   */
  nullified: "nullified",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityStatusNullifiedCode =
  typeof EntityStatusNullifiedCode[keyof typeof EntityStatusNullifiedCode];
