/**
 * Extra monitoring defined for a Medicinal Product.
 * http://hl7.org/fhir/ValueSet/medicinal-product-additional-monitoring
 */
export const AdditionalMonitoringCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdditionalMonitoringCode =
  typeof AdditionalMonitoringCode[keyof typeof AdditionalMonitoringCode];
