/**
 * Identifies the kinds of observations that can be performed
 * http://terminology.hl7.org/ValueSet/v3-ObservationType
 */
export const ObservationTypeCode = {
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
   * Acyclovir [Susceptibility]
   */
  "1-8": "1-8",

  /**
   * Amdinocillin [Susceptibility] by Serum bactericidal titer
   */
  "10-9": "10-9",

  /**
   * Cefoperazone [Susceptibility] by Minimum inhibitory concentration (MIC)
   */
  "100-8": "100-8",

  /**
   * DBG Ab [Presence] in Serum or Plasma from Blood product unit
   */
  "1000-9": "1000-9",

  /**
   * R wave duration in lead AVR
   */
  "10000-8": "10000-8",

  /**
   * Specimen care is maintained
   */
  "100002-5": "100002-5",

  /**
   * Team communication is maintained throughout care
   */
  "100003-3": "100003-3",

  /**
   * Demonstrates knowledge of the expected psychosocial responses to the procedure
   */
  "100004-1": "100004-1",

  /**
   * Demonstrates knowledge of nutritional management related to the procedure
   */
  "100005-8": "100005-8",

  /**
   * Demonstrates knowledge of medication management
   */
  "100006-6": "100006-6",

  /**
   * Demonstrates knowledge of pain management
   */
  "100007-4": "100007-4",

  /**
   * Demonstrates knowledge of wound management
   */
  "100008-2": "100008-2",

  /**
   * Demonstrates knowledge of the procedure and expected results
   */
  "100009-0": "100009-0",

  /**
   * R wave duration in lead I
   */
  "10001-6": "10001-6",

  /**
   * No injury related to procedure equipment, medical supplies, or instrumentation
   */
  "100010-8": "100010-8",

  /**
   * No injury related to an electrical source
   */
  "100011-6": "100011-6",

  /**
   * Participates in decisions affecting the patient's plan of care
   */
  "100012-4": "100012-4",

  /**
   * Participates in the discharge process
   */
  "100013-2": "100013-2",

  /**
   * Psychosocial health is maintained at or improved from baseline
   */
  "100014-0": "100014-0",

  /**
   * No injury related to positioning due to care or procedure
   */
  "100015-7": "100015-7",

  /**
   * No injury related to a laser source
   */
  "100016-5": "100016-5",

  /**
   * Perioperative nursing data set outcomes panel [PNDS]
   */
  "100017-3": "100017-3",

  /**
   * Hospice care Note
   */
  "100018-1": "100018-1",

  /**
   * ALK gene mutations found [Identifier] in Blood or Tissue by Molecular genetics method Nominal
   */
  "100019-9": "100019-9",

  /**
   * R wave duration in lead II
   */
  "10002-4": "10002-4",

  /**
   * GNA11 gene mutations found [Identifier] in Blood or Tissue by Molecular genetics method Nominal
   */
  "100020-7": "100020-7",

  /**
   * GNAQ gene mutations found [Identifier] in Blood or Tissue by Molecular genetics method Nominal
   */
  "100021-5": "100021-5",

  /**
   * IDH1 gene mutations found [Identifier] in Blood or Tissue by Molecular genetics method Nominal
   */
  "100022-3": "100022-3",

  /**
   * IDH2 gene mutations found [Identifier] in Blood or Tissue by Molecular genetics method Nominal
   */
  "100023-1": "100023-1",

  /**
   * SETBP1 gene mutations found [Identifier] in Blood or Tissue by Molecular genetics method Nominal
   */
  "100024-9": "100024-9",

  /**
   * SRSF2 gene mutations found [Identifier] in Blood or Tissue by Molecular genetics method Nominal
   */
  "100025-6": "100025-6",

  /**
   * MET gene mutations found [Identifier] in Blood or Tissue by Molecular genetics method Nominal
   */
  "100026-4": "100026-4",

  /**
   * SMAD4 gene mutations found [Identifier] in Blood or Tissue by Molecular genetics method Nominal
   */
  "100027-2": "100027-2",

  /**
   * FBXW7 gene mutations found [Identifier] in Blood or Tissue by Molecular genetics method Nominal
   */
  "100028-0": "100028-0",

  /**
   * Cancer related multigene analysis in Plasma cell-free DNA by Molecular genetics method
   */
  "100029-8": "100029-8",

  /**
   * R wave duration in lead III
   */
  "10003-2": "10003-2",

  /**
   * Axis I: Temporal aspects score [Mainz Pain Staging System]
   */
  "100030-6": "100030-6",

  /**
   * Axis II: Spatial aspects score [Mainz Pain Staging System]
   */
  "100031-4": "100031-4",

  /**
   * Axis III: Drug taking behavior score [Mainz Pain Staging System]
   */
  "100032-2": "100032-2",

  /**
   * Axis IV: Utilization of the health care system score [Mainz Pain Staging System]
   */
  "100033-0": "100033-0",

  /**
   * Provider of automated external defibrillator use
   */
  "100034-8": "100034-8",

  /**
   * Exam finding location of Chest
   */
  "100035-5": "100035-5",

  /**
   * Exam finding location of Lung
   */
  "100036-3": "100036-3",

  /**
   * Patient contact disposition EMS unit
   */
  "100037-1": "100037-1",

  /**
   * Patient evaluation disposition EMS unit
   */
  "100038-9": "100038-9",

  /**
   * Crew disposition for patient care EMS unit
   */
  "100039-7": "100039-7",

  /**
   * R wave duration in lead V1
   */
  "10004-0": "10004-0",

  /**
   * Patient transport disposition EMS unit
   */
  "100040-5": "100040-5",

  /**
   * Aminoglycoside [Susceptibility]
   */
  "100041-3": "100041-3",

  /**
   * Atovaquone [Susceptibility]
   */
  "100042-1": "100042-1",

  /**
   * Azithromycin+Ethambutol [Susceptibility]
   */
  "100043-9": "100043-9",

  /**
   * Cefcapene [Susceptibility]
   */
  "100044-7": "100044-7",

  /**
   * Cefozopran [Susceptibility]
   */
  "100045-4": "100045-4",

  /**
   * Cefquinome [Susceptibility]
   */
  "100046-2": "100046-2",

  /**
   * Cefteram [Susceptibility]
   */
  "100047-0": "100047-0",

  /**
   * Clarithromycin+Ethambutol [Susceptibility]
   */
  "100048-8": "100048-8",

  /**
   * Eravacycline [Susceptibility]
   */
  "100049-6": "100049-6",

  /**
   * R wave duration in lead V2
   */
  "10005-7": "10005-7",

  /**
   * Erythromycin+Ethambutol [Susceptibility]
   */
  "100050-4": "100050-4",

  /**
   * Ethambutol+rifAMPin [Susceptibility]
   */
  "100051-2": "100051-2",

  /**
   * Flomoxef [Susceptibility]
   */
  "100052-0": "100052-0",

  /**
   * Fluoroquinolone [Susceptibility]
   */
  "100053-8": "100053-8",

  /**
   * Gamithromycin [Susceptibility]
   */
  "100054-6": "100054-6",

  /**
   * Optochin [Susceptibility]
   */
  "100055-3": "100055-3",

  /**
   * Panipenem [Susceptibility]
   */
  "100056-1": "100056-1",

  /**
   * Prothionamide [Susceptibility]
   */
  "100057-9": "100057-9",

  /**
   * Prulifloxacin [Susceptibility]
   */
  "100058-7": "100058-7",

  /**
   * Rifapentine [Susceptibility]
   */
  "100059-5": "100059-5",

  /**
   * R wave duration in lead V3
   */
  "10006-5": "10006-5",

  /**
   * Tildipirosin [Susceptibility]
   */
  "100060-3": "100060-3",

  /**
   * Tosufloxacin [Susceptibility]
   */
  "100061-1": "100061-1",

  /**
   * Standard Dermatology Outcome Measures panel
   */
  "100062-9": "100062-9",

  /**
   * Primary skin concern
   */
  "100063-7": "100063-7",

  /**
   * Itch severity Reporting Period - Reported
   */
  "100064-5": "100064-5",

  /**
   * Satisfied with treatment
   */
  "100065-2": "100065-2",

  /**
   * Specular microscopy panel
   */
  "100066-0": "100066-0",

  /**
   * Eye Image magnification
   */
  "100067-8": "100067-8",

  /**
   * Right eye Fixation point [Angle]
   */
  "100068-6": "100068-6",

  /**
   * Left eye Fixation point [Angle]
   */
  "100069-4": "100069-4",

  /**
   * R wave duration in lead V4
   */
  "10007-3": "10007-3",

  /**
   * Right cornea Cell density
   */
  "100070-2": "100070-2",

  /**
   * Left cornea Cell density
   */
  "100071-0": "100071-0",

  /**
   * Right cornea Coefficient of variation
   */
  "100072-8": "100072-8",

  /**
   * Left cornea Coefficient of variation
   */
  "100073-6": "100073-6",

  /**
   * Right cornea Hexagonality
   */
  "100074-4": "100074-4",

  /**
   * Left cornea Hexagonality
   */
  "100075-1": "100075-1",

  /**
   * Right cornea Endothelial cells counted
   */
  "100076-9": "100076-9",

  /**
   * Left cornea Endothelial cells counted
   */
  "100077-7": "100077-7",

  /**
   * Right cornea Endothelial cell area.min
   */
  "100078-5": "100078-5",

  /**
   * Left cornea Endothelial cell area.min
   */
  "100079-3": "100079-3",

  /**
   * R wave duration in lead V5
   */
  "10008-1": "10008-1",

  /**
   * Right cornea Endothelial cell area.max
   */
  "100080-1": "100080-1",

  /**
   * Left cornea Endothelial cell area.max
   */
  "100081-9": "100081-9",

  /**
   * Right cornea Endothelial cell area.mean
   */
  "100082-7": "100082-7",

  /**
   * Left cornea Endothelial cell area.mean
   */
  "100083-5": "100083-5",

  /**
   * Right cornea Cell area.standard deviation
   */
  "100084-3": "100084-3",

  /**
   * Left cornea Cell area.standard deviation
   */
  "100085-0": "100085-0",

  /**
   * Right cornea Type of Analysis method by Specular microscopy
   */
  "100086-8": "100086-8",

  /**
   * Toxocara canis 24-35kD IgG Ab [Presence] in Serum by Immunoblot
   */
  "100087-6": "100087-6",

  /**
   * Taenia solium larva Ab bands panel - Serum by Immunoblot
   */
  "100088-4": "100088-4",

  /**
   * Taenia solium larva 6-8kD Ab [Presence] in Serum by Immunoblot
   */
  "100089-2": "100089-2",

  /**
   * R wave duration in lead V6
   */
  "10009-9": "10009-9",

  /**
   * Taenia solium larva 45kD Ab [Presence] in Serum by Immunoblot
   */
  "100090-0": "100090-0",

  /**
   * Trypanosoma cruzi Ab [Units/volume] in Serum by Immunoassay
   */
  "100091-8": "100091-8",

  /**
   * Trypanosoma cruzi Ab bands panel - Serum by Immunoblot
   */
  "100092-6": "100092-6",

  /**
   * Trypanosoma cruzi 15-16kD IgG Ab [Presence] in Serum by Immunoblot
   */
  "100093-4": "100093-4",

  /**
   * Trypanosoma cruzi 21-22kD IgG Ab [Presence] in Serum by Immunoblot
   */
  "100094-2": "100094-2",

  /**
   * Trypanosoma cruzi 27-28kD IgG Ab [Presence] in Serum by Immunoblot
   */
  "100095-9": "100095-9",

  /**
   * Trypanosoma cruzi 42kD IgG Ab [Presence] in Serum by Immunoblot
   */
  "100096-7": "100096-7",

  /**
   * Trypanosoma cruzi 45-47kD IgG Ab [Presence] in Serum by Immunoblot
   */
  "100097-5": "100097-5",

  /**
   * Trypanosoma cruzi 120-200kD IgG Ab [Presence] in Serum by Immunoblot
   */
  "100098-3": "100098-3",

  /**
   * Trypanosoma cruzi 160kD IgG Ab [Presence] in Serum by Immunoblot
   */
  "100099-1": "100099-1",

  /**
   * DBG Ab [Presence] in Serum or Plasma from Donor
   */
  "1001-7": "1001-7",

  /**
   * R' wave amplitude in lead AVF
   */
  "10010-7": "10010-7",

  /**
   * Fasciola sp IgG Ab [Presence] in Serum by Immunoassay
   */
  "100100-7": "100100-7",

  /**
   * Fasciola sp 8-9kD IgG Ab [Presence] in Serum by Immunoblot
   */
  "100101-5": "100101-5",

  /**
   * Fasciola sp 27-28kD IgG Ab [Presence] in Serum by Immunoblot
   */
  "100102-3": "100102-3",

  /**
   * Fasciola sp 60kD IgG Ab [Presence] in Serum by Immunoblot
   */
  "100103-1": "100103-1",

  /**
   * Fasciola sp 42kD IgG Ab [Presence] in Serum by Immunoblot
   */
  "100104-9": "100104-9",

  /**
   * Filaria IgG and IgM panel - Serum
   */
  "100105-6": "100105-6",

  /**
   * Filaria IgG Ab [Presence] in Serum by Immunoassay
   */
  "100106-4": "100106-4",

  /**
   * Leishmania sp IgG Ab [Presence] in Serum by Immunoassay
   */
  "100107-2": "100107-2",

  /**
   * Leishmania sp IgG Ab [Units/volume] in Serum by Immunoassay
   */
  "100108-0": "100108-0",

  /**
   * Leishmania sp Ab bands panel - Serum by Immunoblot
   */
  "100109-8": "100109-8",

  /**
   * R' wave amplitude in lead AVL
   */
  "10011-5": "10011-5",

  /**
   * Leishmania sp 14kD IgG Ab [Presence] in Serum by Immunoblot
   */
  "100110-6": "100110-6",

  /**
   * Leishmania sp 16kD IgG Ab [Presence] in Serum by Immunoblot
   */
  "100111-4": "100111-4",

  /**
   * Fasciola sp Ab bands panel - Serum by Immunoblot
   */
  "100112-2": "100112-2",

  /**
   * Helicobacter pylori Ab panel - Serum
   */
  "100113-0": "100113-0",

  /**
   * Toxoplasma gondii 30kD Ab [Presence] in Serum by Immunoblot
   */
  "100114-8": "100114-8",

  /**
   * Toxoplasma gondii 31kD Ab [Presence] in Serum by Immunoblot
   */
  "100115-5": "100115-5",

  /**
   * Toxoplasma gondii 33kD Ab [Presence] in Serum by Immunoblot
   */
  "100116-3": "100116-3",

  /**
   * Toxoplasma gondii 40kD Ab [Presence] in Serum by Immunoblot
   */
  "100117-1": "100117-1",

  /**
   * Toxoplasma gondii 41kD Ab [Presence] in Serum by Immunoblot
   */
  "100118-9": "100118-9",

  /**
   * Toxoplasma gondii 45kD Ab [Presence] in Serum by Immunoblot
   */
  "100119-7": "100119-7",

  /**
   * R' wave amplitude in lead AVR
   */
  "10012-3": "10012-3",

  /**
   * Chlamydia trachomatis Ab panel - Serum
   */
  "100120-5": "100120-5",

  /**
   * Chlamydia trachomatis IgA Ab [Presence] in Serum by Immunoassay
   */
  "100121-3": "100121-3",

  /**
   * Chlamydophila pneumoniae Ab panel - Serum
   */
  "100122-1": "100122-1",

  /**
   * Chlamydophila pneumoniae IgA Ab [Presence] in Serum by Immunoassay
   */
  "100123-9": "100123-9",

  /**
   * Chlamydophila pneumoniae IgA Ab [Units/volume] in Serum by Immunoassay
   */
  "100124-7": "100124-7",

  /**
   * Chlamydophila psittaci Ab panel - Serum
   */
  "100125-4": "100125-4",

  /**
   * Bordetella pertussis Ab.IgG panel - Serum
   */
  "100126-2": "100126-2",

  /**
   * Campylobacter sp Ab panel - Serum
   */
  "100127-0": "100127-0",

  /**
   * Cryptococcus sp Ag panel - Serum
   */
  "100128-8": "100128-8",

  /**
   * Schistosoma sp Ab [Titer] in Serum by Hemagglutination
   */
  "100129-6": "100129-6",

  /**
   * R' wave amplitude in lead I
   */
  "10013-1": "10013-1",

  /**
   * Schistosoma mansoni Ab [Presence] in Serum by Immunoblot
   */
  "100130-4": "100130-4",

  /**
   * Schistosoma sp 8kD Ab [Presence] in Serum by Immunoblot
   */
  "100131-2": "100131-2",

  /**
   * Schistosoma sp 9kD Ab [Presence] in Serum by Immunoblot
   */
  "100132-0": "100132-0",

  /**
   * Schistosoma sp 10kD Ab [Presence] in Serum by Immunoblot
   */
  "100133-8": "100133-8",

  /**
   * Schistosoma sp 11kD Ab [Presence] in Serum by Immunoblot
   */
  "100134-6": "100134-6",

  /**
   * Schistosoma sp 12-13kD Ab [Presence] in Serum by Immunoblot
   */
  "100135-3": "100135-3",

  /**
   * Schistosoma sp 14-15kD Ab [Presence] in Serum by Immunoblot
   */
  "100136-1": "100136-1",

  /**
   * Schistosoma sp 15-16kD Ab [Presence] in Serum by Immunoblot
   */
  "100137-9": "100137-9",

  /**
   * Schistosoma sp 18-19kD Ab [Presence] in Serum by Immunoblot
   */
  "100138-7": "100138-7",

  /**
   * Schistosoma sp 22-24kD Ab [Presence] in Serum by Immunoblot
   */
  "100139-5": "100139-5",

  /**
   * R' wave amplitude in lead II
   */
  "10014-9": "10014-9",

  /**
   * Schistosoma sp 30-34kD Ab [Presence] in Serum by Immunoblot
   */
  "100140-3": "100140-3",

  /**
   * Schistosoma sp 65kD Ab [Presence] in Serum by Immunoblot
   */
  "100141-1": "100141-1",

  /**
   * Schistosoma sp 70kD Ab [Presence] in Serum by Immunoblot
   */
  "100142-9": "100142-9",

  /**
   * Schistosoma sp 80kD Ab [Presence] in Serum by Immunoblot
   */
  "100143-7": "100143-7",

  /**
   * Schistosoma sp 95kD Ab [Presence] in Serum by Immunoblot
   */
  "100144-5": "100144-5",

  /**
   * Schistosoma sp 110kD Ab [Presence] in Serum by Immunoblot
   */
  "100145-2": "100145-2",

  /**
   * Schistosoma sp 120kD Ab [Presence] in Serum by Immunoblot
   */
  "100146-0": "100146-0",

  /**
   * Toxoplasma gondii Ab bands panel - Serum by Immunoblot
   */
  "100147-8": "100147-8",

  /**
   * Schistosoma sp Ab bands panel - Serum by Immunoblot
   */
  "100148-6": "100148-6",

  /**
   * 6-oxo-piperidine-2-carboxylate and 6(R+S)-oxo-propylpiperidine-2-carboxylate panel - Urine and Serum or Plasma
   */
  "100149-4": "100149-4",

  /**
   * R' wave amplitude in lead III
   */
  "10015-6": "10015-6",

  /**
   * 6(R+S)-oxo-propylpiperidine-2-carboxylate [Moles/volume] in Plasma
   */
  "100150-2": "100150-2",

  /**
   * 6-oxo-piperidine-2-carboxylate [Moles/volume] in Plasma
   */
  "100151-0": "100151-0",

  /**
   * 6-oxo-piperidine-2-carboxylate/Creatinine [Molar ratio] in Urine
   */
  "100152-8": "100152-8",

  /**
   * 6(R+S)-oxo-propylpiperidine-2-carboxylate/Creatinine [Molar ratio] in Urine
   */
  "100153-6": "100153-6",

  /**
   * Specimen collection supervision level
   */
  "100154-4": "100154-4",

  /**
   * Left cornea Type of Analysis method by Specular microscopy
   */
  "100155-1": "100155-1",

  /**
   * SARS-CoV-2 (COVID-19) variant [Type] in Specimen by NAA with probe detection
   */
  "100156-9": "100156-9",

  /**
   * SARS-CoV-2 (COVID-19) lineage [Type] in Specimen by Sequencing
   */
  "100157-7": "100157-7",

  /**
   * Microalbumin [Mass/volume] in Urine collected for unspecified duration
   */
  "100158-5": "100158-5",

  /**
   * Knee Society Score pre-op panel [Knee Society Score]
   */
  "100159-3": "100159-3",

  /**
   * R' wave amplitude in lead V1
   */
  "10016-4": "10016-4",

  /**
   * Knee replacement
   */
  "100160-1": "100160-1",

  /**
   * Charnley Functional Classification
   */
  "100161-9": "100161-9",

  /**
   * Knee alignment W standing X-ray measured
   */
  "100162-7": "100162-7",

  /**
   * Knee medial AndOr lateral instability W full extension
   */
  "100163-5": "100163-5",

  /**
   * Knee AP instability W 90 degree flexion
   */
  "100164-3": "100164-3",

  /**
   * Knee range of motion
   */
  "100165-0": "100165-0",

  /**
   * Flexion contracture range of Knee
   */
  "100166-8": "100166-8",

  /**
   * Extensor lag range of Knee
   */
  "100167-6": "100167-6",

  /**
   * Knee pain severity with level walking
   */
  "100168-4": "100168-4",

  /**
   * Knee pain severity with stairs or inclines
   */
  "100169-2": "100169-2",

  /**
   * R' wave amplitude in lead V2
   */
  "10017-2": "10017-2",

  /**
   * Knee feels normal
   */
  "100170-0": "100170-0",

  /**
   * Satisfaction with level of knee pain while sitting
   */
  "100171-8": "100171-8",

  /**
   * Satisfaction with level of knee pain while lying in bed
   */
  "100172-6": "100172-6",

  /**
   * Satisfaction with knee function while getting out of bed
   */
  "100173-4": "100173-4",

  /**
   * Satisfaction with knee function while performing light household duties
   */
  "100174-2": "100174-2",

  /**
   * Satisfaction with knee function while performing recreational activities
   */
  "100175-9": "100175-9",

  /**
   * Expect surgery to relieve pain
   */
  "100176-7": "100176-7",

  /**
   * Expect surgery will improve ability to perform activities of daily living
   */
  "100177-5": "100177-5",

  /**
   * Expect surgery will improve ability to perform leisure, recreational, or sports activities
   */
  "100178-3": "100178-3",

  /**
   * Walk without assistive mobility devices
   */
  "100179-1": "100179-1",

  /**
   * R' wave amplitude in lead V3
   */
  "10018-0": "10018-0",

  /**
   * Assistive mobility devices used
   */
  "100180-9": "100180-9",

  /**
   * Assistive mobility devices used due to health condition
   */
  "100181-7": "100181-7",

  /**
   * Duration of standing before sitting due to knee discomfort
   */
  "100182-5": "100182-5",

  /**
   * Duration of walking before stopping due to knee discomfort
   */
  "100183-3": "100183-3",

  /**
   * How bothersome is knee when walking on an uneven surface
   */
  "100184-1": "100184-1",

  /**
   * How bothersome is knee when turning or pivoting leg
   */
  "100185-8": "100185-8",

  /**
   * How bothersome is knee when climbing up or down a flight of stairs
   */
  "100186-6": "100186-6",

  /**
   * How bothersome is knee when getting up from a low seat without armrests
   */
  "100187-4": "100187-4",

  /**
   * How bothersome is knee when getting into or out of a car
   */
  "100188-2": "100188-2",

  /**
   * How bothersome is knee when moving laterally
   */
  "100189-0": "100189-0",

  /**
   * R' wave amplitude in lead V4
   */
  "10019-8": "10019-8",

  /**
   * How bothersome is knee when climbing a ladder or step stool
   */
  "100190-8": "100190-8",

  /**
   * How bothersome is knee when carrying a bag for one block
   */
  "100191-6": "100191-6",

  /**
   * How bothersome is knee when squatting
   */
  "100192-4": "100192-4",

  /**
   * How bothersome is knee when kneeling
   */
  "100193-2": "100193-2",

  /**
   * How bothersome is knee when running
   */
  "100194-0": "100194-0",

  /**
   * Pain severity--during activity
   */
  "100195-7": "100195-7",

  /**
   * Pre-op total score [Knee Society Score]
   */
  "100196-5": "100196-5",

  /**
   * Exercise activity and pain severity panel
   */
  "100197-3": "100197-3",

  /**
   * Pre-op objective knee indicators score [Knee Society Score]
   */
  "100198-1": "100198-1",

  /**
   * Pre-op symptoms score [Knee Society Score]
   */
  "100199-9": "100199-9",

  /**
   * DBG Ab [Presence] in Serum or Plasma
   */
  "1002-5": "1002-5",

  /**
   * R' wave amplitude in lead V5
   */
  "10020-6": "10020-6",

  /**
   * Pre-op patient expectations score [Knee Society Score]
   */
  "100200-5": "100200-5",

  /**
   * Pre-op functional activities score [Knee Society Score]
   */
  "100201-3": "100201-3",

  /**
   * Pre-op discretionary knee activities score [Knee Society Score]
   */
  "100202-1": "100202-1",

  /**
   * Knee Society Score post-op panel [Knee Society Score]
   */
  "100203-9": "100203-9",

  /**
   * Accuracy of pre-surgery expectations of pain relief
   */
  "100204-7": "100204-7",

  /**
   * Accuracy of pre-surgery expectations to perform activities of daily living
   */
  "100205-4": "100205-4",

  /**
   * Accuracy of pre-surgery expectations to perform leisure, recreational, or sports activities
   */
  "100206-2": "100206-2",

  /**
   * Post-op total score [Knee Society Score]
   */
  "100207-0": "100207-0",

  /**
   * Post-op objective knee indicators score [Knee Society Score]
   */
  "100208-8": "100208-8",

  /**
   * Post-op symptoms score [Knee Society Score]
   */
  "100209-6": "100209-6",

  /**
   * R' wave amplitude in lead V6
   */
  "10021-4": "10021-4",

  /**
   * Post-op patient expectations score [Knee Society Score]
   */
  "100210-4": "100210-4",

  /**
   * Post-op functional activities score [Knee Society Score]
   */
  "100211-2": "100211-2",

  /**
   * Post-op discretionary knee activities score [Knee Society Score]
   */
  "100212-0": "100212-0",

  /**
   * Prostate cancer multigene analysis in Blood or Tissue by Molecular genetics method
   */
  "100213-8": "100213-8",

  /**
   * Dental model prior authorization Document
   */
  "100214-6": "100214-6",

  /**
   * Episode of care medical records Document Transplant surgery
   */
  "100215-3": "100215-3",

  /**
   * Surgical synoptic report
   */
  "100216-1": "100216-1",

  /**
   * Surgical oncology synoptic report
   */
  "100217-9": "100217-9",

  /**
   * Surgical oncology of colon synoptic report
   */
  "100218-7": "100218-7",

  /**
   * Surgical oncology of melanoma synoptic report
   */
  "100219-5": "100219-5",

  /**
   * R' wave duration in lead AVF
   */
  "10022-2": "10022-2",

  /**
   * Surgical oncology of breast synoptic report
   */
  "100220-3": "100220-3",

  /**
   * Surgical oncology of thyroid synoptic report
   */
  "100221-1": "100221-1",

  /**
   * Surgical oncology of pancreas synoptic report
   */
  "100222-9": "100222-9",

  /**
   * Physical findings of Retina Narrative
   */
  "100223-7": "100223-7",

  /**
   * Cardiac left ventricular segmental wall motion by echo panel
   */
  "100224-5": "100224-5",

  /**
   * Bone density quantitative ultrasound study
   */
  "100225-2": "100225-2",

  /**
   * Small bowel capsule endoscopy study Document
   */
  "100226-0": "100226-0",

  /**
   * Colon capsule endoscopy study Document
   */
  "100227-8": "100227-8",

  /**
   * Upper gastrointestinal capsule endoscopy study Document
   */
  "100228-6": "100228-6",

  /**
   * Endoscopic ultrasound study Document
   */
  "100229-4": "100229-4",

  /**
   * R' wave duration in lead AVL
   */
  "10023-0": "10023-0",

  /**
   * Routine prenatal assessment panel
   */
  "100230-2": "100230-2",

  /**
   * Endobronchial ultrasound study
   */
  "100231-0": "100231-0",

  /**
   * Impacts of Events Scale-Revised panel
   */
  "100232-8": "100232-8",

  /**
   * Reminders brought back feelings about adverse event
   */
  "100233-6": "100233-6",

  /**
   * Trouble staying asleep
   */
  "100234-4": "100234-4",

  /**
   * Other things triggered persistent thoughts about adverse event
   */
  "100235-1": "100235-1",

  /**
   * Felt irritable AndOr angry
   */
  "100236-9": "100236-9",

  /**
   * Avoided getting upset when unintentionally thought about adverse event
   */
  "100237-7": "100237-7",

  /**
   * Thought about adverse event unintentionally
   */
  "100238-5": "100238-5",

  /**
   * Felt as if adverse event did not happen
   */
  "100239-3": "100239-3",

  /**
   * R' wave duration in lead AVR
   */
  "10024-8": "10024-8",

  /**
   * Avoided reminders of adverse event
   */
  "100240-1": "100240-1",

  /**
   * Experienced mental images of adverse event
   */
  "100241-9": "100241-9",

  /**
   * Easily startled
   */
  "100242-7": "100242-7",

  /**
   * Tried to not think of adverse event
   */
  "100243-5": "100243-5",

  /**
   * Aware of feelings about adverse event, but did not address them
   */
  "100244-3": "100244-3",

  /**
   * Feelings about adverse event were numb
   */
  "100245-0": "100245-0",

  /**
   * Acted or felt the same as during adverse event
   */
  "100246-8": "100246-8",

  /**
   * Trouble falling asleep
   */
  "100247-6": "100247-6",

  /**
   * Waves of strong feelings about adverse event
   */
  "100248-4": "100248-4",

  /**
   * Tried to remove adverse event from memory
   */
  "100249-2": "100249-2",

  /**
   * R' wave duration in lead I
   */
  "10025-5": "10025-5",

  /**
   * Trouble concentrating
   */
  "100250-0": "100250-0",

  /**
   * Reminders of adverse event caused physical reactions
   */
  "100251-8": "100251-8",

  /**
   * Had dreams about adverse event
   */
  "100252-6": "100252-6",

  /**
   * Felt watchful and on-guard
   */
  "100253-4": "100253-4",

  /**
   * Tried not to talk about adverse event
   */
  "100254-2": "100254-2",

  /**
   * Total score [Impact of Event Scale-Revised]
   */
  "100255-9": "100255-9",

  /**
   * Fallen in last 6 months
   */
  "100256-7": "100256-7",

  /**
   * Feel unsteady when standing or walking
   */
  "100257-5": "100257-5",

  /**
   * History of fall related injury
   */
  "100258-3": "100258-3",

  /**
   * Aware of tactile sensations
   */
  "100259-1": "100259-1",

  /**
   * R' wave duration in lead II
   */
  "10026-3": "10026-3",

  /**
   * Easy to describe thoughts AndOr feelings
   */
  "100260-9": "100260-9",

  /**
   * Critical of own thoughts AndOr feelings
   */
  "100261-7": "100261-7",

  /**
   * Able to notice distressing thoughts AndOr feelings without having to react
   */
  "100262-5": "100262-5",

  /**
   * Easily distracted
   */
  "100263-3": "100263-3",

  /**
   * Able to notice thoughts AndOr feelings without being overwhelmed
   */
  "100264-1": "100264-1",

  /**
   * Aware of dietary intake impact on self
   */
  "100265-8": "100265-8",

  /**
   * Difficult to describe thoughts AndOr feelings
   */
  "100266-6": "100266-6",

  /**
   * Aware of auditory stimuli
   */
  "100267-4": "100267-4",

  /**
   * Able to avoid immediate reaction in difficult situations
   */
  "100268-2": "100268-2",

  /**
   * Do things without paying attention
   */
  "100269-0": "100269-0",

  /**
   * R' wave duration in lead III
   */
  "10027-1": "10027-1",

  /**
   * Recover quickly from distressing thoughts AndOr images
   */
  "100270-8": "100270-8",

  /**
   * Aware of olfactory stimuli
   */
  "100271-6": "100271-6",

  /**
   * Aware of visual stimuli
   */
  "100272-4": "100272-4",

  /**
   * Aware of emotions affect on thoughts AndOr behavior
   */
  "100273-2": "100273-2",

  /**
   * Observing score [FFMQ]
   */
  "100274-0": "100274-0",

  /**
   * Describing score [FFMQ]
   */
  "100275-7": "100275-7",

  /**
   * Acting with awareness score [FFMQ]
   */
  "100276-5": "100276-5",

  /**
   * Nonjudging score [FFMQ]
   */
  "100277-3": "100277-3",

  /**
   * Nonreactivity score [FFMQ]
   */
  "100278-1": "100278-1",

  /**
   * Total score [FFMQ]
   */
  "100279-9": "100279-9",

  /**
   * R' wave duration in lead V1
   */
  "10028-9": "10028-9",

  /**
   * Five Facet Mindfulness Questionnaire panel [FFMQ]
   */
  "100280-7": "100280-7",

  /**
   * D Ab [Units/volume] in Serum or Plasma
   */
  "100281-5": "100281-5",

  /**
   * Vaccine exemption certificate
   */
  "100282-3": "100282-3",

  /**
   * Harris Hip Score panel [Harris Hip Score]
   */
  "100283-1": "100283-1",

  /**
   * Walking - functional ability
   */
  "100284-9": "100284-9",

  /**
   * Comfortable seated position
   */
  "100285-6": "100285-6",

  /**
   * Able to board public transportation
   */
  "100286-4": "100286-4",

  /**
   * Put on shoes and socks
   */
  "100287-2": "100287-2",

  /**
   * Absence of deformity score [Harris Hip Score]
   */
  "100288-0": "100288-0",

  /**
   * Absence of hip deformity measurements
   */
  "100289-8": "100289-8",

  /**
   * R' wave duration in lead V2
   */
  "10029-7": "10029-7",

  /**
   * Range of motion score [Harris Hip Score]
   */
  "100290-6": "100290-6",

  /**
   * Total score [Harris Hip Score]
   */
  "100291-4": "100291-4",

  /**
   * Pre-op patient satisfaction score [Knee Society Score]
   */
  "100292-2": "100292-2",

  /**
   * Hip Flexion range of motion
   */
  "100293-0": "100293-0",

  /**
   * Hip Abduction range of motion
   */
  "100294-8": "100294-8",

  /**
   * Hip Adduction range of motion
   */
  "100295-5": "100295-5",

  /**
   * Hip External rotation range of motion
   */
  "100296-3": "100296-3",

  /**
   * Hip Internal rotation range of motion
   */
  "100297-1": "100297-1",

  /**
   * Repetition count
   */
  "100298-9": "100298-9",

  /**
   * Post-op patient satisfaction score [Knee Society Score]
   */
  "100299-7": "100299-7",

  /**
   * Indirect antiglobulin test.complement specific reagent [Presence] in Serum or Plasma
   */
  "1003-3": "1003-3",

  /**
   * R' wave duration in lead V3
   */
  "10030-5": "10030-5",

  /**
   * End time Unspecified body region
   */
  "100300-3": "100300-3",

  /**
   * Start time Unspecified body region
   */
  "100301-1": "100301-1",

  /**
   * Time period start and end panel Unspecified body region
   */
  "100302-9": "100302-9",

  /**
   * Condition certainty of presence
   */
  "100303-7": "100303-7",

  /**
   * Flights climbed [#] Reporting Period
   */
  "100304-5": "100304-5",

  /**
   * IDH1 gene exon 4 targeted mutation analysis [Presence] in Blood or Marrow by Molecular genetics method
   */
  "100305-2": "100305-2",

  /**
   * IDH2 gene exon 4 targeted mutation analysis [Presence] in Blood or Marrow by Molecular genetics method
   */
  "100306-0": "100306-0",

  /**
   * Behavioral screening elder mistreatment
   */
  "100307-8": "100307-8",

  /**
   * Need help getting to essential places
   */
  "100308-6": "100308-6",

  /**
   * Activity support person
   */
  "100309-4": "100309-4",

  /**
   * R' wave duration in lead V4
   */
  "10031-3": "10031-3",

  /**
   * Reliability of support person
   */
  "100310-2": "100310-2",

  /**
   * Need help to make sure there is enough food, medicines or any other things needed in house
   */
  "100311-0": "100311-0",

  /**
   * Person or persons that makes sure there is enough food, medicines or any other things needed in house
   */
  "100312-8": "100312-8",

  /**
   * Need help with household things such as cook meals, help feed, or provide correct medicines each day
   */
  "100313-6": "100313-6",

  /**
   * Need help with house cleaning or yard work
   */
  "100314-4": "100314-4",

  /**
   * Need help getting out of bed, showered, or dressed
   */
  "100315-1": "100315-1",

  /**
   * Need help to make sure bills get paid
   */
  "100316-9": "100316-9",

  /**
   * Relationship of usual support person for daily activities
   */
  "100317-7": "100317-7",

  /**
   * Have help with finances AndOr financial decisions
   */
  "100318-5": "100318-5",

  /**
   * Relationship of financial support person
   */
  "100319-3": "100319-3",

  /**
   * R' wave duration in lead V5
   */
  "10032-1": "10032-1",

  /**
   * Financial support person usually asks for permission before making decisions
   */
  "100320-1": "100320-1",

  /**
   * Financial support person usually makes good decisions about finances
   */
  "100321-9": "100321-9",

  /**
   * Have access to paperwork for financial decisions made
   */
  "100322-7": "100322-7",

  /**
   * Financial support person forged signature
   */
  "100323-5": "100323-5",

  /**
   * Coercion of financial support person for signing a document in order to get money or possessions
   */
  "100324-3": "100324-3",

  /**
   * Experienced theft by support person
   */
  "100325-0": "100325-0",

  /**
   * Money spent or property sold without permission
   */
  "100326-8": "100326-8",

  /**
   * Stranger forged signature for financial gain
   */
  "100327-6": "100327-6",

  /**
   * Stranger forced document signature for financial gain
   */
  "100328-4": "100328-4",

  /**
   * Feared for safety due to verbal attack
   */
  "100329-2": "100329-2",

  /**
   * R' wave duration in lead V6
   */
  "10033-9": "10033-9",

  /**
   * Felt humiliated due to ridicule
   */
  "100330-0": "100330-0",

  /**
   * Coerced to do something
   */
  "100331-8": "100331-8",

  /**
   * Ignored by close friend or relative for extended period
   */
  "100332-6": "100332-6",

  /**
   * Physically hit or threatened
   */
  "100333-4": "100333-4",

  /**
   * Been physically hurt with some degree of injury
   */
  "100334-2": "100334-2",

  /**
   * Coerced sexual activity
   */
  "100335-9": "100335-9",

  /**
   * Coerced touching of private body parts of self or others
   */
  "100336-7": "100336-7",

  /**
   * Coerced to undress or expose private body area
   */
  "100337-5": "100337-5",

  /**
   * Photographed in any degree of nudity without consent
   */
  "100338-3": "100338-3",

  /**
   * Experienced attempted physical restraint
   */
  "100339-1": "100339-1",

  /**
   * S wave amplitude in lead AVF
   */
  "10034-7": "10034-7",

  /**
   * Range of motion panel Hip
   */
  "100340-9": "100340-9",

  /**
   * Rubella virus IgG Ab index [Units/volume] in Serum and CSF
   */
  "100341-7": "100341-7",

  /**
   * Volatile Organic Compounds associated with SARS-CoV-2 infection [Presence] in Exhaled gas by Gas chromatography-mass spectrometry
   */
  "100342-5": "100342-5",

  /**
   * Influenza virus B RNA [Presence] in Saliva (oral fluid) by NAA with probe detection
   */
  "100343-3": "100343-3",

  /**
   * Influenza virus A RNA [Presence] in Saliva (oral fluid) by NAA with probe detection
   */
  "100344-1": "100344-1",

  /**
   * Influenza virus A and B and SARS-CoV-2 (COVID-19) RNA panel - Specimen by NAA with probe detection
   */
  "100345-8": "100345-8",

  /**
   * Clotting time.extrinsic coagulation system activated.platelets inhibited of Blood by Rotational TEG
   */
  "100346-6": "100346-6",

  /**
   * Clot formation.extrinsic coagulation system activated.platelets inhibited [Time] in Blood by Rotational TEG
   */
  "100347-4": "100347-4",

  /**
   * Model for end-stage liver disease sodium score
   */
  "100348-2": "100348-2",

  /**
   * US.doppler Penis vessels W vasodilator IV
   */
  "100349-0": "100349-0",

  /**
   * S wave amplitude in lead AVL
   */
  "10035-4": "10035-4",

  /**
   * Sesamum indicum 1 IgE Ab [Units/volume] in Serum
   */
  "100350-8": "100350-8",

  /**
   * Pioglitazone [Presence] in Serum or Plasma
   */
  "100351-6": "100351-6",

  /**
   * Rosiglitazone [Presence] in Serum or Plasma
   */
  "100352-4": "100352-4",

  /**
   * Norwalk Community Health Center Screening Tool [NCHC]
   */
  "100353-2": "100353-2",

  /**
   * Frequency of participating in multi-modal communication without assistance
   */
  "100354-0": "100354-0",

  /**
   * Frequency of participating in spoken language expression communication without assistance
   */
  "100355-7": "100355-7",

  /**
   * Chlamydia trachomatis and Neisseria gonorrhoeae and Trichomonas vaginalis DNA [Identifier] in Specimen by NAA with probe detection
   */
  "100356-5": "100356-5",

  /**
   * Naloxone [Presence] in Cord tissue by Screen method
   */
  "100357-3": "100357-3",

  /**
   * Phentermine [Presence] in Cord tissue by Screen method
   */
  "100358-1": "100358-1",

  /**
   * Gliadin 33 mer peptide [Mass/volume] in Stool by Immunoassay
   */
  "100359-9": "100359-9",

  /**
   * S wave amplitude in lead AVR
   */
  "10036-2": "10036-2",

  /**
   * Brief Resilience Scale panel [BRS]
   */
  "100360-7": "100360-7",

  /**
   * Quickly recover from bad events
   */
  "100361-5": "100361-5",

  /**
   * Difficulty making it through stressful events
   */
  "100362-3": "100362-3",

  /**
   * Easily recover from a stressful event
   */
  "100363-1": "100363-1",

  /**
   * Difficulty recovering from bad events
   */
  "100364-9": "100364-9",

  /**
   * Easily recover from difficulties
   */
  "100365-6": "100365-6",

  /**
   * Lengthy recovery from setbacks
   */
  "100366-4": "100366-4",

  /**
   * Total Score BRS
   */
  "100367-2": "100367-2",

  /**
   * Amino Acids Urea Cycle Panel - Serum or Plasma by LC/MS/MS
   */
  "100368-0": "100368-0",

  /**
   * NM Thyroid gland Views W Tl-201 IV
   */
  "100369-8": "100369-8",

  /**
   * S wave amplitude in lead I
   */
  "10037-0": "10037-0",

  /**
   * Orthopoxvirus DNA [Identifier] in Specimen by NAA with probe detection
   */
  "100370-6": "100370-6",

  /**
   * Titin Ab [Units/volume] in Serum by Immunoassay
   */
  "100371-4": "100371-4",

  /**
   * Abiraterone [Mass/volume] in Serum or Plasma
   */
  "100372-2": "100372-2",

  /**
   * Eucheuma IgG Ab [Units/volume] in Serum
   */
  "100373-0": "100373-0",

  /**
   * Aloe vera IgG Ab [Units/volume] in Serum
   */
  "100374-8": "100374-8",

  /**
   * Anise IgG Ab [Units/volume] in Serum
   */
  "100375-5": "100375-5",

  /**
   * Bambusa vulgaris IgG Ab [Units/volume] in Serum
   */
  "100376-3": "100376-3",

  /**
   * Goat cheese IgG Ab [Units/volume] in Serum
   */
  "100377-1": "100377-1",

  /**
   * Sheep cheese IgG Ab [Units/volume] in Serum
   */
  "100378-9": "100378-9",

  /**
   * Leeks IgG Ab [Units/volume] in Serum
   */
  "100379-7": "100379-7",

  /**
   * S wave amplitude in lead II
   */
  "10038-8": "10038-8",

  /**
   * Red cabbage IgG Ab [Units/volume] in Serum
   */
  "100380-5": "100380-5",

  /**
   * Mentha balsamea Wild IgG Ab [Units/volume] in Serum
   */
  "100381-3": "100381-3",

  /**
   * FDA package insert REMS addressed risk
   */
  "100382-1": "100382-1",

  /**
   * Monkeypox virus DNA [Presence] in Specimen by NAA with probe detection
   */
  "100383-9": "100383-9",

  /**
   * Rapeseed IgG Ab [Units/volume] in Serum
   */
  "100384-7": "100384-7",

  /**
   * Corn salad IgG Ab [Units/volume] in Serum
   */
  "100385-4": "100385-4",

  /**
   * Rosemary IgG Ab [Units/volume] in Serum
   */
  "100386-2": "100386-2",

  /**
   * Poppy Seed IgG Ab [Units/volume] in Serum
   */
  "100387-0": "100387-0",

  /**
   * Cocoa IgG Ab [Units/volume] in Serum
   */
  "100388-8": "100388-8",

  /**
   * Pistachio IgG Ab [Units/volume] in Serum
   */
  "100389-6": "100389-6",

  /**
   * S wave amplitude in lead III
   */
  "10039-6": "10039-6",

  /**
   * Sunflower Seed IgG Ab [Units/volume] in Serum
   */
  "100390-4": "100390-4",

  /**
   * Dates IgG Ab [Units/volume] in Serum
   */
  "100391-2": "100391-2",

  /**
   * Duck meat IgG Ab [Units/volume] in Serum
   */
  "100392-0": "100392-0",

  /**
   * Allergen Mushroom mix 2 (Xerocomus, Boletus) IgG Ab [Units/volume] in Serum
   */
  "100393-8": "100393-8",

  /**
   * Astacoidea IgG Ab [Units/volume] in Serum
   */
  "100394-6": "100394-6",

  /**
   * Carob IgG Ab [Units/volume] in Serum
   */
  "100395-3": "100395-3",

  /**
   * Brassica napus IgG Ab [Units/volume] in Serum
   */
  "100396-1": "100396-1",

  /**
   * Goat Meat IgG Ab [Units/volume] in Serum
   */
  "100397-9": "100397-9",

  /**
   * Goose meat IgG Ab [Units/volume] in Serum
   */
  "100398-7": "100398-7",

  /**
   * Ostrich meat IgG Ab [Units/volume] in Serum
   */
  "100399-5": "100399-5",

  /**
   * Direct antiglobulin test.complement specific reagent [Presence] on Red Blood Cells
   */
  "1004-1": "1004-1",

  /**
   * S wave amplitude in lead V1
   */
  "10040-4": "10040-4",

  /**
   * Quail meat IgG Ab [Units/volume] in Serum
   */
  "100400-1": "100400-1",

  /**
   * Rabbit meat IgG Ab [Units/volume] in Serum
   */
  "100401-9": "100401-9",

  /**
   * Venison meat IgG Ab [Units/volume] in Serum
   */
  "100402-7": "100402-7",

  /**
   * Guineafowl IgG Ab [Units/volume] in Serum
   */
  "100403-5": "100403-5",

  /**
   * Horse meat IgG Ab [Units/volume] in Serum
   */
  "100404-3": "100404-3",

  /**
   * Kefir IgG Ab [Units/volume] in Serum
   */
  "100405-0": "100405-0",

  /**
   * Butter IgG Ab [Units/volume] in Serum
   */
  "100406-8": "100406-8",

  /**
   * Camembert cheese IgG Ab [Units/volume] in Serum
   */
  "100407-6": "100407-6",

  /**
   * Emmental cheese IgG Ab [Units/volume] in Serum
   */
  "100408-4": "100408-4",

  /**
   * Processed cheese IgG Ab [Units/volume] in Serum
   */
  "100409-2": "100409-2",

  /**
   * S wave amplitude in lead V2
   */
  "10041-2": "10041-2",

  /**
   * Curd cheese IgG Ab [Units/volume] in Serum
   */
  "100410-0": "100410-0",

  /**
   * Sugar Beet IgG Ab [Units/volume] in Serum
   */
  "100411-8": "100411-8",

  /**
   * Chinese cabbage IgG Ab [Units/volume] in Serum
   */
  "100412-6": "100412-6",

  /**
   * Fennel Fresh IgG Ab [Units/volume] in Serum
   */
  "100413-4": "100413-4",

  /**
   * Gourd IgG Ab [Units/volume] in Serum
   */
  "100414-2": "100414-2",

  /**
   * Kale IgG Ab [Units/volume] in Serum
   */
  "100415-9": "100415-9",

  /**
   * Savoy cabbage IgG Ab [Units/volume] in Serum
   */
  "100416-7": "100416-7",

  /**
   * Vitis sp leaf IgG Ab [Units/volume] in Serum
   */
  "100417-5": "100417-5",

  /**
   * Liquorice IgG Ab [Units/volume] in Serum
   */
  "100418-3": "100418-3",

  /**
   * Snow pea IgG Ab [Units/volume] in Serum
   */
  "100419-1": "100419-1",

  /**
   * S wave amplitude in lead V3
   */
  "10042-0": "10042-0",

  /**
   * Fava bean IgG Ab [Units/volume] in Serum
   */
  "100420-9": "100420-9",

  /**
   * Chick Pea IgG Ab [Units/volume] in Serum
   */
  "100421-7": "100421-7",

  /**
   * Chicory IgG Ab [Units/volume] in Serum
   */
  "100422-5": "100422-5",

  /**
   * Allergy Mushroom Mix 1 (Button + oyster + Shiitaki + chanterelle mushroom) IgG Ab [Units/volume] in Serum
   */
  "100423-3": "100423-3",

  /**
   * 8(9)-Cholestenol [Mass/volume] in Serum or Plasma
   */
  "100424-1": "100424-1",

  /**
   * DiHydro T-Mas [Mass/volume] in Serum or Plasma
   */
  "100425-8": "100425-8",

  /**
   * Squalene [Mass/volume] in Serum or Plasma
   */
  "100426-6": "100426-6",

  /**
   * Stigmasterol [Mass/volume] in Serum or Plasma
   */
  "100427-4": "100427-4",

  /**
   * Carnitine free and total and acylcarnitine panel - Urine
   */
  "100428-2": "100428-2",

  /**
   * LRBA deficiency panel - Blood
   */
  "100429-0": "100429-0",

  /**
   * S wave amplitude in lead V4
   */
  "10043-8": "10043-8",

  /**
   * Cells.LRBA+/100 Cells.CD3+CD14-CD45+ in Blood by Flow cytometry (FC)
   */
  "100430-8": "100430-8",

  /**
   * Cells.CD3+CD14-CD45+.LRBA mean fluorescence intensity in Blood by Flow cytometry (FC)
   */
  "100431-6": "100431-6",

  /**
   * Cells.LRBA+/100 Cells.CD3-CD14-CD19+CD45+ in Blood by Flow cytometry (FC)
   */
  "100432-4": "100432-4",

  /**
   * Cells.CD3-CD14-CD19+CD45+.LRBA mean fluorescence intensity in Blood by Flow cytometry (FC)
   */
  "100433-2": "100433-2",

  /**
   * Orthopoxvirus.non-variola DNA [Presence] in Specimen by NAA with probe detection
   */
  "100434-0": "100434-0",

  /**
   * Glial fibrillary acidic protein [Mass/volume] in Serum by Immunoassay
   */
  "100435-7": "100435-7",

  /**
   * Ubiquitin carboxyl-terminal hydrolase-L1 [Mass/volume] in Serum by Immunoassay
   */
  "100436-5": "100436-5",

  /**
   * Norsufentanil [Mass/volume] in Urine by Confirmatory method
   */
  "100437-3": "100437-3",

  /**
   * Adolescent medicine Outpatient Progress note
   */
  "100438-1": "100438-1",

  /**
   * Allergy and Immunology Outpatient Progress note
   */
  "100439-9": "100439-9",

  /**
   * S wave amplitude in lead V5
   */
  "10044-6": "10044-6",

  /**
   * Allergy Outpatient Progress note
   */
  "100440-7": "100440-7",

  /**
   * Attending Outpatient Progress note
   */
  "100441-5": "100441-5",

  /**
   * Audiology Outpatient Progress note
   */
  "100442-3": "100442-3",

  /**
   * Bariatric surgery Outpatient Progress note
   */
  "100443-1": "100443-1",

  /**
   * Blood banking and transfusion medicine Outpatient Progress note
   */
  "100444-9": "100444-9",

  /**
   * Bone Marrow Transplant Outpatient Progress note
   */
  "100445-6": "100445-6",

  /**
   * Breastfeeding Outpatient Progress note
   */
  "100446-4": "100446-4",

  /**
   * Burn management Outpatient Progress note
   */
  "100447-2": "100447-2",

  /**
   * Cardiac surgery Outpatient Progress note
   */
  "100448-0": "100448-0",

  /**
   * Cardiopulmonary Outpatient Progress note
   */
  "100449-8": "100449-8",

  /**
   * S wave amplitude in lead V6
   */
  "10045-3": "10045-3",

  /**
   * Child and adolescent psychiatry Outpatient Progress note
   */
  "100450-6": "100450-6",

  /**
   * Chiropractic medicine Outpatient Progress note
   */
  "100451-4": "100451-4",

  /**
   * Clinical cardiac electrophysiology Outpatient Progress note
   */
  "100452-2": "100452-2",

  /**
   * Clinical genetics Outpatient Progress note
   */
  "100453-0": "100453-0",

  /**
   * Clinical neurophysiology Outpatient Progress note
   */
  "100454-8": "100454-8",

  /**
   * Clinical pathology Outpatient Progress note
   */
  "100455-5": "100455-5",

  /**
   * Colon and rectal surgery Outpatient Progress note
   */
  "100456-3": "100456-3",

  /**
   * Consultant Outpatient Progress note
   */
  "100457-1": "100457-1",

  /**
   * Outpatient COVID-19 Intubation Progress note
   */
  "100458-9": "100458-9",

  /**
   * Outpatient COVID-19 Progress note
   */
  "100459-7": "100459-7",

  /**
   * S wave duration in lead AVF
   */
  "10046-1": "10046-1",

  /**
   * Dermatology Outpatient Progress note
   */
  "100460-5": "100460-5",

  /**
   * Developmental-behavioral pediatrics Outpatient Progress note
   */
  "100461-3": "100461-3",

  /**
   * Dialysis and Therapeutic apheresis Outpatient Progress note
   */
  "100462-1": "100462-1",

  /**
   * Eating disorders Outpatient Progress note
   */
  "100463-9": "100463-9",

  /**
   * Endocrinology Outpatient Progress note
   */
  "100464-7": "100464-7",

  /**
   * Family medicine Outpatient Progress note
   */
  "100465-4": "100465-4",

  /**
   * Gastroenterology Outpatient Progress note
   */
  "100466-2": "100466-2",

  /**
   * Geriatric medicine Outpatient Progress note
   */
  "100467-0": "100467-0",

  /**
   * Gynecologic oncology Outpatient Progress note
   */
  "100468-8": "100468-8",

  /**
   * Gynecology Outpatient Progress note
   */
  "100469-6": "100469-6",

  /**
   * S wave duration in lead AVL
   */
  "10047-9": "10047-9",

  /**
   * Healthcare navigator Outpatient Progress note
   */
  "100470-4": "100470-4",

  /**
   * Heart failure Outpatient Progress note
   */
  "100471-2": "100471-2",

  /**
   * Heart failure+Transplant cardiology Outpatient Progress note
   */
  "100472-0": "100472-0",

  /**
   * Hematology Outpatient Progress note
   */
  "100473-8": "100473-8",

  /**
   * Hematology+Medical oncology Outpatient Progress note
   */
  "100474-6": "100474-6",

  /**
   * Hepatology Outpatient Progress note
   */
  "100475-3": "100475-3",

  /**
   * Immunology Outpatient Progress note
   */
  "100476-1": "100476-1",

  /**
   * Infectious disease Outpatient Progress note
   */
  "100477-9": "100477-9",

  /**
   * Internal medicine Outpatient Progress note
   */
  "100478-7": "100478-7",

  /**
   * Interventional cardiology Outpatient Progress note
   */
  "100479-5": "100479-5",

  /**
   * S wave duration in lead AVR
   */
  "10048-7": "10048-7",

  /**
   * Interventional radiology Outpatient Progress note
   */
  "100480-3": "100480-3",

  /**
   * Outpatient Mechanical circulatory support Progress note
   */
  "100481-1": "100481-1",

  /**
   * Medical Aid in Dying Outpatient Progress note
   */
  "100482-9": "100482-9",

  /**
   * Mental health Outpatient Progress note
   */
  "100483-7": "100483-7",

  /**
   * Multi-specialty program Outpatient Progress note
   */
  "100484-5": "100484-5",

  /**
   * Neonatal perinatal medicine Outpatient Progress note
   */
  "100485-2": "100485-2",

  /**
   * Nephrology Outpatient Progress note
   */
  "100486-0": "100486-0",

  /**
   * Neurological surgery Outpatient Progress note
   */
  "100487-8": "100487-8",

  /**
   * Neurology Outpatient Progress note
   */
  "100488-6": "100488-6",

  /**
   * Neurology with special qualifications in child neurology Outpatient Progress note
   */
  "100489-4": "100489-4",

  /**
   * S wave duration in lead I
   */
  "10049-5": "10049-5",

  /**
   * Nurse practitioner Outpatient Progress note
   */
  "100490-2": "100490-2",

  /**
   * Nurse Outpatient Progress note
   */
  "100491-0": "100491-0",

  /**
   * Nutrition and dietetics Outpatient Progress note
   */
  "100492-8": "100492-8",

  /**
   * Obstetrics and Gynecology Outpatient Progress note
   */
  "100493-6": "100493-6",

  /**
   * Obstetrics Outpatient Progress note
   */
  "100494-4": "100494-4",

  /**
   * Occupational therapy Outpatient Progress note
   */
  "100495-1": "100495-1",

  /**
   * Oncology Outpatient Progress note
   */
  "100496-9": "100496-9",

  /**
   * Ophthalmology Outpatient Progress note
   */
  "100497-7": "100497-7",

  /**
   * Optometry Outpatient Progress note
   */
  "100498-5": "100498-5",

  /**
   * Oral and Maxillofacial Surgery Outpatient Progress note
   */
  "100499-3": "100499-3",

  /**
   * Indirect antiglobulin test.IgG specific reagent [Presence] in Serum or Plasma
   */
  "1005-8": "1005-8",

  /**
   * S wave duration in lead II
   */
  "10050-3": "10050-3",

  /**
   * Orthopaedic surgery Outpatient Progress note
   */
  "100500-8": "100500-8",

  /**
   * Orthotics prosthetics Outpatient Progress note
   */
  "100501-6": "100501-6",

  /**
   * Otolaryngology Outpatient Progress note
   */
  "100502-4": "100502-4",

  /**
   * Pain medicine Outpatient Progress note
   */
  "100503-2": "100503-2",

  /**
   * Palliative care Outpatient Progress note
   */
  "100504-0": "100504-0",

  /**
   * Pediatric cardiology Outpatient Progress note
   */
  "100505-7": "100505-7",

  /**
   * Pediatric dermatology Outpatient Progress note
   */
  "100506-5": "100506-5",

  /**
   * Pediatric endocrinology Outpatient Progress note
   */
  "100507-3": "100507-3",

  /**
   * Pediatric gastroenterology Outpatient Progress note
   */
  "100508-1": "100508-1",

  /**
   * Pediatric hematology-oncology Outpatient Progress note
   */
  "100509-9": "100509-9",

  /**
   * S wave duration in lead III
   */
  "10051-1": "10051-1",

  /**
   * Pediatric infectious diseases Outpatient Progress note
   */
  "100510-7": "100510-7",

  /**
   * Pediatric otolaryngology Outpatient Progress note
   */
  "100511-5": "100511-5",

  /**
   * Pediatric pulmonology Outpatient Progress note
   */
  "100512-3": "100512-3",

  /**
   * Pediatric rheumatology Outpatient Progress note
   */
  "100513-1": "100513-1",

  /**
   * Pediatric surgery Outpatient Progress note
   */
  "100514-9": "100514-9",

  /**
   * Pediatric transplant hepatology Outpatient Progress note
   */
  "100515-6": "100515-6",

  /**
   * Pediatric urology Outpatient Progress note
   */
  "100516-4": "100516-4",

  /**
   * Pharmacogenomics Outpatient Progress note
   */
  "100517-2": "100517-2",

  /**
   * Physical medicine and rehab Outpatient Progress note
   */
  "100518-0": "100518-0",

  /**
   * Physical therapy Outpatient Progress note
   */
  "100519-8": "100519-8",

  /**
   * S wave duration in lead V1
   */
  "10052-9": "10052-9",

  /**
   * Plastic surgery Outpatient Progress note
   */
  "100520-6": "100520-6",

  /**
   * Podiatry Outpatient Progress note
   */
  "100521-4": "100521-4",

  /**
   * Psychiatry Hospital Progress note
   */
  "100522-2": "100522-2",

  /**
   * Psychology Outpatient Progress note
   */
  "100523-0": "100523-0",

  /**
   * Pulmonary Outpatient Progress note
   */
  "100524-8": "100524-8",

  /**
   * Radiation oncology Outpatient Progress note
   */
  "100525-5": "100525-5",

  /**
   * Radiology Outpatient Progress note
   */
  "100526-3": "100526-3",

  /**
   * Recreational therapy Outpatient Progress note
   */
  "100527-1": "100527-1",

  /**
   * Reproductive endocrinology and infertility Outpatient Progress note
   */
  "100528-9": "100528-9",

  /**
   * Research Outpatient Progress note
   */
  "100529-7": "100529-7",

  /**
   * S wave duration in lead V2
   */
  "10053-7": "10053-7",

  /**
   * Rheumatology Outpatient Progress note
   */
  "100530-5": "100530-5",

  /**
   * Sleep medicine Outpatient Progress note
   */
  "100531-3": "100531-3",

  /**
   * Social worker Outpatient Progress note
   */
  "100532-1": "100532-1",

  /**
   * Solid Organ Transplant Outpatient Progress note
   */
  "100533-9": "100533-9",

  /**
   * Speech-language pathology Outpatient Progress note
   */
  "100534-7": "100534-7",

  /**
   * Spinal surgery Outpatient Progress note
   */
  "100535-4": "100535-4",

  /**
   * Sports medicine Outpatient Progress note
   */
  "100536-2": "100536-2",

  /**
   * Surgery of the hand Outpatient Progress note
   */
  "100537-0": "100537-0",

  /**
   * Telehealth+Outpatient Progress note
   */
  "100538-8": "100538-8",

  /**
   * Thromboembolism Outpatient Progress note
   */
  "100539-6": "100539-6",

  /**
   * S wave duration in lead V3
   */
  "10054-5": "10054-5",

  /**
   * Transplant surgery Outpatient Progress note
   */
  "100540-4": "100540-4",

  /**
   * Trauma Outpatient Progress note
   */
  "100541-2": "100541-2",

  /**
   * Urology Outpatient Progress note
   */
  "100542-0": "100542-0",

  /**
   * Vascular neurology Outpatient Progress note
   */
  "100543-8": "100543-8",

  /**
   * Vascular surgery Outpatient Progress note
   */
  "100544-6": "100544-6",

  /**
   * Wound care management Outpatient Progress note
   */
  "100545-3": "100545-3",

  /**
   * Wound, Ostomy, and Continence Care Outpatient Progress note
   */
  "100546-1": "100546-1",

  /**
   * Adolescent medicine Hospital Progress note
   */
  "100547-9": "100547-9",

  /**
   * Allergy and Immunology Hospital Progress note
   */
  "100548-7": "100548-7",

  /**
   * Allergy Hospital Progress note
   */
  "100549-5": "100549-5",

  /**
   * S wave duration in lead V4
   */
  "10055-2": "10055-2",

  /**
   * Attending Hospital Progress note
   */
  "100550-3": "100550-3",

  /**
   * Audiology Hospital Progress note
   */
  "100551-1": "100551-1",

  /**
   * Bariatric surgery Hospital Progress note
   */
  "100552-9": "100552-9",

  /**
   * Blood banking and transfusion medicine Hospital Progress note
   */
  "100553-7": "100553-7",

  /**
   * Bone Marrow Transplant Hospital Progress note
   */
  "100554-5": "100554-5",

  /**
   * Breastfeeding Hospital Progress note
   */
  "100555-2": "100555-2",

  /**
   * Burn management Hospital Progress note
   */
  "100556-0": "100556-0",

  /**
   * Cardiac surgery Hospital Progress note
   */
  "100557-8": "100557-8",

  /**
   * Cardiopulmonary Hospital Progress note
   */
  "100558-6": "100558-6",

  /**
   * Child and adolescent psychiatry Hospital Progress note
   */
  "100559-4": "100559-4",

  /**
   * S wave duration in lead V5
   */
  "10056-0": "10056-0",

  /**
   * Clinical cardiac electrophysiology Hospital Progress note
   */
  "100560-2": "100560-2",

  /**
   * Clinical genetics Hospital Progress note
   */
  "100561-0": "100561-0",

  /**
   * Clinical neurophysiology Hospital Progress note
   */
  "100562-8": "100562-8",

  /**
   * Clinical pathology Hospital Progress note
   */
  "100563-6": "100563-6",

  /**
   * Colon and rectal surgery Hospital Progress note
   */
  "100564-4": "100564-4",

  /**
   * Consultant Hospital Progress note
   */
  "100565-1": "100565-1",

  /**
   * Dentistry Hospital Progress note
   */
  "100566-9": "100566-9",

  /**
   * Dermatology Hospital Progress note
   */
  "100567-7": "100567-7",

  /**
   * Developmental-behavioral pediatrics Hospital Progress note
   */
  "100568-5": "100568-5",

  /**
   * Dialysis and Therapeutic apheresis Hospital Progress note
   */
  "100569-3": "100569-3",

  /**
   * S wave duration in lead V6
   */
  "10057-8": "10057-8",

  /**
   * Eating disorders Hospital Progress note
   */
  "100570-1": "100570-1",

  /**
   * Endocrinology Hospital Progress note
   */
  "100571-9": "100571-9",

  /**
   * Family medicine Hospital Progress note
   */
  "100572-7": "100572-7",

  /**
   * Gastroenterology Hospital Progress note
   */
  "100573-5": "100573-5",

  /**
   * General medicine Hospital Progress note
   */
  "100574-3": "100574-3",

  /**
   * Geriatric medicine Hospital Progress note
   */
  "100575-0": "100575-0",

  /**
   * Gynecologic oncology Hospital Progress note
   */
  "100576-8": "100576-8",

  /**
   * Gynecology Hospital Progress note
   */
  "100577-6": "100577-6",

  /**
   * Healthcare navigator Hospital Progress note
   */
  "100578-4": "100578-4",

  /**
   * Heart failure Hospital Progress note
   */
  "100579-2": "100579-2",

  /**
   * S' wave amplitude in lead AVF
   */
  "10058-6": "10058-6",

  /**
   * Heart failure+Transplant cardiology Hospital Progress note
   */
  "100580-0": "100580-0",

  /**
   * Hematology Hospital Progress note
   */
  "100581-8": "100581-8",

  /**
   * Hematology+Medical oncology Hospital Progress note
   */
  "100582-6": "100582-6",

  /**
   * Hepatology Hospital Progress note
   */
  "100583-4": "100583-4",

  /**
   * Immunology Hospital Progress note
   */
  "100584-2": "100584-2",

  /**
   * Infectious disease Hospital Progress note
   */
  "100585-9": "100585-9",

  /**
   * Internal medicine Hospital Progress note
   */
  "100586-7": "100586-7",

  /**
   * Interventional cardiology Hospital Progress note
   */
  "100587-5": "100587-5",

  /**
   * Interventional radiology Hospital Progress note
   */
  "100588-3": "100588-3",

  /**
   * Hospital Mechanical circulatory support Progress note
   */
  "100589-1": "100589-1",

  /**
   * S' wave amplitude in lead AVL
   */
  "10059-4": "10059-4",

  /**
   * Medical Aid in Dying Hospital Progress note
   */
  "100590-9": "100590-9",

  /**
   * Mental health Hospital Progress note
   */
  "100591-7": "100591-7",

  /**
   * Multi-specialty program Hospital Progress note
   */
  "100592-5": "100592-5",

  /**
   * Neonatal perinatal medicine Hospital Progress note
   */
  "100593-3": "100593-3",

  /**
   * Nephrology Hospital Progress note
   */
  "100594-1": "100594-1",

  /**
   * Neurological surgery Hospital Progress note
   */
  "100595-8": "100595-8",

  /**
   * Neurology Hospital Progress note
   */
  "100596-6": "100596-6",

  /**
   * Neurology with special qualifications in child neurology Hospital Progress note
   */
  "100597-4": "100597-4",

  /**
   * Nurse practitioner Hospital Progress note
   */
  "100598-2": "100598-2",

  /**
   * Nurse Hospital Progress note
   */
  "100599-0": "100599-0",

  /**
   * Direct antiglobulin test.IgG specific reagent [Interpretation] on Red Blood Cells
   */
  "1006-6": "1006-6",

  /**
   * S' wave amplitude in lead AVR
   */
  "10060-2": "10060-2",

  /**
   * Nutrition and dietetics Hospital Progress note
   */
  "100600-6": "100600-6",

  /**
   * Obstetrics and Gynecology Hospital Progress note
   */
  "100601-4": "100601-4",

  /**
   * Obstetrics Hospital Progress note
   */
  "100602-2": "100602-2",

  /**
   * Occupational therapy Hospital Progress note
   */
  "100603-0": "100603-0",

  /**
   * Oncology Hospital Progress note
   */
  "100604-8": "100604-8",

  /**
   * Ophthalmology Hospital Progress note
   */
  "100605-5": "100605-5",

  /**
   * Oral and Maxillofacial Surgery Hospital Progress note
   */
  "100606-3": "100606-3",

  /**
   * Orthopaedic surgery Hospital Progress note
   */
  "100607-1": "100607-1",

  /**
   * Orthotics prosthetics Hospital Progress note
   */
  "100608-9": "100608-9",

  /**
   * Otolaryngology Hospital Progress note
   */
  "100609-7": "100609-7",

  /**
   * S' wave amplitude in lead I
   */
  "10061-0": "10061-0",

  /**
   * Pain medicine Hospital Progress note
   */
  "100610-5": "100610-5",

  /**
   * Palliative care Hospital Progress note
   */
  "100611-3": "100611-3",

  /**
   * Pastoral care Hospital Progress note
   */
  "100612-1": "100612-1",

  /**
   * Pediatric cardiology Hospital Progress note
   */
  "100613-9": "100613-9",

  /**
   * Pediatric dermatology Hospital Progress note
   */
  "100614-7": "100614-7",

  /**
   * Pediatric endocrinology Hospital Progress note
   */
  "100615-4": "100615-4",

  /**
   * Pediatric gastroenterology Hospital Progress note
   */
  "100616-2": "100616-2",

  /**
   * Pediatric hematology-oncology Hospital Progress note
   */
  "100617-0": "100617-0",

  /**
   * Pediatric infectious diseases Hospital Progress note
   */
  "100618-8": "100618-8",

  /**
   * Pediatric otolaryngology Hospital Progress note
   */
  "100619-6": "100619-6",

  /**
   * S' wave amplitude in lead II
   */
  "10062-8": "10062-8",

  /**
   * Pediatric pulmonology Hospital Progress note
   */
  "100620-4": "100620-4",

  /**
   * Pediatric rheumatology Hospital Progress note
   */
  "100621-2": "100621-2",

  /**
   * Pediatric surgery Hospital Progress note
   */
  "100622-0": "100622-0",

  /**
   * Pediatric transplant hepatology Hospital Progress note
   */
  "100623-8": "100623-8",

  /**
   * Pharmacogenomics Hospital Progress note
   */
  "100624-6": "100624-6",

  /**
   * Pharmacology Hospital Progress note
   */
  "100625-3": "100625-3",

  /**
   * Physical medicine and rehab Hospital Progress note
   */
  "100626-1": "100626-1",

  /**
   * Physical therapy Hospital Progress note
   */
  "100627-9": "100627-9",

  /**
   * Plastic surgery Hospital Progress note
   */
  "100628-7": "100628-7",

  /**
   * Podiatry Hospital Progress note
   */
  "100629-5": "100629-5",

  /**
   * S' wave amplitude in lead III
   */
  "10063-6": "10063-6",

  /**
   * Psychology Hospital Progress note
   */
  "100630-3": "100630-3",

  /**
   * Radiation oncology Hospital Progress note
   */
  "100631-1": "100631-1",

  /**
   * Radiology Hospital Progress note
   */
  "100632-9": "100632-9",

  /**
   * Rapid response team Hospital Progress note
   */
  "100633-7": "100633-7",

  /**
   * Recreational therapy Hospital Progress note
   */
  "100634-5": "100634-5",

  /**
   * Reproductive endocrinology and infertility Hospital Progress note
   */
  "100635-2": "100635-2",

  /**
   * Research Hospital Progress note
   */
  "100636-0": "100636-0",

  /**
   * Rheumatology Hospital Progress note
   */
  "100637-8": "100637-8",

  /**
   * Sleep medicine Hospital Progress note
   */
  "100638-6": "100638-6",

  /**
   * Social worker Hospital Progress note
   */
  "100639-4": "100639-4",

  /**
   * S' wave amplitude in lead V1
   */
  "10064-4": "10064-4",

  /**
   * Solid Organ Transplant Hospital Progress note
   */
  "100640-2": "100640-2",

  /**
   * Speech-language pathology Hospital Progress note
   */
  "100641-0": "100641-0",

  /**
   * Spinal surgery Hospital Progress note
   */
  "100642-8": "100642-8",

  /**
   * Surgery of the hand Hospital Progress note
   */
  "100643-6": "100643-6",

  /**
   * Thromboembolism Hospital Progress note
   */
  "100644-4": "100644-4",

  /**
   * Trauma Hospital Progress note
   */
  "100645-1": "100645-1",

  /**
   * Urology Hospital Progress note
   */
  "100646-9": "100646-9",

  /**
   * Vascular neurology Hospital Progress note
   */
  "100647-7": "100647-7",

  /**
   * Vascular surgery Hospital Progress note
   */
  "100648-5": "100648-5",

  /**
   * Wound care management Hospital Progress note
   */
  "100649-3": "100649-3",

  /**
   * S' wave amplitude in lead V2
   */
  "10065-1": "10065-1",

  /**
   * Wound, Ostomy, and Continence Care Hospital Progress note
   */
  "100650-1": "100650-1",

  /**
   * Hospital COVID-19 Intubation Progress note
   */
  "100651-9": "100651-9",

  /**
   * Pure tone bone conduction threshold audiometry panel
   */
  "100652-7": "100652-7",

  /**
   * Pure tone air conduction threshold audiometry panel
   */
  "100653-5": "100653-5",

  /**
   * Pyruvate kinase M2 [Presence] in Stool
   */
  "100654-3": "100654-3",

  /**
   * XR Sella turcica Lateral
   */
  "100655-0": "100655-0",

  /**
   * Maternal and fetal medicine Outpatient Progress note
   */
  "100656-8": "100656-8",

  /**
   * Maternal and fetal medicine Telephone encounter+Hospital Progress note
   */
  "100657-6": "100657-6",

  /**
   * Hospital COVID-19 Progress note
   */
  "100658-4": "100658-4",

  /**
   * Maternal and fetal medicine Hospital Progress note
   */
  "100659-2": "100659-2",

  /**
   * S' wave amplitude in lead V3
   */
  "10066-9": "10066-9",

  /**
   * Maternal and fetal medicine Telephone encounter+Outpatient Progress note
   */
  "100660-0": "100660-0",

  /**
   * Psychiatry Outpatient Progress note
   */
  "100661-8": "100661-8",

  /**
   * Cortisol free and total panel - Serum or Plasma
   */
  "100662-6": "100662-6",

  /**
   * TPMT gene c.460G>A and c.719A>G [Presence] in Blood by Molecular genetics method
   */
  "100663-4": "100663-4",

  /**
   * NUDT15 gene c.50_55dup and c.415C>T [Presence] in Blood by Molecular genetics method
   */
  "100664-2": "100664-2",

  /**
   * NUDT15 gene c.415C>T [Presence] in Blood by Molecular genetics method
   */
  "100665-9": "100665-9",

  /**
   * NUDT15 gene c.416G>A [Presence] in Blood by Molecular genetics method
   */
  "100666-7": "100666-7",

  /**
   * NUDT15 gene c.52G>A [Presence] in Blood by Molecular genetics method
   */
  "100667-5": "100667-5",

  /**
   * NUDT15 gene c.50_55dup [Presence] in Blood by Molecular genetics method
   */
  "100668-3": "100668-3",

  /**
   * NUDT15 gene c.50_55del [Presence] in Blood by Molecular genetics method
   */
  "100669-1": "100669-1",

  /**
   * S' wave amplitude in lead V4
   */
  "10067-7": "10067-7",

  /**
   * RHD gene allele [Identifier] in Plasma cell-free DNA Nominal--fetus
   */
  "100670-9": "100670-9",

  /**
   * Aspergillus sp DNA [Presence] in Blood by NAA with probe detection
   */
  "100671-7": "100671-7",

  /**
   * Aspergillus fumigatus DNA [Presence] in Blood by NAA with probe detection
   */
  "100672-5": "100672-5",

  /**
   * Aspergillus terreus DNA [Presence] in Blood by NAA with probe detection
   */
  "100673-3": "100673-3",

  /**
   * BK virus DNA [Log #/volume] (viral load) in Blood by NAA with probe detection
   */
  "100674-1": "100674-1",

  /**
   * Cytomegalovirus DNA [Units/volume] (viral load) in Blood by NAA with probe detection
   */
  "100675-8": "100675-8",

  /**
   * Cytomegalovirus DNA [log units/volume] (viral load) in Blood by NAA with probe detection
   */
  "100676-6": "100676-6",

  /**
   * Epstein Barr virus DNA [Log #/volume] (viral load) in Serum or Plasma by NAA with probe detection
   */
  "100677-4": "100677-4",

  /**
   * Epstein Barr virus DNA [Log #/volume] (viral load) in Blood by NAA with probe detection
   */
  "100678-2": "100678-2",

  /**
   * Herpes virus 6 DNA [Log #/volume] (viral load) in Serum or Plasma by NAA with probe detection
   */
  "100679-0": "100679-0",

  /**
   * S' wave amplitude in lead V5
   */
  "10068-5": "10068-5",

  /**
   * Herpes virus 6 DNA [Log #/volume] (viral load) in Blood by NAA with probe detection
   */
  "100680-8": "100680-8",

  /**
   * Herpes virus 7 DNA [Log #/volume] (viral load) in Serum or Plasma by NAA with probe detection
   */
  "100681-6": "100681-6",

  /**
   * Herpes virus 7 DNA [Log #/volume] (viral load) in Blood by NAA with probe detection
   */
  "100682-4": "100682-4",

  /**
   * Herpes virus 8 DNA [Log #/volume] (viral load) in Serum or Plasma by NAA with probe detection
   */
  "100683-2": "100683-2",

  /**
   * Herpes virus 8 DNA [Log #/volume] (viral load) in Blood by NAA with probe detection
   */
  "100684-0": "100684-0",

  /**
   * JC virus DNA [Log #/volume] (viral load) in Serum or Plasma by NAA with probe detection
   */
  "100685-7": "100685-7",

  /**
   * JC virus DNA [Log #/volume] (viral load) in Cerebral spinal fluid by NAA with probe detection
   */
  "100686-5": "100686-5",

  /**
   * JC virus DNA [Log #/volume] (viral load) in Urine by NAA with probe detection
   */
  "100687-3": "100687-3",

  /**
   * Parvovirus B19 DNA [Log #/volume] (viral load) in Blood by NAA with probe detection
   */
  "100688-1": "100688-1",

  /**
   * Toxoplasma gondii DNA [Log #/volume] in Serum or Plasma by NAA with probe detection
   */
  "100689-9": "100689-9",

  /**
   * S' wave amplitude in lead V6
   */
  "10069-3": "10069-3",

  /**
   * Toxoplasma gondii DNA [Log #/volume] in Cerebral spinal fluid by NAA with probe detection
   */
  "100690-7": "100690-7",

  /**
   * Varicella zoster virus DNA [Log #/volume] (viral load) in Blood by NAA with probe detection
   */
  "100691-5": "100691-5",

  /**
   * Varicella zoster virus DNA [Log #/volume] (viral load) in Cerebral spinal fluid by NAA with probe detection
   */
  "100692-3": "100692-3",

  /**
   * Pneumocystis jiroveci DNA [Log #/volume] in Respiratory specimen by NAA with probe detection
   */
  "100693-1": "100693-1",

  /**
   * SMN1 gene silent carrier analysis [Presence] in Blood or Tissue by Molecular genetics method
   */
  "100694-9": "100694-9",

  /**
   * Genetic disease analysis overall carrier interpretation in Blood or Tissue by Molecular genetics method Narrative
   */
  "100695-6": "100695-6",

  /**
   * CTNS related multigene analysis [Identifier] in Bodyfluid and Serum or Plasma by Molecular genetics method Nominal
   */
  "100696-4": "100696-4",

  /**
   * Interventional radiology Outpatient Note
   */
  "100697-2": "100697-2",

  /**
   * Social Determinants of Health screening report Document
   */
  "100698-0": "100698-0",

  /**
   * Rifabutin+Ethambutol [Susceptibility]
   */
  "100699-8": "100699-8",

  /**
   * Direct antiglobulin test.polyspecific reagent [Presence] on Red Blood Cells
   */
  "1007-4": "1007-4",

  /**
   * S' wave duration in lead AVF
   */
  "10070-1": "10070-1",

  /**
   * Trichomonas vaginalis DNA [Presence] in Urethra by NAA with probe detection
   */
  "100700-4": "100700-4",

  /**
   * Trichomonas vaginalis rRNA [Presence] in Urethra by NAA with probe detection
   */
  "100701-2": "100701-2",

  /**
   * Mycoplasma genitalium rRNA [Presence] in Urethra by NAA with probe detection
   */
  "100702-0": "100702-0",

  /**
   * Mycoplasma genitalium rRNA [Presence] in Urine by NAA with probe detection
   */
  "100703-8": "100703-8",

  /**
   * Mycoplasma genitalium rRNA [Presence] in Cervix by NAA with probe detection
   */
  "100704-6": "100704-6",

  /**
   * Mycoplasma genitalium rRNA [Presence] in Anorectal by NAA with probe detection
   */
  "100705-3": "100705-3",

  /**
   * Mycoplasma genitalium rRNA [Presence] in Specimen by NAA with probe detection
   */
  "100706-1": "100706-1",

  /**
   * Polymorphonuclear cells [#/volume] in Peritoneal dialysis fluid by Automated count
   */
  "100707-9": "100707-9",

  /**
   * Plasma cells/100 leukocytes in Synovial fluid
   */
  "100708-7": "100708-7",

  /**
   * Hepatocellular carcinoma risk [Score] by GAAD
   */
  "100709-5": "100709-5",

  /**
   * S' wave duration in lead AVL
   */
  "10071-9": "10071-9",

  /**
   * Chlamydia trachomatis and Neisseria gonorrhoeae rRNA panel - Throat by NAA with probe detection
   */
  "100710-3": "100710-3",

  /**
   * Borrelia burgdorferi.VlsE1+pepC10 Ab [Units/volume] in Serum by Immunoassay
   */
  "100711-1": "100711-1",

  /**
   * Brexpiprazole [Mass/volume] in Serum or Plasma
   */
  "100712-9": "100712-9",

  /**
   * Cariprazine [Mass/volume] in Serum or Plasma
   */
  "100713-7": "100713-7",

  /**
   * Guanfacine [Mass/volume] in Serum or Plasma
   */
  "100714-5": "100714-5",

  /**
   * Prothipendyl [Mass/volume] in Serum or Plasma
   */
  "100715-2": "100715-2",

  /**
   * Prostate specific Ag [Mass/volume] in DBS
   */
  "100716-0": "100716-0",

  /**
   * FCGR3A gene.p.Phe176Val [Presence] in Blood or Tissue by Molecular genetics method
   */
  "100717-8": "100717-8",

  /**
   * Undersea and hyperbaric medicine Discharge summary
   */
  "100718-6": "100718-6",

  /**
   * Surgical oncology Discharge summary
   */
  "100719-4": "100719-4",

  /**
   * S' wave duration in lead AVR
   */
  "10072-7": "10072-7",

  /**
   * Reproductive endocrinology and infertility Discharge summary
   */
  "100720-2": "100720-2",

  /**
   * Community health care Discharge summary
   */
  "100721-0": "100721-0",

  /**
   * Integrative medicine Discharge summary
   */
  "100722-8": "100722-8",

  /**
   * Sports medicine Discharge summary
   */
  "100723-6": "100723-6",

  /**
   * Diabetology Discharge summary
   */
  "100724-4": "100724-4",

  /**
   * Optometry Discharge summary
   */
  "100725-1": "100725-1",

  /**
   * Podiatry Discharge summary
   */
  "100726-9": "100726-9",

  /**
   * Chiropractic medicine Discharge summary
   */
  "100727-7": "100727-7",

  /**
   * Cardiac surgery Discharge summary
   */
  "100728-5": "100728-5",

  /**
   * Breastfeeding Discharge summary
   */
  "100729-3": "100729-3",

  /**
   * S' wave duration in lead I
   */
  "10073-5": "10073-5",

  /**
   * Transplant surgery Discharge summary
   */
  "100730-1": "100730-1",

  /**
   * Urgent care center Discharge summary
   */
  "100731-9": "100731-9",

  /**
   * Cholesterol.in lipoprotein (little a) and Cholesterol.in LDL panel - Serum
   */
  "100732-7": "100732-7",

  /**
   * Cholesterol in LDL [Mass/volume] in Serum by calculation --corrected for Cholesterol.in lipoprotein (little a)
   */
  "100733-5": "100733-5",

  /**
   * traMADol and Metabolites Panel - Urine by Confirmatory method
   */
  "100734-3": "100734-3",

  /**
   * Mannose-6-phosphate isomerase and phosphomannomutase 1 panel - Leukocytes
   */
  "100735-0": "100735-0",

  /**
   * Acylcarnitine Analysis Post Mortem in Specimen Document
   */
  "100736-8": "100736-8",

  /**
   * Alkaline phosphatase.macromolecular [Presence] in Serum or Plasma
   */
  "100737-6": "100737-6",

  /**
   * Alanine aminotransferase.macromolecular [Presence] in Serum or Plasma
   */
  "100738-4": "100738-4",

  /**
   * Aspartate aminotransferase.macromolecular [Presence] in Serum or Plasma
   */
  "100739-2": "100739-2",

  /**
   * S' wave duration in lead II
   */
  "10074-3": "10074-3",

  /**
   * Amylase.macromolecular [Presence] in Serum or Plasma
   */
  "100740-0": "100740-0",

  /**
   * Gamma glutamyl transferase.macromolecular [Presence] in Serum or Plasma
   */
  "100741-8": "100741-8",

  /**
   * Lactate dehydrogenase.macromolecular [Presence] in Serum or Plasma
   */
  "100742-6": "100742-6",

  /**
   * Lipase.macromolecular [Presence] in Serum or Plasma
   */
  "100743-4": "100743-4",

  /**
   * Alpha-1-acid glycoprotein [Mass/volume] in Serum or Plasma by Electrophoresis
   */
  "100744-2": "100744-2",

  /**
   * Chloride [Moles/volume] in Mixed venous blood
   */
  "100745-9": "100745-9",

  /**
   * Glucose [Moles/volume] in Mixed venous blood
   */
  "100746-7": "100746-7",

  /**
   * Legionella serogroup panel - Specimen
   */
  "100747-5": "100747-5",

  /**
   * Legionella spp [Presence] in Specimen by NAA with probe detection
   */
  "100748-3": "100748-3",

  /**
   * Legionella pneumophila serogroup 1 [Presence] in Specimen by NAA with probe detection
   */
  "100749-1": "100749-1",

  /**
   * S' wave duration in lead III
   */
  "10075-0": "10075-0",

  /**
   * Legionella pneumophila non-serogroup 1 [Presence] in Specimen by NAA with probe detection
   */
  "100750-9": "100750-9",

  /**
   * Galactose-alpha-1,3-galactose (Alpha-Gal) panel - Serum or Plasma
   */
  "100751-7": "100751-7",

  /**
   * Exacerbating factors - Reported
   */
  "100752-5": "100752-5",

  /**
   * Alleviating factors - Reported
   */
  "100753-3": "100753-3",

  /**
   * Platelet disorders multigene analysis in Blood or Tissue by Sequencing
   */
  "100754-1": "100754-1",

  /**
   * Oligoclonal bands [#] in Serum or Plasma by Isoelectric focusing
   */
  "100755-8": "100755-8",

  /**
   * Oligoclonal bands [Interpretation] in Cerebral spinal fluid by Isoelectric focusing
   */
  "100756-6": "100756-6",

  /**
   * Protein fractions.oligoclonal bands panel - Serum and CSF by Isoelectric focusing
   */
  "100757-4": "100757-4",

  /**
   * Estimated lung age by based on clinical data
   */
  "100758-2": "100758-2",

  /**
   * Inspiratory reserve [Volume] Respiratory system by Spirometry
   */
  "100759-0": "100759-0",

  /**
   * S' wave duration in lead V1
   */
  "10076-8": "10076-8",

  /**
   * XR Radius and Ulna - left Single view
   */
  "100760-8": "100760-8",

  /**
   * PALB2 gene targeted mutation analysis in Blood or Tissue by Molecular genetics method
   */
  "100761-6": "100761-6",

  /**
   * HBA2 gene.c.377T>C [Presence] in Blood by Molecular genetics method
   */
  "100762-4": "100762-4",

  /**
   * Mycobacterium sp comparative reaction interpretation Narrative
   */
  "100763-2": "100763-2",

  /**
   * Mycobacterium bovis reaction wheal [Diameter] Qualitative --3 days post dose mammalian tuberculin intradermal
   */
  "100764-0": "100764-0",

  /**
   * Homocysteine and methylmalonate and methylcitrate panel - DBS
   */
  "100765-7": "100765-7",

  /**
   * Center for Epidemiologic Studies Depression Scale panel [CES-D]
   */
  "100766-5": "100766-5",

  /**
   * Bothered by things that are not usually bothersome
   */
  "100767-3": "100767-3",

  /**
   * Poor appetite
   */
  "100768-1": "100768-1",

  /**
   * Unhappy even with help from my family or friends
   */
  "100769-9": "100769-9",

  /**
   * S' wave duration in lead V2
   */
  "10077-6": "10077-6",

  /**
   * Feeling just as good as others
   */
  "100770-7": "100770-7",

  /**
   * Trouble focusing
   */
  "100771-5": "100771-5",

  /**
   * Feeling depressed
   */
  "100772-3": "100772-3",

  /**
   * Feeling everything is too much of an effort
   */
  "100773-1": "100773-1",

  /**
   * Feeling hopeful about the future
   */
  "100774-9": "100774-9",

  /**
   * Feeling life had been a failure
   */
  "100775-6": "100775-6",

  /**
   * Feeling fearful
   */
  "100776-4": "100776-4",

  /**
   * Restless sleep
   */
  "100777-2": "100777-2",

  /**
   * Feeling happy
   */
  "100778-0": "100778-0",

  /**
   * Quieter than usual
   */
  "100779-8": "100779-8",

  /**
   * S' wave duration in lead V3
   */
  "10078-4": "10078-4",

  /**
   * Feeling lonely
   */
  "100780-6": "100780-6",

  /**
   * People were unfriendly
   */
  "100781-4": "100781-4",

  /**
   * Enjoying life
   */
  "100782-2": "100782-2",

  /**
   * Crying spells
   */
  "100783-0": "100783-0",

  /**
   * Feeling sad
   */
  "100784-8": "100784-8",

  /**
   * Feeling people dislike me
   */
  "100785-5": "100785-5",

  /**
   * Lack of energy
   */
  "100786-3": "100786-3",

  /**
   * Total Score CES-D
   */
  "100787-1": "100787-1",

  /**
   * Stemphylium botryosum IgG4 Ab [Mass/volume] in Serum
   */
  "100788-9": "100788-9",

  /**
   * Rhizopus nigricans IgG4 Ab [Mass/volume] in Serum
   */
  "100789-7": "100789-7",

  /**
   * S' wave duration in lead V4
   */
  "10079-2": "10079-2",

  /**
   * Lepidoglyphus destructor IgG Ab [Mass/volume] in Serum
   */
  "100790-5": "100790-5",

  /**
   * Hamster epithelium IgG Ab [Mass/volume] in Serum
   */
  "100791-3": "100791-3",

  /**
   * Forsythia IgE Ab [Units/volume] in Serum
   */
  "100792-1": "100792-1",

  /**
   * Testosterone [Mass/volume] in Body fluid
   */
  "100793-9": "100793-9",

  /**
   * Follitropin [Units/volume] in Body fluid
   */
  "100794-7": "100794-7",

  /**
   * S100 calcium binding protein B [Mass/volume] in Body fluid
   */
  "100795-4": "100795-4",

  /**
   * Thyroglobulin [Mass/volume] in Body fluid
   */
  "100796-2": "100796-2",

  /**
   * Testosterone Free [Mass/volume] in Serum --1st specimen post XXX challenge
   */
  "100797-0": "100797-0",

  /**
   * Testosterone Free [Mass/volume] in Serum --2nd specimen post XXX challenge
   */
  "100798-8": "100798-8",

  /**
   * 21-Deoxycortisol [Mass/volume] in Serum --1st specimen post XXX challenge
   */
  "100799-6": "100799-6",

  /**
   * Indirect antiglobulin test.polyspecific reagent [Presence] in Serum or Plasma
   */
  "1008-2": "1008-2",

  /**
   * S' wave duration in lead V5
   */
  "10080-0": "10080-0",

  /**
   * 21-Deoxycortisol [Mass/volume] in Serum --2nd specimen post XXX challenge
   */
  "100800-2": "100800-2",

  /**
   * 21-Deoxycortisol [Mass/volume] in Serum --3rd specimen post XXX challenge
   */
  "100801-0": "100801-0",

  /**
   * 21-Deoxycortisol [Mass/volume] in Serum --4th specimen post XXX challenge
   */
  "100802-8": "100802-8",

  /**
   * 21-Deoxycortisol [Mass/volume] in Serum --5th specimen post XXX challenge
   */
  "100803-6": "100803-6",

  /**
   * Vasopressin [Moles/volume] in Plasma --1st specimen post XXX challenge
   */
  "100804-4": "100804-4",

  /**
   * Vasopressin [Moles/volume] in Plasma --2nd specimen post XXX challenge
   */
  "100805-1": "100805-1",

  /**
   * Vasopressin [Moles/volume] in Plasma --3rd specimen post XXX challenge
   */
  "100806-9": "100806-9",

  /**
   * Vasopressin [Moles/volume] in Plasma --4th specimen post XXX challenge
   */
  "100807-7": "100807-7",

  /**
   * Vasopressin [Moles/volume] in Plasma --5th specimen post XXX challenge
   */
  "100808-5": "100808-5",

  /**
   * Vasopressin [Moles/volume] in Plasma --6th specimen post XXX challenge
   */
  "100809-3": "100809-3",

  /**
   * S' wave duration in lead V6
   */
  "10081-8": "10081-8",

  /**
   * Vasopressin [Moles/volume] in Plasma --7th specimen post XXX challenge
   */
  "100810-1": "100810-1",

  /**
   * Vasopressin [Moles/volume] in Plasma --8th specimen post XXX challenge
   */
  "100811-9": "100811-9",

  /**
   * Vasopressin [Moles/volume] in Plasma --9th specimen post XXX challenge
   */
  "100812-7": "100812-7",

  /**
   * Vasopressin [Moles/volume] in Plasma --10th specimen post XXX challenge
   */
  "100813-5": "100813-5",

  /**
   * Vasopressin [Moles/volume] in Plasma --11th specimen post XXX challenge
   */
  "100814-3": "100814-3",

  /**
   * Vasopressin [Moles/volume] in Plasma --12th specimen post XXX challenge
   */
  "100815-0": "100815-0",

  /**
   * Glucagon [Mass/volume] in Serum or Plasma --6th specimen post XXX challenge
   */
  "100816-8": "100816-8",

  /**
   * Glucagon [Mass/volume] in Serum or Plasma --7th specimen post XXX challenge
   */
  "100817-6": "100817-6",

  /**
   * Renin [Mass/volume] in Plasma --1st specimen post XXX challenge
   */
  "100818-4": "100818-4",

  /**
   * Renin [Mass/volume] in Plasma --2nd specimen post XXX challenge
   */
  "100819-2": "100819-2",

  /**
   * ST initial amplitude 6 ms in lead AVF
   */
  "10082-6": "10082-6",

  /**
   * Renin [Mass/volume] in Plasma --3rd specimen post XXX challenge
   */
  "100820-0": "100820-0",

  /**
   * National POLST form: portable medical order panel
   */
  "100821-8": "100821-8",

  /**
   * Cardiopulmonary resuscitation orders
   */
  "100822-6": "100822-6",

  /**
   * Initial portable medical treatment orders
   */
  "100823-4": "100823-4",

  /**
   * Additional portable medical orders or instructions
   */
  "100824-2": "100824-2",

  /**
   * Medically assisted nutrition orders
   */
  "100825-9": "100825-9",

  /**
   * Portable medical order AndOr advance directive review
   */
  "100826-7": "100826-7",

  /**
   * Portable medical order discussion participants
   */
  "100827-5": "100827-5",

  /**
   * Portable medical order administrative information
   */
  "100828-3": "100828-3",

  /**
   * Renin [Mass/volume] in Plasma --4th specimen post XXX challenge
   */
  "100829-1": "100829-1",

  /**
   * ST initial amplitude 6 ms in lead AVL
   */
  "10083-4": "10083-4",

  /**
   * Alpha subunit free [Units/volume] in Serum or Plasma --1st specimen post XXX challenge
   */
  "100830-9": "100830-9",

  /**
   * Alpha subunit free [Units/volume] in Serum or Plasma --2nd specimen post XXX challenge
   */
  "100831-7": "100831-7",

  /**
   * Alpha subunit free [Units/volume] in Serum or Plasma --3rd specimen post XXX challenge
   */
  "100832-5": "100832-5",

  /**
   * Alpha subunit free [Units/volume] in Serum or Plasma --4th specimen post XXX challenge
   */
  "100833-3": "100833-3",

  /**
   * Alpha subunit free [Units/volume] in Serum or Plasma --5th specimen post XXX challenge
   */
  "100834-1": "100834-1",

  /**
   * Alpha subunit free [Units/volume] in Serum or Plasma --6th specimen post XXX challenge
   */
  "100835-8": "100835-8",

  /**
   * Alpha subunit free [Units/volume] in Serum or Plasma --7th specimen post XXX challenge
   */
  "100836-6": "100836-6",

  /**
   * Insulin-like growth factor-I [Mass/volume] in Serum or Plasma --9th specimen post XXX challenge
   */
  "100837-4": "100837-4",

  /**
   * Testosterone [Mass/volume] in Serum or Plasma --9th specimen post XXX challenge
   */
  "100838-2": "100838-2",

  /**
   * Vitamin A/Retinol binding protein [Ratio] in Serum or Plasma
   */
  "100839-0": "100839-0",

  /**
   * ST initial amplitude 6 ms in lead AVR
   */
  "10084-2": "10084-2",

  /**
   * IgE [Units/volume] in Body fluid
   */
  "100840-8": "100840-8",

  /**
   * Zinc finger protein of the cerebellum 4 Ab [Presence] in Cerebral spinal fluid by Line blot
   */
  "100841-6": "100841-6",

  /**
   * Nonalcoholic steatohepatitis score in Serum or Plasma Calculated by FAST
   */
  "100842-4": "100842-4",

  /**
   * Liver fibrosis score in Serum or Plasma by Calculated.Agile3+
   */
  "100843-2": "100843-2",

  /**
   * Liver fibrosis score in Serum or Plasma by Calculated.Agile4
   */
  "100844-0": "100844-0",

  /**
   * Neurofascin155 IgG4 Ab [Presence] in Serum by Flow cytometry (FC)
   */
  "100845-7": "100845-7",

  /**
   * Dengue virus 1+2+3+4 nsP1 IgG Ab [Presence] in Serum or Plasma by Immunoassay
   */
  "100846-5": "100846-5",

  /**
   * Gas and ammonia panel - Arterial blood
   */
  "100847-3": "100847-3",

  /**
   * Cell count and Differential panel - Amniotic fluid by Manual count
   */
  "100848-1": "100848-1",

  /**
   * Leukocytes [#/volume] in Amniotic fluid by Manual count
   */
  "100849-9": "100849-9",

  /**
   * ST initial amplitude 6 ms in lead I
   */
  "10085-9": "10085-9",

  /**
   * Neutrophils [#/volume] in Amniotic fluid by Manual count
   */
  "100850-7": "100850-7",

  /**
   * Other cells [#/volume] in Amniotic fluid by Manual count
   */
  "100851-5": "100851-5",

  /**
   * NM Bones Views for metastasis W Sr-89 IV
   */
  "100852-3": "100852-3",

  /**
   * NM Pericardial space Pericardial effusion
   */
  "100853-1": "100853-1",

  /**
   * Lymphocytes/100 cells in Blood mononuclear cells by Immunoassay
   */
  "100854-9": "100854-9",

  /**
   * CD3 cells/100 cells in Blood mononuclear cells
   */
  "100855-6": "100855-6",

  /**
   * CD3+CD4+ (T4 helper) cells/100 cells in Blood mononuclear cells
   */
  "100856-4": "100856-4",

  /**
   * CD3+CD8+ (T8 suppressor) cells/100 cells in Blood mononuclear cells
   */
  "100857-2": "100857-2",

  /**
   * Cells.CD4+CD154+/CD4 cells in Blood --after stimulation with SARS-CoV-2 Spike peptide
   */
  "100858-0": "100858-0",

  /**
   * Cells.CD4.Interferon gamma-expressing/CD4 cells in Blood --after stimulation with SARS-CoV-2 Spike peptide
   */
  "100859-8": "100859-8",

  /**
   * ST initial amplitude 6 ms in lead II
   */
  "10086-7": "10086-7",

  /**
   * Cells.CD4.Tumor necrosis factor alfa-expressing/CD4 cells in Blood --after stimulation with SARS-CoV-2 Spike peptide
   */
  "100860-6": "100860-6",

  /**
   * Cells.CD4+CD154+/CD4 cells in Blood --after stimulation with SARS-CoV-2 Nucleocapsid peptide
   */
  "100861-4": "100861-4",

  /**
   * Cells.CD4.Interferon gamma-expressing/CD4 cells in Blood --after stimulation with SARS-CoV-2 Nucleocapsid peptide
   */
  "100862-2": "100862-2",

  /**
   * Cells.CD4.Tumor necrosis factor alfa-expressing/CD4 cells in Blood --after stimulation with SARS-CoV-2 Nucleocapsid peptide
   */
  "100863-0": "100863-0",

  /**
   * Giardia lamblia bg gene [Genotype] in Specimen by Molecular genetics method
   */
  "100864-8": "100864-8",

  /**
   * Avian schistosomes DNA [Presence] in Specimen by NAA with probe detection
   */
  "100865-5": "100865-5",

  /**
   * Febrile antibody profile in Serum
   */
  "100866-3": "100866-3",

  /**
   * Campylobacter jejuni+coli+lari+upsaliensis Ag [Presence] in Stool by Rapid immunoassay
   */
  "100867-1": "100867-1",

  /**
   * Cryptosporidium sp 18S-LC2 rRNA [Genotype] in Specimen by Molecular genetics method
   */
  "100868-9": "100868-9",

  /**
   * Cryptosporidium gp60 gene [Type] in Specimen by Molecular genetics method
   */
  "100869-7": "100869-7",

  /**
   * ST initial amplitude 6 ms in lead III
   */
  "10087-5": "10087-5",

  /**
   * Cryptosporidium 18S rRNA [Genotype] in Specimen by Molecular genetics method
   */
  "100870-5": "100870-5",

  /**
   * Giardia lamblia gdh gene [Genotype] in Specimen by Molecular genetics method
   */
  "100871-3": "100871-3",

  /**
   * Bacteria producing polysaccharide from sucrose [Presence] in Isolate
   */
  "100872-1": "100872-1",

  /**
   * Giardia lamblia tpi gene [Genotype] in Specimen by Molecular genetics method
   */
  "100873-9": "100873-9",

  /**
   * Basidiobolus sp [Presence] in Specimen
   */
  "100874-7": "100874-7",

  /**
   * Fetal Heart Document limited US
   */
  "100875-4": "100875-4",

  /**
   * Fetal Heart Document US
   */
  "100876-2": "100876-2",

  /**
   * US Heart Transesophageal during surgery
   */
  "100877-0": "100877-0",

  /**
   * Endoscopic ultrasound study Upper GI tract Document
   */
  "100878-8": "100878-8",

  /**
   * US Guidance for cryoablation of Breast - right
   */
  "100879-6": "100879-6",

  /**
   * ST initial amplitude 6 ms in lead V1
   */
  "10088-3": "10088-3",

  /**
   * US Guidance for cryoablation of Breast - left
   */
  "100880-4": "100880-4",

  /**
   * MR Guidance for cryoablation of Bone
   */
  "100881-2": "100881-2",

  /**
   * MR Peritoneum W contrast percutaneous intraperitoneal
   */
  "100882-0": "100882-0",

  /**
   * MR Guidance for biopsy of Kidney - left
   */
  "100883-8": "100883-8",

  /**
   * MR Guidance for biopsy of Kidney - right
   */
  "100884-6": "100884-6",

  /**
   * Parapoxvirus DNA [Presence] in Specimen by NAA with probe detection
   */
  "100885-3": "100885-3",

  /**
   * Orf virus DNA [Presence] in Specimen by NAA with probe detection
   */
  "100886-1": "100886-1",

  /**
   * Pseudocowpox virus DNA [Presence] in Specimen by NAA with probe detection
   */
  "100887-9": "100887-9",

  /**
   * West African monkeypox virus DNA [Presence] in Specimen by NAA with probe detection
   */
  "100888-7": "100888-7",

  /**
   * Congo Basin monkeypox virus DNA [Presence] in Specimen by NAA with probe detection
   */
  "100889-5": "100889-5",

  /**
   * ST initial amplitude 6 ms in lead V2
   */
  "10089-1": "10089-1",

  /**
   * Poxvirus DNA panel
   */
  "100890-3": "100890-3",

  /**
   * Orthopoxvirus IgG Ab [Presence] in Serum or Plasma by Immunoassay
   */
  "100891-1": "100891-1",

  /**
   * Orthopoxvirus IgM Ab [Presence] in Serum or Plasma by Immunoassay
   */
  "100892-9": "100892-9",

  /**
   * Orthopoxvirus IgG and IgM Ab panel - Serum or Plasma
   */
  "100893-7": "100893-7",

  /**
   * Recommended screening frequency Narrative
   */
  "100894-5": "100894-5",

  /**
   * Rickettsia conorii IgG and IgM [Interpretation] in Serum
   */
  "100895-2": "100895-2",

  /**
   * Vasopressin [Moles/volume] in Plasma --13th specimen post XXX challenge
   */
  "100896-0": "100896-0",

  /**
   * Staphylococcus aureus [Presence] in Specimen by Organism specific culture
   */
  "100897-8": "100897-8",

  /**
   * Lipid panel - Serum or Plasma
   */
  "100898-6": "100898-6",

  /**
   * Enterobacteriaceae.extended spectrum beta lactamase resistance phenotype [Identifier] in Specimen by Organism specific culture
   */
  "100899-4": "100899-4",

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
export type ObservationTypeCode =
  typeof ObservationTypeCode[keyof typeof ObservationTypeCode];
