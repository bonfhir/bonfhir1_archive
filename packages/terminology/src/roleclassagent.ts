/**
 * An entity (player) that acts or is authorized to act on behalf of another entity (scoper).
 * http://terminology.hl7.org/ValueSet/v3-RoleClassAgent
 */
export const RoleClassAgentCode = {
  /**
   * agent
   */
  AGNT: "AGNT",

  /**
   * assigned entity
   */
  ASSIGNED: "ASSIGNED",

  /**
   * commissioning party
   */
  COMPAR: "COMPAR",

  /**
   * signing authority or officer
   */
  SGNOFF: "SGNOFF",

  /**
   * contact
   */
  CON: "CON",

  /**
   * emergency contact
   */
  ECON: "ECON",

  /**
   * next of kin
   */
  NOK: "NOK",

  /**
   * guardian
   */
  GUARD: "GUARD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassAgentCode =
  typeof RoleClassAgentCode[keyof typeof RoleClassAgentCode];
