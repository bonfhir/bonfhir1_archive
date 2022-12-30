/**
 * An agent role in which the agent is an Entity acting in the employ of an organization. The focus is on functional role on behalf of the organization, unlike the Employee role where the focus is on the 'Human Resources' relationship between the employee and the organization.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassAssignedEntity
 */
export const RoleClassAssignedEntityCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassAssignedEntityCode =
  typeof RoleClassAssignedEntityCode[keyof typeof RoleClassAssignedEntityCode];
