/**
 * Value Set of codes that specify the type of facility.
 * http://terminology.hl7.org/ValueSet/v2-0331
 */
export const Hl7VSFacilityTypeCode = {
  /**
   * User
   */
  U: "U",

  /**
   * Manufacturer
   */
  M: "M",

  /**
   * Distributor
   */
  D: "D",

  /**
   * Agent for a foreign manufacturer
   */
  A: "A",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSFacilityTypeCode =
  typeof Hl7VSFacilityTypeCode[keyof typeof Hl7VSFacilityTypeCode];
