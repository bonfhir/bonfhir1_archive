/**
 * Value Set of codes that specify a stock location.
 * http://terminology.hl7.org/ValueSet/v2-0012
 */
export const Hl7VSStockLocationCode = {
  /**
   * Filled from ancillary department stock
   */
  Filledfromancillarydepartmentstock: "AN",

  /**
   * Filled from floor stock
   */
  Filledfromfloorstock: "FL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSStockLocationCode =
  typeof Hl7VSStockLocationCode[keyof typeof Hl7VSStockLocationCode];
