/**
 * Administration of the proposed therapy may be inappropriate or contraindicated as proposed
 * http://terminology.hl7.org/ValueSet/v3-AdministrationDetectedIssueCode
 */
export const AdministrationDetectedIssueCodeCode = {
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
   * High Dose for Age Alert
   */
  HighDoseforAgeAlert: "DOSEHINDA",

  /**
   * Low Dose for Age Alert
   */
  LowDoseforAgeAlert: "DOSELINDA",

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
   * previously ineffective
   */
  previouslyineffective: "PREVINEF",

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
   * drug action detected issue
   */
  drugactiondetectedissue: "DACT",

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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdministrationDetectedIssueCodeCode =
  typeof AdministrationDetectedIssueCodeCode[keyof typeof AdministrationDetectedIssueCodeCode];
