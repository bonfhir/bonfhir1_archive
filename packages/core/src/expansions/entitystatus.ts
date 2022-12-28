/**
 * Codes representing the defined possible states of an Entity, as defined by the Entity class state machine.
 * http://terminology.hl7.org/ValueSet/v3-EntityStatus
 */
export const EntityStatusCode = {
  /**
   * normal
   */
  normal: "normal",

  /**
   * nullified
   */
  nullified: "nullified",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityStatusCode =
  typeof EntityStatusCode[keyof typeof EntityStatusCode];
