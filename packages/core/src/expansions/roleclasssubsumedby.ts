/**
 * Relates a prevailing record of an Entity (scoper) with another record (player) that it subsumes.

*Examples:* Show a correct new Person object (scoper) that subsumes one or more duplicate Person objects that had accidentally been created for the same physical person.

*Constraints:* Both the player and scoper must have the same classCode.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassSubsumedBy
 */
export const RoleClassSubsumedByCode = {
  /**
   * subsumed by
   */
  SUBY: "SUBY",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassSubsumedByCode =
  typeof RoleClassSubsumedByCode[keyof typeof RoleClassSubsumedByCode];
