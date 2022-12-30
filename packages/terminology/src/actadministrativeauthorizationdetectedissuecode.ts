/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActAdministrativeAuthorizationDetectedIssueCode
 */
export const ActAdministrativeAuthorizationDetectedIssueCodeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActAdministrativeAuthorizationDetectedIssueCodeCode =
  typeof ActAdministrativeAuthorizationDetectedIssueCodeCode[keyof typeof ActAdministrativeAuthorizationDetectedIssueCodeCode];
