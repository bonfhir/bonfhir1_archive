/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-PatientProfileQueryReasonCode
 */
export const PatientProfileQueryReasonCodeCode = {
  /**
   * administrative review
   */
  administrativereview: "ADMREV",

  /**
   * subpoena
   */
  subpoena: "LEGAL",

  /**
   * patient care
   */
  patientcare: "PATCAR",

  /**
   * patient request query
   */
  patientrequestquery: "PATREQ",

  /**
   * practice review
   */
  practicereview: "PRCREV",

  /**
   * regulatory review
   */
  regulatoryreview: "REGUL",

  /**
   * research
   */
  research: "RSRCH",

  /**
   * validation review
   */
  validationreview: "VALIDATION",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type PatientProfileQueryReasonCodeCode =
  typeof PatientProfileQueryReasonCodeCode[keyof typeof PatientProfileQueryReasonCodeCode];
