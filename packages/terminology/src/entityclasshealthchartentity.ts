/**
 * A health chart included to serve as a document receiving entity in the management of medical records.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassHealthChartEntity
 */
export const EntityClassHealthChartEntityCode = {
  /**
   * health chart entity
   */
  healthchartentity: "HCE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassHealthChartEntityCode =
  typeof EntityClassHealthChartEntityCode[keyof typeof EntityClassHealthChartEntityCode];
