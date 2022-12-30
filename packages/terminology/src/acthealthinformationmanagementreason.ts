/**
 * The rationale or purpose for an act relating to health information management, such as archiving information for the purpose of complying with an organization policy or jurisdictional law relating to data retention.
 * http://terminology.hl7.org/ValueSet/v3-ActHealthInformationManagementReason
 */
export const ActHealthInformationManagementReasonCode = {
  /**
   * ActHealthInformationManagementReason
   */
  _ActHealthInformationManagementReason:
    "_ActHealthInformationManagementReason",

  /**
   * ActConsentInformationAccessOverrideReason
   */
  _ActConsentInformationAccessOverrideReason:
    "_ActConsentInformationAccessOverrideReason",

  /**
   * emergency treatment override
   */
  OVRER: "OVRER",

  /**
   * incompetency override
   */
  OVRINCOMP: "OVRINCOMP",

  /**
   * professional judgment override
   */
  OVRPJ: "OVRPJ",

  /**
   * public safety override
   */
  OVRPS: "OVRPS",

  /**
   * third party safety override
   */
  OVRTPS: "OVRTPS",

  /**
   * purpose of use
   */
  PurposeOfUse: "PurposeOfUse",

  /**
   * healthcare marketing
   */
  HMARKT: "HMARKT",

  /**
   * healthcare operations
   */
  HOPERAT: "HOPERAT",

  /**
   * care management
   */
  CAREMGT: "CAREMGT",

  /**
   * donation
   */
  DONAT: "DONAT",

  /**
   * fraud
   */
  FRAUD: "FRAUD",

  /**
   * government
   */
  GOV: "GOV",

  /**
   * health accreditation
   */
  HACCRED: "HACCRED",

  /**
   * health compliance
   */
  HCOMPL: "HCOMPL",

  /**
   * decedent
   */
  HDECD: "HDECD",

  /**
   * directory
   */
  HDIRECT: "HDIRECT",

  /**
   * healthcare delivery management
   */
  HDM: "HDM",

  /**
   * legal
   */
  HLEGAL: "HLEGAL",

  /**
   * health outcome measure
   */
  HOUTCOMS: "HOUTCOMS",

  /**
   * health program reporting
   */
  HPRGRP: "HPRGRP",

  /**
   * health quality improvement
   */
  HQUALIMP: "HQUALIMP",

  /**
   * health system administration
   */
  HSYSADMIN: "HSYSADMIN",

  /**
   * labeling
   */
  LABELING: "LABELING",

  /**
   * metadata management
   */
  METAMGT: "METAMGT",

  /**
   * member administration
   */
  MEMADMIN: "MEMADMIN",

  /**
   * military command
   */
  MILCDM: "MILCDM",

  /**
   * patient administration
   */
  PATADMIN: "PATADMIN",

  /**
   * patient safety
   */
  PATSFTY: "PATSFTY",

  /**
   * performance measure
   */
  PERFMSR: "PERFMSR",

  /**
   * records management
   */
  RECORDMGT: "RECORDMGT",

  /**
   * system development
   */
  SYSDEV: "SYSDEV",

  /**
   * test health data
   */
  HTEST: "HTEST",

  /**
   * training
   */
  TRAIN: "TRAIN",

  /**
   * healthcare payment
   */
  HPAYMT: "HPAYMT",

  /**
   * claim attachment
   */
  CLMATTCH: "CLMATTCH",

  /**
   * coverage authorization
   */
  COVAUTH: "COVAUTH",

  /**
   * coverage under policy or program
   */
  COVERAGE: "COVERAGE",

  /**
   * eligibility determination
   */
  ELIGDTRM: "ELIGDTRM",

  /**
   * eligibility verification
   */
  ELIGVER: "ELIGVER",

  /**
   * enrollment
   */
  ENROLLM: "ENROLLM",

  /**
   * military discharge
   */
  MILDCRG: "MILDCRG",

  /**
   * remittance advice
   */
  REMITADV: "REMITADV",

  /**
   * healthcare research
   */
  HRESCH: "HRESCH",

  /**
   * biomedical research
   */
  BIORCH: "BIORCH",

  /**
   * clinical trial research
   */
  CLINTRCH: "CLINTRCH",

  /**
   * clinical trial research without patient care
   */
  CLINTRCHNPC: "CLINTRCHNPC",

  /**
   * clinical trial research with patient care
   */
  CLINTRCHPC: "CLINTRCHPC",

  /**
   * preclinical trial research
   */
  PRECLINTRCH: "PRECLINTRCH",

  /**
   * disease specific healthcare research
   */
  DSRCH: "DSRCH",

  /**
   * population origins or ancestry healthcare research
   */
  POARCH: "POARCH",

  /**
   * translational healthcare research
   */
  TRANSRCH: "TRANSRCH",

  /**
   * patient requested
   */
  PATRQT: "PATRQT",

  /**
   * family requested
   */
  FAMRQT: "FAMRQT",

  /**
   * power of attorney
   */
  PWATRNY: "PWATRNY",

  /**
   * support network
   */
  SUPNWK: "SUPNWK",

  /**
   * public health
   */
  PUBHLTH: "PUBHLTH",

  /**
   * disaster
   */
  DISASTER: "DISASTER",

  /**
   * threat
   */
  THREAT: "THREAT",

  /**
   * treatment
   */
  TREAT: "TREAT",

  /**
   * clinical trial
   */
  CLINTRL: "CLINTRL",

  /**
   * coordination of care
   */
  COC: "COC",

  /**
   * Emergency Treatment
   */
  ETREAT: "ETREAT",

  /**
   * break the glass
   */
  BTG: "BTG",

  /**
   * emergency room treatment
   */
  ERTREAT: "ERTREAT",

  /**
   * population health
   */
  POPHLTH: "POPHLTH",

  /**
   * ActHealthInformationPrivacyReason
   */
  _ActHealthInformationPrivacyReason: "_ActHealthInformationPrivacyReason",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActHealthInformationManagementReasonCode =
  typeof ActHealthInformationManagementReasonCode[keyof typeof ActHealthInformationManagementReasonCode];
