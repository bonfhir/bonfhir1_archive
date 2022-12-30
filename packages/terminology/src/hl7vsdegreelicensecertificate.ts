/**
 * Concepts specifying an educational degree (e.g., MD).  Used in the CNN datatype (names and identifiers of clinicians) in Version 2 messaging.  Used in Version 2 messaging; note that in releases of HL7 prior to 2.3.1, was also used in person names (XPN), but this use was deprecated, then withdrawn in 2.7.
 * http://terminology.hl7.org/ValueSet/v2-0360
 */
export const Hl7VSDegreeLicenseCertificateCode = {
  /**
   * Advanced Practice Nurse
   */
  PN: "PN",

  /**
   * Associate of Applied Science
   */
  AAS: "AAS",

  /**
   * Associate of Arts
   */
  AA: "AA",

  /**
   * Associate of Business Administration
   */
  ABA: "ABA",

  /**
   * Associate of Engineering
   */
  AE: "AE",

  /**
   * Associate of Science
   */
  AS: "AS",

  /**
   * Bachelor of Arts
   */
  BA: "BA",

  /**
   * Bachelor of Business Administration
   */
  BBA: "BBA",

  /**
   * Bachelor or Engineering
   */
  BE: "BE",

  /**
   * Bachelor of Fine Arts
   */
  BFA: "BFA",

  /**
   * Bachelor of Nursing
   */
  BN: "BN",

  /**
   * Bachelor of Science
   */
  BS: "BS",

  /**
   * Bachelor of Science - Law
   */
  BSL: "BSL",

  /**
   * Bachelor on Science - Nursing
   */
  BSN: "BSN",

  /**
   * Bachelor of Theology
   */
  BT: "BT",

  /**
   * Certificate
   */
  CER: "CER",

  /**
   * Certified Adult Nurse Practitioner
   */
  CANP: "CANP",

  /**
   * Certified Medical Assistant
   */
  CMA: "CMA",

  /**
   * Certified Nurse Practitioner
   */
  CNP: "CNP",

  /**
   * Certified Nurse Midwife
   */
  CNM: "CNM",

  /**
   * Certified Registered Nurse
   */
  CRN: "CRN",

  /**
   * Certified Nurse Specialist
   */
  CNS: "CNS",

  /**
   * Certified Pediatric Nurse Practitioner
   */
  CPNP: "CPNP",

  /**
   * Certified Tumor Registrar
   */
  CTR: "CTR",

  /**
   * Diploma
   */
  DIP: "DIP",

  /**
   * Doctor of Business Administration
   */
  DBA: "DBA",

  /**
   * Doctor of Education
   */
  DED: "DED",

  /**
   * Doctor of Pharmacy
   */
  PharmD: "PharmD",

  /**
   * Doctor of Engineering
   */
  PHE: "PHE",

  /**
   * Doctor of Philosophy
   */
  PHD: "PHD",

  /**
   * Doctor of Science
   */
  PHS: "PHS",

  /**
   * Doctor of Medicine
   */
  MD: "MD",

  /**
   * Doctor of Osteopathy
   */
  DO: "DO",

  /**
   * Emergency Medical Technician
   */
  EMT: "EMT",

  /**
   * Emergency Medical Technician - Paramedic
   */
  EMTP: "EMTP",

  /**
   * Family Practice Nurse Practitioner
   */
  FPNP: "FPNP",

  /**
   * High School Graduate
   */
  HS: "HS",

  /**
   * Juris Doctor
   */
  JD: "JD",

  /**
   * Master of Arts
   */
  MA: "MA",

  /**
   * Master of Business Administration
   */
  MBA: "MBA",

  /**
   * Master of Civil Engineering
   */
  MCE: "MCE",

  /**
   * Master of Divinity
   */
  MDI: "MDI",

  /**
   * Master of Education
   */
  MED: "MED",

  /**
   * Master of Electrical Engineering
   */
  MEE: "MEE",

  /**
   * Master of Engineering
   */
  ME: "ME",

  /**
   * Master of Fine Arts
   */
  MFA: "MFA",

  /**
   * Master of Mechanical Engineering
   */
  MME: "MME",

  /**
   * Master of Science
   */
  MS: "MS",

  /**
   * Master of Science - Law
   */
  MSL: "MSL",

  /**
   * Master of Science - Nursing
   */
  MSN: "MSN",

  /**
   * Master of Theology
   */
  MTH: "MTH",

  /**
   * Medical Assistant
   */
  MDA: "MDA",

  /**
   * Medical Technician
   */
  MT: "MT",

  /**
   * Non-Graduate
   */
  NG: "NG",

  /**
   * Nurse Practitioner
   */
  NP: "NP",

  /**
   * Physician Assistant
   */
  PA: "PA",

  /**
   * Registered Medical Assistant
   */
  RMA: "RMA",

  /**
   * Registered Nurse
   */
  RN: "RN",

  /**
   * Registered Pharmacist
   */
  RPH: "RPH",

  /**
   * Secretarial Certificate
   */
  SEC: "SEC",

  /**
   * Trade School Graduate
   */
  TS: "TS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDegreeLicenseCertificateCode =
  typeof Hl7VSDegreeLicenseCertificateCode[keyof typeof Hl7VSDegreeLicenseCertificateCode];
