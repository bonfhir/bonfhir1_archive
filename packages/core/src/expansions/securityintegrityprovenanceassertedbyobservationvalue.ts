/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SecurityIntegrityProvenanceAssertedByObservationValue
 */
export const SecurityIntegrityProvenanceAssertedByObservationValueCode = {
  /**
   * clinician asserted
   */
  CLINAST: "CLINAST",

  /**
   * device asserted
   */
  DEVAST: "DEVAST",

  /**
   * healthcare professional asserted
   */
  HCPAST: "HCPAST",

  /**
   * patient acquaintance asserted
   */
  PACQAST: "PACQAST",

  /**
   * patient asserted
   */
  PATAST: "PATAST",

  /**
   * payer asserted
   */
  PAYAST: "PAYAST",

  /**
   * professional asserted
   */
  PROAST: "PROAST",

  /**
   * substitute decision maker asserted
   */
  SDMAST: "SDMAST",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityIntegrityProvenanceAssertedByObservationValueCode =
  typeof SecurityIntegrityProvenanceAssertedByObservationValueCode[keyof typeof SecurityIntegrityProvenanceAssertedByObservationValueCode];
