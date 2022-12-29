/**
 * An agent role in which the agent is an Entity acting in the employ of an organization. The focus is on functional role on behalf of the organization, unlike the Employee role where the focus is on the 'Human Resources' relationship between the employee and the organization.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassAssignedEntity
 */
export const RoleClassAssignedEntityCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassAssignedEntityCode =
  typeof RoleClassAssignedEntityCode[keyof typeof RoleClassAssignedEntityCode];
