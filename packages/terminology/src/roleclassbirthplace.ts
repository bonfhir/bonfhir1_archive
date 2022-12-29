/**
 * Relates a place (playing Entity) as the location where a living subject (scoping Entity) was born.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassBirthplace
 */
export const RoleClassBirthplaceCode = {
  /**
   * birthplace
   */
  birthplace: "BIRTHPL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassBirthplaceCode =
  typeof RoleClassBirthplaceCode[keyof typeof RoleClassBirthplaceCode];
