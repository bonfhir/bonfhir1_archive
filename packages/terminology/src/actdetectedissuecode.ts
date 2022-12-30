/**
 * Identifies types of detected issues for Act class "ALRT"
 * http://terminology.hl7.org/ValueSet/v3-ActDetectedIssueCode
 */
export const ActDetectedIssueCodeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActDetectedIssueCodeCode =
  typeof ActDetectedIssueCodeCode[keyof typeof ActDetectedIssueCodeCode];
