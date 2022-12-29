/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-SecurityIntegrityProvenanceReportedByObservationValue
 */
export const SecurityIntegrityProvenanceReportedByObservationValueCode = {
  /**
   * clinician reported
   */
  clinicianreported: "CLINRPT",

  /**
   * device reported
   */
  devicereported: "DEVRPT",

  /**
   * healthcare professional reported
   */
  healthcareprofessionalreported: "HCPRPT",

  /**
   * patient acquaintance reported
   */
  patientacquaintancereported: "PACQRPT",

  /**
   * patient reported
   */
  patientreported: "PATRPT",

  /**
   * payer reported
   */
  payerreported: "PAYRPT",

  /**
   * professional reported
   */
  professionalreported: "PRORPT",

  /**
   * substitute decision maker reported
   */
  substitutedecisionmakerreported: "SDMRPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityIntegrityProvenanceReportedByObservationValueCode =
  typeof SecurityIntegrityProvenanceReportedByObservationValueCode[keyof typeof SecurityIntegrityProvenanceReportedByObservationValueCode];
