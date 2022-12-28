/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PatientProfileQueryReasonCode
 */
export const PatientProfileQueryReasonCodeCode = {
  /**
   * administrative review
   */
  ADMREV: "ADMREV",

  /**
   * subpoena
   */
  LEGAL: "LEGAL",

  /**
   * patient care
   */
  PATCAR: "PATCAR",

  /**
   * patient request query
   */
  PATREQ: "PATREQ",

  /**
   * practice review
   */
  PRCREV: "PRCREV",

  /**
   * regulatory review
   */
  REGUL: "REGUL",

  /**
   * research
   */
  RSRCH: "RSRCH",

  /**
   * validation review
   */
  VALIDATION: "VALIDATION",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PatientProfileQueryReasonCodeCode =
  typeof PatientProfileQueryReasonCodeCode[keyof typeof PatientProfileQueryReasonCodeCode];
