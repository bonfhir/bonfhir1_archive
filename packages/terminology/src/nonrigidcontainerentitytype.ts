/**
 * A container having dimensions that adjust somewhat based on the amount and shape of the material placed within it.
 * http://terminology.hl7.org/ValueSet/v3-NonRigidContainerEntityType
 */
export const NonRigidContainerEntityTypeCode = {
  /**
   * Bag
   */
  Bag: "BAG",

  /**
   * Packet
   */
  Packet: "PACKT",

  /**
   * Pouch
   */
  Pouch: "PCH",

  /**
   * Sachet
   */
  Sachet: "SACH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NonRigidContainerEntityTypeCode =
  typeof NonRigidContainerEntityTypeCode[keyof typeof NonRigidContainerEntityTypeCode];
