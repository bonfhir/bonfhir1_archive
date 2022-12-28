/**
 * Citizen of apolitical entity
 * http://terminology.hl7.org/ValueSet/v3-RoleClassCitizen
 */
export const RoleClassCitizenCode = {
  /**
   * citizen
   */
  CIT: "CIT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassCitizenCode =
  typeof RoleClassCitizenCode[keyof typeof RoleClassCitizenCode];
