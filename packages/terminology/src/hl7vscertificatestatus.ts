/**
 * Value Set of codes that specify the status of the certificate held by a health professional.
 * http://terminology.hl7.org/ValueSet/v2-0536
 */
export const Hl7VSCertificateStatusCode = {
  /**
   * Provisional
   */
  Provisional: "P",

  /**
   * Revoked
   */
  Revoked: "R",

  /**
   * Active/Valid
   */
  ActiveValid: "V",

  /**
   * Expired
   */
  Expired: "E",

  /**
   * Inactive
   */
  Inactive: "I",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSCertificateStatusCode =
  typeof Hl7VSCertificateStatusCode[keyof typeof Hl7VSCertificateStatusCode];
