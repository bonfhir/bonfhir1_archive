/**
 * A physical artifact that stores information about the granting of authorization.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassCertificateRepresentation
 */
export const EntityClassCertificateRepresentationCode = {
  /**
   * certificate representation
   */
  certificaterepresentation: "CER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassCertificateRepresentationCode =
  typeof EntityClassCertificateRepresentationCode[keyof typeof EntityClassCertificateRepresentationCode];
