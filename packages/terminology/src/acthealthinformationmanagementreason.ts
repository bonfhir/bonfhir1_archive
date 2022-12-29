/**
 * The rationale or purpose for an act relating to health information management, such as archiving information for the purpose of complying with an organization policy or jurisdictional law relating to data retention.
 * http://terminology.hl7.org/ValueSet/v3-ActHealthInformationManagementReason
 */
export const ActHealthInformationManagementReasonCode = {
  /**
   * ActHealthInformationManagementReason
   */
  ActHealthInformationManagementReason: "_ActHealthInformationManagementReason",

  /**
   * ActConsentInformationAccessOverrideReason
   */
  ActConsentInformationAccessOverrideReason:
    "_ActConsentInformationAccessOverrideReason",

  /**
   * emergency treatment override
   */
  emergencytreatmentoverride: "OVRER",

  /**
   * incompetency override
   */
  incompetencyoverride: "OVRINCOMP",

  /**
   * professional judgment override
   */
  professionaljudgmentoverride: "OVRPJ",

  /**
   * public safety override
   */
  publicsafetyoverride: "OVRPS",

  /**
   * third party safety override
   */
  thirdpartysafetyoverride: "OVRTPS",

  /**
   * purpose of use
   */
  purposeofuse: "PurposeOfUse",

  /**
   * healthcare marketing
   */
  healthcaremarketing: "HMARKT",

  /**
   * healthcare operations
   */
  healthcareoperations: "HOPERAT",

  /**
   * care management
   */
  caremanagement: "CAREMGT",

  /**
   * donation
   */
  donation: "DONAT",

  /**
   * fraud
   */
  fraud: "FRAUD",

  /**
   * government
   */
  government: "GOV",

  /**
   * health accreditation
   */
  healthaccreditation: "HACCRED",

  /**
   * health compliance
   */
  healthcompliance: "HCOMPL",

  /**
   * decedent
   */
  decedent: "HDECD",

  /**
   * directory
   */
  directory: "HDIRECT",

  /**
   * healthcare delivery management
   */
  healthcaredeliverymanagement: "HDM",

  /**
   * legal
   */
  legal: "HLEGAL",

  /**
   * health outcome measure
   */
  healthoutcomemeasure: "HOUTCOMS",

  /**
   * health program reporting
   */
  healthprogramreporting: "HPRGRP",

  /**
   * health quality improvement
   */
  healthqualityimprovement: "HQUALIMP",

  /**
   * health system administration
   */
  healthsystemadministration: "HSYSADMIN",

  /**
   * labeling
   */
  labeling: "LABELING",

  /**
   * metadata management
   */
  metadatamanagement: "METAMGT",

  /**
   * member administration
   */
  memberadministration: "MEMADMIN",

  /**
   * military command
   */
  militarycommand: "MILCDM",

  /**
   * patient administration
   */
  patientadministration: "PATADMIN",

  /**
   * patient safety
   */
  patientsafety: "PATSFTY",

  /**
   * performance measure
   */
  performancemeasure: "PERFMSR",

  /**
   * records management
   */
  recordsmanagement: "RECORDMGT",

  /**
   * system development
   */
  systemdevelopment: "SYSDEV",

  /**
   * test health data
   */
  testhealthdata: "HTEST",

  /**
   * training
   */
  training: "TRAIN",

  /**
   * healthcare payment
   */
  healthcarepayment: "HPAYMT",

  /**
   * claim attachment
   */
  claimattachment: "CLMATTCH",

  /**
   * coverage authorization
   */
  coverageauthorization: "COVAUTH",

  /**
   * coverage under policy or program
   */
  coverageunderpolicyorprogram: "COVERAGE",

  /**
   * eligibility determination
   */
  eligibilitydetermination: "ELIGDTRM",

  /**
   * eligibility verification
   */
  eligibilityverification: "ELIGVER",

  /**
   * enrollment
   */
  enrollment: "ENROLLM",

  /**
   * military discharge
   */
  militarydischarge: "MILDCRG",

  /**
   * remittance advice
   */
  remittanceadvice: "REMITADV",

  /**
   * healthcare research
   */
  healthcareresearch: "HRESCH",

  /**
   * biomedical research
   */
  biomedicalresearch: "BIORCH",

  /**
   * clinical trial research
   */
  clinicaltrialresearch: "CLINTRCH",

  /**
   * clinical trial research without patient care
   */
  clinicaltrialresearchwithoutpatientcare: "CLINTRCHNPC",

  /**
   * clinical trial research with patient care
   */
  clinicaltrialresearchwithpatientcare: "CLINTRCHPC",

  /**
   * preclinical trial research
   */
  preclinicaltrialresearch: "PRECLINTRCH",

  /**
   * disease specific healthcare research
   */
  diseasespecifichealthcareresearch: "DSRCH",

  /**
   * population origins or ancestry healthcare research
   */
  populationoriginsorancestryhealthcareresearch: "POARCH",

  /**
   * translational healthcare research
   */
  translationalhealthcareresearch: "TRANSRCH",

  /**
   * patient requested
   */
  patientrequested: "PATRQT",

  /**
   * family requested
   */
  familyrequested: "FAMRQT",

  /**
   * power of attorney
   */
  powerofattorney: "PWATRNY",

  /**
   * support network
   */
  supportnetwork: "SUPNWK",

  /**
   * public health
   */
  publichealth: "PUBHLTH",

  /**
   * disaster
   */
  disaster: "DISASTER",

  /**
   * threat
   */
  threat: "THREAT",

  /**
   * treatment
   */
  treatment: "TREAT",

  /**
   * clinical trial
   */
  clinicaltrial: "CLINTRL",

  /**
   * coordination of care
   */
  coordinationofcare: "COC",

  /**
   * Emergency Treatment
   */
  EmergencyTreatment: "ETREAT",

  /**
   * break the glass
   */
  breaktheglass: "BTG",

  /**
   * emergency room treatment
   */
  emergencyroomtreatment: "ERTREAT",

  /**
   * population health
   */
  populationhealth: "POPHLTH",

  /**
   * ActHealthInformationPrivacyReason
   */
  ActHealthInformationPrivacyReason: "_ActHealthInformationPrivacyReason",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActHealthInformationManagementReasonCode =
  typeof ActHealthInformationManagementReasonCode[keyof typeof ActHealthInformationManagementReasonCode];
