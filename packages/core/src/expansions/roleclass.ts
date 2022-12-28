/**
 * This table includes codes for the Role class hierarchy. The values in this hierarchy, represent a Role which is an association or relationship between two entities - the entity that plays the role and the entity that scopes the role. Roles names are derived from the name of the playing entity in that role.

The role hierarchy stems from three core concepts, or abstract domains:

 *  **RoleClassOntological** is an abstract domain that collects roles in which the playing entity is defined or specified by the scoping entity.
 *  **RoleClassPartitive** collects roles in which the playing entity is in some sense a "part" of the scoping entity.
 *  **RoleClassAssociative** collects all of the remaining forms of association between the playing entity and the scoping entity. This set of roles is further partitioned between:
    
     *  **RoleClassPassive** which are roles in which the playing entity is used, known, treated, handled, built, or destroyed, etc. under the auspices of the scoping entity. The playing entity is passive in these roles in that the role exists without an agreement from the playing entity.
     *  **RoleClassMutualRelationship** which are relationships based on mutual behavior of the two entities. The basis of these relationship may be formal agreements or they may be *de facto* behavior. Thus, this sub-domain is further divided into:
        
         *  **RoleClassRelationshipFormal** in which the relationship is formally defined, frequently by a contract or agreement.
         *  **Personal relationship** which inks two people in a personal relationship.

The hierarchy discussed above is represented In the current vocabulary tables as a set of abstract domains, with the exception of the "Personal relationship" which is a leaf concept.
 * http://terminology.hl7.org/ValueSet/v3-RoleClass
 */
export const RoleClassCode = {
  /**
   * role
   */
  ROL: "ROL",

  /**
   * child
   */
  CHILD: "CHILD",

  /**
   * credentialed entity
   */
  CRED: "CRED",

  /**
   * nurse practitioner
   */
  NURPRAC: "NURPRAC",

  /**
   * nurse
   */
  NURS: "NURS",

  /**
   * physician assistant
   */
  PA: "PA",

  /**
   * physician
   */
  PHYS: "PHYS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassCode = typeof RoleClassCode[keyof typeof RoleClassCode];
