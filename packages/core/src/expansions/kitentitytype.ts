/**
 * A container for a diverse collection of products intended to be used together for some purpose (e.g. Medicinal kits often contain a syringe, a needle and the injectable medication).
 * http://terminology.hl7.org/ValueSet/v3-KitEntityType
 */
export const KitEntityTypeCode = {
  /**
   * Kit
   */
  KIT: "KIT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type KitEntityTypeCode =
  typeof KitEntityTypeCode[keyof typeof KitEntityTypeCode];
