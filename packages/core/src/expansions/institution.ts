/**
 * Institution
 * http://terminology.hl7.org/ValueSet/v3-Institution
 */
export const InstitutionCode = {
  /**
   * Institution
   */
  I: "I",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type InstitutionCode =
  typeof InstitutionCode[keyof typeof InstitutionCode];
