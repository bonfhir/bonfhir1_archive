/**
 * Value Set of codes of concepts which specify the different types of practitioners associated with this procedure.   This set of codes is known to be incomplete.
 * http://terminology.hl7.org/ValueSet/v2-0133
 */
export const Hl7VSProcedurePractitionerTypeCode = {
  /**
   * Anesthesiologist/Anesthetist
   */
  AnesthesiologistAnesthetist: "AN",

  /**
   * Procedure MD/ Surgeon
   */
  ProcedureMDSurgeon: "PR",

  /**
   * Radiologist
   */
  Radiologist: "RD",

  /**
   * Resident
   */
  Resident: "RS",

  /**
   * Nurse Practitioner
   */
  NursePractitioner: "NP",

  /**
   * Certified Nurse Midwife
   */
  CertifiedNurseMidwife: "CM",

  /**
   * Scrub Nurse
   */
  ScrubNurse: "SN",

  /**
   * Primary Surgeon
   */
  PrimarySurgeon: "PS",

  /**
   * Assistant Surgeon
   */
  AssistantSurgeon: "AS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProcedurePractitionerTypeCode =
  typeof Hl7VSProcedurePractitionerTypeCode[keyof typeof Hl7VSProcedurePractitionerTypeCode];
