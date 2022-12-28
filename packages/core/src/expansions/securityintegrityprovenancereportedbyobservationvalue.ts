/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SecurityIntegrityProvenanceReportedByObservationValue
 */
export const SecurityIntegrityProvenanceReportedByObservationValueCode = {
  /**
   * clinician reported
   */
  CLINRPT: "CLINRPT",

  /**
   * device reported
   */
  DEVRPT: "DEVRPT",

  /**
   * healthcare professional reported
   */
  HCPRPT: "HCPRPT",

  /**
   * patient acquaintance reported
   */
  PACQRPT: "PACQRPT",

  /**
   * patient reported
   */
  PATRPT: "PATRPT",

  /**
   * payer reported
   */
  PAYRPT: "PAYRPT",

  /**
   * professional reported
   */
  PRORPT: "PRORPT",

  /**
   * substitute decision maker reported
   */
  SDMRPT: "SDMRPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityIntegrityProvenanceReportedByObservationValueCode =
  typeof SecurityIntegrityProvenanceReportedByObservationValueCode[keyof typeof SecurityIntegrityProvenanceReportedByObservationValueCode];
