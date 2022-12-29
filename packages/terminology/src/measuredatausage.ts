/**
 * The intended usage for supplemental data elements in the measure.
 * http://terminology.hl7.org/ValueSet/measure-data-usage
 */
export const MeasureDataUsageCode = {
  /**
   * Supplemental Data
   */
  SupplementalData: "supplemental-data",

  /**
   * Risk Adjustment Factor
   */
  RiskAdjustmentFactor: "risk-adjustment-factor",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MeasureDataUsageCode =
  typeof MeasureDataUsageCode[keyof typeof MeasureDataUsageCode];
