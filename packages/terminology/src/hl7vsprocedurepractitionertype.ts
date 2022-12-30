/**
 * Value Set of codes of concepts which specify the different types of practitioners associated with this procedure.   This set of codes is known to be incomplete.
 * http://terminology.hl7.org/ValueSet/v2-0133
 */
export const Hl7VSProcedurePractitionerTypeCode = {
  /**
   * Anesthesiologist/Anesthetist
   */
  AN: "AN",

  /**
   * Procedure MD/ Surgeon
   */
  PR: "PR",

  /**
   * Radiologist
   */
  RD: "RD",

  /**
   * Resident
   */
  RS: "RS",

  /**
   * Nurse Practitioner
   */
  NP: "NP",

  /**
   * Certified Nurse Midwife
   */
  CM: "CM",

  /**
   * Scrub Nurse
   */
  SN: "SN",

  /**
   * Primary Surgeon
   */
  PS: "PS",

  /**
   * Assistant Surgeon
   */
  AS: "AS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSProcedurePractitionerTypeCode =
  typeof Hl7VSProcedurePractitionerTypeCode[keyof typeof Hl7VSProcedurePractitionerTypeCode];
