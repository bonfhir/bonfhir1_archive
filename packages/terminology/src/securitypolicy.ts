/**
 * Types of security policies that further specify the ActClassPolicy value set.

**Examples:**

 *  encrypt
 *  prohibit redisclosure without consent directive
 * http://terminology.hl7.org/ValueSet/v3-SecurityPolicy
 */
export const SecurityPolicyCode = {
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
export type SecurityPolicyCode =
  typeof SecurityPolicyCode[keyof typeof SecurityPolicyCode];
