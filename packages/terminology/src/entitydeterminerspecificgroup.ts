/**
 * A standard value set allowing reference to all EntityDeterminer codes that are equal to or specializations of GROUP. This is the value set used when a model indicates that the binding is to "<= GROUP".
 * http://terminology.hl7.org/ValueSet/v3-EntityDeterminerSpecificGroup
 */
export const EntityDeterminerSpecificGroupCode = {
  /**
   * specific group
   */
  specificgroup: "GROUP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityDeterminerSpecificGroupCode =
  typeof EntityDeterminerSpecificGroupCode[keyof typeof EntityDeterminerSpecificGroupCode];
