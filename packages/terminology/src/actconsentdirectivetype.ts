/**
 * ActConsentDirective and ActConsentType codes are used to specify the type of Consent Directive or Consent Type to which, for example, a Consent Act conforms, to which a Security Observation (Security Label) refers to, or to which a Privacy or Security Act refers.

>

*Steward:* Security WG
 * http://terminology.hl7.org/ValueSet/v3-ActConsentDirectiveType
 */
export const ActConsentDirectiveTypeCode = {
  /**
   * ActConsentType
   */
  _ActConsentType: "_ActConsentType",

  /**
   * information collection
   */
  ICOL: "ICOL",

  /**
   * information disclosure
   */
  IDSCL: "IDSCL",

  /**
   * information access
   */
  INFA: "INFA",

  /**
   * access only
   */
  INFAO: "INFAO",

  /**
   * access and save only
   */
  INFASO: "INFASO",

  /**
   * information redisclosure
   */
  IRDSCL: "IRDSCL",

  /**
   * research information access
   */
  RESEARCH: "RESEARCH",

  /**
   * de-identified information access
   */
  RSDID: "RSDID",

  /**
   * re-identifiable information access
   */
  RSREID: "RSREID",

  /**
   * ActConsentDirective
   */
  _ActConsentDirective: "_ActConsentDirective",

  /**
   * emergency only
   */
  EMRGONLY: "EMRGONLY",

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
   * notice of privacy practices
   */
  NOPP: "NOPP",

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
   * ActAccountCode
   */
  _ActAccountCode: "_ActAccountCode",

  /**
   * account receivable
   */
  ACCTRECEIVABLE: "ACCTRECEIVABLE",

  /**
   * Cash
   */
  CASH: "CASH",

  /**
   * credit card
   */
  CC: "CC",

  /**
   * American Express
   */
  AE: "AE",

  /**
   * Diner's Club
   */
  DN: "DN",

  /**
   * Discover Card
   */
  DV: "DV",

  /**
   * Master Card
   */
  MC: "MC",

  /**
   * Visa
   */
  V: "V",

  /**
   * patient billing account
   */
  PBILLACCT: "PBILLACCT",

  /**
   * CreditCard
   */
  _CreditCard: "_CreditCard",

  /**
   * ActAdjudicationCode
   */
  _ActAdjudicationCode: "_ActAdjudicationCode",

  /**
   * ActAdjudicationGroupCode
   */
  _ActAdjudicationGroupCode: "_ActAdjudicationGroupCode",

  /**
   * contract
   */
  CONT: "CONT",

  /**
   * day
   */
  DAY: "DAY",

  /**
   * location
   */
  LOC: "LOC",

  /**
   * month
   */
  MONTH: "MONTH",

  /**
   * period
   */
  PERIOD: "PERIOD",

  /**
   * provider
   */
  PROV: "PROV",

  /**
   * week
   */
  WEEK: "WEEK",

  /**
   * year
   */
  YEAR: "YEAR",

  /**
   * adjudicated with adjustments
   */
  AA: "AA",

  /**
   * adjudicated with adjustments and no financial impact
   */
  ANF: "ANF",

  /**
   * adjudicated as refused
   */
  AR: "AR",

  /**
   * adjudicated as submitted
   */
  AS: "AS",

  /**
   * ActAdjudicationResultActionCode
   */
  _ActAdjudicationResultActionCode: "_ActAdjudicationResultActionCode",

  /**
   * Display
   */
  DISPLAY: "DISPLAY",

  /**
   * Print on Form
   */
  FORM: "FORM",

  /**
   * ActBillableModifierCode
   */
  _ActBillableModifierCode: "_ActBillableModifierCode",

  /**
   * CPT modifier codes
   */
  CPTM: "CPTM",

  /**
   * HCPCS Level II and Carrier-assigned
   */
  HCPCSA: "HCPCSA",

  /**
   * ActBillingArrangementCode
   */
  _ActBillingArrangementCode: "_ActBillingArrangementCode",

  /**
   * block funding
   */
  BLK: "BLK",

  /**
   * capitation funding
   */
  CAP: "CAP",

  /**
   * contract funding
   */
  CONTF: "CONTF",

  /**
   * financial
   */
  FINBILL: "FINBILL",

  /**
   * roster funding
   */
  ROST: "ROST",

  /**
   * sessional funding
   */
  SESS: "SESS",

  /**
   * fee for service
   */
  FFS: "FFS",

  /**
   * first fill, part fill, partial strength
   */
  FFPS: "FFPS",

  /**
   * first fill complete, partial strength
   */
  FFCS: "FFCS",

  /**
   * trial fill partial strength
   */
  TFS: "TFS",

  /**
   * ActBoundedROICode
   */
  _ActBoundedROICode: "_ActBoundedROICode",

  /**
   * fully specified ROI
   */
  ROIFS: "ROIFS",

  /**
   * partially specified ROI
   */
  ROIPS: "ROIPS",

  /**
   * act care provision
   */
  _ActCareProvisionCode: "_ActCareProvisionCode",

  /**
   * act credentialed care
   */
  _ActCredentialedCareCode: "_ActCredentialedCareCode",

  /**
   * act credentialed care provision peron
   */
  _ActCredentialedCareProvisionPersonCode:
    "_ActCredentialedCareProvisionPersonCode",

  /**
   * certified anatomic pathology and clinical pathology care
   */
  CACC: "CACC",

  /**
   * certified allergy and immunology care
   */
  CAIC: "CAIC",

  /**
   * certified aerospace medicine care
   */
  CAMC: "CAMC",

  /**
   * certified anesthesiology care
   */
  CANC: "CANC",

  /**
   * certified anatomic pathology care
   */
  CAPC: "CAPC",

  /**
   * certified clinical biochemical genetics care
   */
  CBGC: "CBGC",

  /**
   * certified clinical cytogenetics care
   */
  CCCC: "CCCC",

  /**
   * certified clinical genetics (M.D.) care
   */
  CCGC: "CCGC",

  /**
   * certified clinical pathology care
   */
  CCPC: "CCPC",

  /**
   * certified colon and rectal surgery care
   */
  CCSC: "CCSC",

  /**
   * certified dermatology care
   */
  CDEC: "CDEC",

  /**
   * certified diagnostic radiology care
   */
  CDRC: "CDRC",

  /**
   * certified emergency medicine care
   */
  CEMC: "CEMC",

  /**
   * certified family practice care
   */
  CFPC: "CFPC",

  /**
   * certified internal medicine care
   */
  CIMC: "CIMC",

  /**
   * certified clinical molecular genetics care
   */
  CMGC: "CMGC",

  /**
   * certified neurology care
   */
  CNEC: "CNEC",

  /**
   * certified nuclear medicine care
   */
  CNMC: "CNMC",

  /**
   * certified neurology with special qualifications in child neurology care
   */
  CNQC: "CNQC",

  /**
   * certified neurological surgery care
   */
  CNSC: "CNSC",

  /**
   * certified obstetrics and gynecology care
   */
  COGC: "COGC",

  /**
   * certified occupational medicine care
   */
  COMC: "COMC",

  /**
   * certified ophthalmology care
   */
  COPC: "COPC",

  /**
   * certified orthopaedic surgery care
   */
  COSC: "COSC",

  /**
   * certified otolaryngology care
   */
  COTC: "COTC",

  /**
   * certified pediatrics care
   */
  CPEC: "CPEC",

  /**
   * certified Ph.D. medical genetics care
   */
  CPGC: "CPGC",

  /**
   * certified public health and general preventive medicine care
   */
  CPHC: "CPHC",

  /**
   * certified physical medicine and rehabilitation care
   */
  CPRC: "CPRC",

  /**
   * certified plastic surgery care
   */
  CPSC: "CPSC",

  /**
   * certified psychiatry care
   */
  CPYC: "CPYC",

  /**
   * certified radiation oncology care
   */
  CROC: "CROC",

  /**
   * certified radiological physics care
   */
  CRPC: "CRPC",

  /**
   * certified surgery care
   */
  CSUC: "CSUC",

  /**
   * certified thoracic surgery care
   */
  CTSC: "CTSC",

  /**
   * certified urology care
   */
  CURC: "CURC",

  /**
   * certified vascular surgery care
   */
  CVSC: "CVSC",

  /**
   * licensed general physician care
   */
  LGPC: "LGPC",

  /**
   * act credentialed care provision program
   */
  _ActCredentialedCareProvisionProgramCode:
    "_ActCredentialedCareProvisionProgramCode",

  /**
   * accredited assisted living care
   */
  AALC: "AALC",

  /**
   * accredited ambulatory care
   */
  AAMC: "AAMC",

  /**
   * accredited behavioral health care
   */
  ABHC: "ABHC",

  /**
   * accredited critical access hospital care
   */
  ACAC: "ACAC",

  /**
   * accredited hospital care
   */
  ACHC: "ACHC",

  /**
   * accredited home care
   */
  AHOC: "AHOC",

  /**
   * accredited long term care
   */
  ALTC: "ALTC",

  /**
   * accredited office-based surgery care
   */
  AOSC: "AOSC",

  /**
   * certified acute coronary syndrome care
   */
  CACS: "CACS",

  /**
   * certified acute myocardial infarction care
   */
  CAMI: "CAMI",

  /**
   * certified asthma care
   */
  CAST: "CAST",

  /**
   * certified bariatric surgery care
   */
  CBAR: "CBAR",

  /**
   * certified coronary artery disease care
   */
  CCAD: "CCAD",

  /**
   * certified cardiac care
   */
  CCAR: "CCAR",

  /**
   * certified depression care
   */
  CDEP: "CDEP",

  /**
   * certified digestive/gastrointestinal disorders care
   */
  CDGD: "CDGD",

  /**
   * certified diabetes care
   */
  CDIA: "CDIA",

  /**
   * certified epilepsy care
   */
  CEPI: "CEPI",

  /**
   * certified frail elderly care
   */
  CFEL: "CFEL",

  /**
   * certified heart failure care
   */
  CHFC: "CHFC",

  /**
   * certified high risk obstetrics care
   */
  CHRO: "CHRO",

  /**
   * certified hyperlipidemia care
   */
  CHYP: "CHYP",

  /**
   * certified migraine headache care
   */
  CMIH: "CMIH",

  /**
   * certified multiple sclerosis care
   */
  CMSC: "CMSC",

  /**
   * certified orthopedic joint replacement care
   */
  COJR: "COJR",

  /**
   * certified oncology care
   */
  CONC: "CONC",

  /**
   * certified chronic obstructive pulmonary disease care
   */
  COPD: "COPD",

  /**
   * certified organ transplant care
   */
  CORT: "CORT",

  /**
   * certified parkinsons disease care
   */
  CPAD: "CPAD",

  /**
   * certified pneumonia disease care
   */
  CPND: "CPND",

  /**
   * certified primary stroke center care
   */
  CPST: "CPST",

  /**
   * certified stroke disease management care
   */
  CSDM: "CSDM",

  /**
   * certified sickle cell care
   */
  CSIC: "CSIC",

  /**
   * certified sleep disorders care
   */
  CSLD: "CSLD",

  /**
   * certified spine treatment care
   */
  CSPT: "CSPT",

  /**
   * certified trauma/burn center care
   */
  CTBU: "CTBU",

  /**
   * certified vascular diseases care
   */
  CVDC: "CVDC",

  /**
   * certified wound management care
   */
  CWMA: "CWMA",

  /**
   * certified women's health care
   */
  CWOH: "CWOH",

  /**
   * ActEncounterCode
   */
  _ActEncounterCode: "_ActEncounterCode",

  /**
   * ambulatory
   */
  AMB: "AMB",

  /**
   * emergency
   */
  EMER: "EMER",

  /**
   * field
   */
  FLD: "FLD",

  /**
   * home health
   */
  HH: "HH",

  /**
   * inpatient encounter
   */
  IMP: "IMP",

  /**
   * inpatient acute
   */
  ACUTE: "ACUTE",

  /**
   * inpatient non-acute
   */
  NONAC: "NONAC",

  /**
   * observation encounter
   */
  OBSENC: "OBSENC",

  /**
   * pre-admission
   */
  PRENC: "PRENC",

  /**
   * short stay
   */
  SS: "SS",

  /**
   * virtual
   */
  VR: "VR",

  /**
   * ActMedicalServiceCode
   */
  _ActMedicalServiceCode: "_ActMedicalServiceCode",

  /**
   * Alternative Level of Care
   */
  ALC: "ALC",

  /**
   * Cardiology
   */
  CARD: "CARD",

  /**
   * Chronic
   */
  CHR: "CHR",

  /**
   * Dental
   */
  DNTL: "DNTL",

  /**
   * Drug Rehab
   */
  DRGRHB: "DRGRHB",

  /**
   * General
   */
  GENRL: "GENRL",

  /**
   * Medical
   */
  MED: "MED",

  /**
   * Obstetrics
   */
  OBS: "OBS",

  /**
   * Oncology
   */
  ONC: "ONC",

  /**
   * Palliative
   */
  PALL: "PALL",

  /**
   * Pediatrics
   */
  PED: "PED",

  /**
   * Pharmaceutical
   */
  PHAR: "PHAR",

  /**
   * Physical Rehab
   */
  PHYRHB: "PHYRHB",

  /**
   * Psychiatric
   */
  PSYCH: "PSYCH",

  /**
   * Surgical
   */
  SURG: "SURG",

  /**
   * ActClaimAttachmentCategoryCode
   */
  _ActClaimAttachmentCategoryCode: "_ActClaimAttachmentCategoryCode",

  /**
   * auto attachment
   */
  AUTOATTCH: "AUTOATTCH",

  /**
   * document
   */
  DOCUMENT: "DOCUMENT",

  /**
   * health record
   */
  HEALTHREC: "HEALTHREC",

  /**
   * image attachment
   */
  IMG: "IMG",

  /**
   * lab results
   */
  LABRESULTS: "LABRESULTS",

  /**
   * model
   */
  MODEL: "MODEL",

  /**
   * work injury report attachment
   */
  WIATTCH: "WIATTCH",

  /**
   * x-ray
   */
  XRAY: "XRAY",

  /**
   * ActContainerRegistrationCode
   */
  _ActContainerRegistrationCode: "_ActContainerRegistrationCode",

  /**
   * Identified
   */
  ID: "ID",

  /**
   * In Position
   */
  IP: "IP",

  /**
   * Left Equipment
   */
  L: "L",

  /**
   * Missing
   */
  M: "M",

  /**
   * In Process
   */
  O: "O",

  /**
   * Process Completed
   */
  R: "R",

  /**
   * Container Unavailable
   */
  X: "X",

  /**
   * ActControlVariable
   */
  _ActControlVariable: "_ActControlVariable",

  /**
   * auto-repeat permission
   */
  AUTO: "AUTO",

  /**
   * endogenous content
   */
  ENDC: "ENDC",

  /**
   * reflex permission
   */
  REFLEX: "REFLEX",

  /**
   * ECGControlVariable
   */
  _ECGControlVariable: "_ECGControlVariable",

  /**
   * ActCoverageConfirmationCode
   */
  _ActCoverageConfirmationCode: "_ActCoverageConfirmationCode",

  /**
   * ActCoverageAuthorizationConfirmationCode
   */
  _ActCoverageAuthorizationConfirmationCode:
    "_ActCoverageAuthorizationConfirmationCode",

  /**
   * Authorized
   */
  AUTH: "AUTH",

  /**
   * Not Authorized
   */
  NAUTH: "NAUTH",

  /**
   * ActCoverageEligibilityConfirmationCode
   */
  _ActCoverageEligibilityConfirmationCode:
    "_ActCoverageEligibilityConfirmationCode",

  /**
   * Eligible
   */
  ELG: "ELG",

  /**
   * Not Eligible
   */
  NELG: "NELG",

  /**
   * ActCoverageLimitCode
   */
  _ActCoverageLimitCode: "_ActCoverageLimitCode",

  /**
   * ActCoverageQuantityLimitCode
   */
  _ActCoverageQuantityLimitCode: "_ActCoverageQuantityLimitCode",

  /**
   * coverage period
   */
  COVPRD: "COVPRD",

  /**
   * life time maximum
   */
  LFEMX: "LFEMX",

  /**
   * Net Amount
   */
  NETAMT: "NETAMT",

  /**
   * period maximum
   */
  PRDMX: "PRDMX",

  /**
   * Unit Price
   */
  UNITPRICE: "UNITPRICE",

  /**
   * Unit Quantity
   */
  UNITQTY: "UNITQTY",

  /**
   * coverage maximum
   */
  COVMX: "COVMX",

  /**
   * ActCoveredPartyLimitCode
   */
  _ActCoveredPartyLimitCode: "_ActCoveredPartyLimitCode",

  /**
   * ActCoveragePartyLimitGroupCode
   */
  _ActCoveragePartyLimitGroupCode: "_ActCoveragePartyLimitGroupCode",

  /**
   * ActCoverageTypeCode
   */
  _ActCoverageTypeCode: "_ActCoverageTypeCode",

  /**
   * ActInsurancePolicyCode
   */
  _ActInsurancePolicyCode: "_ActInsurancePolicyCode",

  /**
   * extended healthcare
   */
  EHCPOL: "EHCPOL",

  /**
   * health spending account
   */
  HSAPOL: "HSAPOL",

  /**
   * automobile
   */
  AUTOPOL: "AUTOPOL",

  /**
   * collision coverage policy
   */
  COL: "COL",

  /**
   * uninsured motorist policy
   */
  UNINSMOT: "UNINSMOT",

  /**
   * public healthcare
   */
  PUBLICPOL: "PUBLICPOL",

  /**
   * dental program
   */
  DENTPRG: "DENTPRG",

  /**
   * public health program
   */
  DISEASEPRG: "DISEASEPRG",

  /**
   * women's cancer detection program
   */
  CANPRG: "CANPRG",

  /**
   * end renal program
   */
  ENDRENAL: "ENDRENAL",

  /**
   * HIV-AIDS program
   */
  HIVAIDS: "HIVAIDS",

  /**
   * mandatory health program
   */
  MANDPOL: "MANDPOL",

  /**
   * mental health program
   */
  MENTPRG: "MENTPRG",

  /**
   * safety net clinic program
   */
  SAFNET: "SAFNET",

  /**
   * substance use program
   */
  SUBPRG: "SUBPRG",

  /**
   * subsidized health program
   */
  SUBSIDIZ: "SUBSIDIZ",

  /**
   * subsidized managed care program
   */
  SUBSIDMC: "SUBSIDMC",

  /**
   * subsidized supplemental health program
   */
  SUBSUPP: "SUBSUPP",

  /**
   * worker's compensation
   */
  WCBPOL: "WCBPOL",

  /**
   * ActInsuranceTypeCode
   */
  _ActInsuranceTypeCode: "_ActInsuranceTypeCode",

  /**
   * ActHealthInsuranceTypeCode
   */
  _ActHealthInsuranceTypeCode: "_ActHealthInsuranceTypeCode",

  /**
   * dental care policy
   */
  DENTAL: "DENTAL",

  /**
   * disease specific policy
   */
  DISEASE: "DISEASE",

  /**
   * drug policy
   */
  DRUGPOL: "DRUGPOL",

  /**
   * health insurance plan policy
   */
  HIP: "HIP",

  /**
   * long term care policy
   */
  LTC: "LTC",

  /**
   * managed care policy
   */
  MCPOL: "MCPOL",

  /**
   * point of service policy
   */
  POS: "POS",

  /**
   * health maintenance organization policy
   */
  HMO: "HMO",

  /**
   * preferred provider organization policy
   */
  PPO: "PPO",

  /**
   * mental health policy
   */
  MENTPOL: "MENTPOL",

  /**
   * substance use policy
   */
  SUBPOL: "SUBPOL",

  /**
   * vision care policy
   */
  VISPOL: "VISPOL",

  /**
   * disability insurance policy
   */
  DIS: "DIS",

  /**
   * employee welfare benefit plan policy
   */
  EWB: "EWB",

  /**
   * flexible benefit plan policy
   */
  FLEXP: "FLEXP",

  /**
   * life insurance policy
   */
  LIFE: "LIFE",

  /**
   * annuity policy
   */
  ANNU: "ANNU",

  /**
   * term life insurance policy
   */
  TLIFE: "TLIFE",

  /**
   * universal life insurance policy
   */
  ULIFE: "ULIFE",

  /**
   * property and casualty insurance policy
   */
  PNC: "PNC",

  /**
   * reinsurance policy
   */
  REI: "REI",

  /**
   * surplus line insurance policy
   */
  SURPL: "SURPL",

  /**
   * umbrella liability insurance policy
   */
  UMBRL: "UMBRL",

  /**
   * ActProgramTypeCode
   */
  _ActProgramTypeCode: "_ActProgramTypeCode",

  /**
   * charity program
   */
  CHAR: "CHAR",

  /**
   * crime victim program
   */
  CRIME: "CRIME",

  /**
   * employee assistance program
   */
  EAP: "EAP",

  /**
   * government employee health program
   */
  GOVEMP: "GOVEMP",

  /**
   * high risk pool program
   */
  HIRISK: "HIRISK",

  /**
   * indigenous peoples health program
   */
  IND: "IND",

  /**
   * military health program
   */
  MILITARY: "MILITARY",

  /**
   * retiree health program
   */
  RETIRE: "RETIRE",

  /**
   * social service program
   */
  SOCIAL: "SOCIAL",

  /**
   * veteran health program
   */
  VET: "VET",

  /**
   * ActDetectedIssueManagementCode
   */
  _ActDetectedIssueManagementCode: "_ActDetectedIssueManagementCode",

  /**
   * ActAdministrativeDetectedIssueManagementCode
   */
  _ActAdministrativeDetectedIssueManagementCode:
    "_ActAdministrativeDetectedIssueManagementCode",

  /**
   * Authorization Issue Management Code
   */
  _AuthorizationIssueManagementCode: "_AuthorizationIssueManagementCode",

  /**
   * emergency authorization override
   */
  EMAUTH: "EMAUTH",

  /**
   * authorization confirmed
   */
  "21": "21",

  /**
   * Therapy Appropriate
   */
  "1": "1",

  /**
   * Consulted Supplier
   */
  "19": "19",

  /**
   * Assessed Patient
   */
  "2": "2",

  /**
   * appropriate indication or diagnosis
   */
  "22": "22",

  /**
   * prior therapy documented
   */
  "23": "23",

  /**
   * Patient Explanation
   */
  "3": "3",

  /**
   * Consulted Other Source
   */
  "4": "4",

  /**
   * Consulted Prescriber
   */
  "5": "5",

  /**
   * Prescriber Declined Change
   */
  "6": "6",

  /**
   * Interacting Therapy No Longer Active/Planned
   */
  "7": "7",

  /**
   * Supply Appropriate
   */
  "14": "14",

  /**
   * Replacement
   */
  "15": "15",

  /**
   * Vacation Supply
   */
  "16": "16",

  /**
   * Weekend Supply
   */
  "17": "17",

  /**
   * Leave of Absence
   */
  "18": "18",

  /**
   * additional quantity on separate dispense
   */
  "20": "20",

  /**
   * Other Action Taken
   */
  "8": "8",

  /**
   * Provided Patient Education
   */
  "10": "10",

  /**
   * Added Concurrent Therapy
   */
  "11": "11",

  /**
   * Temporarily Suspended Concurrent Therapy
   */
  "12": "12",

  /**
   * Stopped Concurrent Therapy
   */
  "13": "13",

  /**
   * Instituted Ongoing Monitoring Program
   */
  "9": "9",

  /**
   * ActFinancialDetectedIssueManagementCode
   */
  _ActFinancialDetectedIssueManagementCode:
    "_ActFinancialDetectedIssueManagementCode",

  /**
   * ActExposureCode
   */
  _ActExposureCode: "_ActExposureCode",

  /**
   * Day care - Child care Interaction
   */
  CHLDCARE: "CHLDCARE",

  /**
   * Common Conveyance Interaction
   */
  CONVEYNC: "CONVEYNC",

  /**
   * Health Care Interaction - Not Patient Care
   */
  HLTHCARE: "HLTHCARE",

  /**
   * Care Giver Interaction
   */
  HOMECARE: "HOMECARE",

  /**
   * Hospital Patient Interaction
   */
  HOSPPTNT: "HOSPPTNT",

  /**
   * Hospital Visitor Interaction
   */
  HOSPVSTR: "HOSPVSTR",

  /**
   * Household Interaction
   */
  HOUSEHLD: "HOUSEHLD",

  /**
   * Inmate Interaction
   */
  INMATE: "INMATE",

  /**
   * Intimate Interaction
   */
  INTIMATE: "INTIMATE",

  /**
   * Long Term Care Facility Interaction
   */
  LTRMCARE: "LTRMCARE",

  /**
   * Common Space Interaction
   */
  PLACE: "PLACE",

  /**
   * Health Care Interaction - Patient Care
   */
  PTNTCARE: "PTNTCARE",

  /**
   * School Interaction
   */
  SCHOOL2: "SCHOOL2",

  /**
   * Social/Extended Family Interaction
   */
  SOCIAL2: "SOCIAL2",

  /**
   * Common Substance Interaction
   */
  SUBSTNCE: "SUBSTNCE",

  /**
   * Common Travel Interaction
   */
  TRAVINT: "TRAVINT",

  /**
   * Work Interaction
   */
  WORK2: "WORK2",

  /**
   * ActFinancialTransactionCode
   */
  _ActFinancialTransactionCode: "_ActFinancialTransactionCode",

  /**
   * Standard Charge
   */
  CHRG: "CHRG",

  /**
   * Standard Charge Reversal
   */
  REV: "REV",

  /**
   * ActIncidentCode
   */
  _ActIncidentCode: "_ActIncidentCode",

  /**
   * Motor vehicle accident
   */
  MVA: "MVA",

  /**
   * School Accident
   */
  SCHOOL: "SCHOOL",

  /**
   * Sporting Accident
   */
  SPT: "SPT",

  /**
   * Workplace accident
   */
  WPA: "WPA",

  /**
   * ActPatientSafetyIncidentCode
   */
  _ActPatientSafetyIncidentCode: "_ActPatientSafetyIncidentCode",

  /**
   * ActInformationAccessCode
   */
  _ActInformationAccessCode: "_ActInformationAccessCode",

  /**
   * adverse drug reaction access
   */
  ACADR: "ACADR",

  /**
   * all access
   */
  ACALL: "ACALL",

  /**
   * allergy access
   */
  ACALLG: "ACALLG",

  /**
   * informational consent access
   */
  ACCONS: "ACCONS",

  /**
   * demographics access
   */
  ACDEMO: "ACDEMO",

  /**
   * diagnostic imaging access
   */
  ACDI: "ACDI",

  /**
   * immunization access
   */
  ACIMMUN: "ACIMMUN",

  /**
   * lab test result access
   */
  ACLAB: "ACLAB",

  /**
   * medication access
   */
  ACMED: "ACMED",

  /**
   * medical condition access
   */
  ACMEDC: "ACMEDC",

  /**
   * mental health access
   */
  ACMEN: "ACMEN",

  /**
   * common observations access
   */
  ACOBS: "ACOBS",

  /**
   * policy or program information access
   */
  ACPOLPRG: "ACPOLPRG",

  /**
   * provider information access
   */
  ACPROV: "ACPROV",

  /**
   * professional service access
   */
  ACPSERV: "ACPSERV",

  /**
   * substance abuse access
   */
  ACSUBSTAB: "ACSUBSTAB",

  /**
   * ActInformationAccessContextCode
   */
  _ActInformationAccessContextCode: "_ActInformationAccessContextCode",

  /**
   * authorized information transfer
   */
  INFAUT: "INFAUT",

  /**
   * after explicit consent
   */
  INFCON: "INFCON",

  /**
   * only on court order
   */
  INFCRT: "INFCRT",

  /**
   * only if danger to others
   */
  INFDNG: "INFDNG",

  /**
   * only in an emergency
   */
  INFEMER: "INFEMER",

  /**
   * only if public welfare risk
   */
  INFPWR: "INFPWR",

  /**
   * regulatory information transfer
   */
  INFREG: "INFREG",

  /**
   * ActInformationCategoryCode
   */
  _ActInformationCategoryCode: "_ActInformationCategoryCode",

  /**
   * all categories
   */
  ALLCAT: "ALLCAT",

  /**
   * allergy category
   */
  ALLGCAT: "ALLGCAT",

  /**
   * adverse drug reaction category
   */
  ARCAT: "ARCAT",

  /**
   * common observation category
   */
  COBSCAT: "COBSCAT",

  /**
   * demographics category
   */
  DEMOCAT: "DEMOCAT",

  /**
   * diagnostic image category
   */
  DICAT: "DICAT",

  /**
   * immunization category
   */
  IMMUCAT: "IMMUCAT",

  /**
   * lab test category
   */
  LABCAT: "LABCAT",

  /**
   * medical condition category
   */
  MEDCCAT: "MEDCCAT",

  /**
   * mental health category
   */
  MENCAT: "MENCAT",

  /**
   * professional service category
   */
  PSVCCAT: "PSVCCAT",

  /**
   * medication category
   */
  RXCAT: "RXCAT",

  /**
   * ActInvoiceElementCode
   */
  _ActInvoiceElementCode: "_ActInvoiceElementCode",

  /**
   * ActInvoiceAdjudicationPaymentCode
   */
  _ActInvoiceAdjudicationPaymentCode: "_ActInvoiceAdjudicationPaymentCode",

  /**
   * ActInvoiceAdjudicationPaymentGroupCode
   */
  _ActInvoiceAdjudicationPaymentGroupCode:
    "_ActInvoiceAdjudicationPaymentGroupCode",

  /**
   * alternate electronic
   */
  ALEC: "ALEC",

  /**
   * bonus
   */
  BONUS: "BONUS",

  /**
   * carry forward adjusment
   */
  CFWD: "CFWD",

  /**
   * education fees
   */
  EDU: "EDU",

  /**
   * early payment fee
   */
  EPYMT: "EPYMT",

  /**
   * garnishee
   */
  GARN: "GARN",

  /**
   * submitted invoice
   */
  INVOICE: "INVOICE",

  /**
   * paper invoice
   */
  PINV: "PINV",

  /**
   * prior period adjustment
   */
  PPRD: "PPRD",

  /**
   * professional association deduction
   */
  PROA: "PROA",

  /**
   * recovery
   */
  RECOV: "RECOV",

  /**
   * retro adjustment
   */
  RETRO: "RETRO",

  /**
   * transaction fee
   */
  TRAN: "TRAN",

  /**
   * ActInvoiceAdjudicationPaymentGroupCode
   */
  _ActInvoicePaymentCode: "_ActInvoicePaymentCode",

  /**
   * ActInvoiceAdjudicationPaymentSummaryCode
   */
  _ActInvoiceAdjudicationPaymentSummaryCode:
    "_ActInvoiceAdjudicationPaymentSummaryCode",

  /**
   * invoice type
   */
  INVTYPE: "INVTYPE",

  /**
   * payee
   */
  PAYEE: "PAYEE",

  /**
   * payor
   */
  PAYOR: "PAYOR",

  /**
   * sending application
   */
  SENDAPP: "SENDAPP",

  /**
   * ActInvoiceDetailCode
   */
  _ActInvoiceDetailCode: "_ActInvoiceDetailCode",

  /**
   * ActInvoiceDetailClinicalProductCode
   */
  _ActInvoiceDetailClinicalProductCode: "_ActInvoiceDetailClinicalProductCode",

  /**
   * United Nations Standard Products and Services Classification
   */
  UNSPSC: "UNSPSC",

  /**
   * ActInvoiceDetailDrugProductCode
   */
  _ActInvoiceDetailDrugProductCode: "_ActInvoiceDetailDrugProductCode",

  /**
   * Global Trade Item Number
   */
  GTIN: "GTIN",

  /**
   * Universal Product Code
   */
  UPC: "UPC",

  /**
   * ActInvoiceDetailGenericCode
   */
  _ActInvoiceDetailGenericCode: "_ActInvoiceDetailGenericCode",

  /**
   * ActInvoiceDetailGenericAdjudicatorCode
   */
  _ActInvoiceDetailGenericAdjudicatorCode:
    "_ActInvoiceDetailGenericAdjudicatorCode",

  /**
   * coinsurance
   */
  COIN: "COIN",

  /**
   * patient co-pay
   */
  COPAYMENT: "COPAYMENT",

  /**
   * deductible
   */
  DEDUCTIBLE: "DEDUCTIBLE",

  /**
   * payment
   */
  PAY: "PAY",

  /**
   * spend down
   */
  SPEND: "SPEND",

  /**
   * co-insurance
   */
  COINS: "COINS",

  /**
   * ActInvoiceDetailGenericModifierCode
   */
  _ActInvoiceDetailGenericModifierCode: "_ActInvoiceDetailGenericModifierCode",

  /**
   * non-normal hours
   */
  AFTHRS: "AFTHRS",

  /**
   * isolation allowance
   */
  ISOL: "ISOL",

  /**
   * out of office
   */
  OOO: "OOO",

  /**
   * ActInvoiceDetailGenericProviderCode
   */
  _ActInvoiceDetailGenericProviderCode: "_ActInvoiceDetailGenericProviderCode",

  /**
   * cancelled appointment
   */
  CANCAPT: "CANCAPT",

  /**
   * discount
   */
  DSC: "DSC",

  /**
   * extraordinary service assessment
   */
  ESA: "ESA",

  /**
   * fee for service top off
   */
  FFSTOP: "FFSTOP",

  /**
   * final fee
   */
  FNLFEE: "FNLFEE",

  /**
   * first fee
   */
  FRSTFEE: "FRSTFEE",

  /**
   * markup or up-charge
   */
  MARKUP: "MARKUP",

  /**
   * missed appointment
   */
  MISSAPT: "MISSAPT",

  /**
   * periodic fee
   */
  PERFEE: "PERFEE",

  /**
   * performance bonus
   */
  PERMBNS: "PERMBNS",

  /**
   * restocking fee
   */
  RESTOCK: "RESTOCK",

  /**
   * travel
   */
  TRAVEL: "TRAVEL",

  /**
   * urgent
   */
  URGENT: "URGENT",

  /**
   * ActInvoiceDetailTaxCode
   */
  _ActInvoiceDetailTaxCode: "_ActInvoiceDetailTaxCode",

  /**
   * federal sales tax
   */
  FST: "FST",

  /**
   * harmonized sales Tax
   */
  HST: "HST",

  /**
   * provincial/state sales tax
   */
  PST: "PST",

  /**
   * ActInvoiceDetailPreferredAccommodationCode
   */
  _ActInvoiceDetailPreferredAccommodationCode:
    "_ActInvoiceDetailPreferredAccommodationCode",

  /**
   * ActEncounterAccommodationCode
   */
  _ActEncounterAccommodationCode: "_ActEncounterAccommodationCode",

  /**
   * HL7AccommodationCode
   */
  _HL7AccommodationCode: "_HL7AccommodationCode",

  /**
   * Isolation
   */
  I: "I",

  /**
   * Private
   */
  P: "P",

  /**
   * Suite
   */
  S: "S",

  /**
   * Semi-private
   */
  SP: "SP",

  /**
   * Ward
   */
  W: "W",

  /**
   * HCPCSAccommodationCode
   */
  _HCPCSAccommodationCode: "_HCPCSAccommodationCode",

  /**
   * ActInvoiceDetailClinicalServiceCode
   */
  _ActInvoiceDetailClinicalServiceCode: "_ActInvoiceDetailClinicalServiceCode",

  /**
   * CPT5
   */
  _CPT5: "_CPT5",

  /**
   * HCPCS
   */
  _HCPCS: "_HCPCS",

  /**
   * ICD10PCS
   */
  _ICD10PCS: "_ICD10PCS",

  /**
   * ICD9PCS
   */
  _ICD9PCS: "_ICD9PCS",

  /**
   * ActInvoiceDetailOralHealthProcedureCode
   */
  _ActInvoiceDetailOralHealthProcedureCode:
    "_ActInvoiceDetailOralHealthProcedureCode",

  /**
   * ActInvoiceGroupCode
   */
  _ActInvoiceGroupCode: "_ActInvoiceGroupCode",

  /**
   * ActInvoiceInterGroupCode
   */
  _ActInvoiceInterGroupCode: "_ActInvoiceInterGroupCode",

  /**
   * compound drug invoice group
   */
  CPNDDRGING: "CPNDDRGING",

  /**
   * compound ingredient invoice group
   */
  CPNDINDING: "CPNDINDING",

  /**
   * compound supply invoice group
   */
  CPNDSUPING: "CPNDSUPING",

  /**
   * drug invoice group
   */
  DRUGING: "DRUGING",

  /**
   * frame invoice group
   */
  FRAMEING: "FRAMEING",

  /**
   * lens invoice group
   */
  LENSING: "LENSING",

  /**
   * product invoice group
   */
  PRDING: "PRDING",

  /**
   * ActInvoiceRootGroupCode
   */
  _ActInvoiceRootGroupCode: "_ActInvoiceRootGroupCode",

  /**
   * clinical product invoice
   */
  CPINV: "CPINV",

  /**
   * clinical product invoice
   */
  CP: "CP",

  /**
   * clinical service invoice
   */
  CSINV: "CSINV",

  /**
   * clinical service invoice
   */
  CS: "CS",

  /**
   * clinical service and product
   */
  CSPINV: "CSPINV",

  /**
   * financial invoice
   */
  FININV: "FININV",

  /**
   * oral health service
   */
  OHSINV: "OHSINV",

  /**
   * preferred accommodation invoice
   */
  PAINV: "PAINV",

  /**
   * preferred accommodation invoice
   */
  PA: "PA",

  /**
   * Rx compound invoice
   */
  RXCINV: "RXCINV",

  /**
   * Rx compound invoice
   */
  RXC: "RXC",

  /**
   * Rx dispense invoice
   */
  RXDINV: "RXDINV",

  /**
   * Rx dispense invoice
   */
  RXD: "RXD",

  /**
   * sessional or block fee invoice
   */
  SBFINV: "SBFINV",

  /**
   * vision dispense invoice
   */
  VRXINV: "VRXINV",

  /**
   * ActInvoiceElementSummaryCode
   */
  _ActInvoiceElementSummaryCode: "_ActInvoiceElementSummaryCode",

  /**
   * InvoiceElementAdjudicated
   */
  _InvoiceElementAdjudicated: "_InvoiceElementAdjudicated",

  /**
   * adjud. nullified prior-period electronic amount
   */
  ADNFPPELAT: "ADNFPPELAT",

  /**
   * adjud. nullified prior-period electronic amount
   */
  ADCNPPELAT: "ADCNPPELAT",

  /**
   * adjud. nullified prior-period electronic count
   */
  ADNFPPELCT: "ADNFPPELCT",

  /**
   * adjud. nullified prior-period electronic count
   */
  ADCNPPELCT: "ADCNPPELCT",

  /**
   * adjud. nullified prior-period manual amount
   */
  ADNFPPMNAT: "ADNFPPMNAT",

  /**
   * adjud. nullified prior-period manual amount
   */
  ADCNPPMNAT: "ADCNPPMNAT",

  /**
   * adjud. nullified prior-period manual count
   */
  ADNFPPMNCT: "ADNFPPMNCT",

  /**
   * adjud. nullified prior-period manual count
   */
  ADCNPPMNCT: "ADCNPPMNCT",

  /**
   * adjud. nullified same-period electronic amount
   */
  ADNFSPELAT: "ADNFSPELAT",

  /**
   * adjud. nullified same-period electronic amount
   */
  ADCNSPELAT: "ADCNSPELAT",

  /**
   * adjud. nullified same-period electronic count
   */
  ADNFSPELCT: "ADNFSPELCT",

  /**
   * adjud. nullified same-period electronic count
   */
  ADCNSPELCT: "ADCNSPELCT",

  /**
   * adjud. nullified same-period manual amount
   */
  ADNFSPMNAT: "ADNFSPMNAT",

  /**
   * adjud. nullified same-period manual amount
   */
  ADCNSPMNAT: "ADCNSPMNAT",

  /**
   * adjud. nullified same-period manual count
   */
  ADNFSPMNCT: "ADNFSPMNCT",

  /**
   * adjud. nullified same-period manual count
   */
  ADCNSPMNCT: "ADCNSPMNCT",

  /**
   * adjud. non-payee payable prior-period electronic amount
   */
  ADNPPPELAT: "ADNPPPELAT",

  /**
   * adjud. non-payee payable prior-period electronic count
   */
  ADNPPPELCT: "ADNPPPELCT",

  /**
   * adjud. non-payee payable prior-period manual amount
   */
  ADNPPPMNAT: "ADNPPPMNAT",

  /**
   * adjud. non-payee payable prior-period manual count
   */
  ADNPPPMNCT: "ADNPPPMNCT",

  /**
   * adjud. non-payee payable same-period electronic amount
   */
  ADNPSPELAT: "ADNPSPELAT",

  /**
   * adjud. non-payee payable same-period electronic count
   */
  ADNPSPELCT: "ADNPSPELCT",

  /**
   * adjud. non-payee payable same-period manual amount
   */
  ADNPSPMNAT: "ADNPSPMNAT",

  /**
   * adjud. non-payee payable same-period manual count
   */
  ADNPSPMNCT: "ADNPSPMNCT",

  /**
   * adjud. payee payable prior-period electronic amount
   */
  ADPPPPELAT: "ADPPPPELAT",

  /**
   * adjud. payee payable prior-period electronic count
   */
  ADPPPPELCT: "ADPPPPELCT",

  /**
   * adjud. payee payable prior-period manual amout
   */
  ADPPPPMNAT: "ADPPPPMNAT",

  /**
   * adjud. payee payable prior-period manual count
   */
  ADPPPPMNCT: "ADPPPPMNCT",

  /**
   * adjud. payee payable same-period electronic amount
   */
  ADPPSPELAT: "ADPPSPELAT",

  /**
   * adjud. payee payable same-period electronic count
   */
  ADPPSPELCT: "ADPPSPELCT",

  /**
   * adjud. payee payable same-period manual amount
   */
  ADPPSPMNAT: "ADPPSPMNAT",

  /**
   * adjud. payee payable same-period manual count
   */
  ADPPSPMNCT: "ADPPSPMNCT",

  /**
   * adjud. refused prior-period electronic amount
   */
  ADRFPPELAT: "ADRFPPELAT",

  /**
   * adjud. refused prior-period electronic count
   */
  ADRFPPELCT: "ADRFPPELCT",

  /**
   * adjud. refused prior-period manual amount
   */
  ADRFPPMNAT: "ADRFPPMNAT",

  /**
   * adjud. refused prior-period manual count
   */
  ADRFPPMNCT: "ADRFPPMNCT",

  /**
   * adjud. refused same-period electronic amount
   */
  ADRFSPELAT: "ADRFSPELAT",

  /**
   * adjud. refused same-period electronic count
   */
  ADRFSPELCT: "ADRFSPELCT",

  /**
   * adjud. refused same-period manual amount
   */
  ADRFSPMNAT: "ADRFSPMNAT",

  /**
   * adjud. refused same-period manual count
   */
  ADRFSPMNCT: "ADRFSPMNCT",

  /**
   * InvoiceElementPaid
   */
  _InvoiceElementPaid: "_InvoiceElementPaid",

  /**
   * paid nullified prior-period electronic amount
   */
  PDNFPPELAT: "PDNFPPELAT",

  /**
   * paid nullified prior-period electronic amount
   */
  PDCNPPELAT: "PDCNPPELAT",

  /**
   * paid nullified prior-period electronic count
   */
  PDNFPPELCT: "PDNFPPELCT",

  /**
   * paid nullified prior-period electronic count
   */
  PDCNPPELCT: "PDCNPPELCT",

  /**
   * paid nullified prior-period manual amount
   */
  PDNFPPMNAT: "PDNFPPMNAT",

  /**
   * paid nullified prior-period manual amount
   */
  PDCNPPMNAT: "PDCNPPMNAT",

  /**
   * paid nullified prior-period manual count
   */
  PDNFPPMNCT: "PDNFPPMNCT",

  /**
   * paid nullified prior-period manual count
   */
  PDCNPPMNCT: "PDCNPPMNCT",

  /**
   * paid nullified same-period electronic amount
   */
  PDNFSPELAT: "PDNFSPELAT",

  /**
   * paid nullified same-period electronic amount
   */
  PDCNSPELAT: "PDCNSPELAT",

  /**
   * paid nullified same-period electronic count
   */
  PDNFSPELCT: "PDNFSPELCT",

  /**
   * paid nullified same-period electronic count
   */
  PDCNSPELCT: "PDCNSPELCT",

  /**
   * paid nullified same-period manual amount
   */
  PDNFSPMNAT: "PDNFSPMNAT",

  /**
   * paid nullified same-period manual amount
   */
  PDCNSPMNAT: "PDCNSPMNAT",

  /**
   * paid nullified same-period manual count
   */
  PDNFSPMNCT: "PDNFSPMNCT",

  /**
   * paid nullified same-period manual count
   */
  PDCNSPMNCT: "PDCNSPMNCT",

  /**
   * paid non-payee payable prior-period electronic amount
   */
  PDNPPPELAT: "PDNPPPELAT",

  /**
   * paid non-payee payable prior-period electronic count
   */
  PDNPPPELCT: "PDNPPPELCT",

  /**
   * paid non-payee payable prior-period manual amount
   */
  PDNPPPMNAT: "PDNPPPMNAT",

  /**
   * paid non-payee payable prior-period manual count
   */
  PDNPPPMNCT: "PDNPPPMNCT",

  /**
   * paid non-payee payable same-period electronic amount
   */
  PDNPSPELAT: "PDNPSPELAT",

  /**
   * paid non-payee payable same-period electronic count
   */
  PDNPSPELCT: "PDNPSPELCT",

  /**
   * paid non-payee payable same-period manual amount
   */
  PDNPSPMNAT: "PDNPSPMNAT",

  /**
   * paid non-payee payable same-period manual count
   */
  PDNPSPMNCT: "PDNPSPMNCT",

  /**
   * paid payee payable prior-period electronic amount
   */
  PDPPPPELAT: "PDPPPPELAT",

  /**
   * paid payee payable prior-period electronic count
   */
  PDPPPPELCT: "PDPPPPELCT",

  /**
   * paid payee payable prior-period manual amount
   */
  PDPPPPMNAT: "PDPPPPMNAT",

  /**
   * paid payee payable prior-period manual count
   */
  PDPPPPMNCT: "PDPPPPMNCT",

  /**
   * paid payee payable same-period electronic amount
   */
  PDPPSPELAT: "PDPPSPELAT",

  /**
   * paid payee payable same-period electronic count
   */
  PDPPSPELCT: "PDPPSPELCT",

  /**
   * paid payee payable same-period manual amount
   */
  PDPPSPMNAT: "PDPPSPMNAT",

  /**
   * paid payee payable same-period manual count
   */
  PDPPSPMNCT: "PDPPSPMNCT",

  /**
   * InvoiceElementSubmitted
   */
  _InvoiceElementSubmitted: "_InvoiceElementSubmitted",

  /**
   * submitted billed electronic amount
   */
  SBBLELAT: "SBBLELAT",

  /**
   * submitted billed electronic amount
   */
  SBBLAT: "SBBLAT",

  /**
   * submitted billed electronic count
   */
  SBBLELCT: "SBBLELCT",

  /**
   * submitted billed electronic count
   */
  SBBLCT: "SBBLCT",

  /**
   * submitted nullified electronic amount
   */
  SBNFELAT: "SBNFELAT",

  /**
   * submitted nullified electronic amount
   */
  SBCNAT: "SBCNAT",

  /**
   * submitted cancelled electronic count
   */
  SBNFELCT: "SBNFELCT",

  /**
   * submitted cancelled electronic count
   */
  SBCNCT: "SBCNCT",

  /**
   * submitted pending electronic amount
   */
  SBPDELAT: "SBPDELAT",

  /**
   * submitted pending electronic amount
   */
  SBPDAT: "SBPDAT",

  /**
   * submitted pending electronic count
   */
  SBPDELCT: "SBPDELCT",

  /**
   * submitted pending electronic count
   */
  SBPDCT: "SBPDCT",

  /**
   * ActInvoiceOverrideCode
   */
  _ActInvoiceOverrideCode: "_ActInvoiceOverrideCode",

  /**
   * coverage problem
   */
  COVGE: "COVGE",

  /**
   * electronic form to follow
   */
  EFORM: "EFORM",

  /**
   * fax to follow
   */
  FAX: "FAX",

  /**
   * good faith indicator
   */
  GFTH: "GFTH",

  /**
   * late invoice
   */
  LATE: "LATE",

  /**
   * manual review
   */
  MANUAL: "MANUAL",

  /**
   * out of jurisdiction
   */
  OOJ: "OOJ",

  /**
   * orthodontic service
   */
  ORTHO: "ORTHO",

  /**
   * paper documentation to follow
   */
  PAPER: "PAPER",

  /**
   * public insurance exhausted
   */
  PIE: "PIE",

  /**
   * delayed by a previous payor
   */
  PYRDELAY: "PYRDELAY",

  /**
   * referral not required
   */
  REFNR: "REFNR",

  /**
   * repeated service
   */
  REPSERV: "REPSERV",

  /**
   * unrelated service
   */
  UNRELAT: "UNRELAT",

  /**
   * verbal authorization
   */
  VERBAUTH: "VERBAUTH",

  /**
   * ActListCode
   */
  _ActListCode: "_ActListCode",

  /**
   * ActObservationList
   */
  _ActObservationList: "_ActObservationList",

  /**
   * care plan
   */
  CARELIST: "CARELIST",

  /**
   * condition list
   */
  CONDLIST: "CONDLIST",

  /**
   * intolerance list
   */
  INTOLIST: "INTOLIST",

  /**
   * problem list
   */
  PROBLIST: "PROBLIST",

  /**
   * risk factors
   */
  RISKLIST: "RISKLIST",

  /**
   * goal list
   */
  GOALLIST: "GOALLIST",

  /**
   * ActTherapyDurationWorkingListCode
   */
  _ActTherapyDurationWorkingListCode: "_ActTherapyDurationWorkingListCode",

  /**
   * act medication therapy duration working list
   */
  _ActMedicationTherapyDurationWorkingListCode:
    "_ActMedicationTherapyDurationWorkingListCode",

  /**
   * short term/acute
   */
  ACU: "ACU",

  /**
   * continuous/chronic
   */
  CHRON: "CHRON",

  /**
   * one time
   */
  ONET: "ONET",

  /**
   * as needed
   */
  PRN: "PRN",

  /**
   * medication list
   */
  MEDLIST: "MEDLIST",

  /**
   * current medication list
   */
  CURMEDLIST: "CURMEDLIST",

  /**
   * discharge medication list
   */
  DISCMEDLIST: "DISCMEDLIST",

  /**
   * medication history
   */
  HISTMEDLIST: "HISTMEDLIST",

  /**
   * ActProcedureCategoryList
   */
  _ActProcedureCategoryList: "_ActProcedureCategoryList",

  /**
   * ActMonitoringProtocolCode
   */
  _ActMonitoringProtocolCode: "_ActMonitoringProtocolCode",

  /**
   * Controlled Substance
   */
  CTLSUB: "CTLSUB",

  /**
   * DEADrugSchedule
   */
  _DEADrugSchedule: "_DEADrugSchedule",

  /**
   * investigational
   */
  INV: "INV",

  /**
   * limited use
   */
  LU: "LU",

  /**
   * non prescription medicine
   */
  OTC: "OTC",

  /**
   * prescription only medicine
   */
  RX: "RX",

  /**
   * special authorization
   */
  SA: "SA",

  /**
   * special access
   */
  SAC: "SAC",

  /**
   * ActNonObservationIndicationCode
   */
  _ActNonObservationIndicationCode: "_ActNonObservationIndicationCode",

  /**
   * imaging study requiring contrast
   */
  IND01: "IND01",

  /**
   * colonoscopy prep
   */
  IND02: "IND02",

  /**
   * prophylaxis
   */
  IND03: "IND03",

  /**
   * surgical prophylaxis
   */
  IND04: "IND04",

  /**
   * pregnancy prophylaxis
   */
  IND05: "IND05",

  /**
   * act observation verification
   */
  _ActObservationVerificationType: "_ActObservationVerificationType",

  /**
   * verify paper
   */
  VFPAPER: "VFPAPER",

  /**
   * verify paper
   */
  VRFPAPER: "VRFPAPER",

  /**
   * ActPaymentCode
   */
  _ActPaymentCode: "_ActPaymentCode",

  /**
   * Automated Clearing House
   */
  ACH: "ACH",

  /**
   * Cheque
   */
  CHK: "CHK",

  /**
   * Direct Deposit
   */
  DDP: "DDP",

  /**
   * Non-Payment Data
   */
  NON: "NON",

  /**
   * ActPharmacySupplyType
   */
  _ActPharmacySupplyType: "_ActPharmacySupplyType",

  /**
   * Daily Fill
   */
  DF: "DF",

  /**
   * Emergency Supply
   */
  EM: "EM",

  /**
   * Script Owing
   */
  SO: "SO",

  /**
   * First Fill
   */
  FF: "FF",

  /**
   * First Fill - Complete
   */
  FFC: "FFC",

  /**
   * First Fill - Part Fill
   */
  FFP: "FFP",

  /**
   * first fill, partial strength
   */
  FFSS: "FFSS",

  /**
   * Trial Fill
   */
  TF: "TF",

  /**
   * Floor stock
   */
  FS: "FS",

  /**
   * Manufacturer Sample
   */
  MS: "MS",

  /**
   * Refill
   */
  RF: "RF",

  /**
   * Unit Dose
   */
  UD: "UD",

  /**
   * Refill - Complete
   */
  RFC: "RFC",

  /**
   * refill complete partial strength
   */
  RFCS: "RFCS",

  /**
   * Refill (First fill this facility)
   */
  RFF: "RFF",

  /**
   * refill partial strength (first fill this facility)
   */
  RFFS: "RFFS",

  /**
   * Refill - Part Fill
   */
  RFP: "RFP",

  /**
   * refill part fill partial strength
   */
  RFPS: "RFPS",

  /**
   * refill partial strength
   */
  RFS: "RFS",

  /**
   * Trial Balance
   */
  TB: "TB",

  /**
   * trial balance partial strength
   */
  TBS: "TBS",

  /**
   * unit dose equivalent
   */
  UDE: "UDE",

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

  /**
   * ActProductAcquisitionCode
   */
  _ActProductAcquisitionCode: "_ActProductAcquisitionCode",

  /**
   * Loan
   */
  LOAN: "LOAN",

  /**
   * Rent
   */
  RENT: "RENT",

  /**
   * Transfer
   */
  TRANSFER: "TRANSFER",

  /**
   * Sale
   */
  SALE: "SALE",

  /**
   * ActSpecimenTransportCode
   */
  _ActSpecimenTransportCode: "_ActSpecimenTransportCode",

  /**
   * specimen received
   */
  SREC: "SREC",

  /**
   * specimen in storage
   */
  SSTOR: "SSTOR",

  /**
   * specimen in transit
   */
  STRAN: "STRAN",

  /**
   * ActSpecimenTreatmentCode
   */
  _ActSpecimenTreatmentCode: "_ActSpecimenTreatmentCode",

  /**
   * Acidification
   */
  ACID: "ACID",

  /**
   * Alkalization
   */
  ALK: "ALK",

  /**
   * Defibrination
   */
  DEFB: "DEFB",

  /**
   * Filtration
   */
  FILT: "FILT",

  /**
   * LDL Precipitation
   */
  LDLP: "LDLP",

  /**
   * Neutralization
   */
  NEUT: "NEUT",

  /**
   * Recalcification
   */
  RECA: "RECA",

  /**
   * Ultrafiltration
   */
  UFIL: "UFIL",

  /**
   * ActSubstanceAdministrationCode
   */
  _ActSubstanceAdministrationCode: "_ActSubstanceAdministrationCode",

  /**
   * Drug therapy
   */
  DRUG: "DRUG",

  /**
   * food
   */
  FD: "FD",

  /**
   * Immunization
   */
  IMMUNIZ: "IMMUNIZ",

  /**
   * Booster Immunization
   */
  BOOSTER: "BOOSTER",

  /**
   * Initial Immunization
   */
  INITIMMUNIZ: "INITIMMUNIZ",

  /**
   * ActTaskCode
   */
  _ActTaskCode: "_ActTaskCode",

  /**
   * order entry task
   */
  OE: "OE",

  /**
   * laboratory test order entry task
   */
  LABOE: "LABOE",

  /**
   * medication order entry task
   */
  MEDOE: "MEDOE",

  /**
   * patient documentation task
   */
  PATDOC: "PATDOC",

  /**
   * allergy list review
   */
  ALLERLREV: "ALLERLREV",

  /**
   * clinical note entry task
   */
  CLINNOTEE: "CLINNOTEE",

  /**
   * diagnosis list entry task
   */
  DIAGLISTE: "DIAGLISTE",

  /**
   * discharge instruction entry
   */
  DISCHINSTE: "DISCHINSTE",

  /**
   * discharge summary entry task
   */
  DISCHSUME: "DISCHSUME",

  /**
   * patient education entry
   */
  PATEDUE: "PATEDUE",

  /**
   * pathology report entry task
   */
  PATREPE: "PATREPE",

  /**
   * problem list entry task
   */
  PROBLISTE: "PROBLISTE",

  /**
   * radiology report entry task
   */
  RADREPE: "RADREPE",

  /**
   * immunization list review
   */
  IMMLREV: "IMMLREV",

  /**
   * reminder list review
   */
  REMLREV: "REMLREV",

  /**
   * wellness reminder list review
   */
  WELLREMLREV: "WELLREMLREV",

  /**
   * patient information review task
   */
  PATINFO: "PATINFO",

  /**
   * allergy list entry
   */
  ALLERLE: "ALLERLE",

  /**
   * clinical decision support intervention review
   */
  CDSREV: "CDSREV",

  /**
   * clinical note review task
   */
  CLINNOTEREV: "CLINNOTEREV",

  /**
   * discharge summary review task
   */
  DISCHSUMREV: "DISCHSUMREV",

  /**
   * diagnosis list review task
   */
  DIAGLISTREV: "DIAGLISTREV",

  /**
   * immunization list entry
   */
  IMMLE: "IMMLE",

  /**
   * laboratory results review task
   */
  LABRREV: "LABRREV",

  /**
   * microbiology results review task
   */
  MICRORREV: "MICRORREV",

  /**
   * microbiology organisms results review task
   */
  MICROORGRREV: "MICROORGRREV",

  /**
   * microbiology sensitivity test results review task
   */
  MICROSENSRREV: "MICROSENSRREV",

  /**
   * medication list review task
   */
  MLREV: "MLREV",

  /**
   * medication administration record work list review task
   */
  MARWLREV: "MARWLREV",

  /**
   * orders review task
   */
  OREV: "OREV",

  /**
   * pathology report review task
   */
  PATREPREV: "PATREPREV",

  /**
   * problem list review task
   */
  PROBLISTREV: "PROBLISTREV",

  /**
   * radiology report review task
   */
  RADREPREV: "RADREPREV",

  /**
   * reminder list entry
   */
  REMLE: "REMLE",

  /**
   * wellness reminder list entry
   */
  WELLREMLE: "WELLREMLE",

  /**
   * risk assessment instrument task
   */
  RISKASSESS: "RISKASSESS",

  /**
   * falls risk assessment instrument task
   */
  FALLRISK: "FALLRISK",

  /**
   * ActTransportationModeCode
   */
  _ActTransportationModeCode: "_ActTransportationModeCode",

  /**
   * ActPatientTransportationModeCode
   */
  _ActPatientTransportationModeCode: "_ActPatientTransportationModeCode",

  /**
   * pedestrian transport
   */
  AFOOT: "AFOOT",

  /**
   * pedestrian transport
   */
  OnFoot: "OnFoot",

  /**
   * ambulance transport
   */
  AMBT: "AMBT",

  /**
   * fixed-wing ambulance transport
   */
  AMBAIR: "AMBAIR",

  /**
   * fixed-wing ambulance transport
   */
  "Fixed-wingAmbulance": "Fixed-wingAmbulance",

  /**
   * ground ambulance transport
   */
  AMBGRND: "AMBGRND",

  /**
   * ground ambulance transport
   */
  GroundAmbulance: "GroundAmbulance",

  /**
   * helicopter ambulance transport
   */
  AMBHELO: "AMBHELO",

  /**
   * helicopter ambulance transport
   */
  HelicopterAmbulance: "HelicopterAmbulance",

  /**
   * ambulance transport
   */
  Ambulance: "Ambulance",

  /**
   * law enforcement transport
   */
  LAWENF: "LAWENF",

  /**
   * law enforcement transport
   */
  LawEnforcementVehicle: "LawEnforcementVehicle",

  /**
   * private transport
   */
  PRVTRN: "PRVTRN",

  /**
   * private transport
   */
  PrivateTransport: "PrivateTransport",

  /**
   * public transport
   */
  PUBTRN: "PUBTRN",

  /**
   * public transport
   */
  PublicTransport: "PublicTransport",

  /**
   * ObservationType
   */
  _ObservationType: "_ObservationType",

  /**
   * ActSpecObsCode
   */
  _ActSpecObsCode: "_ActSpecObsCode",

  /**
   * ActSpecObsArtBldCode
   */
  ARTBLD: "ARTBLD",

  /**
   * ActSpecObsDilutionCode
   */
  DILUTION: "DILUTION",

  /**
   * Auto-High Dilution
   */
  "AUTO-HIGH": "AUTO-HIGH",

  /**
   * Auto-Low Dilution
   */
  "AUTO-LOW": "AUTO-LOW",

  /**
   * Pre-Dilution
   */
  PRE: "PRE",

  /**
   * Rerun Dilution
   */
  RERUN: "RERUN",

  /**
   * ActSpecObsEvntfctsCode
   */
  EVNFCTS: "EVNFCTS",

  /**
   * ActSpecObsInterferenceCode
   */
  INTFR: "INTFR",

  /**
   * Fibrin
   */
  FIBRIN: "FIBRIN",

  /**
   * Hemolysis
   */
  HEMOLYSIS: "HEMOLYSIS",

  /**
   * Icterus
   */
  ICTERUS: "ICTERUS",

  /**
   * Lipemia
   */
  LIPEMIA: "LIPEMIA",

  /**
   * ActSpecObsVolumeCode
   */
  VOLUME: "VOLUME",

  /**
   * Available Volume
   */
  AVAILABLE: "AVAILABLE",

  /**
   * Consumption Volume
   */
  CONSUMPTION: "CONSUMPTION",

  /**
   * Current Volume
   */
  CURRENT: "CURRENT",

  /**
   * Initial Volume
   */
  INITIAL: "INITIAL",

  /**
   * AnnotationType
   */
  _AnnotationType: "_AnnotationType",

  /**
   * ActPatientAnnotationType
   */
  _ActPatientAnnotationType: "_ActPatientAnnotationType",

  /**
   * diagnostic image note
   */
  ANNDI: "ANNDI",

  /**
   * general note
   */
  ANNGEN: "ANNGEN",

  /**
   * immunization note
   */
  ANNIMM: "ANNIMM",

  /**
   * laboratory note
   */
  ANNLAB: "ANNLAB",

  /**
   * medication note
   */
  ANNMED: "ANNMED",

  /**
   * ECGAnnotationType
   */
  _ECGAnnotationType: "_ECGAnnotationType",

  /**
   * GeneticObservationType
   */
  _GeneticObservationType: "_GeneticObservationType",

  /**
   * gene
   */
  GENE: "GENE",

  /**
   * ImmunizationObservationType
   */
  _ImmunizationObservationType: "_ImmunizationObservationType",

  /**
   * antigen count
   */
  OBSANTC: "OBSANTC",

  /**
   * antigen validity
   */
  OBSANTV: "OBSANTV",

  /**
   * Individual Case Safety Report Type
   */
  _IndividualCaseSafetyReportType: "_IndividualCaseSafetyReportType",

  /**
   * patient adverse event
   */
  PAT_ADV_EVNT: "PAT_ADV_EVNT",

  /**
   * vaccine product problem
   */
  VAC_PROBLEM: "VAC_PROBLEM",

  /**
   * LOINCObservationActContextAgeType
   */
  _LOINCObservationActContextAgeType: "_LOINCObservationActContextAgeType",

  /**
   * age patient qn est
   */
  "21611-9": "21611-9",

  /**
   * age patient qn reported
   */
  "21612-7": "21612-7",

  /**
   * age patient qn calc
   */
  "29553-5": "29553-5",

  /**
   * age patient qn definition
   */
  "30525-0": "30525-0",

  /**
   * age at onset of adverse event
   */
  "30972-4": "30972-4",

  /**
   * MedicationObservationType
   */
  _MedicationObservationType: "_MedicationObservationType",

  /**
   * representative half-life
   */
  REP_HALF_LIFE: "REP_HALF_LIFE",

  /**
   * coating
   */
  SPLCOATING: "SPLCOATING",

  /**
   * color
   */
  SPLCOLOR: "SPLCOLOR",

  /**
   * image
   */
  SPLIMAGE: "SPLIMAGE",

  /**
   * imprint
   */
  SPLIMPRINT: "SPLIMPRINT",

  /**
   * scoring
   */
  SPLSCORING: "SPLSCORING",

  /**
   * shape
   */
  SPLSHAPE: "SPLSHAPE",

  /**
   * size
   */
  SPLSIZE: "SPLSIZE",

  /**
   * symbol
   */
  SPLSYMBOL: "SPLSYMBOL",

  /**
   * ObservationIssueTriggerCodedObservationType
   */
  _ObservationIssueTriggerCodedObservationType:
    "_ObservationIssueTriggerCodedObservationType",

  /**
   * case transmission mode
   */
  _CaseTransmissionMode: "_CaseTransmissionMode",

  /**
   * airborne transmission
   */
  AIRTRNS: "AIRTRNS",

  /**
   * animal to animal transmission
   */
  ANANTRNS: "ANANTRNS",

  /**
   * animal to human transmission
   */
  ANHUMTRNS: "ANHUMTRNS",

  /**
   * body fluid contact transmission
   */
  BDYFLDTRNS: "BDYFLDTRNS",

  /**
   * blood borne transmission
   */
  BLDTRNS: "BLDTRNS",

  /**
   * transdermal transmission
   */
  DERMTRNS: "DERMTRNS",

  /**
   * environmental exposure transmission
   */
  ENVTRNS: "ENVTRNS",

  /**
   * fecal-oral transmission
   */
  FECTRNS: "FECTRNS",

  /**
   * fomite transmission
   */
  FOMTRNS: "FOMTRNS",

  /**
   * food-borne transmission
   */
  FOODTRNS: "FOODTRNS",

  /**
   * human to human transmission
   */
  HUMHUMTRNS: "HUMHUMTRNS",

  /**
   * indeterminate disease transmission mode
   */
  INDTRNS: "INDTRNS",

  /**
   * lactation transmission
   */
  LACTTRNS: "LACTTRNS",

  /**
   * nosocomial transmission
   */
  NOSTRNS: "NOSTRNS",

  /**
   * parenteral transmission
   */
  PARTRNS: "PARTRNS",

  /**
   * transplacental transmission
   */
  PLACTRNS: "PLACTRNS",

  /**
   * sexual transmission
   */
  SEXTRNS: "SEXTRNS",

  /**
   * transfusion transmission
   */
  TRNSFTRNS: "TRNSFTRNS",

  /**
   * vector-borne transmission
   */
  VECTRNS: "VECTRNS",

  /**
   * water-borne transmission
   */
  WATTRNS: "WATTRNS",

  /**
   * ObservationQualityMeasureAttribute
   */
  _ObservationQualityMeasureAttribute: "_ObservationQualityMeasureAttribute",

  /**
   * aggregate measure observation
   */
  AGGREGATE: "AGGREGATE",

  /**
   * composite measure method
   */
  CMPMSRMTH: "CMPMSRMTH",

  /**
   * component measure scoring weight
   */
  CMPMSRSCRWGHT: "CMPMSRSCRWGHT",

  /**
   * copyright
   */
  COPY: "COPY",

  /**
   * clinical recommendation statement
   */
  CRS: "CRS",

  /**
   * definition
   */
  DEF: "DEF",

  /**
   * disclaimer
   */
  DISC: "DISC",

  /**
   * finalized date/time
   */
  FINALDT: "FINALDT",

  /**
   * guidance
   */
  GUIDE: "GUIDE",

  /**
   * improvement notation
   */
  IDUR: "IDUR",

  /**
   * items counted
   */
  ITMCNT: "ITMCNT",

  /**
   * keyword
   */
  KEY: "KEY",

  /**
   * measurement end date
   */
  MEDT: "MEDT",

  /**
   * measurement start date
   */
  MSD: "MSD",

  /**
   * risk adjustment
   */
  MSRADJ: "MSRADJ",

  /**
   * rate aggregation
   */
  MSRAGG: "MSRAGG",

  /**
   * health quality measure improvement notation
   */
  MSRIMPROV: "MSRIMPROV",

  /**
   * jurisdiction
   */
  MSRJUR: "MSRJUR",

  /**
   * reporter type
   */
  MSRRPTR: "MSRRPTR",

  /**
   * timeframe for reporting
   */
  MSRRPTTIME: "MSRRPTTIME",

  /**
   * measure scoring
   */
  MSRSCORE: "MSRSCORE",

  /**
   * health quality measure care setting
   */
  MSRSET: "MSRSET",

  /**
   * health quality measure topic type
   */
  MSRTOPIC: "MSRTOPIC",

  /**
   * measurement period
   */
  MSRTP: "MSRTP",

  /**
   * measure type
   */
  MSRTYPE: "MSRTYPE",

  /**
   * rationale
   */
  RAT: "RAT",

  /**
   * reference
   */
  REF: "REF",

  /**
   * supplemental data elements
   */
  SDE: "SDE",

  /**
   * stratification
   */
  STRAT: "STRAT",

  /**
   * transmission format
   */
  TRANF: "TRANF",

  /**
   * notice of use
   */
  USE: "USE",

  /**
   * ObservationSequenceType
   */
  _ObservationSequenceType: "_ObservationSequenceType",

  /**
   * absolute time sequence
   */
  TIME_ABSOLUTE: "TIME_ABSOLUTE",

  /**
   * relative time sequence
   */
  TIME_RELATIVE: "TIME_RELATIVE",

  /**
   * ECGObservationSequenceType
   */
  _ECGObservationSequenceType: "_ECGObservationSequenceType",

  /**
   * ObservationSeriesType
   */
  _ObservationSeriesType: "_ObservationSeriesType",

  /**
   * ECGObservationSeriesType
   */
  _ECGObservationSeriesType: "_ECGObservationSeriesType",

  /**
   * ECG representative beat waveforms
   */
  REPRESENTATIVE_BEAT: "REPRESENTATIVE_BEAT",

  /**
   * ECG rhythm waveforms
   */
  RHYTHM: "RHYTHM",

  /**
   * PatientImmunizationRelatedObservationType
   */
  _PatientImmunizationRelatedObservationType:
    "_PatientImmunizationRelatedObservationType",

  /**
   * classroom
   */
  CLSSRM: "CLSSRM",

  /**
   * grade
   */
  GRADE: "GRADE",

  /**
   * school
   */
  SCHL: "SCHL",

  /**
   * school division
   */
  SCHLDIV: "SCHLDIV",

  /**
   * teacher
   */
  TEACHER: "TEACHER",

  /**
   * PopulationInclusionObservationType
   */
  _PopulationInclusionObservationType: "_PopulationInclusionObservationType",

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
  IPOP: "IPOP",

  /**
   * initial patient population
   */
  IPPOP: "IPPOP",

  /**
   * measure observation
   */
  MSROBS: "MSROBS",

  /**
   * measure population
   */
  MSRPOPL: "MSRPOPL",

  /**
   * measure population exclusions
   */
  MSRPOPLEX: "MSRPOPLEX",

  /**
   * numerator
   */
  NUMER: "NUMER",

  /**
   * numerator exclusions
   */
  NUMEX: "NUMEX",

  /**
   * _PreferenceObservationType
   */
  _PreferenceObservationType: "_PreferenceObservationType",

  /**
   * preference strength
   */
  PREFSTRENGTH: "PREFSTRENGTH",

  /**
   * Adverse Reaction
   */
  ADVERSE_REACTION: "ADVERSE_REACTION",

  /**
   * Assertion
   */
  ASSERTION: "ASSERTION",

  /**
   * case seriousness criteria
   */
  CASESER: "CASESER",

  /**
   * case disease imported observation
   */
  CDIO: "CDIO",

  /**
   * criticality
   */
  CRIT: "CRIT",

  /**
   * case transmission mode observation
   */
  CTMO: "CTMO",

  /**
   * ObservationDiagnosisTypes
   */
  DX: "DX",

  /**
   * admitting diagnosis
   */
  ADMDX: "ADMDX",

  /**
   * discharge diagnosis
   */
  DISDX: "DISDX",

  /**
   * intermediate diagnosis
   */
  INTDX: "INTDX",

  /**
   * nature of injury
   */
  NOI: "NOI",

  /**
   * ObservationDiagnosisTypes
   */
  _ObservationDiagnosisTypes: "_ObservationDiagnosisTypes",

  /**
   * GIS tier
   */
  GISTIER: "GISTIER",

  /**
   * household situation observation
   */
  HHOBS: "HHOBS",

  /**
   * detected issue
   */
  ISSUE: "ISSUE",

  /**
   * ActAdministrativeDetectedIssueCode
   */
  _ActAdministrativeDetectedIssueCode: "_ActAdministrativeDetectedIssueCode",

  /**
   * ActAdministrativeAuthorizationDetectedIssueCode
   */
  _ActAdministrativeAuthorizationDetectedIssueCode:
    "_ActAdministrativeAuthorizationDetectedIssueCode",

  /**
   * Insufficient authorization
   */
  NAT: "NAT",

  /**
   * record suppressed
   */
  SUPPRESSED: "SUPPRESSED",

  /**
   * validation issue
   */
  VALIDAT: "VALIDAT",

  /**
   * Unknown key identifier
   */
  KEY204: "KEY204",

  /**
   * Duplicate key identifier
   */
  KEY205: "KEY205",

  /**
   * Compliance Alert
   */
  COMPLY: "COMPLY",

  /**
   * Duplicate Therapy Alert
   */
  DUPTHPY: "DUPTHPY",

  /**
   * duplicate therapeutic alass alert
   */
  DUPTHPCLS: "DUPTHPCLS",

  /**
   * duplicate generic alert
   */
  DUPTHPGEN: "DUPTHPGEN",

  /**
   * commonly abused/misused alert
   */
  ABUSE: "ABUSE",

  /**
   * potential fraud
   */
  FRAUD: "FRAUD",

  /**
   * Poly-orderer Alert
   */
  PLYDOC: "PLYDOC",

  /**
   * Poly-supplier Alert
   */
  PLYPHRM: "PLYPHRM",

  /**
   * Dosage problem
   */
  DOSE: "DOSE",

  /**
   * dosage-condition alert
   */
  DOSECOND: "DOSECOND",

  /**
   * Dose-Duration Alert
   */
  DOSEDUR: "DOSEDUR",

  /**
   * Dose-Duration High Alert
   */
  DOSEDURH: "DOSEDURH",

  /**
   * Dose-Duration High for Indication Alert
   */
  DOSEDURHIND: "DOSEDURHIND",

  /**
   * Dose-Duration Low Alert
   */
  DOSEDURL: "DOSEDURL",

  /**
   * Dose-Duration Low for Indication Alert
   */
  DOSEDURLIND: "DOSEDURLIND",

  /**
   * High Dose Alert
   */
  DOSEH: "DOSEH",

  /**
   * High Dose for Age Alert
   */
  DOSEHINDA: "DOSEHINDA",

  /**
   * High Dose for Indication Alert
   */
  DOSEHIND: "DOSEHIND",

  /**
   * High Dose for Height/Surface Area Alert
   */
  DOSEHINDSA: "DOSEHINDSA",

  /**
   * High Dose for Weight Alert
   */
  DOSEHINDW: "DOSEHINDW",

  /**
   * Dose-Interval Alert
   */
  DOSEIVL: "DOSEIVL",

  /**
   * Dose-Interval for Indication Alert
   */
  DOSEIVLIND: "DOSEIVLIND",

  /**
   * Low Dose Alert
   */
  DOSEL: "DOSEL",

  /**
   * Low Dose for Age Alert
   */
  DOSELINDA: "DOSELINDA",

  /**
   * Low Dose for Indication Alert
   */
  DOSELIND: "DOSELIND",

  /**
   * Low Dose for Height/Surface Area Alert
   */
  DOSELINDSA: "DOSELINDSA",

  /**
   * Low Dose for Weight Alert
   */
  DOSELINDW: "DOSELINDW",

  /**
   * maximum dosage reached
   */
  MDOSE: "MDOSE",

  /**
   * Observation Alert
   */
  OBSA: "OBSA",

  /**
   * Age Alert
   */
  AGE: "AGE",

  /**
   * adult alert
   */
  ADALRT: "ADALRT",

  /**
   * geriatric alert
   */
  GEALRT: "GEALRT",

  /**
   * pediatric alert
   */
  PEALRT: "PEALRT",

  /**
   * Condition Alert
   */
  COND: "COND",

  /**
   *
   */
  HGHT: "HGHT",

  /**
   * Lactation Alert
   */
  LACT: "LACT",

  /**
   * Pregnancy Alert
   */
  PREG: "PREG",

  /**
   *
   */
  WGHT: "WGHT",

  /**
   * common reaction alert
   */
  CREACT: "CREACT",

  /**
   * Genetic Alert
   */
  GEN: "GEN",

  /**
   * Gender Alert
   */
  GEND: "GEND",

  /**
   * Lab Alert
   */
  LAB: "LAB",

  /**
   * Reaction Alert
   */
  REACT: "REACT",

  /**
   * Allergy Alert
   */
  ALGY: "ALGY",

  /**
   * Intolerance Alert
   */
  INT: "INT",

  /**
   * Related Reaction Alert
   */
  RREACT: "RREACT",

  /**
   * Related Allergy Alert
   */
  RALG: "RALG",

  /**
   * Related Prior Reaction Alert
   */
  RAR: "RAR",

  /**
   * Related Intolerance Alert
   */
  RINT: "RINT",

  /**
   * business constraint violation
   */
  BUS: "BUS",

  /**
   * code is not valid
   */
  CODE_INVAL: "CODE_INVAL",

  /**
   * code has been deprecated
   */
  CODE_DEPREC: "CODE_DEPREC",

  /**
   * invalid format
   */
  FORMAT: "FORMAT",

  /**
   * illegal
   */
  ILLEGAL: "ILLEGAL",

  /**
   * length out of range
   */
  LEN_RANGE: "LEN_RANGE",

  /**
   * length is too long
   */
  LEN_LONG: "LEN_LONG",

  /**
   * length is too short
   */
  LEN_SHORT: "LEN_SHORT",

  /**
   * conditional element missing
   */
  MISSCOND: "MISSCOND",

  /**
   * mandatory element missing
   */
  MISSMAND: "MISSMAND",

  /**
   * duplicate values are not permitted
   */
  NODUPS: "NODUPS",

  /**
   * element will not be persisted
   */
  NOPERSIST: "NOPERSIST",

  /**
   * repetitions out of range
   */
  REP_RANGE: "REP_RANGE",

  /**
   * repetitions above maximum
   */
  MAXOCCURS: "MAXOCCURS",

  /**
   * repetitions below minimum
   */
  MINOCCURS: "MINOCCURS",

  /**
   * ActAdministrativeRuleDetectedIssueCode
   */
  _ActAdministrativeRuleDetectedIssueCode:
    "_ActAdministrativeRuleDetectedIssueCode",

  /**
   * non-matching identification
   */
  KEY206: "KEY206",

  /**
   * obsolete record returned
   */
  OBSOLETE: "OBSOLETE",

  /**
   * ActSuppliedItemDetectedIssueCode
   */
  _ActSuppliedItemDetectedIssueCode: "_ActSuppliedItemDetectedIssueCode",

  /**
   * AdministrationDetectedIssueCode
   */
  _AdministrationDetectedIssueCode: "_AdministrationDetectedIssueCode",

  /**
   * AppropriatenessDetectedIssueCode
   */
  _AppropriatenessDetectedIssueCode: "_AppropriatenessDetectedIssueCode",

  /**
   * InteractionDetectedIssueCode
   */
  _InteractionDetectedIssueCode: "_InteractionDetectedIssueCode",

  /**
   * Food Interaction Alert
   */
  FOOD: "FOOD",

  /**
   * Therapeutic Product Alert
   */
  TPROD: "TPROD",

  /**
   * Drug Interaction Alert
   */
  DRG: "DRG",

  /**
   * Natural Health Product Alert
   */
  NHP: "NHP",

  /**
   * Non-Prescription Interaction Alert
   */
  NONRX: "NONRX",

  /**
   * previously ineffective
   */
  PREVINEF: "PREVINEF",

  /**
   * drug action detected issue
   */
  DACT: "DACT",

  /**
   * timing detected issue
   */
  TIME: "TIME",

  /**
   * end too late alert
   */
  ALRTENDLATE: "ALRTENDLATE",

  /**
   * start too late alert
   */
  ALRTSTRTLATE: "ALRTSTRTLATE",

  /**
   * DrugActionDetectedIssueCode
   */
  _DrugActionDetectedIssueCode: "_DrugActionDetectedIssueCode",

  /**
   * TimingDetectedIssueCode
   */
  _TimingDetectedIssueCode: "_TimingDetectedIssueCode",

  /**
   * End Too Late Alert
   */
  ENDLATE: "ENDLATE",

  /**
   * Start Too Late Alert
   */
  STRTLATE: "STRTLATE",

  /**
   * SupplyDetectedIssueCode
   */
  _SupplyDetectedIssueCode: "_SupplyDetectedIssueCode",

  /**
   * already performed
   */
  ALLDONE: "ALLDONE",

  /**
   * fulfillment alert
   */
  FULFIL: "FULFIL",

  /**
   * no longer actionable
   */
  NOTACTN: "NOTACTN",

  /**
   * not equivalent alert
   */
  NOTEQUIV: "NOTEQUIV",

  /**
   * not generically equivalent alert
   */
  NOTEQUIVGEN: "NOTEQUIVGEN",

  /**
   * not therapeutically equivalent alert
   */
  NOTEQUIVTHER: "NOTEQUIVTHER",

  /**
   * event timing incorrect alert
   */
  TIMING: "TIMING",

  /**
   * outside requested time
   */
  INTERVAL: "INTERVAL",

  /**
   * too soon within frequency based on the usage
   */
  MINFREQ: "MINFREQ",

  /**
   * held/suspended alert
   */
  HELD: "HELD",

  /**
   * Refill Too Late Alert
   */
  TOOLATE: "TOOLATE",

  /**
   * Refill Too Soon Alert
   */
  TOOSOON: "TOOSOON",

  /**
   * record recorded as historical
   */
  HISTORIC: "HISTORIC",

  /**
   * violates stated preferences
   */
  PATPREF: "PATPREF",

  /**
   * violates stated preferences, alternate available
   */
  PATPREFALT: "PATPREFALT",

  /**
   * ActFinancialDetectedIssueCode
   */
  _ActFinancialDetectedIssueCode: "_ActFinancialDetectedIssueCode",

  /**
   * ClinicalActionDetectedIssueCode
   */
  _ClinicalActionDetectedIssueCode: "_ClinicalActionDetectedIssueCode",

  /**
   * Caregap
   */
  CAREGAP: "CAREGAP",

  /**
   * Codinggap
   */
  CODINGGAP: "CODINGGAP",

  /**
   * knowledge subject
   */
  KSUBJ: "KSUBJ",

  /**
   * knowledge subtopic
   */
  KSUBT: "KSUBT",

  /**
   * intolerance
   */
  OINT: "OINT",

  /**
   * Allergy
   */
  ALG: "ALG",

  /**
   * Drug Allergy
   */
  DALG: "DALG",

  /**
   * Environmental Allergy
   */
  EALG: "EALG",

  /**
   * Food Allergy
   */
  FALG: "FALG",

  /**
   * Drug Intolerance
   */
  DINT: "DINT",

  /**
   * Drug Non-Allergy Intolerance
   */
  DNAINT: "DNAINT",

  /**
   * Environmental Intolerance
   */
  EINT: "EINT",

  /**
   * Environmental Non-Allergy Intolerance
   */
  ENAINT: "ENAINT",

  /**
   * Food Intolerance
   */
  FINT: "FINT",

  /**
   * Food Non-Allergy Intolerance
   */
  FNAINT: "FNAINT",

  /**
   * Non-Allergy Intolerance
   */
  NAINT: "NAINT",

  /**
   * Severity Observation
   */
  SEV: "SEV",

  /**
   * ActPrivilegeCategorizationType
   */
  _ActPrivilegeCategorizationType: "_ActPrivilegeCategorizationType",

  /**
   * AdverseSubstanceAdministrationEventActionTakenType
   */
  _AdverseSubstanceAdministrationEventActionTakenType:
    "_AdverseSubstanceAdministrationEventActionTakenType",

  /**
   * CommonClinicalObservationType
   */
  _CommonClinicalObservationType: "_CommonClinicalObservationType",

  /**
   * FDALabelData
   */
  _FDALabelData: "_FDALabelData",

  /**
   * coating
   */
  FDACOATING: "FDACOATING",

  /**
   * color
   */
  FDACOLOR: "FDACOLOR",

  /**
   * imprint code
   */
  FDAIMPRINTCD: "FDAIMPRINTCD",

  /**
   * logo
   */
  FDALOGO: "FDALOGO",

  /**
   * scoring
   */
  FDASCORING: "FDASCORING",

  /**
   * shape
   */
  FDASHAPE: "FDASHAPE",

  /**
   * size
   */
  FDASIZE: "FDASIZE",

  /**
   * observation allergy test
   */
  _ObservationAllergyTestCode: "_ObservationAllergyTestCode",

  /**
   * ObservationAllergyTestType
   */
  _ObservationAllergyTestType: "_ObservationAllergyTestType",

  /**
   * observation causality assessment
   */
  _ObservationCausalityAssessmentType: "_ObservationCausalityAssessmentType",

  /**
   * observation dosage definition precondition type
   */
  _ObservationDosageDefinitionPreconditionType:
    "_ObservationDosageDefinitionPreconditionType",

  /**
   * ObservationGenomicFamilyHistoryType
   */
  _ObservationGenomicFamilyHistoryType: "_ObservationGenomicFamilyHistoryType",

  /**
   * ObservationIndicationType
   */
  _ObservationIndicationType: "_ObservationIndicationType",

  /**
   * ObservationIssueTriggerMeasuredObservationType
   */
  _ObservationIssueTriggerMeasuredObservationType:
    "_ObservationIssueTriggerMeasuredObservationType",

  /**
   * ObservationQueryMatchType
   */
  _ObservationQueryMatchType: "_ObservationQueryMatchType",

  /**
   * ObservationVisionPrescriptionType
   */
  _ObservationVisionPrescriptionType: "_ObservationVisionPrescriptionType",

  /**
   * PatientCharacteristicObservationType
   */
  _PatientCharacteristicObservationType:
    "_PatientCharacteristicObservationType",

  /**
   * SimpleMeasurableClinicalObservationType
   */
  _SimpleMeasurableClinicalObservationType:
    "_SimpleMeasurableClinicalObservationType",

  /**
   * ROIOverlayShape
   */
  _ROIOverlayShape: "_ROIOverlayShape",

  /**
   * circle
   */
  CIRCLE: "CIRCLE",

  /**
   * ellipse
   */
  ELLIPSE: "ELLIPSE",

  /**
   * point
   */
  POINT: "POINT",

  /**
   * polyline
   */
  POLY: "POLY",

  /**
   * corrected
   */
  C: "C",

  /**
   * Diet
   */
  DIET: "DIET",

  /**
   * breikost (GE)
   */
  BR: "BR",

  /**
   * diabetes mellitus diet
   */
  DM: "DM",

  /**
   * fasting
   */
  FAST: "FAST",

  /**
   * formula diet
   */
  FORMULA: "FORMULA",

  /**
   * gluten free
   */
  GF: "GF",

  /**
   * low fat
   */
  LF: "LF",

  /**
   * low protein
   */
  LP: "LP",

  /**
   * liquid
   */
  LQ: "LQ",

  /**
   * low sodium
   */
  LS: "LS",

  /**
   * normal diet
   */
  N: "N",

  /**
   * no fat
   */
  NF: "NF",

  /**
   * phenylalanine free
   */
  PAF: "PAF",

  /**
   * parenteral
   */
  PAR: "PAR",

  /**
   * reduction diet
   */
  RD: "RD",

  /**
   * schonkost (GE)
   */
  SCH: "SCH",

  /**
   * nutritional supplement
   */
  SUPPLEMENT: "SUPPLEMENT",

  /**
   * tea only
   */
  T: "T",

  /**
   * low valin, leucin, isoleucin
   */
  VLI: "VLI",

  /**
   * drug program
   */
  DRUGPRG: "DRUGPRG",

  /**
   * final
   */
  F: "F",

  /**
   * preliminary
   */
  PRLMN: "PRLMN",

  /**
   * SecurityObservationType
   */
  SECOBS: "SECOBS",

  /**
   * security category observation
   */
  SECCATOBS: "SECCATOBS",

  /**
   * security classification observation
   */
  SECCLASSOBS: "SECCLASSOBS",

  /**
   * security control observation
   */
  SECCONOBS: "SECCONOBS",

  /**
   * security integrity observation
   */
  SECINTOBS: "SECINTOBS",

  /**
   * security alteration integrity observation
   */
  SECALTINTOBS: "SECALTINTOBS",

  /**
   * security data integrity observation
   */
  SECDATINTOBS: "SECDATINTOBS",

  /**
   * security integrity confidence observation
   */
  SECINTCONOBS: "SECINTCONOBS",

  /**
   * security integrity provenance observation
   */
  SECINTPRVOBS: "SECINTPRVOBS",

  /**
   * security integrity provenance asserted by observation
   */
  SECINTPRVABOBS: "SECINTPRVABOBS",

  /**
   * security integrity provenance reported by observation
   */
  SECINTPRVRBOBS: "SECINTPRVRBOBS",

  /**
   * security integrity status observation
   */
  SECINTSTOBS: "SECINTSTOBS",

  /**
   * SECTRSTOBS
   */
  SECTRSTOBS: "SECTRSTOBS",

  /**
   * trust accreditation observation
   */
  TRSTACCRDOBS: "TRSTACCRDOBS",

  /**
   * trust agreement observation
   */
  TRSTAGREOBS: "TRSTAGREOBS",

  /**
   * trust certificate observation
   */
  TRSTCERTOBS: "TRSTCERTOBS",

  /**
   * trust framework observation
   */
  TRSTFWKOBS: "TRSTFWKOBS",

  /**
   * trust assurance observation
   */
  TRSTLOAOBS: "TRSTLOAOBS",

  /**
   * trust mechanism observation
   */
  TRSTMECOBS: "TRSTMECOBS",

  /**
   * subsidized fee for service program
   */
  SUBSIDFFS: "SUBSIDFFS",

  /**
   * (workers compensation program
   */
  WRKCOMP: "WRKCOMP",

  /**
   * ActAdjudicationInformationCode
   */
  _ActAdjudicationInformationCode: "_ActAdjudicationInformationCode",

  /**
   * ActBillableTreatmentPlanCode
   */
  _ActBillableTreatmentPlanCode: "_ActBillableTreatmentPlanCode",

  /**
   * ActCognitiveProfessionalServiceCode
   */
  _ActCognitiveProfessionalServiceCode: "_ActCognitiveProfessionalServiceCode",

  /**
   * ActIdentityDocumentCode
   */
  _ActIdentityDocumentCode: "_ActIdentityDocumentCode",

  /**
   * ActOrderCode
   */
  _ActOrderCode: "_ActOrderCode",

  /**
   * ActPrivilegeCategorization
   */
  _ActPrivilegeCategorization: "_ActPrivilegeCategorization",

  /**
   * ActProcedureCode
   */
  _ActProcedureCode: "_ActProcedureCode",

  /**
   * ActBillableServiceCode
   */
  _ActBillableServiceCode: "_ActBillableServiceCode",

  /**
   * ActMedicalBillableServiceCode
   */
  _ActMedicalBillableServiceCode: "_ActMedicalBillableServiceCode",

  /**
   * ActNonMedicalBillableServiceCode
   */
  _ActNonMedicalBillableServiceCode: "_ActNonMedicalBillableServiceCode",

  /**
   * ActOralHealthProcedureCode
   */
  _ActOralHealthProcedureCode: "_ActOralHealthProcedureCode",

  /**
   * ActRegistryCode
   */
  _ActRegistryCode: "_ActRegistryCode",

  /**
   * ActSecurityObjectCode
   */
  _ActSecurityObjectCode: "_ActSecurityObjectCode",

  /**
   * AdvanceBeneficiaryNoticeType
   */
  _AdvanceBeneficiaryNoticeType: "_AdvanceBeneficiaryNoticeType",

  /**
   * CPT4
   */
  _CPT4: "_CPT4",

  /**
   * ExternallyDefinedActCodes
   */
  _ExternallyDefinedActCodes: "_ExternallyDefinedActCodes",

  /**
   * HL7DefinedActCodes
   */
  _HL7DefinedActCodes: "_HL7DefinedActCodes",

  /**
   * ActDetectedIssueCode
   */
  _ActDetectedIssueCode: "_ActDetectedIssueCode",

  /**
   * HL7TriggerEventCode
   */
  _HL7TriggerEventCode: "_HL7TriggerEventCode",

  /**
   * SubstanceAdministrationActCode
   */
  _SubstanceAdministrationActCode: "_SubstanceAdministrationActCode",

  /**
   * IndividualCaseSafetyReportCriteria
   */
  _IndividualCaseSafetyReportCriteria: "_IndividualCaseSafetyReportCriteria",

  /**
   * IndividualCaseSafetyReportProductCharacteristic
   */
  _IndividualCaseSafetyReportProductCharacteristic:
    "_IndividualCaseSafetyReportProductCharacteristic",

  /**
   * ObservationActAgeGroupType
   */
  _ObservationActAgeGroupType: "_ObservationActAgeGroupType",

  /**
   *
   */
  COPAY: "COPAY",

  /**
   *
   */
  DEDUCT: "DEDUCT",

  /**
   *
   */
  DOSEIND: "DOSEIND",

  /**
   *
   */
  PRA: "PRA",

  /**
   * Storage
   */
  STORE: "STORE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActConsentDirectiveTypeCode =
  typeof ActConsentDirectiveTypeCode[keyof typeof ActConsentDirectiveTypeCode];
