/**
 * Specifies the state change of a target Act, such as a document or an entry, from its previous state as a predecessor Act.

For example, if the target Act is the result of a predecessor Act being "obsoleted" and replaced with the target Act, the source ProvenanceEventCurrentState Act code would be "obsoleted".
 * http://terminology.hl7.org/ValueSet/v3-ProvenanceEventCurrentState
 */
export const ProvenanceEventCurrentStateCode = {
  /**
   * aborted
   */
  aborted: "aborted",

  /**
   * cancelled
   */
  cancelled: "cancelled",

  /**
   * completed
   */
  completed: "completed",

  /**
   * new
   */
  new: "new",

  /**
   * nullified
   */
  nullified: "nullified",

  /**
   * obsolete
   */
  obsolete: "obsolete",

  /**
   * authenticated
   */
  authenticated: "AU",

  /**
   * dictated
   */
  dictated: "DI",

  /**
   * documented
   */
  documented: "DO",

  /**
   * legally authenticated
   */
  legallyauthenticated: "LA",

  /**
   * unsigned completed document
   */
  unsignedcompleteddocument: "UC",

  /**
   * ActAccountCode
   */
  ActAccountCode: "_ActAccountCode",

  /**
   * account receivable
   */
  accountreceivable: "ACCTRECEIVABLE",

  /**
   * Cash
   */
  Cash: "CASH",

  /**
   * credit card
   */
  creditcard: "CC",

  /**
   * American Express
   */
  AmericanExpress: "AE",

  /**
   * Diner's Club
   */
  DinersClub: "DN",

  /**
   * Discover Card
   */
  DiscoverCard: "DV",

  /**
   * Master Card
   */
  MasterCard: "MC",

  /**
   * Visa
   */
  Visa: "V",

  /**
   * patient billing account
   */
  patientbillingaccount: "PBILLACCT",

  /**
   * CreditCard
   */
  CreditCard: "_CreditCard",

  /**
   * ActAdjudicationCode
   */
  ActAdjudicationCode: "_ActAdjudicationCode",

  /**
   * ActAdjudicationGroupCode
   */
  ActAdjudicationGroupCode: "_ActAdjudicationGroupCode",

  /**
   * contract
   */
  contract: "CONT",

  /**
   * day
   */
  day: "DAY",

  /**
   * location
   */
  location: "LOC",

  /**
   * month
   */
  month: "MONTH",

  /**
   * period
   */
  period: "PERIOD",

  /**
   * provider
   */
  provider: "PROV",

  /**
   * week
   */
  week: "WEEK",

  /**
   * year
   */
  year: "YEAR",

  /**
   * adjudicated with adjustments
   */
  adjudicatedwithadjustments: "AA",

  /**
   * adjudicated with adjustments and no financial impact
   */
  adjudicatedwithadjustmentsandnofinancialimpact: "ANF",

  /**
   * adjudicated as refused
   */
  adjudicatedasrefused: "AR",

  /**
   * adjudicated as submitted
   */
  adjudicatedassubmitted: "AS",

  /**
   * ActAdjudicationResultActionCode
   */
  ActAdjudicationResultActionCode: "_ActAdjudicationResultActionCode",

  /**
   * Display
   */
  Display: "DISPLAY",

  /**
   * Print on Form
   */
  PrintonForm: "FORM",

  /**
   * ActBillableModifierCode
   */
  ActBillableModifierCode: "_ActBillableModifierCode",

  /**
   * CPT modifier codes
   */
  CPTmodifiercodes: "CPTM",

  /**
   * HCPCS Level II and Carrier-assigned
   */
  HCPCSLevelIIandCarrierassigned: "HCPCSA",

  /**
   * ActBillingArrangementCode
   */
  ActBillingArrangementCode: "_ActBillingArrangementCode",

  /**
   * block funding
   */
  blockfunding: "BLK",

  /**
   * capitation funding
   */
  capitationfunding: "CAP",

  /**
   * contract funding
   */
  contractfunding: "CONTF",

  /**
   * financial
   */
  financial: "FINBILL",

  /**
   * roster funding
   */
  rosterfunding: "ROST",

  /**
   * sessional funding
   */
  sessionalfunding: "SESS",

  /**
   * fee for service
   */
  feeforservice: "FFS",

  /**
   * first fill, part fill, partial strength
   */
  firstfillpartfillpartialstrength: "FFPS",

  /**
   * first fill complete, partial strength
   */
  firstfillcompletepartialstrength: "FFCS",

  /**
   * trial fill partial strength
   */
  trialfillpartialstrength: "TFS",

  /**
   * ActBoundedROICode
   */
  ActBoundedROICode: "_ActBoundedROICode",

  /**
   * fully specified ROI
   */
  fullyspecifiedROI: "ROIFS",

  /**
   * partially specified ROI
   */
  partiallyspecifiedROI: "ROIPS",

  /**
   * act care provision
   */
  actcareprovision: "_ActCareProvisionCode",

  /**
   * act credentialed care
   */
  actcredentialedcare: "_ActCredentialedCareCode",

  /**
   * act credentialed care provision peron
   */
  actcredentialedcareprovisionperon: "_ActCredentialedCareProvisionPersonCode",

  /**
   * certified anatomic pathology and clinical pathology care
   */
  certifiedanatomicpathologyandclinicalpathologycare: "CACC",

  /**
   * certified allergy and immunology care
   */
  certifiedallergyandimmunologycare: "CAIC",

  /**
   * certified aerospace medicine care
   */
  certifiedaerospacemedicinecare: "CAMC",

  /**
   * certified anesthesiology care
   */
  certifiedanesthesiologycare: "CANC",

  /**
   * certified anatomic pathology care
   */
  certifiedanatomicpathologycare: "CAPC",

  /**
   * certified clinical biochemical genetics care
   */
  certifiedclinicalbiochemicalgeneticscare: "CBGC",

  /**
   * certified clinical cytogenetics care
   */
  certifiedclinicalcytogeneticscare: "CCCC",

  /**
   * certified clinical genetics (M.D.) care
   */
  certifiedclinicalgeneticsMDcare: "CCGC",

  /**
   * certified clinical pathology care
   */
  certifiedclinicalpathologycare: "CCPC",

  /**
   * certified colon and rectal surgery care
   */
  certifiedcolonandrectalsurgerycare: "CCSC",

  /**
   * certified dermatology care
   */
  certifieddermatologycare: "CDEC",

  /**
   * certified diagnostic radiology care
   */
  certifieddiagnosticradiologycare: "CDRC",

  /**
   * certified emergency medicine care
   */
  certifiedemergencymedicinecare: "CEMC",

  /**
   * certified family practice care
   */
  certifiedfamilypracticecare: "CFPC",

  /**
   * certified internal medicine care
   */
  certifiedinternalmedicinecare: "CIMC",

  /**
   * certified clinical molecular genetics care
   */
  certifiedclinicalmoleculargeneticscare: "CMGC",

  /**
   * certified neurology care
   */
  certifiedneurologycare: "CNEC",

  /**
   * certified nuclear medicine care
   */
  certifiednuclearmedicinecare: "CNMC",

  /**
   * certified neurology with special qualifications in child neurology care
   */
  certifiedneurologywithspecialqualificationsinchildneurologycare: "CNQC",

  /**
   * certified neurological surgery care
   */
  certifiedneurologicalsurgerycare: "CNSC",

  /**
   * certified obstetrics and gynecology care
   */
  certifiedobstetricsandgynecologycare: "COGC",

  /**
   * certified occupational medicine care
   */
  certifiedoccupationalmedicinecare: "COMC",

  /**
   * certified ophthalmology care
   */
  certifiedophthalmologycare: "COPC",

  /**
   * certified orthopaedic surgery care
   */
  certifiedorthopaedicsurgerycare: "COSC",

  /**
   * certified otolaryngology care
   */
  certifiedotolaryngologycare: "COTC",

  /**
   * certified pediatrics care
   */
  certifiedpediatricscare: "CPEC",

  /**
   * certified Ph.D. medical genetics care
   */
  certifiedPhDmedicalgeneticscare: "CPGC",

  /**
   * certified public health and general preventive medicine care
   */
  certifiedpublichealthandgeneralpreventivemedicinecare: "CPHC",

  /**
   * certified physical medicine and rehabilitation care
   */
  certifiedphysicalmedicineandrehabilitationcare: "CPRC",

  /**
   * certified plastic surgery care
   */
  certifiedplasticsurgerycare: "CPSC",

  /**
   * certified psychiatry care
   */
  certifiedpsychiatrycare: "CPYC",

  /**
   * certified radiation oncology care
   */
  certifiedradiationoncologycare: "CROC",

  /**
   * certified radiological physics care
   */
  certifiedradiologicalphysicscare: "CRPC",

  /**
   * certified surgery care
   */
  certifiedsurgerycare: "CSUC",

  /**
   * certified thoracic surgery care
   */
  certifiedthoracicsurgerycare: "CTSC",

  /**
   * certified urology care
   */
  certifiedurologycare: "CURC",

  /**
   * certified vascular surgery care
   */
  certifiedvascularsurgerycare: "CVSC",

  /**
   * licensed general physician care
   */
  licensedgeneralphysiciancare: "LGPC",

  /**
   * act credentialed care provision program
   */
  actcredentialedcareprovisionprogram:
    "_ActCredentialedCareProvisionProgramCode",

  /**
   * accredited assisted living care
   */
  accreditedassistedlivingcare: "AALC",

  /**
   * accredited ambulatory care
   */
  accreditedambulatorycare: "AAMC",

  /**
   * accredited behavioral health care
   */
  accreditedbehavioralhealthcare: "ABHC",

  /**
   * accredited critical access hospital care
   */
  accreditedcriticalaccesshospitalcare: "ACAC",

  /**
   * accredited hospital care
   */
  accreditedhospitalcare: "ACHC",

  /**
   * accredited home care
   */
  accreditedhomecare: "AHOC",

  /**
   * accredited long term care
   */
  accreditedlongtermcare: "ALTC",

  /**
   * accredited office-based surgery care
   */
  accreditedofficebasedsurgerycare: "AOSC",

  /**
   * certified acute coronary syndrome care
   */
  certifiedacutecoronarysyndromecare: "CACS",

  /**
   * certified acute myocardial infarction care
   */
  certifiedacutemyocardialinfarctioncare: "CAMI",

  /**
   * certified asthma care
   */
  certifiedasthmacare: "CAST",

  /**
   * certified bariatric surgery care
   */
  certifiedbariatricsurgerycare: "CBAR",

  /**
   * certified coronary artery disease care
   */
  certifiedcoronaryarterydiseasecare: "CCAD",

  /**
   * certified cardiac care
   */
  certifiedcardiaccare: "CCAR",

  /**
   * certified depression care
   */
  certifieddepressioncare: "CDEP",

  /**
   * certified digestive/gastrointestinal disorders care
   */
  certifieddigestivegastrointestinaldisorderscare: "CDGD",

  /**
   * certified diabetes care
   */
  certifieddiabetescare: "CDIA",

  /**
   * certified epilepsy care
   */
  certifiedepilepsycare: "CEPI",

  /**
   * certified frail elderly care
   */
  certifiedfrailelderlycare: "CFEL",

  /**
   * certified heart failure care
   */
  certifiedheartfailurecare: "CHFC",

  /**
   * certified high risk obstetrics care
   */
  certifiedhighriskobstetricscare: "CHRO",

  /**
   * certified hyperlipidemia care
   */
  certifiedhyperlipidemiacare: "CHYP",

  /**
   * certified migraine headache care
   */
  certifiedmigraineheadachecare: "CMIH",

  /**
   * certified multiple sclerosis care
   */
  certifiedmultiplesclerosiscare: "CMSC",

  /**
   * certified orthopedic joint replacement care
   */
  certifiedorthopedicjointreplacementcare: "COJR",

  /**
   * certified oncology care
   */
  certifiedoncologycare: "CONC",

  /**
   * certified chronic obstructive pulmonary disease care
   */
  certifiedchronicobstructivepulmonarydiseasecare: "COPD",

  /**
   * certified organ transplant care
   */
  certifiedorgantransplantcare: "CORT",

  /**
   * certified parkinsons disease care
   */
  certifiedparkinsonsdiseasecare: "CPAD",

  /**
   * certified pneumonia disease care
   */
  certifiedpneumoniadiseasecare: "CPND",

  /**
   * certified primary stroke center care
   */
  certifiedprimarystrokecentercare: "CPST",

  /**
   * certified stroke disease management care
   */
  certifiedstrokediseasemanagementcare: "CSDM",

  /**
   * certified sickle cell care
   */
  certifiedsicklecellcare: "CSIC",

  /**
   * certified sleep disorders care
   */
  certifiedsleepdisorderscare: "CSLD",

  /**
   * certified spine treatment care
   */
  certifiedspinetreatmentcare: "CSPT",

  /**
   * certified trauma/burn center care
   */
  certifiedtraumaburncentercare: "CTBU",

  /**
   * certified vascular diseases care
   */
  certifiedvasculardiseasescare: "CVDC",

  /**
   * certified wound management care
   */
  certifiedwoundmanagementcare: "CWMA",

  /**
   * certified women's health care
   */
  certifiedwomenshealthcare: "CWOH",

  /**
   * ActEncounterCode
   */
  ActEncounterCode: "_ActEncounterCode",

  /**
   * ambulatory
   */
  ambulatory: "AMB",

  /**
   * emergency
   */
  emergency: "EMER",

  /**
   * field
   */
  field: "FLD",

  /**
   * home health
   */
  homehealth: "HH",

  /**
   * inpatient encounter
   */
  inpatientencounter: "IMP",

  /**
   * inpatient acute
   */
  inpatientacute: "ACUTE",

  /**
   * inpatient non-acute
   */
  inpatientnonacute: "NONAC",

  /**
   * observation encounter
   */
  observationencounter: "OBSENC",

  /**
   * pre-admission
   */
  preadmission: "PRENC",

  /**
   * short stay
   */
  shortstay: "SS",

  /**
   * virtual
   */
  virtual: "VR",

  /**
   * ActMedicalServiceCode
   */
  ActMedicalServiceCode: "_ActMedicalServiceCode",

  /**
   * Alternative Level of Care
   */
  AlternativeLevelofCare: "ALC",

  /**
   * Cardiology
   */
  Cardiology: "CARD",

  /**
   * Chronic
   */
  Chronic: "CHR",

  /**
   * Dental
   */
  Dental: "DNTL",

  /**
   * Drug Rehab
   */
  DrugRehab: "DRGRHB",

  /**
   * General
   */
  General: "GENRL",

  /**
   * Medical
   */
  Medical: "MED",

  /**
   * Obstetrics
   */
  Obstetrics: "OBS",

  /**
   * Oncology
   */
  Oncology: "ONC",

  /**
   * Palliative
   */
  Palliative: "PALL",

  /**
   * Pediatrics
   */
  Pediatrics: "PED",

  /**
   * Pharmaceutical
   */
  Pharmaceutical: "PHAR",

  /**
   * Physical Rehab
   */
  PhysicalRehab: "PHYRHB",

  /**
   * Psychiatric
   */
  Psychiatric: "PSYCH",

  /**
   * Surgical
   */
  Surgical: "SURG",

  /**
   * ActClaimAttachmentCategoryCode
   */
  ActClaimAttachmentCategoryCode: "_ActClaimAttachmentCategoryCode",

  /**
   * auto attachment
   */
  autoattachment: "AUTOATTCH",

  /**
   * document
   */
  document: "DOCUMENT",

  /**
   * health record
   */
  healthrecord: "HEALTHREC",

  /**
   * image attachment
   */
  imageattachment: "IMG",

  /**
   * lab results
   */
  labresults: "LABRESULTS",

  /**
   * model
   */
  model: "MODEL",

  /**
   * work injury report attachment
   */
  workinjuryreportattachment: "WIATTCH",

  /**
   * x-ray
   */
  xray: "XRAY",

  /**
   * ActConsentType
   */
  ActConsentType: "_ActConsentType",

  /**
   * information collection
   */
  informationcollection: "ICOL",

  /**
   * information disclosure
   */
  informationdisclosure: "IDSCL",

  /**
   * information access
   */
  informationaccess: "INFA",

  /**
   * access only
   */
  accessonly: "INFAO",

  /**
   * access and save only
   */
  accessandsaveonly: "INFASO",

  /**
   * information redisclosure
   */
  informationredisclosure: "IRDSCL",

  /**
   * research information access
   */
  researchinformationaccess: "RESEARCH",

  /**
   * de-identified information access
   */
  deidentifiedinformationaccess: "RSDID",

  /**
   * re-identifiable information access
   */
  reidentifiableinformationaccess: "RSREID",

  /**
   * ActContainerRegistrationCode
   */
  ActContainerRegistrationCode: "_ActContainerRegistrationCode",

  /**
   * Identified
   */
  Identified: "ID",

  /**
   * In Position
   */
  InPosition: "IP",

  /**
   * Left Equipment
   */
  LeftEquipment: "L",

  /**
   * Missing
   */
  Missing: "M",

  /**
   * In Process
   */
  InProcess: "O",

  /**
   * Process Completed
   */
  ProcessCompleted: "R",

  /**
   * Container Unavailable
   */
  ContainerUnavailable: "X",

  /**
   * ActControlVariable
   */
  ActControlVariable: "_ActControlVariable",

  /**
   * auto-repeat permission
   */
  autorepeatpermission: "AUTO",

  /**
   * endogenous content
   */
  endogenouscontent: "ENDC",

  /**
   * reflex permission
   */
  reflexpermission: "REFLEX",

  /**
   * ECGControlVariable
   */
  ECGControlVariable: "_ECGControlVariable",

  /**
   * ActCoverageConfirmationCode
   */
  ActCoverageConfirmationCode: "_ActCoverageConfirmationCode",

  /**
   * ActCoverageAuthorizationConfirmationCode
   */
  ActCoverageAuthorizationConfirmationCode:
    "_ActCoverageAuthorizationConfirmationCode",

  /**
   * Authorized
   */
  Authorized: "AUTH",

  /**
   * Not Authorized
   */
  NotAuthorized: "NAUTH",

  /**
   * ActCoverageEligibilityConfirmationCode
   */
  ActCoverageEligibilityConfirmationCode:
    "_ActCoverageEligibilityConfirmationCode",

  /**
   * Eligible
   */
  Eligible: "ELG",

  /**
   * Not Eligible
   */
  NotEligible: "NELG",

  /**
   * ActCoverageLimitCode
   */
  ActCoverageLimitCode: "_ActCoverageLimitCode",

  /**
   * ActCoverageQuantityLimitCode
   */
  ActCoverageQuantityLimitCode: "_ActCoverageQuantityLimitCode",

  /**
   * coverage period
   */
  coverageperiod: "COVPRD",

  /**
   * life time maximum
   */
  lifetimemaximum: "LFEMX",

  /**
   * Net Amount
   */
  NetAmount: "NETAMT",

  /**
   * period maximum
   */
  periodmaximum: "PRDMX",

  /**
   * Unit Price
   */
  UnitPrice: "UNITPRICE",

  /**
   * Unit Quantity
   */
  UnitQuantity: "UNITQTY",

  /**
   * coverage maximum
   */
  coveragemaximum: "COVMX",

  /**
   * ActCoveredPartyLimitCode
   */
  ActCoveredPartyLimitCode: "_ActCoveredPartyLimitCode",

  /**
   * ActCoveragePartyLimitGroupCode
   */
  ActCoveragePartyLimitGroupCode: "_ActCoveragePartyLimitGroupCode",

  /**
   * ActCoverageTypeCode
   */
  ActCoverageTypeCode: "_ActCoverageTypeCode",

  /**
   * ActInsurancePolicyCode
   */
  ActInsurancePolicyCode: "_ActInsurancePolicyCode",

  /**
   * extended healthcare
   */
  extendedhealthcare: "EHCPOL",

  /**
   * health spending account
   */
  healthspendingaccount: "HSAPOL",

  /**
   * automobile
   */
  automobile: "AUTOPOL",

  /**
   * collision coverage policy
   */
  collisioncoveragepolicy: "COL",

  /**
   * uninsured motorist policy
   */
  uninsuredmotoristpolicy: "UNINSMOT",

  /**
   * public healthcare
   */
  publichealthcare: "PUBLICPOL",

  /**
   * dental program
   */
  dentalprogram: "DENTPRG",

  /**
   * public health program
   */
  publichealthprogram: "DISEASEPRG",

  /**
   * women's cancer detection program
   */
  womenscancerdetectionprogram: "CANPRG",

  /**
   * end renal program
   */
  endrenalprogram: "ENDRENAL",

  /**
   * HIV-AIDS program
   */
  HIVAIDSprogram: "HIVAIDS",

  /**
   * mandatory health program
   */
  mandatoryhealthprogram: "MANDPOL",

  /**
   * mental health program
   */
  mentalhealthprogram: "MENTPRG",

  /**
   * safety net clinic program
   */
  safetynetclinicprogram: "SAFNET",

  /**
   * substance use program
   */
  substanceuseprogram: "SUBPRG",

  /**
   * subsidized health program
   */
  subsidizedhealthprogram: "SUBSIDIZ",

  /**
   * subsidized managed care program
   */
  subsidizedmanagedcareprogram: "SUBSIDMC",

  /**
   * subsidized supplemental health program
   */
  subsidizedsupplementalhealthprogram: "SUBSUPP",

  /**
   * worker's compensation
   */
  workerscompensation: "WCBPOL",

  /**
   * ActInsuranceTypeCode
   */
  ActInsuranceTypeCode: "_ActInsuranceTypeCode",

  /**
   * ActHealthInsuranceTypeCode
   */
  ActHealthInsuranceTypeCode: "_ActHealthInsuranceTypeCode",

  /**
   * dental care policy
   */
  dentalcarepolicy: "DENTAL",

  /**
   * disease specific policy
   */
  diseasespecificpolicy: "DISEASE",

  /**
   * drug policy
   */
  drugpolicy: "DRUGPOL",

  /**
   * health insurance plan policy
   */
  healthinsuranceplanpolicy: "HIP",

  /**
   * long term care policy
   */
  longtermcarepolicy: "LTC",

  /**
   * managed care policy
   */
  managedcarepolicy: "MCPOL",

  /**
   * point of service policy
   */
  pointofservicepolicy: "POS",

  /**
   * health maintenance organization policy
   */
  healthmaintenanceorganizationpolicy: "HMO",

  /**
   * preferred provider organization policy
   */
  preferredproviderorganizationpolicy: "PPO",

  /**
   * mental health policy
   */
  mentalhealthpolicy: "MENTPOL",

  /**
   * substance use policy
   */
  substanceusepolicy: "SUBPOL",

  /**
   * vision care policy
   */
  visioncarepolicy: "VISPOL",

  /**
   * disability insurance policy
   */
  disabilityinsurancepolicy: "DIS",

  /**
   * employee welfare benefit plan policy
   */
  employeewelfarebenefitplanpolicy: "EWB",

  /**
   * flexible benefit plan policy
   */
  flexiblebenefitplanpolicy: "FLEXP",

  /**
   * life insurance policy
   */
  lifeinsurancepolicy: "LIFE",

  /**
   * annuity policy
   */
  annuitypolicy: "ANNU",

  /**
   * term life insurance policy
   */
  termlifeinsurancepolicy: "TLIFE",

  /**
   * universal life insurance policy
   */
  universallifeinsurancepolicy: "ULIFE",

  /**
   * property and casualty insurance policy
   */
  propertyandcasualtyinsurancepolicy: "PNC",

  /**
   * reinsurance policy
   */
  reinsurancepolicy: "REI",

  /**
   * surplus line insurance policy
   */
  surpluslineinsurancepolicy: "SURPL",

  /**
   * umbrella liability insurance policy
   */
  umbrellaliabilityinsurancepolicy: "UMBRL",

  /**
   * ActProgramTypeCode
   */
  ActProgramTypeCode: "_ActProgramTypeCode",

  /**
   * charity program
   */
  charityprogram: "CHAR",

  /**
   * crime victim program
   */
  crimevictimprogram: "CRIME",

  /**
   * employee assistance program
   */
  employeeassistanceprogram: "EAP",

  /**
   * government employee health program
   */
  governmentemployeehealthprogram: "GOVEMP",

  /**
   * high risk pool program
   */
  highriskpoolprogram: "HIRISK",

  /**
   * indigenous peoples health program
   */
  indigenouspeopleshealthprogram: "IND",

  /**
   * military health program
   */
  militaryhealthprogram: "MILITARY",

  /**
   * retiree health program
   */
  retireehealthprogram: "RETIRE",

  /**
   * social service program
   */
  socialserviceprogram: "SOCIAL",

  /**
   * veteran health program
   */
  veteranhealthprogram: "VET",

  /**
   * ActDetectedIssueManagementCode
   */
  ActDetectedIssueManagementCode: "_ActDetectedIssueManagementCode",

  /**
   * ActAdministrativeDetectedIssueManagementCode
   */
  ActAdministrativeDetectedIssueManagementCode:
    "_ActAdministrativeDetectedIssueManagementCode",

  /**
   * Authorization Issue Management Code
   */
  AuthorizationIssueManagementCode: "_AuthorizationIssueManagementCode",

  /**
   * emergency authorization override
   */
  emergencyauthorizationoverride: "EMAUTH",

  /**
   * authorization confirmed
   */
  authorizationconfirmed: "21",

  /**
   * Therapy Appropriate
   */
  TherapyAppropriate: "1",

  /**
   * Consulted Supplier
   */
  ConsultedSupplier: "19",

  /**
   * Assessed Patient
   */
  AssessedPatient: "2",

  /**
   * appropriate indication or diagnosis
   */
  appropriateindicationordiagnosis: "22",

  /**
   * prior therapy documented
   */
  priortherapydocumented: "23",

  /**
   * Patient Explanation
   */
  PatientExplanation: "3",

  /**
   * Consulted Other Source
   */
  ConsultedOtherSource: "4",

  /**
   * Consulted Prescriber
   */
  ConsultedPrescriber: "5",

  /**
   * Prescriber Declined Change
   */
  PrescriberDeclinedChange: "6",

  /**
   * Interacting Therapy No Longer Active/Planned
   */
  InteractingTherapyNoLongerActivePlanned: "7",

  /**
   * Supply Appropriate
   */
  SupplyAppropriate: "14",

  /**
   * Replacement
   */
  Replacement: "15",

  /**
   * Vacation Supply
   */
  VacationSupply: "16",

  /**
   * Weekend Supply
   */
  WeekendSupply: "17",

  /**
   * Leave of Absence
   */
  LeaveofAbsence: "18",

  /**
   * additional quantity on separate dispense
   */
  additionalquantityonseparatedispense: "20",

  /**
   * Other Action Taken
   */
  OtherActionTaken: "8",

  /**
   * Provided Patient Education
   */
  ProvidedPatientEducation: "10",

  /**
   * Added Concurrent Therapy
   */
  AddedConcurrentTherapy: "11",

  /**
   * Temporarily Suspended Concurrent Therapy
   */
  TemporarilySuspendedConcurrentTherapy: "12",

  /**
   * Stopped Concurrent Therapy
   */
  StoppedConcurrentTherapy: "13",

  /**
   * Instituted Ongoing Monitoring Program
   */
  InstitutedOngoingMonitoringProgram: "9",

  /**
   * ActFinancialDetectedIssueManagementCode
   */
  ActFinancialDetectedIssueManagementCode:
    "_ActFinancialDetectedIssueManagementCode",

  /**
   * ActExposureCode
   */
  ActExposureCode: "_ActExposureCode",

  /**
   * Day care - Child care Interaction
   */
  DaycareChildcareInteraction: "CHLDCARE",

  /**
   * Common Conveyance Interaction
   */
  CommonConveyanceInteraction: "CONVEYNC",

  /**
   * Health Care Interaction - Not Patient Care
   */
  HealthCareInteractionNotPatientCare: "HLTHCARE",

  /**
   * Care Giver Interaction
   */
  CareGiverInteraction: "HOMECARE",

  /**
   * Hospital Patient Interaction
   */
  HospitalPatientInteraction: "HOSPPTNT",

  /**
   * Hospital Visitor Interaction
   */
  HospitalVisitorInteraction: "HOSPVSTR",

  /**
   * Household Interaction
   */
  HouseholdInteraction: "HOUSEHLD",

  /**
   * Inmate Interaction
   */
  InmateInteraction: "INMATE",

  /**
   * Intimate Interaction
   */
  IntimateInteraction: "INTIMATE",

  /**
   * Long Term Care Facility Interaction
   */
  LongTermCareFacilityInteraction: "LTRMCARE",

  /**
   * Common Space Interaction
   */
  CommonSpaceInteraction: "PLACE",

  /**
   * Health Care Interaction - Patient Care
   */
  HealthCareInteractionPatientCare: "PTNTCARE",

  /**
   * School Interaction
   */
  SchoolInteraction: "SCHOOL2",

  /**
   * Social/Extended Family Interaction
   */
  SocialExtendedFamilyInteraction: "SOCIAL2",

  /**
   * Common Substance Interaction
   */
  CommonSubstanceInteraction: "SUBSTNCE",

  /**
   * Common Travel Interaction
   */
  CommonTravelInteraction: "TRAVINT",

  /**
   * Work Interaction
   */
  WorkInteraction: "WORK2",

  /**
   * ActFinancialTransactionCode
   */
  ActFinancialTransactionCode: "_ActFinancialTransactionCode",

  /**
   * Standard Charge
   */
  StandardCharge: "CHRG",

  /**
   * Standard Charge Reversal
   */
  StandardChargeReversal: "REV",

  /**
   * ActIncidentCode
   */
  ActIncidentCode: "_ActIncidentCode",

  /**
   * Motor vehicle accident
   */
  Motorvehicleaccident: "MVA",

  /**
   * School Accident
   */
  SchoolAccident: "SCHOOL",

  /**
   * Sporting Accident
   */
  SportingAccident: "SPT",

  /**
   * Workplace accident
   */
  Workplaceaccident: "WPA",

  /**
   * ActPatientSafetyIncidentCode
   */
  ActPatientSafetyIncidentCode: "_ActPatientSafetyIncidentCode",

  /**
   * ActInformationAccessCode
   */
  ActInformationAccessCode: "_ActInformationAccessCode",

  /**
   * adverse drug reaction access
   */
  adversedrugreactionaccess: "ACADR",

  /**
   * all access
   */
  allaccess: "ACALL",

  /**
   * allergy access
   */
  allergyaccess: "ACALLG",

  /**
   * informational consent access
   */
  informationalconsentaccess: "ACCONS",

  /**
   * demographics access
   */
  demographicsaccess: "ACDEMO",

  /**
   * diagnostic imaging access
   */
  diagnosticimagingaccess: "ACDI",

  /**
   * immunization access
   */
  immunizationaccess: "ACIMMUN",

  /**
   * lab test result access
   */
  labtestresultaccess: "ACLAB",

  /**
   * medication access
   */
  medicationaccess: "ACMED",

  /**
   * medical condition access
   */
  medicalconditionaccess: "ACMEDC",

  /**
   * mental health access
   */
  mentalhealthaccess: "ACMEN",

  /**
   * common observations access
   */
  commonobservationsaccess: "ACOBS",

  /**
   * policy or program information access
   */
  policyorprograminformationaccess: "ACPOLPRG",

  /**
   * provider information access
   */
  providerinformationaccess: "ACPROV",

  /**
   * professional service access
   */
  professionalserviceaccess: "ACPSERV",

  /**
   * substance abuse access
   */
  substanceabuseaccess: "ACSUBSTAB",

  /**
   * ActInformationAccessContextCode
   */
  ActInformationAccessContextCode: "_ActInformationAccessContextCode",

  /**
   * authorized information transfer
   */
  authorizedinformationtransfer: "INFAUT",

  /**
   * after explicit consent
   */
  afterexplicitconsent: "INFCON",

  /**
   * only on court order
   */
  onlyoncourtorder: "INFCRT",

  /**
   * only if danger to others
   */
  onlyifdangertoothers: "INFDNG",

  /**
   * only in an emergency
   */
  onlyinanemergency: "INFEMER",

  /**
   * only if public welfare risk
   */
  onlyifpublicwelfarerisk: "INFPWR",

  /**
   * regulatory information transfer
   */
  regulatoryinformationtransfer: "INFREG",

  /**
   * ActInformationCategoryCode
   */
  ActInformationCategoryCode: "_ActInformationCategoryCode",

  /**
   * all categories
   */
  allcategories: "ALLCAT",

  /**
   * allergy category
   */
  allergycategory: "ALLGCAT",

  /**
   * adverse drug reaction category
   */
  adversedrugreactioncategory: "ARCAT",

  /**
   * common observation category
   */
  commonobservationcategory: "COBSCAT",

  /**
   * demographics category
   */
  demographicscategory: "DEMOCAT",

  /**
   * diagnostic image category
   */
  diagnosticimagecategory: "DICAT",

  /**
   * immunization category
   */
  immunizationcategory: "IMMUCAT",

  /**
   * lab test category
   */
  labtestcategory: "LABCAT",

  /**
   * medical condition category
   */
  medicalconditioncategory: "MEDCCAT",

  /**
   * mental health category
   */
  mentalhealthcategory: "MENCAT",

  /**
   * professional service category
   */
  professionalservicecategory: "PSVCCAT",

  /**
   * medication category
   */
  medicationcategory: "RXCAT",

  /**
   * ActInvoiceElementCode
   */
  ActInvoiceElementCode: "_ActInvoiceElementCode",

  /**
   * ActInvoiceAdjudicationPaymentCode
   */
  ActInvoiceAdjudicationPaymentCode: "_ActInvoiceAdjudicationPaymentCode",

  /**
   * ActInvoiceAdjudicationPaymentGroupCode
   */
  ActInvoiceAdjudicationPaymentGroupCode:
    "_ActInvoiceAdjudicationPaymentGroupCode",

  /**
   * alternate electronic
   */
  alternateelectronic: "ALEC",

  /**
   * bonus
   */
  bonus: "BONUS",

  /**
   * carry forward adjusment
   */
  carryforwardadjusment: "CFWD",

  /**
   * education fees
   */
  educationfees: "EDU",

  /**
   * early payment fee
   */
  earlypaymentfee: "EPYMT",

  /**
   * garnishee
   */
  garnishee: "GARN",

  /**
   * submitted invoice
   */
  submittedinvoice: "INVOICE",

  /**
   * paper invoice
   */
  paperinvoice: "PINV",

  /**
   * prior period adjustment
   */
  priorperiodadjustment: "PPRD",

  /**
   * professional association deduction
   */
  professionalassociationdeduction: "PROA",

  /**
   * recovery
   */
  recovery: "RECOV",

  /**
   * retro adjustment
   */
  retroadjustment: "RETRO",

  /**
   * transaction fee
   */
  transactionfee: "TRAN",

  /**
   * ActInvoiceAdjudicationPaymentGroupCode
   */
  ActInvoiceAdjudicationPaymentGroupCode: "_ActInvoicePaymentCode",

  /**
   * ActInvoiceAdjudicationPaymentSummaryCode
   */
  ActInvoiceAdjudicationPaymentSummaryCode:
    "_ActInvoiceAdjudicationPaymentSummaryCode",

  /**
   * invoice type
   */
  invoicetype: "INVTYPE",

  /**
   * payee
   */
  payee: "PAYEE",

  /**
   * payor
   */
  payor: "PAYOR",

  /**
   * sending application
   */
  sendingapplication: "SENDAPP",

  /**
   * ActInvoiceDetailCode
   */
  ActInvoiceDetailCode: "_ActInvoiceDetailCode",

  /**
   * ActInvoiceDetailClinicalProductCode
   */
  ActInvoiceDetailClinicalProductCode: "_ActInvoiceDetailClinicalProductCode",

  /**
   * United Nations Standard Products and Services Classification
   */
  UnitedNationsStandardProductsandServicesClassification: "UNSPSC",

  /**
   * ActInvoiceDetailDrugProductCode
   */
  ActInvoiceDetailDrugProductCode: "_ActInvoiceDetailDrugProductCode",

  /**
   * Global Trade Item Number
   */
  GlobalTradeItemNumber: "GTIN",

  /**
   * Universal Product Code
   */
  UniversalProductCode: "UPC",

  /**
   * ActInvoiceDetailGenericCode
   */
  ActInvoiceDetailGenericCode: "_ActInvoiceDetailGenericCode",

  /**
   * ActInvoiceDetailGenericAdjudicatorCode
   */
  ActInvoiceDetailGenericAdjudicatorCode:
    "_ActInvoiceDetailGenericAdjudicatorCode",

  /**
   * coinsurance
   */
  coinsurance: "COIN",

  /**
   * patient co-pay
   */
  patientcopay: "COPAYMENT",

  /**
   * deductible
   */
  deductible: "DEDUCTIBLE",

  /**
   * payment
   */
  payment: "PAY",

  /**
   * spend down
   */
  spenddown: "SPEND",

  /**
   * co-insurance
   */
  coinsurance: "COINS",

  /**
   * ActInvoiceDetailGenericModifierCode
   */
  ActInvoiceDetailGenericModifierCode: "_ActInvoiceDetailGenericModifierCode",

  /**
   * non-normal hours
   */
  nonnormalhours: "AFTHRS",

  /**
   * isolation allowance
   */
  isolationallowance: "ISOL",

  /**
   * out of office
   */
  outofoffice: "OOO",

  /**
   * ActInvoiceDetailGenericProviderCode
   */
  ActInvoiceDetailGenericProviderCode: "_ActInvoiceDetailGenericProviderCode",

  /**
   * cancelled appointment
   */
  cancelledappointment: "CANCAPT",

  /**
   * discount
   */
  discount: "DSC",

  /**
   * extraordinary service assessment
   */
  extraordinaryserviceassessment: "ESA",

  /**
   * fee for service top off
   */
  feeforservicetopoff: "FFSTOP",

  /**
   * final fee
   */
  finalfee: "FNLFEE",

  /**
   * first fee
   */
  firstfee: "FRSTFEE",

  /**
   * markup or up-charge
   */
  markuporupcharge: "MARKUP",

  /**
   * missed appointment
   */
  missedappointment: "MISSAPT",

  /**
   * periodic fee
   */
  periodicfee: "PERFEE",

  /**
   * performance bonus
   */
  performancebonus: "PERMBNS",

  /**
   * restocking fee
   */
  restockingfee: "RESTOCK",

  /**
   * travel
   */
  travel: "TRAVEL",

  /**
   * urgent
   */
  urgent: "URGENT",

  /**
   * ActInvoiceDetailTaxCode
   */
  ActInvoiceDetailTaxCode: "_ActInvoiceDetailTaxCode",

  /**
   * federal sales tax
   */
  federalsalestax: "FST",

  /**
   * harmonized sales Tax
   */
  harmonizedsalesTax: "HST",

  /**
   * provincial/state sales tax
   */
  provincialstatesalestax: "PST",

  /**
   * ActInvoiceDetailPreferredAccommodationCode
   */
  ActInvoiceDetailPreferredAccommodationCode:
    "_ActInvoiceDetailPreferredAccommodationCode",

  /**
   * ActEncounterAccommodationCode
   */
  ActEncounterAccommodationCode: "_ActEncounterAccommodationCode",

  /**
   * HL7AccommodationCode
   */
  HL7AccommodationCode: "_HL7AccommodationCode",

  /**
   * Isolation
   */
  Isolation: "I",

  /**
   * Private
   */
  Private: "P",

  /**
   * Suite
   */
  Suite: "S",

  /**
   * Semi-private
   */
  Semiprivate: "SP",

  /**
   * Ward
   */
  Ward: "W",

  /**
   * HCPCSAccommodationCode
   */
  HCPCSAccommodationCode: "_HCPCSAccommodationCode",

  /**
   * ActInvoiceDetailClinicalServiceCode
   */
  ActInvoiceDetailClinicalServiceCode: "_ActInvoiceDetailClinicalServiceCode",

  /**
   * CPT5
   */
  CPT5: "_CPT5",

  /**
   * HCPCS
   */
  HCPCS: "_HCPCS",

  /**
   * ICD10PCS
   */
  ICD10PCS: "_ICD10PCS",

  /**
   * ICD9PCS
   */
  ICD9PCS: "_ICD9PCS",

  /**
   * ActInvoiceDetailOralHealthProcedureCode
   */
  ActInvoiceDetailOralHealthProcedureCode:
    "_ActInvoiceDetailOralHealthProcedureCode",

  /**
   * ActInvoiceGroupCode
   */
  ActInvoiceGroupCode: "_ActInvoiceGroupCode",

  /**
   * ActInvoiceInterGroupCode
   */
  ActInvoiceInterGroupCode: "_ActInvoiceInterGroupCode",

  /**
   * compound drug invoice group
   */
  compounddruginvoicegroup: "CPNDDRGING",

  /**
   * compound ingredient invoice group
   */
  compoundingredientinvoicegroup: "CPNDINDING",

  /**
   * compound supply invoice group
   */
  compoundsupplyinvoicegroup: "CPNDSUPING",

  /**
   * drug invoice group
   */
  druginvoicegroup: "DRUGING",

  /**
   * frame invoice group
   */
  frameinvoicegroup: "FRAMEING",

  /**
   * lens invoice group
   */
  lensinvoicegroup: "LENSING",

  /**
   * product invoice group
   */
  productinvoicegroup: "PRDING",

  /**
   * ActInvoiceRootGroupCode
   */
  ActInvoiceRootGroupCode: "_ActInvoiceRootGroupCode",

  /**
   * clinical product invoice
   */
  clinicalproductinvoice: "CPINV",

  /**
   * clinical product invoice
   */
  clinicalproductinvoice: "CP",

  /**
   * clinical service invoice
   */
  clinicalserviceinvoice: "CSINV",

  /**
   * clinical service invoice
   */
  clinicalserviceinvoice: "CS",

  /**
   * clinical service and product
   */
  clinicalserviceandproduct: "CSPINV",

  /**
   * financial invoice
   */
  financialinvoice: "FININV",

  /**
   * oral health service
   */
  oralhealthservice: "OHSINV",

  /**
   * preferred accommodation invoice
   */
  preferredaccommodationinvoice: "PAINV",

  /**
   * preferred accommodation invoice
   */
  preferredaccommodationinvoice: "PA",

  /**
   * Rx compound invoice
   */
  Rxcompoundinvoice: "RXCINV",

  /**
   * Rx compound invoice
   */
  Rxcompoundinvoice: "RXC",

  /**
   * Rx dispense invoice
   */
  Rxdispenseinvoice: "RXDINV",

  /**
   * Rx dispense invoice
   */
  Rxdispenseinvoice: "RXD",

  /**
   * sessional or block fee invoice
   */
  sessionalorblockfeeinvoice: "SBFINV",

  /**
   * vision dispense invoice
   */
  visiondispenseinvoice: "VRXINV",

  /**
   * ActInvoiceElementSummaryCode
   */
  ActInvoiceElementSummaryCode: "_ActInvoiceElementSummaryCode",

  /**
   * InvoiceElementAdjudicated
   */
  InvoiceElementAdjudicated: "_InvoiceElementAdjudicated",

  /**
   * adjud. nullified prior-period electronic amount
   */
  adjudnullifiedpriorperiodelectronicamount: "ADNFPPELAT",

  /**
   * adjud. nullified prior-period electronic amount
   */
  adjudnullifiedpriorperiodelectronicamount: "ADCNPPELAT",

  /**
   * adjud. nullified prior-period electronic count
   */
  adjudnullifiedpriorperiodelectroniccount: "ADNFPPELCT",

  /**
   * adjud. nullified prior-period electronic count
   */
  adjudnullifiedpriorperiodelectroniccount: "ADCNPPELCT",

  /**
   * adjud. nullified prior-period manual amount
   */
  adjudnullifiedpriorperiodmanualamount: "ADNFPPMNAT",

  /**
   * adjud. nullified prior-period manual amount
   */
  adjudnullifiedpriorperiodmanualamount: "ADCNPPMNAT",

  /**
   * adjud. nullified prior-period manual count
   */
  adjudnullifiedpriorperiodmanualcount: "ADNFPPMNCT",

  /**
   * adjud. nullified prior-period manual count
   */
  adjudnullifiedpriorperiodmanualcount: "ADCNPPMNCT",

  /**
   * adjud. nullified same-period electronic amount
   */
  adjudnullifiedsameperiodelectronicamount: "ADNFSPELAT",

  /**
   * adjud. nullified same-period electronic amount
   */
  adjudnullifiedsameperiodelectronicamount: "ADCNSPELAT",

  /**
   * adjud. nullified same-period electronic count
   */
  adjudnullifiedsameperiodelectroniccount: "ADNFSPELCT",

  /**
   * adjud. nullified same-period electronic count
   */
  adjudnullifiedsameperiodelectroniccount: "ADCNSPELCT",

  /**
   * adjud. nullified same-period manual amount
   */
  adjudnullifiedsameperiodmanualamount: "ADNFSPMNAT",

  /**
   * adjud. nullified same-period manual amount
   */
  adjudnullifiedsameperiodmanualamount: "ADCNSPMNAT",

  /**
   * adjud. nullified same-period manual count
   */
  adjudnullifiedsameperiodmanualcount: "ADNFSPMNCT",

  /**
   * adjud. nullified same-period manual count
   */
  adjudnullifiedsameperiodmanualcount: "ADCNSPMNCT",

  /**
   * adjud. non-payee payable prior-period electronic amount
   */
  adjudnonpayeepayablepriorperiodelectronicamount: "ADNPPPELAT",

  /**
   * adjud. non-payee payable prior-period electronic count
   */
  adjudnonpayeepayablepriorperiodelectroniccount: "ADNPPPELCT",

  /**
   * adjud. non-payee payable prior-period manual amount
   */
  adjudnonpayeepayablepriorperiodmanualamount: "ADNPPPMNAT",

  /**
   * adjud. non-payee payable prior-period manual count
   */
  adjudnonpayeepayablepriorperiodmanualcount: "ADNPPPMNCT",

  /**
   * adjud. non-payee payable same-period electronic amount
   */
  adjudnonpayeepayablesameperiodelectronicamount: "ADNPSPELAT",

  /**
   * adjud. non-payee payable same-period electronic count
   */
  adjudnonpayeepayablesameperiodelectroniccount: "ADNPSPELCT",

  /**
   * adjud. non-payee payable same-period manual amount
   */
  adjudnonpayeepayablesameperiodmanualamount: "ADNPSPMNAT",

  /**
   * adjud. non-payee payable same-period manual count
   */
  adjudnonpayeepayablesameperiodmanualcount: "ADNPSPMNCT",

  /**
   * adjud. payee payable prior-period electronic amount
   */
  adjudpayeepayablepriorperiodelectronicamount: "ADPPPPELAT",

  /**
   * adjud. payee payable prior-period electronic count
   */
  adjudpayeepayablepriorperiodelectroniccount: "ADPPPPELCT",

  /**
   * adjud. payee payable prior-period manual amout
   */
  adjudpayeepayablepriorperiodmanualamout: "ADPPPPMNAT",

  /**
   * adjud. payee payable prior-period manual count
   */
  adjudpayeepayablepriorperiodmanualcount: "ADPPPPMNCT",

  /**
   * adjud. payee payable same-period electronic amount
   */
  adjudpayeepayablesameperiodelectronicamount: "ADPPSPELAT",

  /**
   * adjud. payee payable same-period electronic count
   */
  adjudpayeepayablesameperiodelectroniccount: "ADPPSPELCT",

  /**
   * adjud. payee payable same-period manual amount
   */
  adjudpayeepayablesameperiodmanualamount: "ADPPSPMNAT",

  /**
   * adjud. payee payable same-period manual count
   */
  adjudpayeepayablesameperiodmanualcount: "ADPPSPMNCT",

  /**
   * adjud. refused prior-period electronic amount
   */
  adjudrefusedpriorperiodelectronicamount: "ADRFPPELAT",

  /**
   * adjud. refused prior-period electronic count
   */
  adjudrefusedpriorperiodelectroniccount: "ADRFPPELCT",

  /**
   * adjud. refused prior-period manual amount
   */
  adjudrefusedpriorperiodmanualamount: "ADRFPPMNAT",

  /**
   * adjud. refused prior-period manual count
   */
  adjudrefusedpriorperiodmanualcount: "ADRFPPMNCT",

  /**
   * adjud. refused same-period electronic amount
   */
  adjudrefusedsameperiodelectronicamount: "ADRFSPELAT",

  /**
   * adjud. refused same-period electronic count
   */
  adjudrefusedsameperiodelectroniccount: "ADRFSPELCT",

  /**
   * adjud. refused same-period manual amount
   */
  adjudrefusedsameperiodmanualamount: "ADRFSPMNAT",

  /**
   * adjud. refused same-period manual count
   */
  adjudrefusedsameperiodmanualcount: "ADRFSPMNCT",

  /**
   * InvoiceElementPaid
   */
  InvoiceElementPaid: "_InvoiceElementPaid",

  /**
   * paid nullified prior-period electronic amount
   */
  paidnullifiedpriorperiodelectronicamount: "PDNFPPELAT",

  /**
   * paid nullified prior-period electronic amount
   */
  paidnullifiedpriorperiodelectronicamount: "PDCNPPELAT",

  /**
   * paid nullified prior-period electronic count
   */
  paidnullifiedpriorperiodelectroniccount: "PDNFPPELCT",

  /**
   * paid nullified prior-period electronic count
   */
  paidnullifiedpriorperiodelectroniccount: "PDCNPPELCT",

  /**
   * paid nullified prior-period manual amount
   */
  paidnullifiedpriorperiodmanualamount: "PDNFPPMNAT",

  /**
   * paid nullified prior-period manual amount
   */
  paidnullifiedpriorperiodmanualamount: "PDCNPPMNAT",

  /**
   * paid nullified prior-period manual count
   */
  paidnullifiedpriorperiodmanualcount: "PDNFPPMNCT",

  /**
   * paid nullified prior-period manual count
   */
  paidnullifiedpriorperiodmanualcount: "PDCNPPMNCT",

  /**
   * paid nullified same-period electronic amount
   */
  paidnullifiedsameperiodelectronicamount: "PDNFSPELAT",

  /**
   * paid nullified same-period electronic amount
   */
  paidnullifiedsameperiodelectronicamount: "PDCNSPELAT",

  /**
   * paid nullified same-period electronic count
   */
  paidnullifiedsameperiodelectroniccount: "PDNFSPELCT",

  /**
   * paid nullified same-period electronic count
   */
  paidnullifiedsameperiodelectroniccount: "PDCNSPELCT",

  /**
   * paid nullified same-period manual amount
   */
  paidnullifiedsameperiodmanualamount: "PDNFSPMNAT",

  /**
   * paid nullified same-period manual amount
   */
  paidnullifiedsameperiodmanualamount: "PDCNSPMNAT",

  /**
   * paid nullified same-period manual count
   */
  paidnullifiedsameperiodmanualcount: "PDNFSPMNCT",

  /**
   * paid nullified same-period manual count
   */
  paidnullifiedsameperiodmanualcount: "PDCNSPMNCT",

  /**
   * paid non-payee payable prior-period electronic amount
   */
  paidnonpayeepayablepriorperiodelectronicamount: "PDNPPPELAT",

  /**
   * paid non-payee payable prior-period electronic count
   */
  paidnonpayeepayablepriorperiodelectroniccount: "PDNPPPELCT",

  /**
   * paid non-payee payable prior-period manual amount
   */
  paidnonpayeepayablepriorperiodmanualamount: "PDNPPPMNAT",

  /**
   * paid non-payee payable prior-period manual count
   */
  paidnonpayeepayablepriorperiodmanualcount: "PDNPPPMNCT",

  /**
   * paid non-payee payable same-period electronic amount
   */
  paidnonpayeepayablesameperiodelectronicamount: "PDNPSPELAT",

  /**
   * paid non-payee payable same-period electronic count
   */
  paidnonpayeepayablesameperiodelectroniccount: "PDNPSPELCT",

  /**
   * paid non-payee payable same-period manual amount
   */
  paidnonpayeepayablesameperiodmanualamount: "PDNPSPMNAT",

  /**
   * paid non-payee payable same-period manual count
   */
  paidnonpayeepayablesameperiodmanualcount: "PDNPSPMNCT",

  /**
   * paid payee payable prior-period electronic amount
   */
  paidpayeepayablepriorperiodelectronicamount: "PDPPPPELAT",

  /**
   * paid payee payable prior-period electronic count
   */
  paidpayeepayablepriorperiodelectroniccount: "PDPPPPELCT",

  /**
   * paid payee payable prior-period manual amount
   */
  paidpayeepayablepriorperiodmanualamount: "PDPPPPMNAT",

  /**
   * paid payee payable prior-period manual count
   */
  paidpayeepayablepriorperiodmanualcount: "PDPPPPMNCT",

  /**
   * paid payee payable same-period electronic amount
   */
  paidpayeepayablesameperiodelectronicamount: "PDPPSPELAT",

  /**
   * paid payee payable same-period electronic count
   */
  paidpayeepayablesameperiodelectroniccount: "PDPPSPELCT",

  /**
   * paid payee payable same-period manual amount
   */
  paidpayeepayablesameperiodmanualamount: "PDPPSPMNAT",

  /**
   * paid payee payable same-period manual count
   */
  paidpayeepayablesameperiodmanualcount: "PDPPSPMNCT",

  /**
   * InvoiceElementSubmitted
   */
  InvoiceElementSubmitted: "_InvoiceElementSubmitted",

  /**
   * submitted billed electronic amount
   */
  submittedbilledelectronicamount: "SBBLELAT",

  /**
   * submitted billed electronic amount
   */
  submittedbilledelectronicamount: "SBBLAT",

  /**
   * submitted billed electronic count
   */
  submittedbilledelectroniccount: "SBBLELCT",

  /**
   * submitted billed electronic count
   */
  submittedbilledelectroniccount: "SBBLCT",

  /**
   * submitted nullified electronic amount
   */
  submittednullifiedelectronicamount: "SBNFELAT",

  /**
   * submitted nullified electronic amount
   */
  submittednullifiedelectronicamount: "SBCNAT",

  /**
   * submitted cancelled electronic count
   */
  submittedcancelledelectroniccount: "SBNFELCT",

  /**
   * submitted cancelled electronic count
   */
  submittedcancelledelectroniccount: "SBCNCT",

  /**
   * submitted pending electronic amount
   */
  submittedpendingelectronicamount: "SBPDELAT",

  /**
   * submitted pending electronic amount
   */
  submittedpendingelectronicamount: "SBPDAT",

  /**
   * submitted pending electronic count
   */
  submittedpendingelectroniccount: "SBPDELCT",

  /**
   * submitted pending electronic count
   */
  submittedpendingelectroniccount: "SBPDCT",

  /**
   * ActInvoiceOverrideCode
   */
  ActInvoiceOverrideCode: "_ActInvoiceOverrideCode",

  /**
   * coverage problem
   */
  coverageproblem: "COVGE",

  /**
   * electronic form to follow
   */
  electronicformtofollow: "EFORM",

  /**
   * fax to follow
   */
  faxtofollow: "FAX",

  /**
   * good faith indicator
   */
  goodfaithindicator: "GFTH",

  /**
   * late invoice
   */
  lateinvoice: "LATE",

  /**
   * manual review
   */
  manualreview: "MANUAL",

  /**
   * out of jurisdiction
   */
  outofjurisdiction: "OOJ",

  /**
   * orthodontic service
   */
  orthodonticservice: "ORTHO",

  /**
   * paper documentation to follow
   */
  paperdocumentationtofollow: "PAPER",

  /**
   * public insurance exhausted
   */
  publicinsuranceexhausted: "PIE",

  /**
   * delayed by a previous payor
   */
  delayedbyapreviouspayor: "PYRDELAY",

  /**
   * referral not required
   */
  referralnotrequired: "REFNR",

  /**
   * repeated service
   */
  repeatedservice: "REPSERV",

  /**
   * unrelated service
   */
  unrelatedservice: "UNRELAT",

  /**
   * verbal authorization
   */
  verbalauthorization: "VERBAUTH",

  /**
   * ActListCode
   */
  ActListCode: "_ActListCode",

  /**
   * ActObservationList
   */
  ActObservationList: "_ActObservationList",

  /**
   * care plan
   */
  careplan: "CARELIST",

  /**
   * condition list
   */
  conditionlist: "CONDLIST",

  /**
   * intolerance list
   */
  intolerancelist: "INTOLIST",

  /**
   * problem list
   */
  problemlist: "PROBLIST",

  /**
   * risk factors
   */
  riskfactors: "RISKLIST",

  /**
   * goal list
   */
  goallist: "GOALLIST",

  /**
   * ActTherapyDurationWorkingListCode
   */
  ActTherapyDurationWorkingListCode: "_ActTherapyDurationWorkingListCode",

  /**
   * act medication therapy duration working list
   */
  actmedicationtherapydurationworkinglist:
    "_ActMedicationTherapyDurationWorkingListCode",

  /**
   * short term/acute
   */
  shorttermacute: "ACU",

  /**
   * continuous/chronic
   */
  continuouschronic: "CHRON",

  /**
   * one time
   */
  onetime: "ONET",

  /**
   * as needed
   */
  asneeded: "PRN",

  /**
   * medication list
   */
  medicationlist: "MEDLIST",

  /**
   * current medication list
   */
  currentmedicationlist: "CURMEDLIST",

  /**
   * discharge medication list
   */
  dischargemedicationlist: "DISCMEDLIST",

  /**
   * medication history
   */
  medicationhistory: "HISTMEDLIST",

  /**
   * ActProcedureCategoryList
   */
  ActProcedureCategoryList: "_ActProcedureCategoryList",

  /**
   * ActMonitoringProtocolCode
   */
  ActMonitoringProtocolCode: "_ActMonitoringProtocolCode",

  /**
   * Controlled Substance
   */
  ControlledSubstance: "CTLSUB",

  /**
   * DEADrugSchedule
   */
  DEADrugSchedule: "_DEADrugSchedule",

  /**
   * investigational
   */
  investigational: "INV",

  /**
   * limited use
   */
  limiteduse: "LU",

  /**
   * non prescription medicine
   */
  nonprescriptionmedicine: "OTC",

  /**
   * prescription only medicine
   */
  prescriptiononlymedicine: "RX",

  /**
   * special authorization
   */
  specialauthorization: "SA",

  /**
   * special access
   */
  specialaccess: "SAC",

  /**
   * ActNonObservationIndicationCode
   */
  ActNonObservationIndicationCode: "_ActNonObservationIndicationCode",

  /**
   * imaging study requiring contrast
   */
  imagingstudyrequiringcontrast: "IND01",

  /**
   * colonoscopy prep
   */
  colonoscopyprep: "IND02",

  /**
   * prophylaxis
   */
  prophylaxis: "IND03",

  /**
   * surgical prophylaxis
   */
  surgicalprophylaxis: "IND04",

  /**
   * pregnancy prophylaxis
   */
  pregnancyprophylaxis: "IND05",

  /**
   * act observation verification
   */
  actobservationverification: "_ActObservationVerificationType",

  /**
   * verify paper
   */
  verifypaper: "VFPAPER",

  /**
   * verify paper
   */
  verifypaper: "VRFPAPER",

  /**
   * ActPaymentCode
   */
  ActPaymentCode: "_ActPaymentCode",

  /**
   * Automated Clearing House
   */
  AutomatedClearingHouse: "ACH",

  /**
   * Cheque
   */
  Cheque: "CHK",

  /**
   * Direct Deposit
   */
  DirectDeposit: "DDP",

  /**
   * Non-Payment Data
   */
  NonPaymentData: "NON",

  /**
   * ActPharmacySupplyType
   */
  ActPharmacySupplyType: "_ActPharmacySupplyType",

  /**
   * Daily Fill
   */
  DailyFill: "DF",

  /**
   * Emergency Supply
   */
  EmergencySupply: "EM",

  /**
   * Script Owing
   */
  ScriptOwing: "SO",

  /**
   * First Fill
   */
  FirstFill: "FF",

  /**
   * First Fill - Complete
   */
  FirstFillComplete: "FFC",

  /**
   * First Fill - Part Fill
   */
  FirstFillPartFill: "FFP",

  /**
   * first fill, partial strength
   */
  firstfillpartialstrength: "FFSS",

  /**
   * Trial Fill
   */
  TrialFill: "TF",

  /**
   * Floor stock
   */
  Floorstock: "FS",

  /**
   * Manufacturer Sample
   */
  ManufacturerSample: "MS",

  /**
   * Refill
   */
  Refill: "RF",

  /**
   * Unit Dose
   */
  UnitDose: "UD",

  /**
   * Refill - Complete
   */
  RefillComplete: "RFC",

  /**
   * refill complete partial strength
   */
  refillcompletepartialstrength: "RFCS",

  /**
   * Refill (First fill this facility)
   */
  RefillFirstfillthisfacility: "RFF",

  /**
   * refill partial strength (first fill this facility)
   */
  refillpartialstrengthfirstfillthisfacility: "RFFS",

  /**
   * Refill - Part Fill
   */
  RefillPartFill: "RFP",

  /**
   * refill part fill partial strength
   */
  refillpartfillpartialstrength: "RFPS",

  /**
   * refill partial strength
   */
  refillpartialstrength: "RFS",

  /**
   * Trial Balance
   */
  TrialBalance: "TB",

  /**
   * trial balance partial strength
   */
  trialbalancepartialstrength: "TBS",

  /**
   * unit dose equivalent
   */
  unitdoseequivalent: "UDE",

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

  /**
   * ActProductAcquisitionCode
   */
  ActProductAcquisitionCode: "_ActProductAcquisitionCode",

  /**
   * Loan
   */
  Loan: "LOAN",

  /**
   * Rent
   */
  Rent: "RENT",

  /**
   * Transfer
   */
  Transfer: "TRANSFER",

  /**
   * Sale
   */
  Sale: "SALE",

  /**
   * ActSpecimenTransportCode
   */
  ActSpecimenTransportCode: "_ActSpecimenTransportCode",

  /**
   * specimen received
   */
  specimenreceived: "SREC",

  /**
   * specimen in storage
   */
  specimeninstorage: "SSTOR",

  /**
   * specimen in transit
   */
  specimenintransit: "STRAN",

  /**
   * ActSpecimenTreatmentCode
   */
  ActSpecimenTreatmentCode: "_ActSpecimenTreatmentCode",

  /**
   * Acidification
   */
  Acidification: "ACID",

  /**
   * Alkalization
   */
  Alkalization: "ALK",

  /**
   * Defibrination
   */
  Defibrination: "DEFB",

  /**
   * Filtration
   */
  Filtration: "FILT",

  /**
   * LDL Precipitation
   */
  LDLPrecipitation: "LDLP",

  /**
   * Neutralization
   */
  Neutralization: "NEUT",

  /**
   * Recalcification
   */
  Recalcification: "RECA",

  /**
   * Ultrafiltration
   */
  Ultrafiltration: "UFIL",

  /**
   * ActSubstanceAdministrationCode
   */
  ActSubstanceAdministrationCode: "_ActSubstanceAdministrationCode",

  /**
   * Drug therapy
   */
  Drugtherapy: "DRUG",

  /**
   * food
   */
  food: "FD",

  /**
   * Immunization
   */
  Immunization: "IMMUNIZ",

  /**
   * Booster Immunization
   */
  BoosterImmunization: "BOOSTER",

  /**
   * Initial Immunization
   */
  InitialImmunization: "INITIMMUNIZ",

  /**
   * ActTaskCode
   */
  ActTaskCode: "_ActTaskCode",

  /**
   * order entry task
   */
  orderentrytask: "OE",

  /**
   * laboratory test order entry task
   */
  laboratorytestorderentrytask: "LABOE",

  /**
   * medication order entry task
   */
  medicationorderentrytask: "MEDOE",

  /**
   * patient documentation task
   */
  patientdocumentationtask: "PATDOC",

  /**
   * allergy list review
   */
  allergylistreview: "ALLERLREV",

  /**
   * clinical note entry task
   */
  clinicalnoteentrytask: "CLINNOTEE",

  /**
   * diagnosis list entry task
   */
  diagnosislistentrytask: "DIAGLISTE",

  /**
   * discharge instruction entry
   */
  dischargeinstructionentry: "DISCHINSTE",

  /**
   * discharge summary entry task
   */
  dischargesummaryentrytask: "DISCHSUME",

  /**
   * patient education entry
   */
  patienteducationentry: "PATEDUE",

  /**
   * pathology report entry task
   */
  pathologyreportentrytask: "PATREPE",

  /**
   * problem list entry task
   */
  problemlistentrytask: "PROBLISTE",

  /**
   * radiology report entry task
   */
  radiologyreportentrytask: "RADREPE",

  /**
   * immunization list review
   */
  immunizationlistreview: "IMMLREV",

  /**
   * reminder list review
   */
  reminderlistreview: "REMLREV",

  /**
   * wellness reminder list review
   */
  wellnessreminderlistreview: "WELLREMLREV",

  /**
   * patient information review task
   */
  patientinformationreviewtask: "PATINFO",

  /**
   * allergy list entry
   */
  allergylistentry: "ALLERLE",

  /**
   * clinical decision support intervention review
   */
  clinicaldecisionsupportinterventionreview: "CDSREV",

  /**
   * clinical note review task
   */
  clinicalnotereviewtask: "CLINNOTEREV",

  /**
   * discharge summary review task
   */
  dischargesummaryreviewtask: "DISCHSUMREV",

  /**
   * diagnosis list review task
   */
  diagnosislistreviewtask: "DIAGLISTREV",

  /**
   * immunization list entry
   */
  immunizationlistentry: "IMMLE",

  /**
   * laboratory results review task
   */
  laboratoryresultsreviewtask: "LABRREV",

  /**
   * microbiology results review task
   */
  microbiologyresultsreviewtask: "MICRORREV",

  /**
   * microbiology organisms results review task
   */
  microbiologyorganismsresultsreviewtask: "MICROORGRREV",

  /**
   * microbiology sensitivity test results review task
   */
  microbiologysensitivitytestresultsreviewtask: "MICROSENSRREV",

  /**
   * medication list review task
   */
  medicationlistreviewtask: "MLREV",

  /**
   * medication administration record work list review task
   */
  medicationadministrationrecordworklistreviewtask: "MARWLREV",

  /**
   * orders review task
   */
  ordersreviewtask: "OREV",

  /**
   * pathology report review task
   */
  pathologyreportreviewtask: "PATREPREV",

  /**
   * problem list review task
   */
  problemlistreviewtask: "PROBLISTREV",

  /**
   * radiology report review task
   */
  radiologyreportreviewtask: "RADREPREV",

  /**
   * reminder list entry
   */
  reminderlistentry: "REMLE",

  /**
   * wellness reminder list entry
   */
  wellnessreminderlistentry: "WELLREMLE",

  /**
   * risk assessment instrument task
   */
  riskassessmentinstrumenttask: "RISKASSESS",

  /**
   * falls risk assessment instrument task
   */
  fallsriskassessmentinstrumenttask: "FALLRISK",

  /**
   * ActTransportationModeCode
   */
  ActTransportationModeCode: "_ActTransportationModeCode",

  /**
   * ActPatientTransportationModeCode
   */
  ActPatientTransportationModeCode: "_ActPatientTransportationModeCode",

  /**
   * pedestrian transport
   */
  pedestriantransport: "AFOOT",

  /**
   * pedestrian transport
   */
  pedestriantransport: "OnFoot",

  /**
   * ambulance transport
   */
  ambulancetransport: "AMBT",

  /**
   * fixed-wing ambulance transport
   */
  fixedwingambulancetransport: "AMBAIR",

  /**
   * fixed-wing ambulance transport
   */
  fixedwingambulancetransport: "Fixed-wingAmbulance",

  /**
   * ground ambulance transport
   */
  groundambulancetransport: "AMBGRND",

  /**
   * ground ambulance transport
   */
  groundambulancetransport: "GroundAmbulance",

  /**
   * helicopter ambulance transport
   */
  helicopterambulancetransport: "AMBHELO",

  /**
   * helicopter ambulance transport
   */
  helicopterambulancetransport: "HelicopterAmbulance",

  /**
   * ambulance transport
   */
  ambulancetransport: "Ambulance",

  /**
   * law enforcement transport
   */
  lawenforcementtransport: "LAWENF",

  /**
   * law enforcement transport
   */
  lawenforcementtransport: "LawEnforcementVehicle",

  /**
   * private transport
   */
  privatetransport: "PRVTRN",

  /**
   * private transport
   */
  privatetransport: "PrivateTransport",

  /**
   * public transport
   */
  publictransport: "PUBTRN",

  /**
   * public transport
   */
  publictransport: "PublicTransport",

  /**
   * ObservationType
   */
  ObservationType: "_ObservationType",

  /**
   * ActSpecObsCode
   */
  ActSpecObsCode: "_ActSpecObsCode",

  /**
   * ActSpecObsArtBldCode
   */
  ActSpecObsArtBldCode: "ARTBLD",

  /**
   * ActSpecObsDilutionCode
   */
  ActSpecObsDilutionCode: "DILUTION",

  /**
   * Auto-High Dilution
   */
  AutoHighDilution: "AUTO-HIGH",

  /**
   * Auto-Low Dilution
   */
  AutoLowDilution: "AUTO-LOW",

  /**
   * Pre-Dilution
   */
  PreDilution: "PRE",

  /**
   * Rerun Dilution
   */
  RerunDilution: "RERUN",

  /**
   * ActSpecObsEvntfctsCode
   */
  ActSpecObsEvntfctsCode: "EVNFCTS",

  /**
   * ActSpecObsInterferenceCode
   */
  ActSpecObsInterferenceCode: "INTFR",

  /**
   * Fibrin
   */
  Fibrin: "FIBRIN",

  /**
   * Hemolysis
   */
  Hemolysis: "HEMOLYSIS",

  /**
   * Icterus
   */
  Icterus: "ICTERUS",

  /**
   * Lipemia
   */
  Lipemia: "LIPEMIA",

  /**
   * ActSpecObsVolumeCode
   */
  ActSpecObsVolumeCode: "VOLUME",

  /**
   * Available Volume
   */
  AvailableVolume: "AVAILABLE",

  /**
   * Consumption Volume
   */
  ConsumptionVolume: "CONSUMPTION",

  /**
   * Current Volume
   */
  CurrentVolume: "CURRENT",

  /**
   * Initial Volume
   */
  InitialVolume: "INITIAL",

  /**
   * AnnotationType
   */
  AnnotationType: "_AnnotationType",

  /**
   * ActPatientAnnotationType
   */
  ActPatientAnnotationType: "_ActPatientAnnotationType",

  /**
   * diagnostic image note
   */
  diagnosticimagenote: "ANNDI",

  /**
   * general note
   */
  generalnote: "ANNGEN",

  /**
   * immunization note
   */
  immunizationnote: "ANNIMM",

  /**
   * laboratory note
   */
  laboratorynote: "ANNLAB",

  /**
   * medication note
   */
  medicationnote: "ANNMED",

  /**
   * ECGAnnotationType
   */
  ECGAnnotationType: "_ECGAnnotationType",

  /**
   * GeneticObservationType
   */
  GeneticObservationType: "_GeneticObservationType",

  /**
   * gene
   */
  gene: "GENE",

  /**
   * ImmunizationObservationType
   */
  ImmunizationObservationType: "_ImmunizationObservationType",

  /**
   * antigen count
   */
  antigencount: "OBSANTC",

  /**
   * antigen validity
   */
  antigenvalidity: "OBSANTV",

  /**
   * Individual Case Safety Report Type
   */
  IndividualCaseSafetyReportType: "_IndividualCaseSafetyReportType",

  /**
   * patient adverse event
   */
  patientadverseevent: "PAT_ADV_EVNT",

  /**
   * vaccine product problem
   */
  vaccineproductproblem: "VAC_PROBLEM",

  /**
   * LOINCObservationActContextAgeType
   */
  LOINCObservationActContextAgeType: "_LOINCObservationActContextAgeType",

  /**
   * age patient qn est
   */
  agepatientqnest: "21611-9",

  /**
   * age patient qn reported
   */
  agepatientqnreported: "21612-7",

  /**
   * age patient qn calc
   */
  agepatientqncalc: "29553-5",

  /**
   * age patient qn definition
   */
  agepatientqndefinition: "30525-0",

  /**
   * age at onset of adverse event
   */
  ageatonsetofadverseevent: "30972-4",

  /**
   * MedicationObservationType
   */
  MedicationObservationType: "_MedicationObservationType",

  /**
   * representative half-life
   */
  representativehalflife: "REP_HALF_LIFE",

  /**
   * coating
   */
  coating: "SPLCOATING",

  /**
   * color
   */
  color: "SPLCOLOR",

  /**
   * image
   */
  image: "SPLIMAGE",

  /**
   * imprint
   */
  imprint: "SPLIMPRINT",

  /**
   * scoring
   */
  scoring: "SPLSCORING",

  /**
   * shape
   */
  shape: "SPLSHAPE",

  /**
   * size
   */
  size: "SPLSIZE",

  /**
   * symbol
   */
  symbol: "SPLSYMBOL",

  /**
   * ObservationIssueTriggerCodedObservationType
   */
  ObservationIssueTriggerCodedObservationType:
    "_ObservationIssueTriggerCodedObservationType",

  /**
   * case transmission mode
   */
  casetransmissionmode: "_CaseTransmissionMode",

  /**
   * airborne transmission
   */
  airbornetransmission: "AIRTRNS",

  /**
   * animal to animal transmission
   */
  animaltoanimaltransmission: "ANANTRNS",

  /**
   * animal to human transmission
   */
  animaltohumantransmission: "ANHUMTRNS",

  /**
   * body fluid contact transmission
   */
  bodyfluidcontacttransmission: "BDYFLDTRNS",

  /**
   * blood borne transmission
   */
  bloodbornetransmission: "BLDTRNS",

  /**
   * transdermal transmission
   */
  transdermaltransmission: "DERMTRNS",

  /**
   * environmental exposure transmission
   */
  environmentalexposuretransmission: "ENVTRNS",

  /**
   * fecal-oral transmission
   */
  fecaloraltransmission: "FECTRNS",

  /**
   * fomite transmission
   */
  fomitetransmission: "FOMTRNS",

  /**
   * food-borne transmission
   */
  foodbornetransmission: "FOODTRNS",

  /**
   * human to human transmission
   */
  humantohumantransmission: "HUMHUMTRNS",

  /**
   * indeterminate disease transmission mode
   */
  indeterminatediseasetransmissionmode: "INDTRNS",

  /**
   * lactation transmission
   */
  lactationtransmission: "LACTTRNS",

  /**
   * nosocomial transmission
   */
  nosocomialtransmission: "NOSTRNS",

  /**
   * parenteral transmission
   */
  parenteraltransmission: "PARTRNS",

  /**
   * transplacental transmission
   */
  transplacentaltransmission: "PLACTRNS",

  /**
   * sexual transmission
   */
  sexualtransmission: "SEXTRNS",

  /**
   * transfusion transmission
   */
  transfusiontransmission: "TRNSFTRNS",

  /**
   * vector-borne transmission
   */
  vectorbornetransmission: "VECTRNS",

  /**
   * water-borne transmission
   */
  waterbornetransmission: "WATTRNS",

  /**
   * ObservationQualityMeasureAttribute
   */
  ObservationQualityMeasureAttribute: "_ObservationQualityMeasureAttribute",

  /**
   * aggregate measure observation
   */
  aggregatemeasureobservation: "AGGREGATE",

  /**
   * composite measure method
   */
  compositemeasuremethod: "CMPMSRMTH",

  /**
   * component measure scoring weight
   */
  componentmeasurescoringweight: "CMPMSRSCRWGHT",

  /**
   * copyright
   */
  copyright: "COPY",

  /**
   * clinical recommendation statement
   */
  clinicalrecommendationstatement: "CRS",

  /**
   * definition
   */
  definition: "DEF",

  /**
   * disclaimer
   */
  disclaimer: "DISC",

  /**
   * finalized date/time
   */
  finalizeddatetime: "FINALDT",

  /**
   * guidance
   */
  guidance: "GUIDE",

  /**
   * improvement notation
   */
  improvementnotation: "IDUR",

  /**
   * items counted
   */
  itemscounted: "ITMCNT",

  /**
   * keyword
   */
  keyword: "KEY",

  /**
   * measurement end date
   */
  measurementenddate: "MEDT",

  /**
   * measurement start date
   */
  measurementstartdate: "MSD",

  /**
   * risk adjustment
   */
  riskadjustment: "MSRADJ",

  /**
   * rate aggregation
   */
  rateaggregation: "MSRAGG",

  /**
   * health quality measure improvement notation
   */
  healthqualitymeasureimprovementnotation: "MSRIMPROV",

  /**
   * jurisdiction
   */
  jurisdiction: "MSRJUR",

  /**
   * reporter type
   */
  reportertype: "MSRRPTR",

  /**
   * timeframe for reporting
   */
  timeframeforreporting: "MSRRPTTIME",

  /**
   * measure scoring
   */
  measurescoring: "MSRSCORE",

  /**
   * health quality measure care setting
   */
  healthqualitymeasurecaresetting: "MSRSET",

  /**
   * health quality measure topic type
   */
  healthqualitymeasuretopictype: "MSRTOPIC",

  /**
   * measurement period
   */
  measurementperiod: "MSRTP",

  /**
   * measure type
   */
  measuretype: "MSRTYPE",

  /**
   * rationale
   */
  rationale: "RAT",

  /**
   * reference
   */
  reference: "REF",

  /**
   * supplemental data elements
   */
  supplementaldataelements: "SDE",

  /**
   * stratification
   */
  stratification: "STRAT",

  /**
   * transmission format
   */
  transmissionformat: "TRANF",

  /**
   * notice of use
   */
  noticeofuse: "USE",

  /**
   * ObservationSequenceType
   */
  ObservationSequenceType: "_ObservationSequenceType",

  /**
   * absolute time sequence
   */
  absolutetimesequence: "TIME_ABSOLUTE",

  /**
   * relative time sequence
   */
  relativetimesequence: "TIME_RELATIVE",

  /**
   * ECGObservationSequenceType
   */
  ECGObservationSequenceType: "_ECGObservationSequenceType",

  /**
   * ObservationSeriesType
   */
  ObservationSeriesType: "_ObservationSeriesType",

  /**
   * ECGObservationSeriesType
   */
  ECGObservationSeriesType: "_ECGObservationSeriesType",

  /**
   * ECG representative beat waveforms
   */
  ECGrepresentativebeatwaveforms: "REPRESENTATIVE_BEAT",

  /**
   * ECG rhythm waveforms
   */
  ECGrhythmwaveforms: "RHYTHM",

  /**
   * PatientImmunizationRelatedObservationType
   */
  PatientImmunizationRelatedObservationType:
    "_PatientImmunizationRelatedObservationType",

  /**
   * classroom
   */
  classroom: "CLSSRM",

  /**
   * grade
   */
  grade: "GRADE",

  /**
   * school
   */
  school: "SCHL",

  /**
   * school division
   */
  schooldivision: "SCHLDIV",

  /**
   * teacher
   */
  teacher: "TEACHER",

  /**
   * PopulationInclusionObservationType
   */
  PopulationInclusionObservationType: "_PopulationInclusionObservationType",

  /**
   * denominator exclusions
   */
  denominatorexclusions: "DENEX",

  /**
   * denominator exceptions
   */
  denominatorexceptions: "DENEXCEP",

  /**
   * denominator
   */
  denominator: "DENOM",

  /**
   * initial population
   */
  initialpopulation: "IPOP",

  /**
   * initial patient population
   */
  initialpatientpopulation: "IPPOP",

  /**
   * measure observation
   */
  measureobservation: "MSROBS",

  /**
   * measure population
   */
  measurepopulation: "MSRPOPL",

  /**
   * measure population exclusions
   */
  measurepopulationexclusions: "MSRPOPLEX",

  /**
   * numerator
   */
  numerator: "NUMER",

  /**
   * numerator exclusions
   */
  numeratorexclusions: "NUMEX",

  /**
   * _PreferenceObservationType
   */
  _PreferenceObservationType: "_PreferenceObservationType",

  /**
   * preference strength
   */
  preferencestrength: "PREFSTRENGTH",

  /**
   * Adverse Reaction
   */
  AdverseReaction: "ADVERSE_REACTION",

  /**
   * Assertion
   */
  Assertion: "ASSERTION",

  /**
   * case seriousness criteria
   */
  caseseriousnesscriteria: "CASESER",

  /**
   * case disease imported observation
   */
  casediseaseimportedobservation: "CDIO",

  /**
   * criticality
   */
  criticality: "CRIT",

  /**
   * case transmission mode observation
   */
  casetransmissionmodeobservation: "CTMO",

  /**
   * ObservationDiagnosisTypes
   */
  ObservationDiagnosisTypes: "DX",

  /**
   * admitting diagnosis
   */
  admittingdiagnosis: "ADMDX",

  /**
   * discharge diagnosis
   */
  dischargediagnosis: "DISDX",

  /**
   * intermediate diagnosis
   */
  intermediatediagnosis: "INTDX",

  /**
   * nature of injury
   */
  natureofinjury: "NOI",

  /**
   * ObservationDiagnosisTypes
   */
  ObservationDiagnosisTypes: "_ObservationDiagnosisTypes",

  /**
   * GIS tier
   */
  GIStier: "GISTIER",

  /**
   * household situation observation
   */
  householdsituationobservation: "HHOBS",

  /**
   * detected issue
   */
  detectedissue: "ISSUE",

  /**
   * ActAdministrativeDetectedIssueCode
   */
  ActAdministrativeDetectedIssueCode: "_ActAdministrativeDetectedIssueCode",

  /**
   * ActAdministrativeAuthorizationDetectedIssueCode
   */
  ActAdministrativeAuthorizationDetectedIssueCode:
    "_ActAdministrativeAuthorizationDetectedIssueCode",

  /**
   * Insufficient authorization
   */
  Insufficientauthorization: "NAT",

  /**
   * record suppressed
   */
  recordsuppressed: "SUPPRESSED",

  /**
   * validation issue
   */
  validationissue: "VALIDAT",

  /**
   * Unknown key identifier
   */
  Unknownkeyidentifier: "KEY204",

  /**
   * Duplicate key identifier
   */
  Duplicatekeyidentifier: "KEY205",

  /**
   * Compliance Alert
   */
  ComplianceAlert: "COMPLY",

  /**
   * Duplicate Therapy Alert
   */
  DuplicateTherapyAlert: "DUPTHPY",

  /**
   * duplicate therapeutic alass alert
   */
  duplicatetherapeuticalassalert: "DUPTHPCLS",

  /**
   * duplicate generic alert
   */
  duplicategenericalert: "DUPTHPGEN",

  /**
   * commonly abused/misused alert
   */
  commonlyabusedmisusedalert: "ABUSE",

  /**
   * potential fraud
   */
  potentialfraud: "FRAUD",

  /**
   * Poly-orderer Alert
   */
  PolyordererAlert: "PLYDOC",

  /**
   * Poly-supplier Alert
   */
  PolysupplierAlert: "PLYPHRM",

  /**
   * Dosage problem
   */
  Dosageproblem: "DOSE",

  /**
   * dosage-condition alert
   */
  dosageconditionalert: "DOSECOND",

  /**
   * Dose-Duration Alert
   */
  DoseDurationAlert: "DOSEDUR",

  /**
   * Dose-Duration High Alert
   */
  DoseDurationHighAlert: "DOSEDURH",

  /**
   * Dose-Duration High for Indication Alert
   */
  DoseDurationHighforIndicationAlert: "DOSEDURHIND",

  /**
   * Dose-Duration Low Alert
   */
  DoseDurationLowAlert: "DOSEDURL",

  /**
   * Dose-Duration Low for Indication Alert
   */
  DoseDurationLowforIndicationAlert: "DOSEDURLIND",

  /**
   * High Dose Alert
   */
  HighDoseAlert: "DOSEH",

  /**
   * High Dose for Age Alert
   */
  HighDoseforAgeAlert: "DOSEHINDA",

  /**
   * High Dose for Indication Alert
   */
  HighDoseforIndicationAlert: "DOSEHIND",

  /**
   * High Dose for Height/Surface Area Alert
   */
  HighDoseforHeightSurfaceAreaAlert: "DOSEHINDSA",

  /**
   * High Dose for Weight Alert
   */
  HighDoseforWeightAlert: "DOSEHINDW",

  /**
   * Dose-Interval Alert
   */
  DoseIntervalAlert: "DOSEIVL",

  /**
   * Dose-Interval for Indication Alert
   */
  DoseIntervalforIndicationAlert: "DOSEIVLIND",

  /**
   * Low Dose Alert
   */
  LowDoseAlert: "DOSEL",

  /**
   * Low Dose for Age Alert
   */
  LowDoseforAgeAlert: "DOSELINDA",

  /**
   * Low Dose for Indication Alert
   */
  LowDoseforIndicationAlert: "DOSELIND",

  /**
   * Low Dose for Height/Surface Area Alert
   */
  LowDoseforHeightSurfaceAreaAlert: "DOSELINDSA",

  /**
   * Low Dose for Weight Alert
   */
  LowDoseforWeightAlert: "DOSELINDW",

  /**
   * maximum dosage reached
   */
  maximumdosagereached: "MDOSE",

  /**
   * Observation Alert
   */
  ObservationAlert: "OBSA",

  /**
   * Age Alert
   */
  AgeAlert: "AGE",

  /**
   * adult alert
   */
  adultalert: "ADALRT",

  /**
   * geriatric alert
   */
  geriatricalert: "GEALRT",

  /**
   * pediatric alert
   */
  pediatricalert: "PEALRT",

  /**
   * Condition Alert
   */
  ConditionAlert: "COND",

  /**
   *
   */
  HGHT: "HGHT",

  /**
   * Lactation Alert
   */
  LactationAlert: "LACT",

  /**
   * Pregnancy Alert
   */
  PregnancyAlert: "PREG",

  /**
   *
   */
  WGHT: "WGHT",

  /**
   * common reaction alert
   */
  commonreactionalert: "CREACT",

  /**
   * Genetic Alert
   */
  GeneticAlert: "GEN",

  /**
   * Gender Alert
   */
  GenderAlert: "GEND",

  /**
   * Lab Alert
   */
  LabAlert: "LAB",

  /**
   * Reaction Alert
   */
  ReactionAlert: "REACT",

  /**
   * Allergy Alert
   */
  AllergyAlert: "ALGY",

  /**
   * Intolerance Alert
   */
  IntoleranceAlert: "INT",

  /**
   * Related Reaction Alert
   */
  RelatedReactionAlert: "RREACT",

  /**
   * Related Allergy Alert
   */
  RelatedAllergyAlert: "RALG",

  /**
   * Related Prior Reaction Alert
   */
  RelatedPriorReactionAlert: "RAR",

  /**
   * Related Intolerance Alert
   */
  RelatedIntoleranceAlert: "RINT",

  /**
   * business constraint violation
   */
  businessconstraintviolation: "BUS",

  /**
   * code is not valid
   */
  codeisnotvalid: "CODE_INVAL",

  /**
   * code has been deprecated
   */
  codehasbeendeprecated: "CODE_DEPREC",

  /**
   * invalid format
   */
  invalidformat: "FORMAT",

  /**
   * illegal
   */
  illegal: "ILLEGAL",

  /**
   * length out of range
   */
  lengthoutofrange: "LEN_RANGE",

  /**
   * length is too long
   */
  lengthistoolong: "LEN_LONG",

  /**
   * length is too short
   */
  lengthistooshort: "LEN_SHORT",

  /**
   * conditional element missing
   */
  conditionalelementmissing: "MISSCOND",

  /**
   * mandatory element missing
   */
  mandatoryelementmissing: "MISSMAND",

  /**
   * duplicate values are not permitted
   */
  duplicatevaluesarenotpermitted: "NODUPS",

  /**
   * element will not be persisted
   */
  elementwillnotbepersisted: "NOPERSIST",

  /**
   * repetitions out of range
   */
  repetitionsoutofrange: "REP_RANGE",

  /**
   * repetitions above maximum
   */
  repetitionsabovemaximum: "MAXOCCURS",

  /**
   * repetitions below minimum
   */
  repetitionsbelowminimum: "MINOCCURS",

  /**
   * ActAdministrativeRuleDetectedIssueCode
   */
  ActAdministrativeRuleDetectedIssueCode:
    "_ActAdministrativeRuleDetectedIssueCode",

  /**
   * non-matching identification
   */
  nonmatchingidentification: "KEY206",

  /**
   * obsolete record returned
   */
  obsoleterecordreturned: "OBSOLETE",

  /**
   * ActSuppliedItemDetectedIssueCode
   */
  ActSuppliedItemDetectedIssueCode: "_ActSuppliedItemDetectedIssueCode",

  /**
   * AdministrationDetectedIssueCode
   */
  AdministrationDetectedIssueCode: "_AdministrationDetectedIssueCode",

  /**
   * AppropriatenessDetectedIssueCode
   */
  AppropriatenessDetectedIssueCode: "_AppropriatenessDetectedIssueCode",

  /**
   * InteractionDetectedIssueCode
   */
  InteractionDetectedIssueCode: "_InteractionDetectedIssueCode",

  /**
   * Food Interaction Alert
   */
  FoodInteractionAlert: "FOOD",

  /**
   * Therapeutic Product Alert
   */
  TherapeuticProductAlert: "TPROD",

  /**
   * Drug Interaction Alert
   */
  DrugInteractionAlert: "DRG",

  /**
   * Natural Health Product Alert
   */
  NaturalHealthProductAlert: "NHP",

  /**
   * Non-Prescription Interaction Alert
   */
  NonPrescriptionInteractionAlert: "NONRX",

  /**
   * previously ineffective
   */
  previouslyineffective: "PREVINEF",

  /**
   * drug action detected issue
   */
  drugactiondetectedissue: "DACT",

  /**
   * timing detected issue
   */
  timingdetectedissue: "TIME",

  /**
   * end too late alert
   */
  endtoolatealert: "ALRTENDLATE",

  /**
   * start too late alert
   */
  starttoolatealert: "ALRTSTRTLATE",

  /**
   * DrugActionDetectedIssueCode
   */
  DrugActionDetectedIssueCode: "_DrugActionDetectedIssueCode",

  /**
   * TimingDetectedIssueCode
   */
  TimingDetectedIssueCode: "_TimingDetectedIssueCode",

  /**
   * End Too Late Alert
   */
  EndTooLateAlert: "ENDLATE",

  /**
   * Start Too Late Alert
   */
  StartTooLateAlert: "STRTLATE",

  /**
   * SupplyDetectedIssueCode
   */
  SupplyDetectedIssueCode: "_SupplyDetectedIssueCode",

  /**
   * already performed
   */
  alreadyperformed: "ALLDONE",

  /**
   * fulfillment alert
   */
  fulfillmentalert: "FULFIL",

  /**
   * no longer actionable
   */
  nolongeractionable: "NOTACTN",

  /**
   * not equivalent alert
   */
  notequivalentalert: "NOTEQUIV",

  /**
   * not generically equivalent alert
   */
  notgenericallyequivalentalert: "NOTEQUIVGEN",

  /**
   * not therapeutically equivalent alert
   */
  nottherapeuticallyequivalentalert: "NOTEQUIVTHER",

  /**
   * event timing incorrect alert
   */
  eventtimingincorrectalert: "TIMING",

  /**
   * outside requested time
   */
  outsiderequestedtime: "INTERVAL",

  /**
   * too soon within frequency based on the usage
   */
  toosoonwithinfrequencybasedontheusage: "MINFREQ",

  /**
   * held/suspended alert
   */
  heldsuspendedalert: "HELD",

  /**
   * Refill Too Late Alert
   */
  RefillTooLateAlert: "TOOLATE",

  /**
   * Refill Too Soon Alert
   */
  RefillTooSoonAlert: "TOOSOON",

  /**
   * record recorded as historical
   */
  recordrecordedashistorical: "HISTORIC",

  /**
   * violates stated preferences
   */
  violatesstatedpreferences: "PATPREF",

  /**
   * violates stated preferences, alternate available
   */
  violatesstatedpreferencesalternateavailable: "PATPREFALT",

  /**
   * ActFinancialDetectedIssueCode
   */
  ActFinancialDetectedIssueCode: "_ActFinancialDetectedIssueCode",

  /**
   * ClinicalActionDetectedIssueCode
   */
  ClinicalActionDetectedIssueCode: "_ClinicalActionDetectedIssueCode",

  /**
   * Caregap
   */
  Caregap: "CAREGAP",

  /**
   * Codinggap
   */
  Codinggap: "CODINGGAP",

  /**
   * knowledge subject
   */
  knowledgesubject: "KSUBJ",

  /**
   * knowledge subtopic
   */
  knowledgesubtopic: "KSUBT",

  /**
   * intolerance
   */
  intolerance: "OINT",

  /**
   * Allergy
   */
  Allergy: "ALG",

  /**
   * Drug Allergy
   */
  DrugAllergy: "DALG",

  /**
   * Environmental Allergy
   */
  EnvironmentalAllergy: "EALG",

  /**
   * Food Allergy
   */
  FoodAllergy: "FALG",

  /**
   * Drug Intolerance
   */
  DrugIntolerance: "DINT",

  /**
   * Drug Non-Allergy Intolerance
   */
  DrugNonAllergyIntolerance: "DNAINT",

  /**
   * Environmental Intolerance
   */
  EnvironmentalIntolerance: "EINT",

  /**
   * Environmental Non-Allergy Intolerance
   */
  EnvironmentalNonAllergyIntolerance: "ENAINT",

  /**
   * Food Intolerance
   */
  FoodIntolerance: "FINT",

  /**
   * Food Non-Allergy Intolerance
   */
  FoodNonAllergyIntolerance: "FNAINT",

  /**
   * Non-Allergy Intolerance
   */
  NonAllergyIntolerance: "NAINT",

  /**
   * Severity Observation
   */
  SeverityObservation: "SEV",

  /**
   * ActPrivilegeCategorizationType
   */
  ActPrivilegeCategorizationType: "_ActPrivilegeCategorizationType",

  /**
   * AdverseSubstanceAdministrationEventActionTakenType
   */
  AdverseSubstanceAdministrationEventActionTakenType:
    "_AdverseSubstanceAdministrationEventActionTakenType",

  /**
   * CommonClinicalObservationType
   */
  CommonClinicalObservationType: "_CommonClinicalObservationType",

  /**
   * FDALabelData
   */
  FDALabelData: "_FDALabelData",

  /**
   * coating
   */
  coating: "FDACOATING",

  /**
   * color
   */
  color: "FDACOLOR",

  /**
   * imprint code
   */
  imprintcode: "FDAIMPRINTCD",

  /**
   * logo
   */
  logo: "FDALOGO",

  /**
   * scoring
   */
  scoring: "FDASCORING",

  /**
   * shape
   */
  shape: "FDASHAPE",

  /**
   * size
   */
  size: "FDASIZE",

  /**
   * observation allergy test
   */
  observationallergytest: "_ObservationAllergyTestCode",

  /**
   * ObservationAllergyTestType
   */
  ObservationAllergyTestType: "_ObservationAllergyTestType",

  /**
   * observation causality assessment
   */
  observationcausalityassessment: "_ObservationCausalityAssessmentType",

  /**
   * observation dosage definition precondition type
   */
  observationdosagedefinitionpreconditiontype:
    "_ObservationDosageDefinitionPreconditionType",

  /**
   * ObservationGenomicFamilyHistoryType
   */
  ObservationGenomicFamilyHistoryType: "_ObservationGenomicFamilyHistoryType",

  /**
   * ObservationIndicationType
   */
  ObservationIndicationType: "_ObservationIndicationType",

  /**
   * ObservationIssueTriggerMeasuredObservationType
   */
  ObservationIssueTriggerMeasuredObservationType:
    "_ObservationIssueTriggerMeasuredObservationType",

  /**
   * ObservationQueryMatchType
   */
  ObservationQueryMatchType: "_ObservationQueryMatchType",

  /**
   * ObservationVisionPrescriptionType
   */
  ObservationVisionPrescriptionType: "_ObservationVisionPrescriptionType",

  /**
   * PatientCharacteristicObservationType
   */
  PatientCharacteristicObservationType: "_PatientCharacteristicObservationType",

  /**
   * SimpleMeasurableClinicalObservationType
   */
  SimpleMeasurableClinicalObservationType:
    "_SimpleMeasurableClinicalObservationType",

  /**
   * ROIOverlayShape
   */
  ROIOverlayShape: "_ROIOverlayShape",

  /**
   * circle
   */
  circle: "CIRCLE",

  /**
   * ellipse
   */
  ellipse: "ELLIPSE",

  /**
   * point
   */
  point: "POINT",

  /**
   * polyline
   */
  polyline: "POLY",

  /**
   * corrected
   */
  corrected: "C",

  /**
   * Diet
   */
  Diet: "DIET",

  /**
   * breikost (GE)
   */
  breikostGE: "BR",

  /**
   * diabetes mellitus diet
   */
  diabetesmellitusdiet: "DM",

  /**
   * fasting
   */
  fasting: "FAST",

  /**
   * formula diet
   */
  formuladiet: "FORMULA",

  /**
   * gluten free
   */
  glutenfree: "GF",

  /**
   * low fat
   */
  lowfat: "LF",

  /**
   * low protein
   */
  lowprotein: "LP",

  /**
   * liquid
   */
  liquid: "LQ",

  /**
   * low sodium
   */
  lowsodium: "LS",

  /**
   * normal diet
   */
  normaldiet: "N",

  /**
   * no fat
   */
  nofat: "NF",

  /**
   * phenylalanine free
   */
  phenylalaninefree: "PAF",

  /**
   * parenteral
   */
  parenteral: "PAR",

  /**
   * reduction diet
   */
  reductiondiet: "RD",

  /**
   * schonkost (GE)
   */
  schonkostGE: "SCH",

  /**
   * nutritional supplement
   */
  nutritionalsupplement: "SUPPLEMENT",

  /**
   * tea only
   */
  teaonly: "T",

  /**
   * low valin, leucin, isoleucin
   */
  lowvalinleucinisoleucin: "VLI",

  /**
   * drug program
   */
  drugprogram: "DRUGPRG",

  /**
   * final
   */
  final: "F",

  /**
   * preliminary
   */
  preliminary: "PRLMN",

  /**
   * SecurityObservationType
   */
  SecurityObservationType: "SECOBS",

  /**
   * security category observation
   */
  securitycategoryobservation: "SECCATOBS",

  /**
   * security classification observation
   */
  securityclassificationobservation: "SECCLASSOBS",

  /**
   * security control observation
   */
  securitycontrolobservation: "SECCONOBS",

  /**
   * security integrity observation
   */
  securityintegrityobservation: "SECINTOBS",

  /**
   * security alteration integrity observation
   */
  securityalterationintegrityobservation: "SECALTINTOBS",

  /**
   * security data integrity observation
   */
  securitydataintegrityobservation: "SECDATINTOBS",

  /**
   * security integrity confidence observation
   */
  securityintegrityconfidenceobservation: "SECINTCONOBS",

  /**
   * security integrity provenance observation
   */
  securityintegrityprovenanceobservation: "SECINTPRVOBS",

  /**
   * security integrity provenance asserted by observation
   */
  securityintegrityprovenanceassertedbyobservation: "SECINTPRVABOBS",

  /**
   * security integrity provenance reported by observation
   */
  securityintegrityprovenancereportedbyobservation: "SECINTPRVRBOBS",

  /**
   * security integrity status observation
   */
  securityintegritystatusobservation: "SECINTSTOBS",

  /**
   * SECTRSTOBS
   */
  SECTRSTOBS: "SECTRSTOBS",

  /**
   * trust accreditation observation
   */
  trustaccreditationobservation: "TRSTACCRDOBS",

  /**
   * trust agreement observation
   */
  trustagreementobservation: "TRSTAGREOBS",

  /**
   * trust certificate observation
   */
  trustcertificateobservation: "TRSTCERTOBS",

  /**
   * trust framework observation
   */
  trustframeworkobservation: "TRSTFWKOBS",

  /**
   * trust assurance observation
   */
  trustassuranceobservation: "TRSTLOAOBS",

  /**
   * trust mechanism observation
   */
  trustmechanismobservation: "TRSTMECOBS",

  /**
   * subsidized fee for service program
   */
  subsidizedfeeforserviceprogram: "SUBSIDFFS",

  /**
   * (workers compensation program
   */
  workerscompensationprogram: "WRKCOMP",

  /**
   * ActAdjudicationInformationCode
   */
  ActAdjudicationInformationCode: "_ActAdjudicationInformationCode",

  /**
   * ActBillableTreatmentPlanCode
   */
  ActBillableTreatmentPlanCode: "_ActBillableTreatmentPlanCode",

  /**
   * ActCognitiveProfessionalServiceCode
   */
  ActCognitiveProfessionalServiceCode: "_ActCognitiveProfessionalServiceCode",

  /**
   * ActIdentityDocumentCode
   */
  ActIdentityDocumentCode: "_ActIdentityDocumentCode",

  /**
   * ActOrderCode
   */
  ActOrderCode: "_ActOrderCode",

  /**
   * ActPrivilegeCategorization
   */
  ActPrivilegeCategorization: "_ActPrivilegeCategorization",

  /**
   * ActProcedureCode
   */
  ActProcedureCode: "_ActProcedureCode",

  /**
   * ActBillableServiceCode
   */
  ActBillableServiceCode: "_ActBillableServiceCode",

  /**
   * ActMedicalBillableServiceCode
   */
  ActMedicalBillableServiceCode: "_ActMedicalBillableServiceCode",

  /**
   * ActNonMedicalBillableServiceCode
   */
  ActNonMedicalBillableServiceCode: "_ActNonMedicalBillableServiceCode",

  /**
   * ActOralHealthProcedureCode
   */
  ActOralHealthProcedureCode: "_ActOralHealthProcedureCode",

  /**
   * ActRegistryCode
   */
  ActRegistryCode: "_ActRegistryCode",

  /**
   * ActSecurityObjectCode
   */
  ActSecurityObjectCode: "_ActSecurityObjectCode",

  /**
   * AdvanceBeneficiaryNoticeType
   */
  AdvanceBeneficiaryNoticeType: "_AdvanceBeneficiaryNoticeType",

  /**
   * CPT4
   */
  CPT4: "_CPT4",

  /**
   * ExternallyDefinedActCodes
   */
  ExternallyDefinedActCodes: "_ExternallyDefinedActCodes",

  /**
   * HL7DefinedActCodes
   */
  HL7DefinedActCodes: "_HL7DefinedActCodes",

  /**
   * ActDetectedIssueCode
   */
  ActDetectedIssueCode: "_ActDetectedIssueCode",

  /**
   * HL7TriggerEventCode
   */
  HL7TriggerEventCode: "_HL7TriggerEventCode",

  /**
   * SubstanceAdministrationActCode
   */
  SubstanceAdministrationActCode: "_SubstanceAdministrationActCode",

  /**
   * IndividualCaseSafetyReportCriteria
   */
  IndividualCaseSafetyReportCriteria: "_IndividualCaseSafetyReportCriteria",

  /**
   * IndividualCaseSafetyReportProductCharacteristic
   */
  IndividualCaseSafetyReportProductCharacteristic:
    "_IndividualCaseSafetyReportProductCharacteristic",

  /**
   * ObservationActAgeGroupType
   */
  ObservationActAgeGroupType: "_ObservationActAgeGroupType",

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
  Storage: "STORE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProvenanceEventCurrentStateCode =
  typeof ProvenanceEventCurrentStateCode[keyof typeof ProvenanceEventCurrentStateCode];
