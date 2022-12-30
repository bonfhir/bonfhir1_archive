/**
 * Codes to characterize a Resource Group using categories that typify its membership and/or function

.

*Example:* PractitionerGroup
 * http://terminology.hl7.org/ValueSet/v3-ResourceGroupEntityType
 */
export const ResourceGroupEntityTypeCode = {
  /**
   * PractitionerGroup
   */
  PRAC: "PRAC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ResourceGroupEntityTypeCode =
  typeof ResourceGroupEntityTypeCode[keyof typeof ResourceGroupEntityTypeCode];
