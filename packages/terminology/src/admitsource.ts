/**
 * This value set defines a set of codes that can be used to indicate from where the patient came in.
 * http://terminology.hl7.org/ValueSet/encounter-admit-source
 */
export const AdmitSourceCode = {
  /**
   * Transferred from other hospital
   */
  Transferredfromotherhospital: "hosp-trans",

  /**
   * From accident/emergency department
   */
  Fromaccidentemergencydepartment: "emd",

  /**
   * From outpatient department
   */
  Fromoutpatientdepartment: "outp",

  /**
   * Born in hospital
   */
  Borninhospital: "born",

  /**
   * General Practitioner referral
   */
  GeneralPractitionerreferral: "gp",

  /**
   * Medical Practitioner/physician referral
   */
  MedicalPractitionerphysicianreferral: "mp",

  /**
   * From nursing home
   */
  Fromnursinghome: "nursing",

  /**
   * From psychiatric hospital
   */
  Frompsychiatrichospital: "psych",

  /**
   * From rehabilitation facility
   */
  Fromrehabilitationfacility: "rehab",

  /**
   * Other
   */
  Other: "other",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdmitSourceCode =
  typeof AdmitSourceCode[keyof typeof AdmitSourceCode];
