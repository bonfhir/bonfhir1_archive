/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-EthnicityHispanic
 */
export const EthnicityHispanicCode = {
  /**
   * Hispanic or Latino
   */
  "2135-2": "2135-2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EthnicityHispanicCode =
  typeof EthnicityHispanicCode[keyof typeof EthnicityHispanicCode];
