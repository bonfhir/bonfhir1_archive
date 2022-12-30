/**
 * A container having dimensions that adjust somewhat based on the amount and shape of the material placed within it.
 * http://terminology.hl7.org/ValueSet/v3-NonRigidContainerEntityType
 */
export const NonRigidContainerEntityTypeCode = {
  /**
   * Bag
   */
  BAG: "BAG",

  /**
   * Packet
   */
  PACKT: "PACKT",

  /**
   * Pouch
   */
  PCH: "PCH",

  /**
   * Sachet
   */
  SACH: "SACH",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type NonRigidContainerEntityTypeCode =
  typeof NonRigidContainerEntityTypeCode[keyof typeof NonRigidContainerEntityTypeCode];
