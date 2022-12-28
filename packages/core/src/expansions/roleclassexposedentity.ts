/**
 * A role played by an entity that has been exposed to a person or animal suffering a contagious disease, or with a location from which a toxin has been distributed. The player of the role is normally a person or animal, but it is possible that other entity types could become exposed. The role is scoped by the source of the exposure, and it is quite possible for a person playing the role of exposed party to also become the scoper a role played by another person. That is to say, once a person has become infected, it is possible, perhaps likely, for that person to infect others.

Management of exposures and tracking exposed parties is a key function within public health, and within most public health contexts - exposed parties are known as "contacts."
 * http://terminology.hl7.org/ValueSet/v3-RoleClassExposedEntity
 */
export const RoleClassExposedEntityCode = {
  /**
   * exposed entity
   */
  EXPR: "EXPR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassExposedEntityCode =
  typeof RoleClassExposedEntityCode[keyof typeof RoleClassExposedEntityCode];
