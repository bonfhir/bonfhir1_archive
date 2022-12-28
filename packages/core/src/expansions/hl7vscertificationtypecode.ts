/**
 * Value Set of codes specifying the code for a certification type.
 * http://terminology.hl7.org/ValueSet/v2-0921
 */
export const Hl7VSCertificationTypeCodeCode = {
  /**
   * Admitting
   */
  ADM: "ADM",

  /**
   * Service
   */
  SERV: "SERV",

  /**
   * Procedure
   */
  PROC: "PROC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCertificationTypeCodeCode =
  typeof Hl7VSCertificationTypeCodeCode[keyof typeof Hl7VSCertificationTypeCodeCode];
