/**
 * Conveys the mandated workflow action that an information custodian, receiver, or user must perform.

**Examples:**

 *  encrypt

*Usage Note:* Per OASIS XACML, an obligation is an operation specified in a policy or policy that is performed in conjunction with the enforcement of an access control decision.
 * http://terminology.hl7.org/ValueSet/v3-ObligationPolicy
 */
export const ObligationPolicyCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ObligationPolicyCode =
  typeof ObligationPolicyCode[keyof typeof ObligationPolicyCode];
