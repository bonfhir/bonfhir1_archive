/**
 * Identifies why a specific query, request, or other trigger event occurred.
 * http://terminology.hl7.org/ValueSet/v3-ControlActReason
 */
export const ControlActReasonCode = {
  /**
   * ControlActReason
   */
  ControlActReason: "_ControlActReason",

  /**
   * product discontinued
   */
  productdiscontinued: "DISCONT",

  /**
   * ineffective
   */
  ineffective: "INEFFECT",

  /**
   * response to monitoring
   */
  responsetomonitoring: "MONIT",

  /**
   * no longer required for treatment
   */
  nolongerrequiredfortreatment: "NOREQ",

  /**
   * not covered
   */
  notcovered: "NOTCOVER",

  /**
   * patient refuse
   */
  patientrefuse: "PREFUS",

  /**
   * product recalled
   */
  productrecalled: "RECALL",

  /**
   * change in order
   */
  changeinorder: "REPLACE",

  /**
   * change in medication/dose
   */
  changeinmedicationdose: "DOSECHG",

  /**
   * error in order
   */
  errorinorder: "REPLACEFIX",

  /**
   * unable to use
   */
  unabletouse: "UNABLE",

  /**
   * suspend reason no longer applies
   */
  suspendreasonnolongerapplies: "HOLDDONE",

  /**
   * suspend reason inappropriate
   */
  suspendreasoninappropriate: "HOLDINAP",

  /**
   * ModifyPrescriptionReasonType
   */
  ModifyPrescriptionReasonType: "_ModifyPrescriptionReasonType",

  /**
   * administrative error in order
   */
  administrativeerrorinorder: "ADMINERROR",

  /**
   * clinical modification
   */
  clinicalmodification: "CLINMOD",

  /**
   * PharmacySupplyEventAbortReason
   */
  PharmacySupplyEventAbortReason: "_PharmacySupplyEventAbortReason",

  /**
   * contraindication
   */
  contraindication: "CONTRA",

  /**
   * order aborted
   */
  orderaborted: "FOABORT",

  /**
   * order suspended
   */
  ordersuspended: "FOSUSP",

  /**
   * not picked up
   */
  notpickedup: "NOPICK",

  /**
   * patient changed mind
   */
  patientchangedmind: "PATDEC",

  /**
   * change supply quantity
   */
  changesupplyquantity: "QUANTCHG",

  /**
   * pharmacy supply event stock reason
   */
  pharmacysupplyeventstockreason: "_PharmacySupplyEventStockReasonCode",

  /**
   * floor stock
   */
  floorstock: "FLRSTCK",

  /**
   * long term care use
   */
  longtermcareuse: "LTC",

  /**
   * office use
   */
  officeuse: "OFFICE",

  /**
   * pharmacy transfer
   */
  pharmacytransfer: "PHARM",

  /**
   * program use
   */
  programuse: "PROG",

  /**
   * new prescription exists
   */
  newprescriptionexists: "ALREADYRX",

  /**
   * family physician must authorize further fills
   */
  familyphysicianmustauthorizefurtherfills: "FAMPHYS",

  /**
   * modified prescription exists
   */
  modifiedprescriptionexists: "MODIFY",

  /**
   * patient must make appointment
   */
  patientmustmakeappointment: "NEEDAPMT",

  /**
   * prescriber not available
   */
  prescribernotavailable: "NOTAVAIL",

  /**
   * patient no longer in this practice
   */
  patientnolongerinthispractice: "NOTPAT",

  /**
   * medication on hold
   */
  medicationonhold: "ONHOLD",

  /**
   * product not available
   */
  productnotavailable: "PRNA",

  /**
   * prescriber stopped medication for patient
   */
  prescriberstoppedmedicationforpatient: "STOPMED",

  /**
   * too early
   */
  tooearly: "TOOEARLY",

  /**
   * condition improved
   */
  conditionimproved: "IMPROV",

  /**
   * intolerance
   */
  intolerance: "INTOL",

  /**
   * new strength
   */
  newstrength: "NEWSTR",

  /**
   * new therapy
   */
  newtherapy: "NEWTHER",

  /**
   * ControlActReasonConditionNullify
   */
  ControlActReasonConditionNullify: "_ControlActReasonConditionNullify",

  /**
   * information change
   */
  informationchange: "CHGDATA",

  /**
   * error correction
   */
  errorcorrection: "FIXDATA",

  /**
   * merge data
   */
  mergedata: "MDATA",

  /**
   * new information
   */
  newinformation: "NEWDATA",

  /**
   * unmerge data
   */
  unmergedata: "UMDATA",

  /**
   * try another treatment first
   */
  tryanothertreatmentfirst: "ALTCHOICE",

  /**
   * prescription requires clarification
   */
  prescriptionrequiresclarification: "CLARIF",

  /**
   * drug level too high
   */
  drugleveltoohigh: "DRUGHIGH",

  /**
   * admission to hospital
   */
  admissiontohospital: "HOSPADM",

  /**
   * lab interference issues
   */
  labinterferenceissues: "LABINT",

  /**
   * patient not-available
   */
  patientnotavailable: "NON-AVAIL",

  /**
   * parent is pregnant/breast feeding
   */
  parentispregnantbreastfeeding: "PREG",

  /**
   * allergy
   */
  allergy: "SALG",

  /**
   * drug interacts with another drug
   */
  druginteractswithanotherdrug: "SDDI",

  /**
   * duplicate therapy
   */
  duplicatetherapy: "SDUPTHER",

  /**
   * suspected intolerance
   */
  suspectedintolerance: "SINTOL",

  /**
   * patient scheduled for surgery
   */
  patientscheduledforsurgery: "SURG",

  /**
   * waiting for old drug to wash out
   */
  waitingforolddrugtowashout: "WASHOUT",

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
   * administrative review
   */
  administrativereview: "ADMREV",

  /**
   * subpoena
   */
  subpoena: "LEGAL",

  /**
   * patient care
   */
  patientcare: "PATCAR",

  /**
   * patient request query
   */
  patientrequestquery: "PATREQ",

  /**
   * practice review
   */
  practicereview: "PRCREV",

  /**
   * regulatory review
   */
  regulatoryreview: "REGUL",

  /**
   * research
   */
  research: "RSRCH",

  /**
   * validation review
   */
  validationreview: "VALIDATION",

  /**
   * altered decision
   */
  altereddecision: "ALTD",

  /**
   * entered in error
   */
  enteredinerror: "EIE",

  /**
   * StatusRevisionRefusalReasonCode
   */
  StatusRevisionRefusalReasonCode: "_StatusRevisionRefusalReasonCode",

  /**
   * no record match
   */
  norecordmatch: "NORECMTCH",

  /**
   * in requested state
   */
  inrequestedstate: "INRQSTATE",

  /**
   * no user permission
   */
  nouserpermission: "NOUSERPERM",

  /**
   * fully filled
   */
  fullyfilled: "FILLED",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ControlActReasonCode =
  typeof ControlActReasonCode[keyof typeof ControlActReasonCode];
