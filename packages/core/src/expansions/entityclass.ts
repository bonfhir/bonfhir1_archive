/**
 * Classifies the Entity class and all of its subclasses. The terminology is hierarchical. At the top is this HL7-defined domain of high-level categories (such as represented by the Entity subclasses). Each of these terms must be harmonized and is specializable.

The value sets beneath are encoded in Entity.code and are drawn from multiple, frequently external, domains that reflect much more fine-grained typing.
 * http://terminology.hl7.org/ValueSet/v3-EntityClass
 */
export const EntityClassCode = {
  /**
   * entity
   */
  ENT: "ENT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassCode =
  typeof EntityClassCode[keyof typeof EntityClassCode];
