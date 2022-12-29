/**
 * Security observation values used to indicate security category metadata. V:SecurityCategoryObservationValue is the union of V:PrivacyPolicyType, V:ActPrivacyLaw, V:ActConsentDirective, V:InformationSensitivityPolicy, V:ActInformationSensitivityPolicy, V:RoleInformationSensitivityPolicy, V:EntityInformationSensitivityPolicy, and the V:ActConsentType value used to populate the SecurityCategoryObservationValue attribute in order to convey one or more nonhierarchical categories of sensitivity metadata, which are used to control access to data more finely than with hierarchical security classification alone. Could be bound R1 to a V:ActUSPrivacyPolicy in a future US Realm.
 * http://terminology.hl7.org/ValueSet/v3-SecurityCategoryObservationValue
 */
export const SecurityCategoryObservationValueCode = {
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
   * notice of privacy practices
   */
  noticeofprivacypractices: "NOPP",

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
   * ActCoverageAssessmentObservationValue
   */
  ActCoverageAssessmentObservationValue:
    "_ActCoverageAssessmentObservationValue",

  /**
   * ActFinancialStatusObservationValue
   */
  ActFinancialStatusObservationValue: "_ActFinancialStatusObservationValue",

  /**
   * asset
   */
  asset: "ASSET",

  /**
   * annuity
   */
  annuity: "ANNUITY",

  /**
   * real property
   */
  realproperty: "PROP",

  /**
   * retirement investment account
   */
  retirementinvestmentaccount: "RETACCT",

  /**
   * trust
   */
  trust: "TRUST",

  /**
   * income
   */
  income: "INCOME",

  /**
   * child support
   */
  childsupport: "CHILD",

  /**
   * disability pay
   */
  disabilitypay: "DISABL",

  /**
   * investment income
   */
  investmentincome: "INVEST",

  /**
   * paid employment
   */
  paidemployment: "PAY",

  /**
   * retirement pay
   */
  retirementpay: "RETIRE",

  /**
   * spousal or partner support
   */
  spousalorpartnersupport: "SPOUSAL",

  /**
   * income supplement
   */
  incomesupplement: "SUPPLE",

  /**
   * tax obligation
   */
  taxobligation: "TAX",

  /**
   * living expense
   */
  livingexpense: "LIVEXP",

  /**
   * clothing expense
   */
  clothingexpense: "CLOTH",

  /**
   * food expense
   */
  foodexpense: "FOOD",

  /**
   * health expense
   */
  healthexpense: "HEALTH",

  /**
   * household expense
   */
  householdexpense: "HOUSE",

  /**
   * legal expense
   */
  legalexpense: "LEGAL",

  /**
   * mortgage
   */
  mortgage: "MORTG",

  /**
   * rent
   */
  rent: "RENT",

  /**
   * sundry expense
   */
  sundryexpense: "SUNDRY",

  /**
   * transportation expense
   */
  transportationexpense: "TRANS",

  /**
   * utility expense
   */
  utilityexpense: "UTIL",

  /**
   * eligibility indicator
   */
  eligibilityindicator: "ELSTAT",

  /**
   * adoption document
   */
  adoptiondocument: "ADOPT",

  /**
   * birth certificate
   */
  birthcertificate: "BTHCERT",

  /**
   * creditable coverage document
   */
  creditablecoveragedocument: "CCOC",

  /**
   * driver license
   */
  driverlicense: "DRLIC",

  /**
   * foster child document
   */
  fosterchilddocument: "FOSTER",

  /**
   * program or policy member
   */
  programorpolicymember: "MEMBER",

  /**
   * military identification
   */
  militaryidentification: "MIL",

  /**
   * marriage certificate
   */
  marriagecertificate: "MRGCERT",

  /**
   * passport
   */
  passport: "PASSPORT",

  /**
   * student enrollment
   */
  studentenrollment: "STUDENRL",

  /**
   * health status
   */
  healthstatus: "HLSTAT",

  /**
   * disabled
   */
  disabled: "DISABLE",

  /**
   * drug use
   */
  druguse: "DRUG",

  /**
   * IV drug use
   */
  IVdruguse: "IVDRG",

  /**
   * pregnant
   */
  pregnant: "PGNT",

  /**
   * living dependency
   */
  livingdependency: "LIVDEP",

  /**
   * relative dependent
   */
  relativedependent: "RELDEP",

  /**
   * spouse dependent
   */
  spousedependent: "SPSDEP",

  /**
   * unrelated person dependent
   */
  unrelatedpersondependent: "URELDEP",

  /**
   * living situation
   */
  livingsituation: "LIVSIT",

  /**
   * alone
   */
  alone: "ALONE",

  /**
   * dependent children
   */
  dependentchildren: "DEPCHD",

  /**
   * dependent spouse
   */
  dependentspouse: "DEPSPS",

  /**
   * dependent young children
   */
  dependentyoungchildren: "DEPYGCHD",

  /**
   * live with family
   */
  livewithfamily: "FAM",

  /**
   * relative
   */
  relative: "RELAT",

  /**
   * spouse only
   */
  spouseonly: "SPS",

  /**
   * unrelated person
   */
  unrelatedperson: "UNREL",

  /**
   * socio economic status
   */
  socioeconomicstatus: "SOECSTAT",

  /**
   * abuse victim
   */
  abusevictim: "ABUSE",

  /**
   * homeless
   */
  homeless: "HMLESS",

  /**
   * illegal immigrant
   */
  illegalimmigrant: "ILGIM",

  /**
   * incarcerated
   */
  incarcerated: "INCAR",

  /**
   * probation
   */
  probation: "PROB",

  /**
   * refugee
   */
  refugee: "REFUG",

  /**
   * unemployed
   */
  unemployed: "UNEMPL",

  /**
   * AllergyTestValue
   */
  AllergyTestValue: "_AllergyTestValue",

  /**
   * no reaction
   */
  noreaction: "A0",

  /**
   * minimal reaction
   */
  minimalreaction: "A1",

  /**
   * mild reaction
   */
  mildreaction: "A2",

  /**
   * moderate reaction
   */
  moderatereaction: "A3",

  /**
   * severe reaction
   */
  severereaction: "A4",

  /**
   * CompositeMeasureScoring
   */
  CompositeMeasureScoring: "_CompositeMeasureScoring",

  /**
   * All-or-nothing Scoring
   */
  AllornothingScoring: "ALLORNONESCR",

  /**
   * Linear Scoring
   */
  LinearScoring: "LINEARSCR",

  /**
   * Opportunity Scoring
   */
  OpportunityScoring: "OPPORSCR",

  /**
   * Weighted Scoring
   */
  WeightedScoring: "WEIGHTSCR",

  /**
   * CoverageLimitObservationValue
   */
  CoverageLimitObservationValue: "_CoverageLimitObservationValue",

  /**
   * CoverageLevelObservationValue
   */
  CoverageLevelObservationValue: "_CoverageLevelObservationValue",

  /**
   * adult child
   */
  adultchild: "ADC",

  /**
   * child
   */
  child: "CHD",

  /**
   * dependent
   */
  dependent: "DEP",

  /**
   * domestic partner
   */
  domesticpartner: "DP",

  /**
   * employee
   */
  employee: "ECH",

  /**
   * family coverage
   */
  familycoverage: "FLY",

  /**
   * individual
   */
  individual: "IND",

  /**
   * same sex partner
   */
  samesexpartner: "SSP",

  /**
   * CoverageItemLimitObservationValue
   */
  CoverageItemLimitObservationValue: "_CoverageItemLimitObservationValue",

  /**
   * CoverageLocationLimitObservationValue
   */
  CoverageLocationLimitObservationValue:
    "_CoverageLocationLimitObservationValue",

  /**
   * CriticalityObservationValue
   */
  CriticalityObservationValue: "_CriticalityObservationValue",

  /**
   * high criticality
   */
  highcriticality: "CRITH",

  /**
   * low criticality
   */
  lowcriticality: "CRITL",

  /**
   * unable to assess criticality
   */
  unabletoassesscriticality: "CRITU",

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
  GeneticObservationValue: "_GeneticObservationValue",

  /**
   * HOMO
   */
  HOMO: "Homozygote",

  /**
   * Measurement Improvement Notation
   */
  MeasurementImprovementNotation: "_MeasurementImprovementNotation",

  /**
   * Decreased score indicates improvement
   */
  Decreasedscoreindicatesimprovement: "DecrIsImp",

  /**
   * Increased score indicates improvement
   */
  Increasedscoreindicatesimprovement: "IncrIsImp",

  /**
   * ObservationMeasureScoring
   */
  ObservationMeasureScoring: "_ObservationMeasureScoring",

  /**
   * cohort measure scoring
   */
  cohortmeasurescoring: "COHORT",

  /**
   * continuous variable measure scoring
   */
  continuousvariablemeasurescoring: "CONTVAR",

  /**
   * proportion measure scoring
   */
  proportionmeasurescoring: "PROPOR",

  /**
   * ratio measure scoring
   */
  ratiomeasurescoring: "RATIO",

  /**
   * ObservationMeasureType
   */
  ObservationMeasureType: "_ObservationMeasureType",

  /**
   * composite measure type
   */
  compositemeasuretype: "COMPOSITE",

  /**
   * efficiency measure type
   */
  efficiencymeasuretype: "EFFICIENCY",

  /**
   * experience measure type
   */
  experiencemeasuretype: "EXPERIENCE",

  /**
   * outcome measure type
   */
  outcomemeasuretype: "OUTCOME",

  /**
   * intermediate clinical outcome measure
   */
  intermediateclinicaloutcomemeasure: "INTERM-OM",

  /**
   * patient reported outcome performance measure
   */
  patientreportedoutcomeperformancemeasure: "PRO-PM",

  /**
   * process measure type
   */
  processmeasuretype: "PROCESS",

  /**
   * appropriate use process measure
   */
  appropriateuseprocessmeasure: "APPROPRIATE",

  /**
   * resource use measure type
   */
  resourceusemeasuretype: "RESOURCE",

  /**
   * structure measure type
   */
  structuremeasuretype: "STRUCTURE",

  /**
   * ObservationPopulationInclusion
   */
  ObservationPopulationInclusion: "_ObservationPopulationInclusion",

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
  initialpopulation: "IP",

  /**
   * initial patient population
   */
  initialpatientpopulation: "IPP",

  /**
   * measure population
   */
  measurepopulation: "MSRPOPL",

  /**
   * numerator
   */
  numerator: "NUMER",

  /**
   * numerator exclusions
   */
  numeratorexclusions: "NUMEX",

  /**
   * PartialCompletionScale
   */
  PartialCompletionScale: "_PartialCompletionScale",

  /**
   * Great extent
   */
  Greatextent: "G",

  /**
   * Large extent
   */
  Largeextent: "LE",

  /**
   * Medium extent
   */
  Mediumextent: "ME",

  /**
   * Minimal extent
   */
  Minimalextent: "MI",

  /**
   * None
   */
  None: "N",

  /**
   * Some extent
   */
  Someextent: "S",

  /**
   * SecurityObservationValue
   */
  SecurityObservationValue: "_SecurityObservationValue",

  /**
   * security category
   */
  securitycategory: "_SECCATOBV",

  /**
   * security classification
   */
  securityclassification: "_SECCLASSOBV",

  /**
   * security control
   */
  securitycontrol: "_SECCONOBV",

  /**
   * security integrity
   */
  securityintegrity: "_SECINTOBV",

  /**
   * alteration integrity
   */
  alterationintegrity: "_SECALTINTOBV",

  /**
   * abstracted
   */
  abstracted: "ABSTRED",

  /**
   * aggregated
   */
  aggregated: "AGGRED",

  /**
   * anonymized
   */
  anonymized: "ANONYED",

  /**
   * mapped
   */
  mapped: "MAPPED",

  /**
   * masked
   */
  masked: "MASKED",

  /**
   * pseudonymized
   */
  pseudonymized: "PSEUDED",

  /**
   * redacted
   */
  redacted: "REDACTED",

  /**
   * subsetted
   */
  subsetted: "SUBSETTED",

  /**
   * syntactic transform
   */
  syntactictransform: "SYNTAC",

  /**
   * translated
   */
  translated: "TRSLT",

  /**
   * versioned
   */
  versioned: "VERSIONED",

  /**
   * data integrity
   */
  dataintegrity: "_SECDATINTOBV",

  /**
   * cryptographic hash function
   */
  cryptographichashfunction: "CRYTOHASH",

  /**
   * digital signature
   */
  digitalsignature: "DIGSIG",

  /**
   * integrity confidence
   */
  integrityconfidence: "_SECINTCONOBV",

  /**
   * highly reliable
   */
  highlyreliable: "HRELIABLE",

  /**
   * reliable
   */
  reliable: "RELIABLE",

  /**
   * uncertain reliability
   */
  uncertainreliability: "UNCERTREL",

  /**
   * unreliable
   */
  unreliable: "UNRELIABLE",

  /**
   * provenance
   */
  provenance: "_SECINTPRVOBV",

  /**
   * provenance asserted by
   */
  provenanceassertedby: "_SECINTPRVABOBV",

  /**
   * clinician asserted
   */
  clinicianasserted: "CLINAST",

  /**
   * device asserted
   */
  deviceasserted: "DEVAST",

  /**
   * healthcare professional asserted
   */
  healthcareprofessionalasserted: "HCPAST",

  /**
   * patient acquaintance asserted
   */
  patientacquaintanceasserted: "PACQAST",

  /**
   * patient asserted
   */
  patientasserted: "PATAST",

  /**
   * payer asserted
   */
  payerasserted: "PAYAST",

  /**
   * professional asserted
   */
  professionalasserted: "PROAST",

  /**
   * substitute decision maker asserted
   */
  substitutedecisionmakerasserted: "SDMAST",

  /**
   * provenance reported by
   */
  provenancereportedby: "_SECINTPRVRBOBV",

  /**
   * clinician reported
   */
  clinicianreported: "CLINRPT",

  /**
   * device reported
   */
  devicereported: "DEVRPT",

  /**
   * healthcare professional reported
   */
  healthcareprofessionalreported: "HCPRPT",

  /**
   * patient acquaintance reported
   */
  patientacquaintancereported: "PACQRPT",

  /**
   * patient reported
   */
  patientreported: "PATRPT",

  /**
   * payer reported
   */
  payerreported: "PAYRPT",

  /**
   * professional reported
   */
  professionalreported: "PRORPT",

  /**
   * substitute decision maker reported
   */
  substitutedecisionmakerreported: "SDMRPT",

  /**
   * integrity status
   */
  integritystatus: "_SECINTSTOBV",

  /**
   * security trust observation
   */
  securitytrustobservation: "SECTRSTOBV",

  /**
   * trust accreditation observation
   */
  trustaccreditationobservation: "TRSTACCRDOBV",

  /**
   * trust agreement observation
   */
  trustagreementobservation: "TRSTAGREOBV",

  /**
   * trust certificate observation
   */
  trustcertificateobservation: "TRSTCERTOBV",

  /**
   * none supplied 5
   */
  nonesupplied5: "TRSTFWKOBV",

  /**
   * trust assurance observation
   */
  trustassuranceobservation: "TRSTLOAOBV",

  /**
   * authentication level of assurance value
   */
  authenticationlevelofassurancevalue: "LOAAN",

  /**
   * low authentication level of assurance
   */
  lowauthenticationlevelofassurance: "LOAAN1",

  /**
   * basic authentication level of assurance
   */
  basicauthenticationlevelofassurance: "LOAAN2",

  /**
   * medium authentication level of assurance
   */
  mediumauthenticationlevelofassurance: "LOAAN3",

  /**
   * high authentication level of assurance
   */
  highauthenticationlevelofassurance: "LOAAN4",

  /**
   * authentication process level of assurance value
   */
  authenticationprocesslevelofassurancevalue: "LOAAP",

  /**
   * low authentication process level of assurance
   */
  lowauthenticationprocesslevelofassurance: "LOAAP1",

  /**
   * basic authentication process level of assurance
   */
  basicauthenticationprocesslevelofassurance: "LOAAP2",

  /**
   * medium authentication process level of assurance
   */
  mediumauthenticationprocesslevelofassurance: "LOAAP3",

  /**
   * high authentication process level of assurance
   */
  highauthenticationprocesslevelofassurance: "LOAAP4",

  /**
   * assertion level of assurance value
   */
  assertionlevelofassurancevalue: "LOAAS",

  /**
   * low assertion level of assurance
   */
  lowassertionlevelofassurance: "LOAAS1",

  /**
   * basic assertion level of assurance
   */
  basicassertionlevelofassurance: "LOAAS2",

  /**
   * medium assertion level of assurance
   */
  mediumassertionlevelofassurance: "LOAAS3",

  /**
   * high assertion level of assurance
   */
  highassertionlevelofassurance: "LOAAS4",

  /**
   * token and credential management level of assurance value)
   */
  tokenandcredentialmanagementlevelofassurancevalue: "LOACM",

  /**
   * low token and credential management level of assurance
   */
  lowtokenandcredentialmanagementlevelofassurance: "LOACM1",

  /**
   * basic token and credential management level of assurance
   */
  basictokenandcredentialmanagementlevelofassurance: "LOACM2",

  /**
   * medium token and credential management level of assurance
   */
  mediumtokenandcredentialmanagementlevelofassurance: "LOACM3",

  /**
   * high token and credential management level of assurance
   */
  hightokenandcredentialmanagementlevelofassurance: "LOACM4",

  /**
   * identity proofing level of assurance
   */
  identityproofinglevelofassurance: "LOAID",

  /**
   * low identity proofing level of assurance
   */
  lowidentityproofinglevelofassurance: "LOAID1",

  /**
   * basic identity proofing level of assurance
   */
  basicidentityproofinglevelofassurance: "LOAID2",

  /**
   * medium identity proofing level of assurance
   */
  mediumidentityproofinglevelofassurance: "LOAID3",

  /**
   * high identity proofing level of assurance
   */
  highidentityproofinglevelofassurance: "LOAID4",

  /**
   * non-repudiation level of assurance value
   */
  nonrepudiationlevelofassurancevalue: "LOANR",

  /**
   * low non-repudiation level of assurance
   */
  lownonrepudiationlevelofassurance: "LOANR1",

  /**
   * basic non-repudiation level of assurance
   */
  basicnonrepudiationlevelofassurance: "LOANR2",

  /**
   * medium non-repudiation level of assurance
   */
  mediumnonrepudiationlevelofassurance: "LOANR3",

  /**
   * high non-repudiation level of assurance
   */
  highnonrepudiationlevelofassurance: "LOANR4",

  /**
   * remote access level of assurance value
   */
  remoteaccesslevelofassurancevalue: "LOARA",

  /**
   * low remote access level of assurance
   */
  lowremoteaccesslevelofassurance: "LOARA1",

  /**
   * basic remote access level of assurance
   */
  basicremoteaccesslevelofassurance: "LOARA2",

  /**
   * medium remote access level of assurance
   */
  mediumremoteaccesslevelofassurance: "LOARA3",

  /**
   * high remote access level of assurance
   */
  highremoteaccesslevelofassurance: "LOARA4",

  /**
   * token level of assurance value
   */
  tokenlevelofassurancevalue: "LOATK",

  /**
   * low token level of assurance
   */
  lowtokenlevelofassurance: "LOATK1",

  /**
   * basic token level of assurance
   */
  basictokenlevelofassurance: "LOATK2",

  /**
   * medium token level of assurance
   */
  mediumtokenlevelofassurance: "LOATK3",

  /**
   * high token level of assurance
   */
  hightokenlevelofassurance: "LOATK4",

  /**
   * none supplied 6
   */
  nonesupplied6: "TRSTMECOBV",

  /**
   * SeverityObservation
   */
  SeverityObservation: "_SeverityObservation",

  /**
   * High
   */
  High: "H",

  /**
   * Low
   */
  Low: "L",

  /**
   * Moderate
   */
  Moderate: "M",

  /**
   * _SubjectBodyPosition
   */
  _SubjectBodyPosition: "_SubjectBodyPosition",

  /**
   * left lateral decubitus
   */
  leftlateraldecubitus: "LLD",

  /**
   * prone
   */
  prone: "PRN",

  /**
   * right lateral decubitus
   */
  rightlateraldecubitus: "RLD",

  /**
   * Semi-Fowler's
   */
  SemiFowlers: "SFWL",

  /**
   * sitting
   */
  sitting: "SIT",

  /**
   * standing
   */
  standing: "STN",

  /**
   * supine
   */
  supine: "SUP",

  /**
   * reverse trendelenburg
   */
  reversetrendelenburg: "RTRD",

  /**
   * trendelenburg
   */
  trendelenburg: "TRD",

  /**
   * verification outcome
   */
  verificationoutcome: "_VerificationOutcomeValue",

  /**
   * active coverage
   */
  activecoverage: "ACT",

  /**
   * active - pending investigation
   */
  activependinginvestigation: "ACTPEND",

  /**
   * eligible
   */
  eligible: "ELG",

  /**
   * inactive
   */
  inactive: "INACT",

  /**
   * inactive - pending investigation
   */
  inactivependinginvestigation: "INPNDINV",

  /**
   * inactive - pending eligibility update
   */
  inactivependingeligibilityupdate: "INPNDUPD",

  /**
   * not eligible
   */
  noteligible: "NELG",

  /**
   * _WorkSchedule
   */
  _WorkSchedule: "_WorkSchedule",

  /**
   * daytime shift
   */
  daytimeshift: "DS",

  /**
   * early morning shift
   */
  earlymorningshift: "EMS",

  /**
   * evening shift
   */
  eveningshift: "ES",

  /**
   * night shift
   */
  nightshift: "NS",

  /**
   * rotating shift with nights
   */
  rotatingshiftwithnights: "RSWN",

  /**
   * rotating shift without nights
   */
  rotatingshiftwithoutnights: "RSWON",

  /**
   * split shift
   */
  splitshift: "SS",

  /**
   * very long shift
   */
  verylongshift: "VLS",

  /**
   * variable shift
   */
  variableshift: "VS",

  /**
   * AnnotationValue
   */
  AnnotationValue: "_AnnotationValue",

  /**
   * ECGAnnotationValue
   */
  ECGAnnotationValue: "_ECGAnnotationValue",

  /**
   * common clinical observation
   */
  commonclinicalobservation: "_CommonClinicalObservationValue",

  /**
   * CommonClinicalObservationAssertionValue
   */
  CommonClinicalObservationAssertionValue:
    "_CommonClinicalObservationAssertionValue",

  /**
   * CommonClinicalObservationResultValue
   */
  CommonClinicalObservationResultValue: "_CommonClinicalObservationResultValue",

  /**
   * CoverageChemicalDependencyValue
   */
  CoverageChemicalDependencyValue: "_CoverageChemicalDependencyValue",

  /**
   * Individual Case Safety Report Value Domains
   */
  IndividualCaseSafetyReportValueDomains:
    "_IndividualCaseSafetyReportValueDomains",

  /**
   * CaseSeriousnessCriteria
   */
  CaseSeriousnessCriteria: "_CaseSeriousnessCriteria",

  /**
   * DeviceManufacturerEvaluationInterpretation
   */
  DeviceManufacturerEvaluationInterpretation:
    "_DeviceManufacturerEvaluationInterpretation",

  /**
   * DeviceManufacturerEvaluationMethod
   */
  DeviceManufacturerEvaluationMethod: "_DeviceManufacturerEvaluationMethod",

  /**
   * DeviceManufacturerEvaluationResult
   */
  DeviceManufacturerEvaluationResult: "_DeviceManufacturerEvaluationResult",

  /**
   * Pertinent Reaction Relatedness
   */
  PertinentReactionRelatedness: "_PertinentReactionRelatedness",

  /**
   * Product Characterization
   */
  ProductCharacterization: "_ProductCharacterization",

  /**
   * ReactionActionTaken
   */
  ReactionActionTaken: "_ReactionActionTaken",

  /**
   * Subject Reaction
   */
  SubjectReaction: "_SubjectReaction",

  /**
   * SubjectReactionEmphasis
   */
  SubjectReactionEmphasis: "_SubjectReactionEmphasis",

  /**
   * SubjectReactionOutcome
   */
  SubjectReactionOutcome: "_SubjectReactionOutcome",

  /**
   * InjuryObservationValue
   */
  InjuryObservationValue: "_InjuryObservationValue",

  /**
   * IntoleranceValue
   */
  IntoleranceValue: "_IntoleranceValue",

  /**
   * IssueTriggerObservationValue
   */
  IssueTriggerObservationValue: "_IssueTriggerObservationValue",

  /**
   * OtherIndicationValue
   */
  OtherIndicationValue: "_OtherIndicationValue",

  /**
   * IndicationValue
   */
  IndicationValue: "_IndicationValue",

  /**
   * DiagnosisValue
   */
  DiagnosisValue: "_DiagnosisValue",

  /**
   * SymptomValue
   */
  SymptomValue: "_SymptomValue",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SecurityCategoryObservationValueCode =
  typeof SecurityCategoryObservationValueCode[keyof typeof SecurityCategoryObservationValueCode];
