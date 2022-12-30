/**
 * This value set defines a set of codes that can be used to indicate from where the patient came in.
 * http://terminology.hl7.org/ValueSet/encounter-admit-source
 */
export const AdmitSourceCode = {
  /**
   * Transferred from other hospital
   */
  "hosp-trans": "hosp-trans",

  /**
   * From accident/emergency department
   */
  emd: "emd",

  /**
   * From outpatient department
   */
  outp: "outp",

  /**
   * Born in hospital
   */
  born: "born",

  /**
   * General Practitioner referral
   */
  gp: "gp",

  /**
   * Medical Practitioner/physician referral
   */
  mp: "mp",

  /**
   * From nursing home
   */
  nursing: "nursing",

  /**
   * From psychiatric hospital
   */
  psych: "psych",

  /**
   * From rehabilitation facility
   */
  rehab: "rehab",

  /**
   * Other
   */
  other: "other",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdmitSourceCode =
  typeof AdmitSourceCode[keyof typeof AdmitSourceCode];
