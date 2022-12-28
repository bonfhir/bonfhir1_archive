/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-VaginalCream
 */
export const VaginalCreamCode = {
  /**
   * Vaginal Cream
   */
  VAGCRM: "VAGCRM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VaginalCreamCode =
  typeof VaginalCreamCode[keyof typeof VaginalCreamCode];
