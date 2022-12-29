/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-HealthQualityMeasureDocument
 */
export const HealthQualityMeasureDocumentCode = {
  /**
   * Health Quality Measure document
   */
  HealthQualityMeasuredocument: "57024-2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HealthQualityMeasureDocumentCode =
  typeof HealthQualityMeasureDocumentCode[keyof typeof HealthQualityMeasureDocumentCode];
