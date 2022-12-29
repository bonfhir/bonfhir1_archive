/**
 * A role played by a member of a military service. Scoper is the military service (e.g. Army, Navy, Air Force, etc.) or, more specifically, the unit (e.g. Company C, 3rd Battalion, 4th Division, etc.)
 * http://terminology.hl7.org/ValueSet/v3-RoleClassMilitaryPerson
 */
export const RoleClassMilitaryPersonCode = {
  /**
   * military person
   */
  militaryperson: "MIL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassMilitaryPersonCode =
  typeof RoleClassMilitaryPersonCode[keyof typeof RoleClassMilitaryPersonCode];
