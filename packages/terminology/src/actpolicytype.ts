/**
 * **Description:**Types of policies that further specify the ActClassPolicy value set.
 * http://terminology.hl7.org/ValueSet/v3-ActPolicyType
 */
export const ActPolicyTypeCode = {
  /**
   * ActPolicyType
   */
  _ActPolicyType: "_ActPolicyType",

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
  GRANTORCHOICE: "GRANTORCHOICE",

  /**
   * implied consent
   */
  IMPLIED: "IMPLIED",

  /**
   * implied consent with opportunity to dissent
   */
  IMPLIEDD: "IMPLIEDD",

  /**
   * no consent
   */
  NOCONSENT: "NOCONSENT",

  /**
   * opt-in
   */
  OPTIN: "OPTIN",

  /**
   * opt-in with restrictions
   */
  OPTINR: "OPTINR",

  /**
   * op-out
   */
  OPTOUT: "OPTOUT",

  /**
   * opt-out with exceptions
   */
  OPTOUTE: "OPTOUTE",

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
  GDPRCD: "GDPRCD",

  /**
   * GDPR Research Consent Directive
   */
  GDPRResearchCD: "GDPRResearchCD",

  /**
   * _ActGenericConsentDirective
   */
  _ActGenericConsentDirective: "_ActGenericConsentDirective",

  /**
   * opt-in to personal information or effect collection in a registry or repository
   */
  OIC: "OIC",

  /**
   * opt-in to personal information or effect sharing via a registry or repository
   */
  OIS: "OIS",

  /**
   * opt-out of personal information or effect collection in a registry or repository
   */
  OOC: "OOC",

  /**
   * opt-out of personal information or effect sharing via a registry or repository
   */
  OOS: "OOS",

  /**
   * _ActUSPrivacyConsentDirective
   */
  _ActUSPrivacyConsentDirective: "_ActUSPrivacyConsentDirective",

  /**
   * 42 CFR Part 2 consent directive
   */
  "42CFRPart2CD": "42CFRPart2CD",

  /**
   * Compound HIPAA Research Authorization and Informed Consent for Research
   */
  CompoundResearchCD: "CompoundResearchCD",

  /**
   * HIPAA Authorization Consent Directive
   */
  HIPAAAuthCD: "HIPAAAuthCD",

  /**
   * HIPAA Consent Directive
   */
  HIPAAConsentCD: "HIPAAConsentCD",

  /**
   * HIPAA Authorization for Disclosure for Research Consent Directive
   */
  HIPAAResearchAuthCD: "HIPAAResearchAuthCD",

  /**
   * HIPAA Right of Access Directive
   */
  HIPAAROAD: "HIPAAROAD",

  /**
   * Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes
   */
  "MDHHS-5515": "MDHHS-5515",

  /**
   * Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes-Michigan Mental Health Code
   */
  "MDHHS-5515MMHC": "MDHHS-5515MMHC",

  /**
   * Michigan Consent to Share Behavioral Health Information for Care Coordination Purposes-US 42 CFR Part 2
   */
  "MDHHS-5515Part2": "MDHHS-5515Part2",

  /**
   * Informed Assent for Research
   */
  USResearchInformedAssent: "USResearchInformedAssent",

  /**
   * Informed Consent for Research
   */
  USResearchInformedConsent: "USResearchInformedConsent",

  /**
   * Broad Consent for Research
   */
  USBroadResearchConsent: "USBroadResearchConsent",

  /**
   * _ActInformationActionPolicy
   */
  _ActInformationActionPolicy: "_ActInformationActionPolicy",

  /**
   * access information
   */
  INFOACCESS: "INFOACCESS",

  /**
   * collect information
   */
  INFOCOLLECT: "INFOCOLLECT",

  /**
   * deidentify information
   */
  INFODEIDENTIFIY: "INFODEIDENTIFIY",

  /**
   * disclose information
   */
  INFODISCLOSE: "INFODISCLOSE",

  /**
   * mask information
   */
  INFOMASK: "INFOMASK",

  /**
   * read only information
   */
  INFOREADONLY: "INFOREADONLY",

  /**
   * redact information
   */
  INFOREDACT: "INFOREDACT",

  /**
   * redisclose information
   */
  INFOREDISCLOSE: "INFOREDISCLOSE",

  /**
   * reidentify information
   */
  INFOREIDENTIFY: "INFOREIDENTIFY",

  /**
   * use information
   */
  INFOUSE: "INFOUSE",

  /**
   * _ActInformationPolicy
   */
  _ActInformationPolicy: "_ActInformationPolicy",

  /**
   * jurisdictional information policy
   */
  JurisIP: "JurisIP",

  /**
   * jurisdictional controlled unclassified information policy
   */
  JurisCUI: "JurisCUI",

  /**
   * jurisdictional de-identified information policy
   */
  JurisDEID: "JurisDEID",

  /**
   * jurisdictional limited data set
   */
  JurisLDS: "JurisLDS",

  /**
   * jurisdictional non-sensitive information policy
   */
  JurisNSI: "JurisNSI",

  /**
   * jurisdictional public information policy
   */
  JurisPI: "JurisPI",

  /**
   * jurisdictional specified controlled unclassified information policy
   */
  "JurisSP-CUI": "JurisSP-CUI",

  /**
   * jurisdictional uncontrolled unclassified information policy
   */
  JurisUUI: "JurisUUI",

  /**
   * organizational information policy
   */
  OrgIP: "OrgIP",

  /**
   * organizational basic controlled unclassified information policy
   */
  OrgCUI: "OrgCUI",

  /**
   * organizational de-identified informati)on policy
   */
  OrgDEID: "OrgDEID",

  /**
   * organizational limited data set information policy
   */
  OrgLDS: "OrgLDS",

  /**
   * organizational non-sensitive information policy
   */
  OrgNSI: "OrgNSI",

  /**
   * organizational public information policy
   */
  OrgPI: "OrgPI",

  /**
   * organizational specified controlled unclassified information policy
   */
  "OrgSP-CUI": "OrgSP-CUI",

  /**
   * organizational uncontrolled unclassified information policy
   */
  OrgUUI: "OrgUUI",

  /**
   * personal information policy
   */
  PersIP: "PersIP",

  /**
   * personal de-identified information policy
   */
  PersDEID: "PersDEID",

  /**
   * personal limited data set information policy
   */
  PersLDS: "PersLDS",

  /**
   * personal non-sensitive information policy
   */
  PersNSI: "PersNSI",

  /**
   * personal public information policy
   */
  PersPI: "PersPI",

  /**
   * ActPrivacyPolicy
   */
  _ActPrivacyPolicy: "_ActPrivacyPolicy",

  /**
   * ActConsentDirective
   */
  _ActConsentDirective: "_ActConsentDirective",

  /**
   * emergency only
   */
  EMRGONLY: "EMRGONLY",

  /**
   * notice of privacy practices
   */
  NOPP: "NOPP",

  /**
   * ActPrivacyLaw
   */
  _ActPrivacyLaw: "_ActPrivacyLaw",

  /**
   * General Data Protection Regulation
   */
  _ActGDPRPrivacyLaw: "_ActGDPRPrivacyLaw",

  /**
   * GDPR Consent
   */
  GDPRCONSENT: "GDPRCONSENT",

  /**
   * _ActUSPrivacyLaw
   */
  _ActUSPrivacyLaw: "_ActUSPrivacyLaw",

  /**
   * 42 CFR Part2
   */
  "42CFRPart2": "42CFRPart2",

  /**
   * Common Rule
   */
  CommonRule: "CommonRule",

  /**
   * HIPAA Authorization for Disclosure
   */
  HIPAAAuth: "HIPAAAuth",

  /**
   * HIPAA Consent
   */
  HIPAAConsent: "HIPAAConsent",

  /**
   * HIPAA notice of privacy practices
   */
  HIPAANOPP: "HIPAANOPP",

  /**
   * HIPAA psychotherapy notes
   */
  HIPAAPsyNotes: "HIPAAPsyNotes",

  /**
   * HIPAA Right of Access
   */
  HIPAAROA: "HIPAAROA",

  /**
   * HIPAA self-pay
   */
  HIPAASelfPay: "HIPAASelfPay",

  /**
   * Title 38 Section 7332
   */
  Title38Section7332: "Title38Section7332",

  /**
   * HIPAA Consent
   */
  "a) HIPAAConsent": "a) HIPAAConsent",

  /**
   * InformationSensitivityPolicy
   */
  _InformationSensitivityPolicy: "_InformationSensitivityPolicy",

  /**
   * ActInformationSensitivityPolicy
   */
  _ActInformationSensitivityPolicy: "_ActInformationSensitivityPolicy",

  /**
   * substance abuse information sensitivity
   */
  ETH: "ETH",

  /**
   * genetic disease information sensitivity
   */
  GDIS: "GDIS",

  /**
   * HIV/AIDS information sensitivity
   */
  HIV: "HIV",

  /**
   * military sexual trauma information sensitivity
   */
  MST: "MST",

  /**
   * pregnancy information sensitivity
   */
  PREGNANT: "PREGNANT",

  /**
   * sickle cell anemia information sensitivity
   */
  SCA: "SCA",

  /**
   * sexual assault, abuse, or domestic violence information sensitivity
   */
  SDV: "SDV",

  /**
   * sexuality and reproductive health information sensitivity
   */
  SEX: "SEX",

  /**
   * specially protected information sensitivity
   */
  SPI: "SPI",

  /**
   * behavioral health information sensitivity
   */
  BH: "BH",

  /**
   * cognitive disability information sensitivity
   */
  COGN: "COGN",

  /**
   * developmental disability information sensitivity
   */
  DVD: "DVD",

  /**
   * emotional disturbance information sensitivity
   */
  EMOTDIS: "EMOTDIS",

  /**
   * mental health information sensitivity
   */
  MH: "MH",

  /**
   * psychiatry disorder information sensitivity
   */
  PSY: "PSY",

  /**
   * psychotherapy note information sensitivity
   */
  PSYTHPN: "PSYTHPN",

  /**
   * substance use disorder information sensitivity
   */
  SUD: "SUD",

  /**
   * alcohol use disorder information sensitivity
   */
  ETHUD: "ETHUD",

  /**
   * opioid use disorder information sensitivity
   */
  OPIOIDUD: "OPIOIDUD",

  /**
   * sexually transmitted disease information sensitivity
   */
  STD: "STD",

  /**
   * taboo
   */
  TBOO: "TBOO",

  /**
   * violence information sensitivity
   */
  VIO: "VIO",

  /**
   * Identifier Sensitivity
   */
  IDS: "IDS",

  /**
   * sickle cell
   */
  SICKLE: "SICKLE",

  /**
   * EntityInformationSensitivityPolicy
   */
  _EntitySensitivityPolicyType: "_EntitySensitivityPolicyType",

  /**
   * all demographic information sensitivity
   */
  DEMO: "DEMO",

  /**
   * date of birth information sensitivity
   */
  DOB: "DOB",

  /**
   * gender and sexual orientation information sensitivity
   */
  GENDER: "GENDER",

  /**
   * living arrangement information sensitivity
   */
  LIVARG: "LIVARG",

  /**
   * marital status information sensitivity
   */
  MARST: "MARST",

  /**
   * patient location
   */
  PATLOC: "PATLOC",

  /**
   * race information sensitivity
   */
  RACE: "RACE",

  /**
   * religion information sensitivity
   */
  REL: "REL",

  /**
   * RoleInformationSensitivityPolicy
   */
  _RoleInformationSensitivityPolicy: "_RoleInformationSensitivityPolicy",

  /**
   * business information sensitivity
   */
  B: "B",

  /**
   * employer information sensitivity
   */
  EMPL: "EMPL",

  /**
   * location information sensitivity
   */
  LOCIS: "LOCIS",

  /**
   * sensitive service provider information sensitivity
   */
  SSP: "SSP",

  /**
   * adolescent information sensitivity
   */
  ADOL: "ADOL",

  /**
   * celebrity information sensitivity
   */
  CEL: "CEL",

  /**
   * celebrity information sensitivity
   */
  VIP: "VIP",

  /**
   * diagnosis information sensitivity
   */
  DIA: "DIA",

  /**
   * drug information sensitivity
   */
  DRGIS: "DRGIS",

  /**
   * employee information sensitivity
   */
  EMP: "EMP",

  /**
   * patient default information sensitivity
   */
  PDS: "PDS",

  /**
   * physician requested information sensitivity
   */
  PHY: "PHY",

  /**
   * patient requested information sensitivity
   */
  PRS: "PRS",

  /**
   * compartment
   */
  COMPT: "COMPT",

  /**
   * accountable care organization compartment
   */
  ACOCOMPT: "ACOCOMPT",

  /**
   * CDS system compartment
   */
  CDSSCOMPT: "CDSSCOMPT",

  /**
   * care team compartment
   */
  CTCOMPT: "CTCOMPT",

  /**
   * financial management compartment
   */
  FMCOMPT: "FMCOMPT",

  /**
   * human resource compartment
   */
  HRCOMPT: "HRCOMPT",

  /**
   * legitimate relationship compartment
   */
  LRCOMPT: "LRCOMPT",

  /**
   * patient administration compartment
   */
  PACOMPT: "PACOMPT",

  /**
   * research project compartment
   */
  RESCOMPT: "RESCOMPT",

  /**
   * records management compartment
   */
  RMGTCOMPT: "RMGTCOMPT",

  /**
   * trust policy
   */
  ActTrustPolicyType: "ActTrustPolicyType",

  /**
   * trust accreditation
   */
  TRSTACCRD: "TRSTACCRD",

  /**
   * trust agreement
   */
  TRSTAGRE: "TRSTAGRE",

  /**
   * trust assurance
   */
  TRSTASSUR: "TRSTASSUR",

  /**
   * trust certificate
   */
  TRSTCERT: "TRSTCERT",

  /**
   * trust framework
   */
  TRSTFWK: "TRSTFWK",

  /**
   * trust mechanism
   */
  TRSTMEC: "TRSTMEC",

  /**
   * benefit policy
   */
  COVPOL: "COVPOL",

  /**
   * security policy
   */
  SecurityPolicy: "SecurityPolicy",

  /**
   * authorization policy
   */
  AUTHPOL: "AUTHPOL",

  /**
   * access control scheme
   */
  ACCESSCONSCHEME: "ACCESSCONSCHEME",

  /**
   * delegation policy
   */
  DELEPOL: "DELEPOL",

  /**
   * obligation policy
   */
  ObligationPolicy: "ObligationPolicy",

  /**
   * anonymize
   */
  ANONY: "ANONY",

  /**
   * accounting of disclosure
   */
  AOD: "AOD",

  /**
   * audit
   */
  AUDIT: "AUDIT",

  /**
   * audit trail
   */
  AUDTR: "AUDTR",

  /**
   * comply with policy
   */
  CPLYPOL: "CPLYPOL",

  /**
   * comply with confidentiality code
   */
  CPLYCC: "CPLYCC",

  /**
   * comply with consent directive
   */
  CPLYCD: "CPLYCD",

  /**
   * comply with controlled unclassified information policy
   */
  CPLYCUI: "CPLYCUI",

  /**
   * comply with jurisdictional privacy policy
   */
  CPLYJPP: "CPLYJPP",

  /**
   * comply with jurisdictional security policy
   */
  CPLYJSP: "CPLYJSP",

  /**
   * comply with organizational privacy policy
   */
  CPLYOPP: "CPLYOPP",

  /**
   * comply with organizational security policy
   */
  CPLYOSP: "CPLYOSP",

  /**
   * declassify security label
   */
  DECLASSIFYLABEL: "DECLASSIFYLABEL",

  /**
   * deidentify
   */
  DEID: "DEID",

  /**
   * delete after use
   */
  DELAU: "DELAU",

  /**
   * downgrade security label
   */
  DOWNGRDLABEL: "DOWNGRDLABEL",

  /**
   * derive security label
   */
  DRIVLABEL: "DRIVLABEL",

  /**
   * encrypt
   */
  ENCRYPT: "ENCRYPT",

  /**
   * encrypt at rest
   */
  ENCRYPTR: "ENCRYPTR",

  /**
   * encrypt in transit
   */
  ENCRYPTT: "ENCRYPTT",

  /**
   * encrypt in use
   */
  ENCRYPTU: "ENCRYPTU",

  /**
   * human approval
   */
  HUAPRV: "HUAPRV",

  /**
   * assign security label
   */
  LABEL: "LABEL",

  /**
   * mask
   */
  MASK: "MASK",

  /**
   * minimum necessary
   */
  MINEC: "MINEC",

  /**
   * persist security label
   */
  PERSISTLABEL: "PERSISTLABEL",

  /**
   * privacy mark
   */
  PRIVMARK: "PRIVMARK",

  /**
   * CUI Mark
   */
  CUIMark: "CUIMark",

  /**
   * pseudonymize
   */
  PSEUD: "PSEUD",

  /**
   * redact
   */
  REDACT: "REDACT",

  /**
   * upgrade security label
   */
  UPGRDLABEL: "UPGRDLABEL",

  /**
   * privacy mark
   */
  PrivacyMark: "PrivacyMark",

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
  CUIHLTHP: "CUIHLTHP",

  /**
   * (CUI)
   */
  CUIP: "CUIP",

  /**
   * CUI//PRVCY
   */
  CUIPRVCY: "CUIPRVCY",

  /**
   * (CUI//PRVCY)
   */
  CUIPRVCYP: "CUIPRVCYP",

  /**
   * CUI//SP-HLTH
   */
  "CUISP-HLTH": "CUISP-HLTH",

  /**
   * (CUI//SP-HLTH)
   */
  "CUISP-HLTHP": "CUISP-HLTHP",

  /**
   * CUI//SP-PRVCY
   */
  "CUISP-PRVCY": "CUISP-PRVCY",

  /**
   * (CUI//SP-PRVCY)
   */
  "CUISP-PRVCYP": "CUISP-PRVCYP",

  /**
   * (U)
   */
  UUI: "UUI",

  /**
   * Security Label Mark
   */
  SecurityLabelMark: "SecurityLabelMark",

  /**
   * confidential mark
   */
  ConfidentialMark: "ConfidentialMark",

  /**
   * copy of original mark
   */
  COPYMark: "COPYMark",

  /**
   * deliver only to addressee mark
   */
  DeliverToAddresseeOnlyMark: "DeliverToAddresseeOnlyMark",

  /**
   * prohibition against redisclosure mark
   */
  RedisclosureProhibitionMark: "RedisclosureProhibitionMark",

  /**
   * restricted confidentiality mark
   */
  RestrictedConfidentialityMark: "RestrictedConfidentialityMark",

  /**
   * Draft Mark
   */
  DRAFTMark: "DRAFTMark",

  /**
   * refrain policy
   */
  RefrainPolicy: "RefrainPolicy",

  /**
   * no disclosure without subject authorization
   */
  NOAUTH: "NOAUTH",

  /**
   * no collection
   */
  NOCOLLECT: "NOCOLLECT",

  /**
   * no disclosure without consent directive
   */
  NODSCLCD: "NODSCLCD",

  /**
   * no disclosure without information subject's consent directive
   */
  NODSCLCDS: "NODSCLCDS",

  /**
   * no integration
   */
  NOINTEGRATE: "NOINTEGRATE",

  /**
   * no unlisted entity disclosure
   */
  NOLIST: "NOLIST",

  /**
   * no disclosure without MOU
   */
  NOMOU: "NOMOU",

  /**
   * no disclosure without organizational authorization
   */
  NOORGPOL: "NOORGPOL",

  /**
   * no disclosure to patient, family or caregivers without attending provider's authorization
   */
  NOPAT: "NOPAT",

  /**
   * no collection beyond purpose of use
   */
  NOPERSISTP: "NOPERSISTP",

  /**
   * no redisclosure without consent directive
   */
  NORDSCLCD: "NORDSCLCD",

  /**
   * no redisclosure without consent directive
   */
  NORDSLCD: "NORDSLCD",

  /**
   * no redisclosure without information subject's consent directive
   */
  NORDSCLCDS: "NORDSCLCDS",

  /**
   * no disclosure without jurisdictional authorization
   */
  NORDSCLW: "NORDSCLW",

  /**
   * no relinking
   */
  NORELINK: "NORELINK",

  /**
   * no reuse beyond purpose of use
   */
  NOREUSE: "NOREUSE",

  /**
   * no unauthorized VIP disclosure
   */
  NOVIP: "NOVIP",

  /**
   * no disclosure without originator authorization
   */
  ORCON: "ORCON",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActPolicyTypeCode =
  typeof ActPolicyTypeCode[keyof typeof ActPolicyTypeCode];
