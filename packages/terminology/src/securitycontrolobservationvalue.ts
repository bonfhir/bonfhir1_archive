/**
 * Security observation values used to indicate security control metadata. V:SecurityControl is the union of V:SecurityPolicy, V:ObligationPolicy, V:RefrainPolicy, V:PurposeOfUse, and V:GeneralPurpose of Use, V:PrivacyMark, V:SecurityLabelMark, and V:ControlledUnclassifiedInformation used to populate the SecurityControlObservationValue attribute in order to convey one or more nonhierarchical security control metadata dictating handling caveats including, purpose of use, obligation policy, refrain policy, dissemination controls and privacy marks to which a custodian or receiver is required to comply.
 * http://terminology.hl7.org/ValueSet/v3-SecurityControlObservationValue
 */
export const SecurityControlObservationValueCode = {
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
   * ActCoverageAssessmentObservationValue
   */
  _ActCoverageAssessmentObservationValue:
    "_ActCoverageAssessmentObservationValue",

  /**
   * ActFinancialStatusObservationValue
   */
  _ActFinancialStatusObservationValue: "_ActFinancialStatusObservationValue",

  /**
   * asset
   */
  ASSET: "ASSET",

  /**
   * annuity
   */
  ANNUITY: "ANNUITY",

  /**
   * real property
   */
  PROP: "PROP",

  /**
   * retirement investment account
   */
  RETACCT: "RETACCT",

  /**
   * trust
   */
  TRUST: "TRUST",

  /**
   * income
   */
  INCOME: "INCOME",

  /**
   * child support
   */
  CHILD: "CHILD",

  /**
   * disability pay
   */
  DISABL: "DISABL",

  /**
   * investment income
   */
  INVEST: "INVEST",

  /**
   * paid employment
   */
  PAY: "PAY",

  /**
   * retirement pay
   */
  RETIRE: "RETIRE",

  /**
   * spousal or partner support
   */
  SPOUSAL: "SPOUSAL",

  /**
   * income supplement
   */
  SUPPLE: "SUPPLE",

  /**
   * tax obligation
   */
  TAX: "TAX",

  /**
   * living expense
   */
  LIVEXP: "LIVEXP",

  /**
   * clothing expense
   */
  CLOTH: "CLOTH",

  /**
   * food expense
   */
  FOOD: "FOOD",

  /**
   * health expense
   */
  HEALTH: "HEALTH",

  /**
   * household expense
   */
  HOUSE: "HOUSE",

  /**
   * legal expense
   */
  LEGAL: "LEGAL",

  /**
   * mortgage
   */
  MORTG: "MORTG",

  /**
   * rent
   */
  RENT: "RENT",

  /**
   * sundry expense
   */
  SUNDRY: "SUNDRY",

  /**
   * transportation expense
   */
  TRANS: "TRANS",

  /**
   * utility expense
   */
  UTIL: "UTIL",

  /**
   * eligibility indicator
   */
  ELSTAT: "ELSTAT",

  /**
   * adoption document
   */
  ADOPT: "ADOPT",

  /**
   * birth certificate
   */
  BTHCERT: "BTHCERT",

  /**
   * creditable coverage document
   */
  CCOC: "CCOC",

  /**
   * driver license
   */
  DRLIC: "DRLIC",

  /**
   * foster child document
   */
  FOSTER: "FOSTER",

  /**
   * program or policy member
   */
  MEMBER: "MEMBER",

  /**
   * military identification
   */
  MIL: "MIL",

  /**
   * marriage certificate
   */
  MRGCERT: "MRGCERT",

  /**
   * passport
   */
  PASSPORT: "PASSPORT",

  /**
   * student enrollment
   */
  STUDENRL: "STUDENRL",

  /**
   * health status
   */
  HLSTAT: "HLSTAT",

  /**
   * disabled
   */
  DISABLE: "DISABLE",

  /**
   * drug use
   */
  DRUG: "DRUG",

  /**
   * IV drug use
   */
  IVDRG: "IVDRG",

  /**
   * pregnant
   */
  PGNT: "PGNT",

  /**
   * living dependency
   */
  LIVDEP: "LIVDEP",

  /**
   * relative dependent
   */
  RELDEP: "RELDEP",

  /**
   * spouse dependent
   */
  SPSDEP: "SPSDEP",

  /**
   * unrelated person dependent
   */
  URELDEP: "URELDEP",

  /**
   * living situation
   */
  LIVSIT: "LIVSIT",

  /**
   * alone
   */
  ALONE: "ALONE",

  /**
   * dependent children
   */
  DEPCHD: "DEPCHD",

  /**
   * dependent spouse
   */
  DEPSPS: "DEPSPS",

  /**
   * dependent young children
   */
  DEPYGCHD: "DEPYGCHD",

  /**
   * live with family
   */
  FAM: "FAM",

  /**
   * relative
   */
  RELAT: "RELAT",

  /**
   * spouse only
   */
  SPS: "SPS",

  /**
   * unrelated person
   */
  UNREL: "UNREL",

  /**
   * socio economic status
   */
  SOECSTAT: "SOECSTAT",

  /**
   * abuse victim
   */
  ABUSE: "ABUSE",

  /**
   * homeless
   */
  HMLESS: "HMLESS",

  /**
   * illegal immigrant
   */
  ILGIM: "ILGIM",

  /**
   * incarcerated
   */
  INCAR: "INCAR",

  /**
   * probation
   */
  PROB: "PROB",

  /**
   * refugee
   */
  REFUG: "REFUG",

  /**
   * unemployed
   */
  UNEMPL: "UNEMPL",

  /**
   * AllergyTestValue
   */
  _AllergyTestValue: "_AllergyTestValue",

  /**
   * no reaction
   */
  A0: "A0",

  /**
   * minimal reaction
   */
  A1: "A1",

  /**
   * mild reaction
   */
  A2: "A2",

  /**
   * moderate reaction
   */
  A3: "A3",

  /**
   * severe reaction
   */
  A4: "A4",

  /**
   * CompositeMeasureScoring
   */
  _CompositeMeasureScoring: "_CompositeMeasureScoring",

  /**
   * All-or-nothing Scoring
   */
  ALLORNONESCR: "ALLORNONESCR",

  /**
   * Linear Scoring
   */
  LINEARSCR: "LINEARSCR",

  /**
   * Opportunity Scoring
   */
  OPPORSCR: "OPPORSCR",

  /**
   * Weighted Scoring
   */
  WEIGHTSCR: "WEIGHTSCR",

  /**
   * CoverageLimitObservationValue
   */
  _CoverageLimitObservationValue: "_CoverageLimitObservationValue",

  /**
   * CoverageLevelObservationValue
   */
  _CoverageLevelObservationValue: "_CoverageLevelObservationValue",

  /**
   * adult child
   */
  ADC: "ADC",

  /**
   * child
   */
  CHD: "CHD",

  /**
   * dependent
   */
  DEP: "DEP",

  /**
   * domestic partner
   */
  DP: "DP",

  /**
   * employee
   */
  ECH: "ECH",

  /**
   * family coverage
   */
  FLY: "FLY",

  /**
   * individual
   */
  IND: "IND",

  /**
   * same sex partner
   */
  SSP: "SSP",

  /**
   * CoverageItemLimitObservationValue
   */
  _CoverageItemLimitObservationValue: "_CoverageItemLimitObservationValue",

  /**
   * CoverageLocationLimitObservationValue
   */
  _CoverageLocationLimitObservationValue:
    "_CoverageLocationLimitObservationValue",

  /**
   * CriticalityObservationValue
   */
  _CriticalityObservationValue: "_CriticalityObservationValue",

  /**
   * high criticality
   */
  CRITH: "CRITH",

  /**
   * low criticality
   */
  CRITL: "CRITL",

  /**
   * unable to assess criticality
   */
  CRITU: "CRITU",

  /**
   * _EmploymentStatus
   */
  _EmploymentStatus: "_EmploymentStatus",

  /**
   * Employed
   */
  Employed: "Employed",

  /**
   * Not In Labor Force
   */
  NotInLaborForce: "NotInLaborForce",

  /**
   * Unemployed
   */
  Unemployed: "Unemployed",

  /**
   * GeneticObservationValue
   */
  _GeneticObservationValue: "_GeneticObservationValue",

  /**
   * HOMO
   */
  Homozygote: "Homozygote",

  /**
   * Measurement Improvement Notation
   */
  _MeasurementImprovementNotation: "_MeasurementImprovementNotation",

  /**
   * Decreased score indicates improvement
   */
  DecrIsImp: "DecrIsImp",

  /**
   * Increased score indicates improvement
   */
  IncrIsImp: "IncrIsImp",

  /**
   * ObservationMeasureScoring
   */
  _ObservationMeasureScoring: "_ObservationMeasureScoring",

  /**
   * cohort measure scoring
   */
  COHORT: "COHORT",

  /**
   * continuous variable measure scoring
   */
  CONTVAR: "CONTVAR",

  /**
   * proportion measure scoring
   */
  PROPOR: "PROPOR",

  /**
   * ratio measure scoring
   */
  RATIO: "RATIO",

  /**
   * ObservationMeasureType
   */
  _ObservationMeasureType: "_ObservationMeasureType",

  /**
   * composite measure type
   */
  COMPOSITE: "COMPOSITE",

  /**
   * efficiency measure type
   */
  EFFICIENCY: "EFFICIENCY",

  /**
   * experience measure type
   */
  EXPERIENCE: "EXPERIENCE",

  /**
   * outcome measure type
   */
  OUTCOME: "OUTCOME",

  /**
   * intermediate clinical outcome measure
   */
  "INTERM-OM": "INTERM-OM",

  /**
   * patient reported outcome performance measure
   */
  "PRO-PM": "PRO-PM",

  /**
   * process measure type
   */
  PROCESS: "PROCESS",

  /**
   * appropriate use process measure
   */
  APPROPRIATE: "APPROPRIATE",

  /**
   * resource use measure type
   */
  RESOURCE: "RESOURCE",

  /**
   * structure measure type
   */
  STRUCTURE: "STRUCTURE",

  /**
   * ObservationPopulationInclusion
   */
  _ObservationPopulationInclusion: "_ObservationPopulationInclusion",

  /**
   * denominator exclusions
   */
  DENEX: "DENEX",

  /**
   * denominator exceptions
   */
  DENEXCEP: "DENEXCEP",

  /**
   * denominator
   */
  DENOM: "DENOM",

  /**
   * initial population
   */
  IP: "IP",

  /**
   * initial patient population
   */
  IPP: "IPP",

  /**
   * measure population
   */
  MSRPOPL: "MSRPOPL",

  /**
   * numerator
   */
  NUMER: "NUMER",

  /**
   * numerator exclusions
   */
  NUMEX: "NUMEX",

  /**
   * PartialCompletionScale
   */
  _PartialCompletionScale: "_PartialCompletionScale",

  /**
   * Great extent
   */
  G: "G",

  /**
   * Large extent
   */
  LE: "LE",

  /**
   * Medium extent
   */
  ME: "ME",

  /**
   * Minimal extent
   */
  MI: "MI",

  /**
   * None
   */
  N: "N",

  /**
   * Some extent
   */
  S: "S",

  /**
   * SecurityObservationValue
   */
  _SecurityObservationValue: "_SecurityObservationValue",

  /**
   * security category
   */
  _SECCATOBV: "_SECCATOBV",

  /**
   * security classification
   */
  _SECCLASSOBV: "_SECCLASSOBV",

  /**
   * security control
   */
  _SECCONOBV: "_SECCONOBV",

  /**
   * security integrity
   */
  _SECINTOBV: "_SECINTOBV",

  /**
   * alteration integrity
   */
  _SECALTINTOBV: "_SECALTINTOBV",

  /**
   * abstracted
   */
  ABSTRED: "ABSTRED",

  /**
   * aggregated
   */
  AGGRED: "AGGRED",

  /**
   * anonymized
   */
  ANONYED: "ANONYED",

  /**
   * mapped
   */
  MAPPED: "MAPPED",

  /**
   * masked
   */
  MASKED: "MASKED",

  /**
   * pseudonymized
   */
  PSEUDED: "PSEUDED",

  /**
   * redacted
   */
  REDACTED: "REDACTED",

  /**
   * subsetted
   */
  SUBSETTED: "SUBSETTED",

  /**
   * syntactic transform
   */
  SYNTAC: "SYNTAC",

  /**
   * translated
   */
  TRSLT: "TRSLT",

  /**
   * versioned
   */
  VERSIONED: "VERSIONED",

  /**
   * data integrity
   */
  _SECDATINTOBV: "_SECDATINTOBV",

  /**
   * cryptographic hash function
   */
  CRYTOHASH: "CRYTOHASH",

  /**
   * digital signature
   */
  DIGSIG: "DIGSIG",

  /**
   * integrity confidence
   */
  _SECINTCONOBV: "_SECINTCONOBV",

  /**
   * highly reliable
   */
  HRELIABLE: "HRELIABLE",

  /**
   * reliable
   */
  RELIABLE: "RELIABLE",

  /**
   * uncertain reliability
   */
  UNCERTREL: "UNCERTREL",

  /**
   * unreliable
   */
  UNRELIABLE: "UNRELIABLE",

  /**
   * provenance
   */
  _SECINTPRVOBV: "_SECINTPRVOBV",

  /**
   * provenance asserted by
   */
  _SECINTPRVABOBV: "_SECINTPRVABOBV",

  /**
   * clinician asserted
   */
  CLINAST: "CLINAST",

  /**
   * device asserted
   */
  DEVAST: "DEVAST",

  /**
   * healthcare professional asserted
   */
  HCPAST: "HCPAST",

  /**
   * patient acquaintance asserted
   */
  PACQAST: "PACQAST",

  /**
   * patient asserted
   */
  PATAST: "PATAST",

  /**
   * payer asserted
   */
  PAYAST: "PAYAST",

  /**
   * professional asserted
   */
  PROAST: "PROAST",

  /**
   * substitute decision maker asserted
   */
  SDMAST: "SDMAST",

  /**
   * provenance reported by
   */
  _SECINTPRVRBOBV: "_SECINTPRVRBOBV",

  /**
   * clinician reported
   */
  CLINRPT: "CLINRPT",

  /**
   * device reported
   */
  DEVRPT: "DEVRPT",

  /**
   * healthcare professional reported
   */
  HCPRPT: "HCPRPT",

  /**
   * patient acquaintance reported
   */
  PACQRPT: "PACQRPT",

  /**
   * patient reported
   */
  PATRPT: "PATRPT",

  /**
   * payer reported
   */
  PAYRPT: "PAYRPT",

  /**
   * professional reported
   */
  PRORPT: "PRORPT",

  /**
   * substitute decision maker reported
   */
  SDMRPT: "SDMRPT",

  /**
   * integrity status
   */
  _SECINTSTOBV: "_SECINTSTOBV",

  /**
   * security trust observation
   */
  SECTRSTOBV: "SECTRSTOBV",

  /**
   * trust accreditation observation
   */
  TRSTACCRDOBV: "TRSTACCRDOBV",

  /**
   * trust agreement observation
   */
  TRSTAGREOBV: "TRSTAGREOBV",

  /**
   * trust certificate observation
   */
  TRSTCERTOBV: "TRSTCERTOBV",

  /**
   * none supplied 5
   */
  TRSTFWKOBV: "TRSTFWKOBV",

  /**
   * trust assurance observation
   */
  TRSTLOAOBV: "TRSTLOAOBV",

  /**
   * authentication level of assurance value
   */
  LOAAN: "LOAAN",

  /**
   * low authentication level of assurance
   */
  LOAAN1: "LOAAN1",

  /**
   * basic authentication level of assurance
   */
  LOAAN2: "LOAAN2",

  /**
   * medium authentication level of assurance
   */
  LOAAN3: "LOAAN3",

  /**
   * high authentication level of assurance
   */
  LOAAN4: "LOAAN4",

  /**
   * authentication process level of assurance value
   */
  LOAAP: "LOAAP",

  /**
   * low authentication process level of assurance
   */
  LOAAP1: "LOAAP1",

  /**
   * basic authentication process level of assurance
   */
  LOAAP2: "LOAAP2",

  /**
   * medium authentication process level of assurance
   */
  LOAAP3: "LOAAP3",

  /**
   * high authentication process level of assurance
   */
  LOAAP4: "LOAAP4",

  /**
   * assertion level of assurance value
   */
  LOAAS: "LOAAS",

  /**
   * low assertion level of assurance
   */
  LOAAS1: "LOAAS1",

  /**
   * basic assertion level of assurance
   */
  LOAAS2: "LOAAS2",

  /**
   * medium assertion level of assurance
   */
  LOAAS3: "LOAAS3",

  /**
   * high assertion level of assurance
   */
  LOAAS4: "LOAAS4",

  /**
   * token and credential management level of assurance value)
   */
  LOACM: "LOACM",

  /**
   * low token and credential management level of assurance
   */
  LOACM1: "LOACM1",

  /**
   * basic token and credential management level of assurance
   */
  LOACM2: "LOACM2",

  /**
   * medium token and credential management level of assurance
   */
  LOACM3: "LOACM3",

  /**
   * high token and credential management level of assurance
   */
  LOACM4: "LOACM4",

  /**
   * identity proofing level of assurance
   */
  LOAID: "LOAID",

  /**
   * low identity proofing level of assurance
   */
  LOAID1: "LOAID1",

  /**
   * basic identity proofing level of assurance
   */
  LOAID2: "LOAID2",

  /**
   * medium identity proofing level of assurance
   */
  LOAID3: "LOAID3",

  /**
   * high identity proofing level of assurance
   */
  LOAID4: "LOAID4",

  /**
   * non-repudiation level of assurance value
   */
  LOANR: "LOANR",

  /**
   * low non-repudiation level of assurance
   */
  LOANR1: "LOANR1",

  /**
   * basic non-repudiation level of assurance
   */
  LOANR2: "LOANR2",

  /**
   * medium non-repudiation level of assurance
   */
  LOANR3: "LOANR3",

  /**
   * high non-repudiation level of assurance
   */
  LOANR4: "LOANR4",

  /**
   * remote access level of assurance value
   */
  LOARA: "LOARA",

  /**
   * low remote access level of assurance
   */
  LOARA1: "LOARA1",

  /**
   * basic remote access level of assurance
   */
  LOARA2: "LOARA2",

  /**
   * medium remote access level of assurance
   */
  LOARA3: "LOARA3",

  /**
   * high remote access level of assurance
   */
  LOARA4: "LOARA4",

  /**
   * token level of assurance value
   */
  LOATK: "LOATK",

  /**
   * low token level of assurance
   */
  LOATK1: "LOATK1",

  /**
   * basic token level of assurance
   */
  LOATK2: "LOATK2",

  /**
   * medium token level of assurance
   */
  LOATK3: "LOATK3",

  /**
   * high token level of assurance
   */
  LOATK4: "LOATK4",

  /**
   * none supplied 6
   */
  TRSTMECOBV: "TRSTMECOBV",

  /**
   * SeverityObservation
   */
  _SeverityObservation: "_SeverityObservation",

  /**
   * High
   */
  H: "H",

  /**
   * Low
   */
  L: "L",

  /**
   * Moderate
   */
  M: "M",

  /**
   * _SubjectBodyPosition
   */
  _SubjectBodyPosition: "_SubjectBodyPosition",

  /**
   * left lateral decubitus
   */
  LLD: "LLD",

  /**
   * prone
   */
  PRN: "PRN",

  /**
   * right lateral decubitus
   */
  RLD: "RLD",

  /**
   * Semi-Fowler's
   */
  SFWL: "SFWL",

  /**
   * sitting
   */
  SIT: "SIT",

  /**
   * standing
   */
  STN: "STN",

  /**
   * supine
   */
  SUP: "SUP",

  /**
   * reverse trendelenburg
   */
  RTRD: "RTRD",

  /**
   * trendelenburg
   */
  TRD: "TRD",

  /**
   * verification outcome
   */
  _VerificationOutcomeValue: "_VerificationOutcomeValue",

  /**
   * active coverage
   */
  ACT: "ACT",

  /**
   * active - pending investigation
   */
  ACTPEND: "ACTPEND",

  /**
   * eligible
   */
  ELG: "ELG",

  /**
   * inactive
   */
  INACT: "INACT",

  /**
   * inactive - pending investigation
   */
  INPNDINV: "INPNDINV",

  /**
   * inactive - pending eligibility update
   */
  INPNDUPD: "INPNDUPD",

  /**
   * not eligible
   */
  NELG: "NELG",

  /**
   * _WorkSchedule
   */
  _WorkSchedule: "_WorkSchedule",

  /**
   * daytime shift
   */
  DS: "DS",

  /**
   * early morning shift
   */
  EMS: "EMS",

  /**
   * evening shift
   */
  ES: "ES",

  /**
   * night shift
   */
  NS: "NS",

  /**
   * rotating shift with nights
   */
  RSWN: "RSWN",

  /**
   * rotating shift without nights
   */
  RSWON: "RSWON",

  /**
   * split shift
   */
  SS: "SS",

  /**
   * very long shift
   */
  VLS: "VLS",

  /**
   * variable shift
   */
  VS: "VS",

  /**
   * AnnotationValue
   */
  _AnnotationValue: "_AnnotationValue",

  /**
   * ECGAnnotationValue
   */
  _ECGAnnotationValue: "_ECGAnnotationValue",

  /**
   * common clinical observation
   */
  _CommonClinicalObservationValue: "_CommonClinicalObservationValue",

  /**
   * CommonClinicalObservationAssertionValue
   */
  _CommonClinicalObservationAssertionValue:
    "_CommonClinicalObservationAssertionValue",

  /**
   * CommonClinicalObservationResultValue
   */
  _CommonClinicalObservationResultValue:
    "_CommonClinicalObservationResultValue",

  /**
   * CoverageChemicalDependencyValue
   */
  _CoverageChemicalDependencyValue: "_CoverageChemicalDependencyValue",

  /**
   * Individual Case Safety Report Value Domains
   */
  _IndividualCaseSafetyReportValueDomains:
    "_IndividualCaseSafetyReportValueDomains",

  /**
   * CaseSeriousnessCriteria
   */
  _CaseSeriousnessCriteria: "_CaseSeriousnessCriteria",

  /**
   * DeviceManufacturerEvaluationInterpretation
   */
  _DeviceManufacturerEvaluationInterpretation:
    "_DeviceManufacturerEvaluationInterpretation",

  /**
   * DeviceManufacturerEvaluationMethod
   */
  _DeviceManufacturerEvaluationMethod: "_DeviceManufacturerEvaluationMethod",

  /**
   * DeviceManufacturerEvaluationResult
   */
  _DeviceManufacturerEvaluationResult: "_DeviceManufacturerEvaluationResult",

  /**
   * Pertinent Reaction Relatedness
   */
  _PertinentReactionRelatedness: "_PertinentReactionRelatedness",

  /**
   * Product Characterization
   */
  _ProductCharacterization: "_ProductCharacterization",

  /**
   * ReactionActionTaken
   */
  _ReactionActionTaken: "_ReactionActionTaken",

  /**
   * Subject Reaction
   */
  _SubjectReaction: "_SubjectReaction",

  /**
   * SubjectReactionEmphasis
   */
  _SubjectReactionEmphasis: "_SubjectReactionEmphasis",

  /**
   * SubjectReactionOutcome
   */
  _SubjectReactionOutcome: "_SubjectReactionOutcome",

  /**
   * InjuryObservationValue
   */
  _InjuryObservationValue: "_InjuryObservationValue",

  /**
   * IntoleranceValue
   */
  _IntoleranceValue: "_IntoleranceValue",

  /**
   * IssueTriggerObservationValue
   */
  _IssueTriggerObservationValue: "_IssueTriggerObservationValue",

  /**
   * OtherIndicationValue
   */
  _OtherIndicationValue: "_OtherIndicationValue",

  /**
   * IndicationValue
   */
  _IndicationValue: "_IndicationValue",

  /**
   * DiagnosisValue
   */
  _DiagnosisValue: "_DiagnosisValue",

  /**
   * SymptomValue
   */
  _SymptomValue: "_SymptomValue",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityControlObservationValueCode =
  typeof SecurityControlObservationValueCode[keyof typeof SecurityControlObservationValueCode];
