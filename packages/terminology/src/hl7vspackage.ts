/**
 * Value Set of codes specifying the packaging unit in which this inventory supply item can be ordered or issued when purchased from the vendor in the related vendor segment.
 * http://terminology.hl7.org/ValueSet/v2-0818
 */
export const Hl7VSPackageCode = {
  /**
   * Case
   */
  Case: "CS",

  /**
   * Box
   */
  Box: "BX",

  /**
   * Each
   */
  Each: "EA",

  /**
   * Set
   */
  Set: "SET",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPackageCode =
  typeof Hl7VSPackageCode[keyof typeof Hl7VSPackageCode];
