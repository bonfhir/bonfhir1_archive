/**
 * Concepts specifying an educational degree (e.g., MD).  Used in the CNN datatype (names and identifiers of clinicians) in Version 2 messaging.  Used in Version 2 messaging; note that in releases of HL7 prior to 2.3.1, was also used in person names (XPN), but this use was deprecated, then withdrawn in 2.7.
 * http://terminology.hl7.org/ValueSet/v2-0360
 */
export const Hl7VSDegreeLicenseCertificateCode = {
  /**
   * Advanced Practice Nurse
   */
  AdvancedPracticeNurse: "PN",

  /**
   * Associate of Applied Science
   */
  AssociateofAppliedScience: "AAS",

  /**
   * Associate of Arts
   */
  AssociateofArts: "AA",

  /**
   * Associate of Business Administration
   */
  AssociateofBusinessAdministration: "ABA",

  /**
   * Associate of Engineering
   */
  AssociateofEngineering: "AE",

  /**
   * Associate of Science
   */
  AssociateofScience: "AS",

  /**
   * Bachelor of Arts
   */
  BachelorofArts: "BA",

  /**
   * Bachelor of Business Administration
   */
  BachelorofBusinessAdministration: "BBA",

  /**
   * Bachelor or Engineering
   */
  BachelororEngineering: "BE",

  /**
   * Bachelor of Fine Arts
   */
  BachelorofFineArts: "BFA",

  /**
   * Bachelor of Nursing
   */
  BachelorofNursing: "BN",

  /**
   * Bachelor of Science
   */
  BachelorofScience: "BS",

  /**
   * Bachelor of Science - Law
   */
  BachelorofScienceLaw: "BSL",

  /**
   * Bachelor on Science - Nursing
   */
  BacheloronScienceNursing: "BSN",

  /**
   * Bachelor of Theology
   */
  BachelorofTheology: "BT",

  /**
   * Certificate
   */
  Certificate: "CER",

  /**
   * Certified Adult Nurse Practitioner
   */
  CertifiedAdultNursePractitioner: "CANP",

  /**
   * Certified Medical Assistant
   */
  CertifiedMedicalAssistant: "CMA",

  /**
   * Certified Nurse Practitioner
   */
  CertifiedNursePractitioner: "CNP",

  /**
   * Certified Nurse Midwife
   */
  CertifiedNurseMidwife: "CNM",

  /**
   * Certified Registered Nurse
   */
  CertifiedRegisteredNurse: "CRN",

  /**
   * Certified Nurse Specialist
   */
  CertifiedNurseSpecialist: "CNS",

  /**
   * Certified Pediatric Nurse Practitioner
   */
  CertifiedPediatricNursePractitioner: "CPNP",

  /**
   * Certified Tumor Registrar
   */
  CertifiedTumorRegistrar: "CTR",

  /**
   * Diploma
   */
  Diploma: "DIP",

  /**
   * Doctor of Business Administration
   */
  DoctorofBusinessAdministration: "DBA",

  /**
   * Doctor of Education
   */
  DoctorofEducation: "DED",

  /**
   * Doctor of Pharmacy
   */
  DoctorofPharmacy: "PharmD",

  /**
   * Doctor of Engineering
   */
  DoctorofEngineering: "PHE",

  /**
   * Doctor of Philosophy
   */
  DoctorofPhilosophy: "PHD",

  /**
   * Doctor of Science
   */
  DoctorofScience: "PHS",

  /**
   * Doctor of Medicine
   */
  DoctorofMedicine: "MD",

  /**
   * Doctor of Osteopathy
   */
  DoctorofOsteopathy: "DO",

  /**
   * Emergency Medical Technician
   */
  EmergencyMedicalTechnician: "EMT",

  /**
   * Emergency Medical Technician - Paramedic
   */
  EmergencyMedicalTechnicianParamedic: "EMTP",

  /**
   * Family Practice Nurse Practitioner
   */
  FamilyPracticeNursePractitioner: "FPNP",

  /**
   * High School Graduate
   */
  HighSchoolGraduate: "HS",

  /**
   * Juris Doctor
   */
  JurisDoctor: "JD",

  /**
   * Master of Arts
   */
  MasterofArts: "MA",

  /**
   * Master of Business Administration
   */
  MasterofBusinessAdministration: "MBA",

  /**
   * Master of Civil Engineering
   */
  MasterofCivilEngineering: "MCE",

  /**
   * Master of Divinity
   */
  MasterofDivinity: "MDI",

  /**
   * Master of Education
   */
  MasterofEducation: "MED",

  /**
   * Master of Electrical Engineering
   */
  MasterofElectricalEngineering: "MEE",

  /**
   * Master of Engineering
   */
  MasterofEngineering: "ME",

  /**
   * Master of Fine Arts
   */
  MasterofFineArts: "MFA",

  /**
   * Master of Mechanical Engineering
   */
  MasterofMechanicalEngineering: "MME",

  /**
   * Master of Science
   */
  MasterofScience: "MS",

  /**
   * Master of Science - Law
   */
  MasterofScienceLaw: "MSL",

  /**
   * Master of Science - Nursing
   */
  MasterofScienceNursing: "MSN",

  /**
   * Master of Theology
   */
  MasterofTheology: "MTH",

  /**
   * Medical Assistant
   */
  MedicalAssistant: "MDA",

  /**
   * Medical Technician
   */
  MedicalTechnician: "MT",

  /**
   * Non-Graduate
   */
  NonGraduate: "NG",

  /**
   * Nurse Practitioner
   */
  NursePractitioner: "NP",

  /**
   * Physician Assistant
   */
  PhysicianAssistant: "PA",

  /**
   * Registered Medical Assistant
   */
  RegisteredMedicalAssistant: "RMA",

  /**
   * Registered Nurse
   */
  RegisteredNurse: "RN",

  /**
   * Registered Pharmacist
   */
  RegisteredPharmacist: "RPH",

  /**
   * Secretarial Certificate
   */
  SecretarialCertificate: "SEC",

  /**
   * Trade School Graduate
   */
  TradeSchoolGraduate: "TS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSDegreeLicenseCertificateCode =
  typeof Hl7VSDegreeLicenseCertificateCode[keyof typeof Hl7VSDegreeLicenseCertificateCode];
