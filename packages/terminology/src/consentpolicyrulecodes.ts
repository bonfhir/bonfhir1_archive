/**
 * This value set includes sample Regulatory consent policy types from the US and other regions.
 * http://terminology.hl7.org/ValueSet/consent-policy
 */
export const ConsentPolicyRuleCodesCode = {
  /**
   * Common Rule Informed Consent
   */
  CommonRuleInformedConsent: "cric",

  /**
   * Illinois Consent by Minors to Medical Procedures
   */
  IllinoisConsentbyMinorstoMedicalProcedures: "illinois-minor-procedure",

  /**
   * HIPAA Authorization
   */
  HIPAAAuthorization: "hipaa-auth",

  /**
   * HIPAA Notice of Privacy Practices
   */
  HIPAANoticeofPrivacyPractices: "hipaa-npp",

  /**
   * HIPAA Restrictions
   */
  HIPAARestrictions: "hipaa-restrictions",

  /**
   * HIPAA Research Authorization
   */
  HIPAAResearchAuthorization: "hipaa-research",

  /**
   * HIPAA Self-Pay Restriction
   */
  HIPAASelfPayRestriction: "hipaa-self-pay",

  /**
   * Michigan MDHHS-5515 Consent to Share Behavioral Health Information for Care Coordination Purposes
   */
  MichiganMDHHS5515ConsenttoShareBehavioralHealthInformationforCareCoordinationPurposes:
    "mdhhs-5515",

  /**
   * New York State Surgical and Invasive Procedure Protocol
   */
  NewYorkStateSurgicalandInvasiveProcedureProtocol: "nyssipp",

  /**
   * VA Form 10-0484
   */
  VAForm100484: "va-10-0484",

  /**
   * VA Form 10-0485
   */
  VAForm100485: "va-10-0485",

  /**
   * VA Form 10-5345
   */
  VAForm105345: "va-10-5345",

  /**
   * VA Form 10-5345a
   */
  VAForm105345a: "va-10-5345a",

  /**
   * VA Form 10-5345a-MHV
   */
  VAForm105345aMHV: "va-10-5345a-mhv",

  /**
   * VA Form 10-10-10116
   */
  VAForm101010116: "va-10-10116",

  /**
   * VA Form 21-4142
   */
  VAForm214142: "va-21-4142",

  /**
   * SSA Authorization to Disclose
   */
  SSAAuthorizationtoDisclose: "ssa-827",

  /**
   * Michigan behavior and mental health consent
   */
  Michiganbehaviorandmentalhealthconsent: "dch-3927",

  /**
   * Squaxin Indian behavioral health and HIPAA consent
   */
  SquaxinIndianbehavioralhealthandHIPAAconsent: "squaxin",

  /**
   * NL LSP Permission
   */
  NLLSPPermission: "nl-lsp",

  /**
   * AT ELGA Opt-in Consent
   */
  ATELGAOptinConsent: "at-elga",

  /**
   * HHS NIH HIPAA Research Authorization
   */
  HHSNIHHIPAAResearchAuthorization: "nih-hipaa",

  /**
   * NCI Cancer Clinical Trial consent
   */
  NCICancerClinicalTrialconsent: "nci",

  /**
   * NIH Global Rare Disease Patient Registry and Data Repository consent
   */
  NIHGlobalRareDiseasePatientRegistryandDataRepositoryconsent: "nih-grdr",

  /**
   * NIH Authorization for the Release of Medical Information
   */
  NIHAuthorizationfortheReleaseofMedicalInformation: "nih-527",

  /**
   * Population origins and ancestry research consent
   */
  Populationoriginsandancestryresearchconsent: "ga4gh",

  /**
   * CH EPR Consent
   */
  CHEPRConsent: "ch-epr",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsentPolicyRuleCodesCode =
  typeof ConsentPolicyRuleCodesCode[keyof typeof ConsentPolicyRuleCodesCode];
