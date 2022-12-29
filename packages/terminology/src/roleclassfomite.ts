/**
 * **Description:** A fomite is a non-living entity that is capable of conveying exposure agent from one entity to another. A doorknob contaminated with a Norovirus is an example of a fomite. Anyone touching the doorknob would be exposed to the virus. The scoper of the role must be the exposure agent (e.g., pathogen).
 * http://terminology.hl7.org/ValueSet/v3-RoleClassFomite
 */
export const RoleClassFomiteCode = {
  /**
   * fomite
   */
  fomite: "FOMITE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassFomiteCode =
  typeof RoleClassFomiteCode[keyof typeof RoleClassFomiteCode];
