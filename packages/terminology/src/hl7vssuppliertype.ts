/**
 * Value Set of codes specifying the type of supplier that will distribute the supply items associated to a contract number.
 * http://terminology.hl7.org/ValueSet/v2-0946
 */
export const Hl7VSSupplierTypeCode = {
  /**
   * Distributor
   */
  D: "D",

  /**
   * Manufacturer
   */
  M: "M",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSupplierTypeCode =
  typeof Hl7VSSupplierTypeCode[keyof typeof Hl7VSSupplierTypeCode];
