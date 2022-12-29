/**
 * An entity that subsumes the identity of another. Used in the context of merging documented entity instances. Both the player and scoper must have the same classCode.

The use of this code is **deprecated** in favor of the term SUBY which is its inverse and is more ontologically correct.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassSubsumer
 */
export const RoleClassSubsumerCode = {
  /**
   * subsumer
   */
  subsumer: "SUBS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassSubsumerCode =
  typeof RoleClassSubsumerCode[keyof typeof RoleClassSubsumerCode];
