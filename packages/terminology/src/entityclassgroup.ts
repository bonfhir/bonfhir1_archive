/**
 * A grouping of resources (personnel, material, or places) to be used for scheduling purposes. May be a pool of like-type resources, a team, or combination of personnel, material and places.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassGroup
 */
export const EntityClassGroupCode = {
  /**
   * group
   */
  group: "RGRP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassGroupCode =
  typeof EntityClassGroupCode[keyof typeof EntityClassGroupCode];
