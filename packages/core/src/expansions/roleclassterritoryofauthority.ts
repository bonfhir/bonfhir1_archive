/**
 * Relates a place entity (player) as the region over which the scoper (typically an Organization) has certain authority (jurisdiction). For example, the Calgary Regional Health Authority (scoper) has authority over the territory "Region 4 of Alberta" (player) in matters of health.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassTerritoryOfAuthority
 */
export const RoleClassTerritoryOfAuthorityCode = {
  /**
   * territory of authority
   */
  TERR: "TERR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassTerritoryOfAuthorityCode =
  typeof RoleClassTerritoryOfAuthorityCode[keyof typeof RoleClassTerritoryOfAuthorityCode];
