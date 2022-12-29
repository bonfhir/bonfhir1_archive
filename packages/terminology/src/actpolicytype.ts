/**
 * **Description:**Types of policies that further specify the ActClassPolicy value set.
 * http://terminology.hl7.org/ValueSet/v3-ActPolicyType
 */
export const ActPolicyTypeCode = {
  /**
   * ActPolicyType
   */
  ActPolicyType: "_ActPolicyType",

  /**
   * _ActConsent
   */
  _ActConsent: "_ActConsent",

  /**
   * _ActDecision
   */
  _ActDecision: "_ActDecision",

  /**
   * grantor choice
   */
  grantorchoice: "GRANTORCHOICE",

  /**
   * implied consent
   */
  impliedconsent: "IMPLIED",

  /**
   * implied consent with opportunity to dissent
   */
  impliedconsentwithopportunitytodissent: "IMPLIEDD",

  /**
   * no consent
   */
  noconsent: "NOCONSENT",

  /**
   * opt-in
   */
  optin: "OPTIN",

  /**
   * opt-in with restrictions
   */
  optinwithrestrictions: "OPTINR",

  /**
   * op-out
   */
  opout: "OPTOUT",

  /**
   * opt-out with exceptions
   */
  optoutwithexceptions: "OPTOUTE",

  /**
   * _ActPrivacyConsentDirective
   */
  _ActPrivacyConsentDirective: "_ActPrivacyConsentDirective",

  /**
   * _ActGDPRConsentDirective
   */
  _ActGDPRConsentDirective: "_ActGDPRConsentDirective",

  /**
   * GDPR Consent Directive
   */
  GDPRConsentDirective: "GDPRCD",

  /**
   * GDPR Research Consent Directive
   */
  GDPRResearchConsentDirective: "GDPRResearchCD",

  /**
   * _ActGenericConsentDirective
   */
  _ActGenericConsentDirective: "_ActGenericConsentDirective",

  /**
   * opt-in to personal information or effect collection in a registry or repository
   */
  optintopersonalinformationoreffectcollectioninaregistryorrepository: "OIC",

  /**
   * opt-in to personal information or effect sharing via a registry or repository
   */
  optintopersonalinformationoreffectsharingviaaregistryorrepository: "OIS",

  /**
   * opt-out of personal information or effect collection in a registry or repository
   */
  optoutofpersonalinformationoreffectcollectioninaregistryorrepository: "OOC",

  /**
   * opt-out of personal information or effect sharing via a registry or repository
   */
  optoutofpersonalinformationoreffectsharingviaaregistryorrepository: "OOS",

  /**
   * _ActUSPrivacyConsentDirective
   */
  _ActUSPrivacyConsentDirective: "_ActUSPrivacyConsentDirective",

  /**
   * 42 CFR Part 2 consent directive
   */
  FortyTwoCFRPart2consentdirective: "42CFRPart2CD",

  /**
   * Compound HIPAA Research Authorization and Informed Consent for Research
   */
  CompoundHIPAAResearchAuthorizationandInformedConsentforResearch:
    "CompoundResearchCD",

  /**
   * HIPAA Authorization Consent Directive
   */
  HIPAAAuthorizationConsentDirective: "HIPAAAuthCD",

  /**
   * HIPAA Consent Directive
   */
  HIPAAConsentDirective: "HIPAAConsentCD",

  /**
   * HIPAA Authorization for Disclosure for Research Consent Directive
   */
  HIPAAAuthorizationforDisclosureforResearchConsentDirective:
    "HIPAAResearchAuthCD",

  /**
   * HIPAA Right of Access Directive
   */
  HIPAARightofAccessDirective: "HIPAAROAD",

  /**
   * Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes
   */
  MichiganConsenttoShareBehavioralHealthInformationforCareCoordinationPurposes:
    "MDHHS-5515",

  /**
   * Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes-Michigan Mental Health Code
   */
  MichiganConsenttoShareBehavioralHealthInformationforCareCoordinationPurposesMichiganMentalHealthCode:
    "MDHHS-5515MMHC",

  /**
   * Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes-US 42 CFR Part 2
   */
  MichiganConsenttoShareBehavioralHealthInformationforCareCoordinationPurposesUS42CFRPart2:
    "MDHHS-5515Part2",

  /**
   * Informed Assent for Research
   */
  InformedAssentforResearch: "USResearchInformedAssent",

  /**
   * Informed Consent for Research
   */
  InformedConsentforResearch: "USResearchInformedConsent",

  /**
   * Broad Consent for Research
   */
  BroadConsentforResearch: "USBroadResearchConsent",

  /**
   * _ActInformationActionPolicy
   */
  _ActInformationActionPolicy: "_ActInformationActionPolicy",

  /**
   * access information
   */
  accessinformation: "INFOACCESS",

  /**
   * collect information
   */
  collectinformation: "INFOCOLLECT",

  /**
   * deidentify information
   */
  deidentifyinformation: "INFODEIDENTIFIY",

  /**
   * disclose information
   */
  discloseinformation: "INFODISCLOSE",

  /**
   * mask information
   */
  maskinformation: "INFOMASK",

  /**
   * read only information
   */
  readonlyinformation: "INFOREADONLY",

  /**
   * redact information
   */
  redactinformation: "INFOREDACT",

  /**
   * redisclose information
   */
  rediscloseinformation: "INFOREDISCLOSE",

  /**
   * reidentify information
   */
  reidentifyinformation: "INFOREIDENTIFY",

  /**
   * use information
   */
  useinformation: "INFOUSE",

  /**
   * _ActInformationPolicy
   */
  _ActInformationPolicy: "_ActInformationPolicy",

  /**
   * jurisdictional information policy
   */
  jurisdictionalinformationpolicy: "JurisIP",

  /**
   * jurisdictional controlled unclassified information policy
   */
  jurisdictionalcontrolledunclassifiedinformationpolicy: "JurisCUI",

  /**
   * jurisdictional de-identified information policy
   */
  jurisdictionaldeidentifiedinformationpolicy: "JurisDEID",

  /**
   * jurisdictional limited data set
   */
  jurisdictionallimiteddataset: "JurisLDS",

  /**
   * jurisdictional non-sensitive information policy
   */
  jurisdictionalnonsensitiveinformationpolicy: "JurisNSI",

  /**
   * jurisdictional public information policy
   */
  jurisdictionalpublicinformationpolicy: "JurisPI",

  /**
   * jurisdictional specified controlled unclassified information policy
   */
  jurisdictionalspecifiedcontrolledunclassifiedinformationpolicy: "JurisSP-CUI",

  /**
   * jurisdictional uncontrolled unclassified information policy
   */
  jurisdictionaluncontrolledunclassifiedinformationpolicy: "JurisUUI",

  /**
   * organizational information policy
   */
  organizationalinformationpolicy: "OrgIP",

  /**
   * organizational basic controlled unclassified information policy
   */
  organizationalbasiccontrolledunclassifiedinformationpolicy: "OrgCUI",

  /**
   * organizational de-identified informati)on policy
   */
  organizationaldeidentifiedinformationpolicy: "OrgDEID",

  /**
   * organizational limited data set information policy
   */
  organizationallimiteddatasetinformationpolicy: "OrgLDS",

  /**
   * organizational non-sensitive information policy
   */
  organizationalnonsensitiveinformationpolicy: "OrgNSI",

  /**
   * organizational public information policy
   */
  organizationalpublicinformationpolicy: "OrgPI",

  /**
   * organizational specified controlled unclassified information policy
   */
  organizationalspecifiedcontrolledunclassifiedinformationpolicy: "OrgSP-CUI",

  /**
   * organizational uncontrolled unclassified information policy
   */
  organizationaluncontrolledunclassifiedinformationpolicy: "OrgUUI",

  /**
   * personal information policy
   */
  personalinformationpolicy: "PersIP",

  /**
   * personal de-identified information policy
   */
  personaldeidentifiedinformationpolicy: "PersDEID",

  /**
   * personal limited data set information policy
   */
  personallimiteddatasetinformationpolicy: "PersLDS",

  /**
   * personal non-sensitive information policy
   */
  personalnonsensitiveinformationpolicy: "PersNSI",

  /**
   * personal public information policy
   */
  personalpublicinformationpolicy: "PersPI",

  /**
   * ActPrivacyPolicy
   */
  ActPrivacyPolicy: "_ActPrivacyPolicy",

  /**
   * ActConsentDirective
   */
  ActConsentDirective: "_ActConsentDirective",

  /**
   * emergency only
   */
  emergencyonly: "EMRGONLY",

  /**
   * notice of privacy practices
   */
  noticeofprivacypractices: "NOPP",

  /**
   * ActPrivacyLaw
   */
  ActPrivacyLaw: "_ActPrivacyLaw",

  /**
   * General Data Protection Regulation
   */
  GeneralDataProtectionRegulation: "_ActGDPRPrivacyLaw",

  /**
   * GDPR Consent
   */
  GDPRConsent: "GDPRCONSENT",

  /**
   * _ActUSPrivacyLaw
   */
  _ActUSPrivacyLaw: "_ActUSPrivacyLaw",

  /**
   * 42 CFR Part2
   */
  FortyTwoCFRPart2: "42CFRPart2",

  /**
   * Common Rule
   */
  CommonRule: "CommonRule",

  /**
   * HIPAA Authorization for Disclosure
   */
  HIPAAAuthorizationforDisclosure: "HIPAAAuth",

  /**
   * HIPAA Consent
   */
  HIPAAConsent: "HIPAAConsent",

  /**
   * HIPAA notice of privacy practices
   */
  HIPAAnoticeofprivacypractices: "HIPAANOPP",

  /**
   * HIPAA psychotherapy notes
   */
  HIPAApsychotherapynotes: "HIPAAPsyNotes",

  /**
   * HIPAA Right of Access
   */
  HIPAARightofAccess: "HIPAAROA",

  /**
   * HIPAA self-pay
   */
  HIPAAselfpay: "HIPAASelfPay",

  /**
   * Title 38 Section 7332
   */
  Title38Section7332: "Title38Section7332",

  /**
   * HIPAA Consent
   */
  HIPAAConsent: "a) HIPAAConsent",

  /**
   * InformationSensitivityPolicy
   */
  InformationSensitivityPolicy: "_InformationSensitivityPolicy",

  /**
   * ActInformationSensitivityPolicy
   */
  ActInformationSensitivityPolicy: "_ActInformationSensitivityPolicy",

  /**
   * substance abuse information sensitivity
   */
  substanceabuseinformationsensitivity: "ETH",

  /**
   * genetic disease information sensitivity
   */
  geneticdiseaseinformationsensitivity: "GDIS",

  /**
   * HIV/AIDS information sensitivity
   */
  HIVAIDSinformationsensitivity: "HIV",

  /**
   * military sexual trauma information sensitivity
   */
  militarysexualtraumainformationsensitivity: "MST",

  /**
   * pregnancy information sensitivity
   */
  pregnancyinformationsensitivity: "PREGNANT",

  /**
   * sickle cell anemia information sensitivity
   */
  sicklecellanemiainformationsensitivity: "SCA",

  /**
   * sexual assault, abuse, or domestic violence information sensitivity
   */
  sexualassaultabuseordomesticviolenceinformationsensitivity: "SDV",

  /**
   * sexuality and reproductive health information sensitivity
   */
  sexualityandreproductivehealthinformationsensitivity: "SEX",

  /**
   * specially protected information sensitivity
   */
  speciallyprotectedinformationsensitivity: "SPI",

  /**
   * behavioral health information sensitivity
   */
  behavioralhealthinformationsensitivity: "BH",

  /**
   * cognitive disability information sensitivity
   */
  cognitivedisabilityinformationsensitivity: "COGN",

  /**
   * developmental disability information sensitivity
   */
  developmentaldisabilityinformationsensitivity: "DVD",

  /**
   * emotional disturbance information sensitivity
   */
  emotionaldisturbanceinformationsensitivity: "EMOTDIS",

  /**
   * mental health information sensitivity
   */
  mentalhealthinformationsensitivity: "MH",

  /**
   * psychiatry disorder information sensitivity
   */
  psychiatrydisorderinformationsensitivity: "PSY",

  /**
   * psychotherapy note information sensitivity
   */
  psychotherapynoteinformationsensitivity: "PSYTHPN",

  /**
   * substance use disorder information sensitivity
   */
  substanceusedisorderinformationsensitivity: "SUD",

  /**
   * alcohol use disorder information sensitivity
   */
  alcoholusedisorderinformationsensitivity: "ETHUD",

  /**
   * opioid use disorder information sensitivity
   */
  opioidusedisorderinformationsensitivity: "OPIOIDUD",

  /**
   * sexually transmitted disease information sensitivity
   */
  sexuallytransmitteddiseaseinformationsensitivity: "STD",

  /**
   * taboo
   */
  taboo: "TBOO",

  /**
   * violence information sensitivity
   */
  violenceinformationsensitivity: "VIO",

  /**
   * Identifier Sensitivity
   */
  IdentifierSensitivity: "IDS",

  /**
   * sickle cell
   */
  sicklecell: "SICKLE",

  /**
   * EntityInformationSensitivityPolicy
   */
  EntityInformationSensitivityPolicy: "_EntitySensitivityPolicyType",

  /**
   * all demographic information sensitivity
   */
  alldemographicinformationsensitivity: "DEMO",

  /**
   * date of birth information sensitivity
   */
  dateofbirthinformationsensitivity: "DOB",

  /**
   * gender and sexual orientation information sensitivity
   */
  genderandsexualorientationinformationsensitivity: "GENDER",

  /**
   * living arrangement information sensitivity
   */
  livingarrangementinformationsensitivity: "LIVARG",

  /**
   * marital status information sensitivity
   */
  maritalstatusinformationsensitivity: "MARST",

  /**
   * patient location
   */
  patientlocation: "PATLOC",

  /**
   * race information sensitivity
   */
  raceinformationsensitivity: "RACE",

  /**
   * religion information sensitivity
   */
  religioninformationsensitivity: "REL",

  /**
   * RoleInformationSensitivityPolicy
   */
  RoleInformationSensitivityPolicy: "_RoleInformationSensitivityPolicy",

  /**
   * business information sensitivity
   */
  businessinformationsensitivity: "B",

  /**
   * employer information sensitivity
   */
  employerinformationsensitivity: "EMPL",

  /**
   * location information sensitivity
   */
  locationinformationsensitivity: "LOCIS",

  /**
   * sensitive service provider information sensitivity
   */
  sensitiveserviceproviderinformationsensitivity: "SSP",

  /**
   * adolescent information sensitivity
   */
  adolescentinformationsensitivity: "ADOL",

  /**
   * celebrity information sensitivity
   */
  celebrityinformationsensitivity: "CEL",

  /**
   * celebrity information sensitivity
   */
  celebrityinformationsensitivity: "VIP",

  /**
   * diagnosis information sensitivity
   */
  diagnosisinformationsensitivity: "DIA",

  /**
   * drug information sensitivity
   */
  druginformationsensitivity: "DRGIS",

  /**
   * employee information sensitivity
   */
  employeeinformationsensitivity: "EMP",

  /**
   * patient default information sensitivity
   */
  patientdefaultinformationsensitivity: "PDS",

  /**
   * physician requested information sensitivity
   */
  physicianrequestedinformationsensitivity: "PHY",

  /**
   * patient requested information sensitivity
   */
  patientrequestedinformationsensitivity: "PRS",

  /**
   * compartment
   */
  compartment: "COMPT",

  /**
   * accountable care organization compartment
   */
  accountablecareorganizationcompartment: "ACOCOMPT",

  /**
   * CDS system compartment
   */
  CDSsystemcompartment: "CDSSCOMPT",

  /**
   * care team compartment
   */
  careteamcompartment: "CTCOMPT",

  /**
   * financial management compartment
   */
  financialmanagementcompartment: "FMCOMPT",

  /**
   * human resource compartment
   */
  humanresourcecompartment: "HRCOMPT",

  /**
   * legitimate relationship compartment
   */
  legitimaterelationshipcompartment: "LRCOMPT",

  /**
   * patient administration compartment
   */
  patientadministrationcompartment: "PACOMPT",

  /**
   * research project compartment
   */
  researchprojectcompartment: "RESCOMPT",

  /**
   * records management compartment
   */
  recordsmanagementcompartment: "RMGTCOMPT",

  /**
   * trust policy
   */
  trustpolicy: "ActTrustPolicyType",

  /**
   * trust accreditation
   */
  trustaccreditation: "TRSTACCRD",

  /**
   * trust agreement
   */
  trustagreement: "TRSTAGRE",

  /**
   * trust assurance
   */
  trustassurance: "TRSTASSUR",

  /**
   * trust certificate
   */
  trustcertificate: "TRSTCERT",

  /**
   * trust framework
   */
  trustframework: "TRSTFWK",

  /**
   * trust mechanism
   */
  trustmechanism: "TRSTMEC",

  /**
   * benefit policy
   */
  benefitpolicy: "COVPOL",

  /**
   * security policy
   */
  securitypolicy: "SecurityPolicy",

  /**
   * authorization policy
   */
  authorizationpolicy: "AUTHPOL",

  /**
   * access control scheme
   */
  accesscontrolscheme: "ACCESSCONSCHEME",

  /**
   * delegation policy
   */
  delegationpolicy: "DELEPOL",

  /**
   * obligation policy
   */
  obligationpolicy: "ObligationPolicy",

  /**
   * anonymize
   */
  anonymize: "ANONY",

  /**
   * accounting of disclosure
   */
  accountingofdisclosure: "AOD",

  /**
   * audit
   */
  audit: "AUDIT",

  /**
   * audit trail
   */
  audittrail: "AUDTR",

  /**
   * comply with policy
   */
  complywithpolicy: "CPLYPOL",

  /**
   * comply with confidentiality code
   */
  complywithconfidentialitycode: "CPLYCC",

  /**
   * comply with consent directive
   */
  complywithconsentdirective: "CPLYCD",

  /**
   * comply with controlled unclassified information policy
   */
  complywithcontrolledunclassifiedinformationpolicy: "CPLYCUI",

  /**
   * comply with jurisdictional privacy policy
   */
  complywithjurisdictionalprivacypolicy: "CPLYJPP",

  /**
   * comply with jurisdictional security policy
   */
  complywithjurisdictionalsecuritypolicy: "CPLYJSP",

  /**
   * comply with organizational privacy policy
   */
  complywithorganizationalprivacypolicy: "CPLYOPP",

  /**
   * comply with organizational security policy
   */
  complywithorganizationalsecuritypolicy: "CPLYOSP",

  /**
   * declassify security label
   */
  declassifysecuritylabel: "DECLASSIFYLABEL",

  /**
   * deidentify
   */
  deidentify: "DEID",

  /**
   * delete after use
   */
  deleteafteruse: "DELAU",

  /**
   * downgrade security label
   */
  downgradesecuritylabel: "DOWNGRDLABEL",

  /**
   * derive security label
   */
  derivesecuritylabel: "DRIVLABEL",

  /**
   * encrypt
   */
  encrypt: "ENCRYPT",

  /**
   * encrypt at rest
   */
  encryptatrest: "ENCRYPTR",

  /**
   * encrypt in transit
   */
  encryptintransit: "ENCRYPTT",

  /**
   * encrypt in use
   */
  encryptinuse: "ENCRYPTU",

  /**
   * human approval
   */
  humanapproval: "HUAPRV",

  /**
   * assign security label
   */
  assignsecuritylabel: "LABEL",

  /**
   * mask
   */
  mask: "MASK",

  /**
   * minimum necessary
   */
  minimumnecessary: "MINEC",

  /**
   * persist security label
   */
  persistsecuritylabel: "PERSISTLABEL",

  /**
   * privacy mark
   */
  privacymark: "PRIVMARK",

  /**
   * CUI Mark
   */
  CUIMark: "CUIMark",

  /**
   * pseudonymize
   */
  pseudonymize: "PSEUD",

  /**
   * redact
   */
  redact: "REDACT",

  /**
   * upgrade security label
   */
  upgradesecuritylabel: "UPGRDLABEL",

  /**
   * privacy mark
   */
  privacymark: "PrivacyMark",

  /**
   * ControlledUnclassifiedInformation
   */
  ControlledUnclassifiedInformation: "ControlledUnclassifiedInformation",

  /**
   * CONTROLLED
   */
  CONTROLLED: "CONTROLLED",

  /**
   * CUI
   */
  CUI: "CUI",

  /**
   * CUI//HLTH
   */
  CUIHLTH: "CUIHLTH",

  /**
   * (CUI//HLTH)
   */
  CUIHLTH: "CUIHLTHP",

  /**
   * (CUI)
   */
  CUI: "CUIP",

  /**
   * CUI//PRVCY
   */
  CUIPRVCY: "CUIPRVCY",

  /**
   * (CUI//PRVCY)
   */
  CUIPRVCY: "CUIPRVCYP",

  /**
   * CUI//SP-HLTH
   */
  CUISPHLTH: "CUISP-HLTH",

  /**
   * (CUI//SP-HLTH)
   */
  CUISPHLTH: "CUISP-HLTHP",

  /**
   * CUI//SP-PRVCY
   */
  CUISPPRVCY: "CUISP-PRVCY",

  /**
   * (CUI//SP-PRVCY)
   */
  CUISPPRVCY: "CUISP-PRVCYP",

  /**
   * (U)
   */
  U: "UUI",

  /**
   * Security Label Mark
   */
  SecurityLabelMark: "SecurityLabelMark",

  /**
   * confidential mark
   */
  confidentialmark: "ConfidentialMark",

  /**
   * copy of original mark
   */
  copyoforiginalmark: "COPYMark",

  /**
   * deliver only to addressee mark
   */
  deliveronlytoaddresseemark: "DeliverToAddresseeOnlyMark",

  /**
   * prohibition against redisclosure mark
   */
  prohibitionagainstredisclosuremark: "RedisclosureProhibitionMark",

  /**
   * restricted confidentiality mark
   */
  restrictedconfidentialitymark: "RestrictedConfidentialityMark",

  /**
   * Draft Mark
   */
  DraftMark: "DRAFTMark",

  /**
   * refrain policy
   */
  refrainpolicy: "RefrainPolicy",

  /**
   * no disclosure without subject authorization
   */
  nodisclosurewithoutsubjectauthorization: "NOAUTH",

  /**
   * no collection
   */
  nocollection: "NOCOLLECT",

  /**
   * no disclosure without consent directive
   */
  nodisclosurewithoutconsentdirective: "NODSCLCD",

  /**
   * no disclosure without information subject's consent directive
   */
  nodisclosurewithoutinformationsubjectsconsentdirective: "NODSCLCDS",

  /**
   * no integration
   */
  nointegration: "NOINTEGRATE",

  /**
   * no unlisted entity disclosure
   */
  nounlistedentitydisclosure: "NOLIST",

  /**
   * no disclosure without MOU
   */
  nodisclosurewithoutMOU: "NOMOU",

  /**
   * no disclosure without organizational authorization
   */
  nodisclosurewithoutorganizationalauthorization: "NOORGPOL",

  /**
   * no disclosure to patient, family or caregivers without attending provider's authorization
   */
  nodisclosuretopatientfamilyorcaregiverswithoutattendingprovidersauthorization:
    "NOPAT",

  /**
   * no collection beyond purpose of use
   */
  nocollectionbeyondpurposeofuse: "NOPERSISTP",

  /**
   * no redisclosure without consent directive
   */
  noredisclosurewithoutconsentdirective: "NORDSCLCD",

  /**
   * no redisclosure without consent directive
   */
  noredisclosurewithoutconsentdirective: "NORDSLCD",

  /**
   * no redisclosure without information subject's consent directive
   */
  noredisclosurewithoutinformationsubjectsconsentdirective: "NORDSCLCDS",

  /**
   * no disclosure without jurisdictional authorization
   */
  nodisclosurewithoutjurisdictionalauthorization: "NORDSCLW",

  /**
   * no relinking
   */
  norelinking: "NORELINK",

  /**
   * no reuse beyond purpose of use
   */
  noreusebeyondpurposeofuse: "NOREUSE",

  /**
   * no unauthorized VIP disclosure
   */
  nounauthorizedVIPdisclosure: "NOVIP",

  /**
   * no disclosure without originator authorization
   */
  nodisclosurewithoutoriginatorauthorization: "ORCON",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActPolicyTypeCode =
  typeof ActPolicyTypeCode[keyof typeof ActPolicyTypeCode];
