/**
 * Value Set of codes that specify the status of the certificate held by a health professional.
 * http://terminology.hl7.org/ValueSet/v2-0536
 */
export const Hl7VSCertificateStatusCode = {
  /**
   * Provisional
   */
  P: "P",

  /**
   * Revoked
   */
  R: "R",

  /**
   * Active/Valid
   */
  V: "V",

  /**
   * Expired
   */
  E: "E",

  /**
   * Inactive
   */
  I: "I",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCertificateStatusCode =
  typeof Hl7VSCertificateStatusCode[keyof typeof Hl7VSCertificateStatusCode];
