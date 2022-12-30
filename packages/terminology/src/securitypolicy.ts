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
export type SecurityPolicyCode =
  typeof SecurityPolicyCode[keyof typeof SecurityPolicyCode];
