/**
 * Definition: Relates a place (playing Entity) as the location where a living subject (scoping Entity) died.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassPlaceOfDeath
 */
export const RoleClassPlaceOfDeathCode = {
  /**
   * place of death
   */
  DEATHPLC: "DEATHPLC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassPlaceOfDeathCode =
  typeof RoleClassPlaceOfDeathCode[keyof typeof RoleClassPlaceOfDeathCode];
