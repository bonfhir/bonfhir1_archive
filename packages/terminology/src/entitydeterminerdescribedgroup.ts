/**
 * A standard value set allowing reference to all EntityDeterminer codes that are equal to or specializations of GROUPKIND. This is the value set used when a model indicates that the binding is to "<= GROUPKIND".
 * http://terminology.hl7.org/ValueSet/v3-EntityDeterminerDescribedGroup
 */
export const EntityDeterminerDescribedGroupCode = {
  /**
   * described group
   */
  describedgroup: "GROUPKIND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityDeterminerDescribedGroupCode =
  typeof EntityDeterminerDescribedGroupCode[keyof typeof EntityDeterminerDescribedGroupCode];
