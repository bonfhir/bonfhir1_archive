/**
 * An entity (player) that acts or is authorized to act on behalf of another entity (scoper).
 * http://terminology.hl7.org/ValueSet/v3-RoleClassAgent
 */
export const RoleClassAgentCode = {
  /**
   * agent
   */
  agent: "AGNT",

  /**
   * assigned entity
   */
  assignedentity: "ASSIGNED",

  /**
   * commissioning party
   */
  commissioningparty: "COMPAR",

  /**
   * signing authority or officer
   */
  signingauthorityorofficer: "SGNOFF",

  /**
   * contact
   */
  contact: "CON",

  /**
   * emergency contact
   */
  emergencycontact: "ECON",

  /**
   * next of kin
   */
  nextofkin: "NOK",

  /**
   * guardian
   */
  guardian: "GUARD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassAgentCode =
  typeof RoleClassAgentCode[keyof typeof RoleClassAgentCode];
