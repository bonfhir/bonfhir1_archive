/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ValidationIssue
 */
export const ValidationIssueCode = {
  /**
   * Unknown key identifier
   */
  Unknownkeyidentifier: "KEY204",

  /**
   * Duplicate key identifier
   */
  Duplicatekeyidentifier: "KEY205",

  /**
   * validation issue
   */
  validationissue: "VALIDAT",

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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ValidationIssueCode =
  typeof ValidationIssueCode[keyof typeof ValidationIssueCode];
