/**
 *  A set of codes specifying the motivation, cause, or rationale of an Act, when such rationale is not reasonably represented as an ActRelationship of type "has reason" linking to another Act.  Examples:
Example reasons that might qualify for being coded in this field might be: "routine requirement", "infectious disease reporting requirement", "on patient request", "required by law".
 * http://terminology.hl7.org/ValueSet/v3-ActReason
 */
export const ActReasonCode = {
  /**
   * ActAccommodationReason
   */
  ActAccommodationReason: "_ActAccommodationReason",

  /**
   * Accommodation Requested Not Available
   */
  AccommodationRequestedNotAvailable: "ACCREQNA",

  /**
   * Floor Convenience
   */
  FloorConvenience: "FLRCNV",

  /**
   * Medical Necessity
   */
  MedicalNecessity: "MEDNEC",

  /**
   * Patient request
   */
  Patientrequest: "PAT",

  /**
   * ActCoverageReason
   */
  ActCoverageReason: "_ActCoverageReason",

  /**
   * EligibilityActReasonCode
   */
  EligibilityActReasonCode: "_EligibilityActReasonCode",

  /**
   * ActIneligibilityReason
   */
  ActIneligibilityReason: "_ActIneligibilityReason",

  /**
   * coverage suspended
   */
  coveragesuspended: "COVSUS",

  /**
   * deceased
   */
  deceased: "DECSD",

  /**
   * registered in error
   */
  registeredinerror: "REGERR",

  /**
   * CoverageEligibilityReason
   */
  CoverageEligibilityReason: "_CoverageEligibilityReason",

  /**
   * age eligibility
   */
  ageeligibility: "AGE",

  /**
   * crime victim
   */
  crimevictim: "CRIME",

  /**
   * disability
   */
  disability: "DIS",

  /**
   * employment benefit
   */
  employmentbenefit: "EMPLOY",

  /**
   * financial eligibility
   */
  financialeligibility: "FINAN",

  /**
   * health status
   */
  healthstatus: "HEALTH",

  /**
   * multiple criteria eligibility
   */
  multiplecriteriaeligibility: "MULTI",

  /**
   * property and casualty condition
   */
  propertyandcasualtycondition: "PNC",

  /**
   * statutory eligibility
   */
  statutoryeligibility: "STATUTORY",

  /**
   * motor vehicle accident victim
   */
  motorvehicleaccidentvictim: "VEHIC",

  /**
   * work related
   */
  workrelated: "WORK",

  /**
   * ActCoverageProviderReason
   */
  ActCoverageProviderReason: "_ActCoverageProviderReason",

  /**
   * ActCoverageServiceReason
   */
  ActCoverageServiceReason: "_ActCoverageServiceReason",

  /**
   * CoverageExclusionReason
   */
  CoverageExclusionReason: "_CoverageExclusionReason",

  /**
   * CoverageFinancialParticipationReason
   */
  CoverageFinancialParticipationReason: "_CoverageFinancialParticipationReason",

  /**
   * CoverageLimitationReason
   */
  CoverageLimitationReason: "_CoverageLimitationReason",

  /**
   * ActInformationManagementReason
   */
  ActInformationManagementReason: "_ActInformationManagementReason",

  /**
   * ActHealthInformationManagementReason
   */
  ActHealthInformationManagementReason: "_ActHealthInformationManagementReason",

  /**
   * ActConsentInformationAccessOverrideReason
   */
  ActConsentInformationAccessOverrideReason:
    "_ActConsentInformationAccessOverrideReason",

  /**
   * emergency treatment override
   */
  emergencytreatmentoverride: "OVRER",

  /**
   * incompetency override
   */
  incompetencyoverride: "OVRINCOMP",

  /**
   * professional judgment override
   */
  professionaljudgmentoverride: "OVRPJ",

  /**
   * public safety override
   */
  publicsafetyoverride: "OVRPS",

  /**
   * third party safety override
   */
  thirdpartysafetyoverride: "OVRTPS",

  /**
   * purpose of use
   */
  purposeofuse: "PurposeOfUse",

  /**
   * healthcare marketing
   */
  healthcaremarketing: "HMARKT",

  /**
   * healthcare operations
   */
  healthcareoperations: "HOPERAT",

  /**
   * care management
   */
  caremanagement: "CAREMGT",

  /**
   * donation
   */
  donation: "DONAT",

  /**
   * fraud
   */
  fraud: "FRAUD",

  /**
   * government
   */
  government: "GOV",

  /**
   * health accreditation
   */
  healthaccreditation: "HACCRED",

  /**
   * health compliance
   */
  healthcompliance: "HCOMPL",

  /**
   * decedent
   */
  decedent: "HDECD",

  /**
   * directory
   */
  directory: "HDIRECT",

  /**
   * healthcare delivery management
   */
  healthcaredeliverymanagement: "HDM",

  /**
   * legal
   */
  legal: "HLEGAL",

  /**
   * health outcome measure
   */
  healthoutcomemeasure: "HOUTCOMS",

  /**
   * health program reporting
   */
  healthprogramreporting: "HPRGRP",

  /**
   * health quality improvement
   */
  healthqualityimprovement: "HQUALIMP",

  /**
   * health system administration
   */
  healthsystemadministration: "HSYSADMIN",

  /**
   * labeling
   */
  labeling: "LABELING",

  /**
   * metadata management
   */
  metadatamanagement: "METAMGT",

  /**
   * member administration
   */
  memberadministration: "MEMADMIN",

  /**
   * military command
   */
  militarycommand: "MILCDM",

  /**
   * patient administration
   */
  patientadministration: "PATADMIN",

  /**
   * patient safety
   */
  patientsafety: "PATSFTY",

  /**
   * performance measure
   */
  performancemeasure: "PERFMSR",

  /**
   * records management
   */
  recordsmanagement: "RECORDMGT",

  /**
   * system development
   */
  systemdevelopment: "SYSDEV",

  /**
   * test health data
   */
  testhealthdata: "HTEST",

  /**
   * training
   */
  training: "TRAIN",

  /**
   * healthcare payment
   */
  healthcarepayment: "HPAYMT",

  /**
   * claim attachment
   */
  claimattachment: "CLMATTCH",

  /**
   * coverage authorization
   */
  coverageauthorization: "COVAUTH",

  /**
   * coverage under policy or program
   */
  coverageunderpolicyorprogram: "COVERAGE",

  /**
   * eligibility determination
   */
  eligibilitydetermination: "ELIGDTRM",

  /**
   * eligibility verification
   */
  eligibilityverification: "ELIGVER",

  /**
   * enrollment
   */
  enrollment: "ENROLLM",

  /**
   * military discharge
   */
  militarydischarge: "MILDCRG",

  /**
   * remittance advice
   */
  remittanceadvice: "REMITADV",

  /**
   * healthcare research
   */
  healthcareresearch: "HRESCH",

  /**
   * biomedical research
   */
  biomedicalresearch: "BIORCH",

  /**
   * clinical trial research
   */
  clinicaltrialresearch: "CLINTRCH",

  /**
   * clinical trial research without patient care
   */
  clinicaltrialresearchwithoutpatientcare: "CLINTRCHNPC",

  /**
   * clinical trial research with patient care
   */
  clinicaltrialresearchwithpatientcare: "CLINTRCHPC",

  /**
   * preclinical trial research
   */
  preclinicaltrialresearch: "PRECLINTRCH",

  /**
   * disease specific healthcare research
   */
  diseasespecifichealthcareresearch: "DSRCH",

  /**
   * population origins or ancestry healthcare research
   */
  populationoriginsorancestryhealthcareresearch: "POARCH",

  /**
   * translational healthcare research
   */
  translationalhealthcareresearch: "TRANSRCH",

  /**
   * patient requested
   */
  patientrequested: "PATRQT",

  /**
   * family requested
   */
  familyrequested: "FAMRQT",

  /**
   * power of attorney
   */
  powerofattorney: "PWATRNY",

  /**
   * support network
   */
  supportnetwork: "SUPNWK",

  /**
   * public health
   */
  publichealth: "PUBHLTH",

  /**
   * disaster
   */
  disaster: "DISASTER",

  /**
   * threat
   */
  threat: "THREAT",

  /**
   * treatment
   */
  treatment: "TREAT",

  /**
   * clinical trial
   */
  clinicaltrial: "CLINTRL",

  /**
   * coordination of care
   */
  coordinationofcare: "COC",

  /**
   * Emergency Treatment
   */
  EmergencyTreatment: "ETREAT",

  /**
   * break the glass
   */
  breaktheglass: "BTG",

  /**
   * emergency room treatment
   */
  emergencyroomtreatment: "ERTREAT",

  /**
   * population health
   */
  populationhealth: "POPHLTH",

  /**
   * ActHealthInformationPrivacyReason
   */
  ActHealthInformationPrivacyReason: "_ActHealthInformationPrivacyReason",

  /**
   * ActInformationPrivacyReason
   */
  ActInformationPrivacyReason: "_ActInformationPrivacyReason",

  /**
   * marketing
   */
  marketing: "MARKT",

  /**
   * operations
   */
  operations: "OPERAT",

  /**
   * subpoena
   */
  subpoena: "LEGAL",

  /**
   * accreditation
   */
  accreditation: "ACCRED",

  /**
   * compliance
   */
  compliance: "COMPL",

  /**
   * entity administration
   */
  entityadministration: "ENADMIN",

  /**
   * outcome measure
   */
  outcomemeasure: "OUTCOMS",

  /**
   * program reporting
   */
  programreporting: "PRGRPT",

  /**
   * quality improvement
   */
  qualityimprovement: "QUALIMP",

  /**
   * system administration
   */
  systemadministration: "SYSADMN",

  /**
   * payment
   */
  payment: "PAYMT",

  /**
   * research
   */
  research: "RESCH",

  /**
   * service
   */
  service: "SRVC",

  /**
   * ActInvalidReason
   */
  ActInvalidReason: "_ActInvalidReason",

  /**
   * adverse storage condition
   */
  adversestoragecondition: "ADVSTORAGE",

  /**
   * cold chain break
   */
  coldchainbreak: "COLDCHNBRK",

  /**
   * expired lot
   */
  expiredlot: "EXPLOT",

  /**
   * administered outside recommended schedule or practice
   */
  administeredoutsiderecommendedscheduleorpractice: "OUTSIDESCHED",

  /**
   * product recall
   */
  productrecall: "PRODRECALL",

  /**
   * ActInvoiceCancelReason
   */
  ActInvoiceCancelReason: "_ActInvoiceCancelReason",

  /**
   * incorrect covered party as patient
   */
  incorrectcoveredpartyaspatient: "INCCOVPTY",

  /**
   * incorrect billing
   */
  incorrectbilling: "INCINVOICE",

  /**
   * incorrect policy
   */
  incorrectpolicy: "INCPOLICY",

  /**
   * incorrect provider
   */
  incorrectprovider: "INCPROV",

  /**
   * ActNoImmunizationReason
   */
  ActNoImmunizationReason: "_ActNoImmunizationReason",

  /**
   * immunity
   */
  immunity: "IMMUNE",

  /**
   * medical precaution
   */
  medicalprecaution: "MEDPREC",

  /**
   * product out of stock
   */
  productoutofstock: "OSTOCK",

  /**
   * patient objection
   */
  patientobjection: "PATOBJ",

  /**
   * philosophical objection
   */
  philosophicalobjection: "PHILISOP",

  /**
   * religious objection
   */
  religiousobjection: "RELIG",

  /**
   * vaccine efficacy concerns
   */
  vaccineefficacyconcerns: "VACEFF",

  /**
   * vaccine safety concerns
   */
  vaccinesafetyconcerns: "VACSAF",

  /**
   * ActSupplyFulfillmentRefusalReason
   */
  ActSupplyFulfillmentRefusalReason: "_ActSupplyFulfillmentRefusalReason",

  /**
   * order stopped
   */
  orderstopped: "FRR01",

  /**
   * stale-dated order
   */
  staledatedorder: "FRR02",

  /**
   * incomplete data
   */
  incompletedata: "FRR03",

  /**
   * product unavailable
   */
  productunavailable: "FRR04",

  /**
   * ethical/religious
   */
  ethicalreligious: "FRR05",

  /**
   * unable to provide care
   */
  unabletoprovidecare: "FRR06",

  /**
   * ClinicalResearchEventReason
   */
  ClinicalResearchEventReason: "_ClinicalResearchEventReason",

  /**
   * retest
   */
  retest: "RET",

  /**
   * scheduled
   */
  scheduled: "SCH",

  /**
   * termination
   */
  termination: "TRM",

  /**
   * unscheduled
   */
  unscheduled: "UNS",

  /**
   * ClinicalResearchObservationReason
   */
  ClinicalResearchObservationReason: "_ClinicalResearchObservationReason",

  /**
   * non-protocol
   */
  nonprotocol: "NPT",

  /**
   * per protocol
   */
  perprotocol: "PPT",

  /**
   * per definition
   */
  perdefinition: "UPT",

  /**
   * CombinedPharmacyOrderSuspendReasonCode
   */
  CombinedPharmacyOrderSuspendReasonCode:
    "_CombinedPharmacyOrderSuspendReasonCode",

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
   * ControlActNullificationReasonCode
   */
  ControlActNullificationReasonCode: "_ControlActNullificationReasonCode",

  /**
   * altered decision
   */
  altereddecision: "ALTD",

  /**
   * entered in error
   */
  enteredinerror: "EIE",

  /**
   * no record match
   */
  norecordmatch: "NORECMTCH",

  /**
   * ControlActNullificationRefusalReasonType
   */
  ControlActNullificationRefusalReasonType:
    "_ControlActNullificationRefusalReasonType",

  /**
   * in requested state
   */
  inrequestedstate: "INRQSTATE",

  /**
   * no match
   */
  nomatch: "NOMATCH",

  /**
   * no product match
   */
  noproductmatch: "NOPRODMTCH",

  /**
   * no service match
   */
  noservicematch: "NOSERMTCH",

  /**
   * no version match
   */
  noversionmatch: "NOVERMTCH",

  /**
   * no permission
   */
  nopermission: "NOPERM",

  /**
   * no user permission
   */
  nouserpermission: "NOUSERPERM",

  /**
   * no agent permission
   */
  noagentpermission: "NOAGNTPERM",

  /**
   * no user permission
   */
  nouserpermission: "NOUSRPERM",

  /**
   * wrong version
   */
  wrongversion: "WRNGVER",

  /**
   * ControlActReason
   */
  ControlActReason: "_ControlActReason",

  /**
   * medication order abort reason
   */
  medicationorderabortreason: "_MedicationOrderAbortReasonCode",

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
   * medication order release reason
   */
  medicationorderreleasereason: "_MedicationOrderReleaseReasonCode",

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
   * pharmacy supply request renewal refusal reason
   */
  pharmacysupplyrequestrenewalrefusalreason:
    "_PharmacySupplyRequestRenewalRefusalReasonCode",

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
   * supply order abort reason
   */
  supplyorderabortreason: "_SupplyOrderAbortReasonCode",

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
   * GenericUpdateReasonCode
   */
  GenericUpdateReasonCode: "_GenericUpdateReasonCode",

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
   * patient profile query reason
   */
  patientprofilequeryreason: "_PatientProfileQueryReasonCode",

  /**
   * administrative review
   */
  administrativereview: "ADMREV",

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
   * PharmacySupplyRequestFulfillerRevisionRefusalReasonCode
   */
  PharmacySupplyRequestFulfillerRevisionRefusalReasonCode:
    "_PharmacySupplyRequestFulfillerRevisionRefusalReasonCode",

  /**
   * locked
   */
  locked: "LOCKED",

  /**
   * unknown target
   */
  unknowntarget: "UNKWNTARGET",

  /**
   * RefusalReasonCode
   */
  RefusalReasonCode: "_RefusalReasonCode",

  /**
   * SchedulingActReason
   */
  SchedulingActReason: "_SchedulingActReason",

  /**
   * Unexpected Block (of Schedule)
   */
  UnexpectedBlockofSchedule: "BLK",

  /**
   * Patient Deceased
   */
  PatientDeceased: "DEC",

  /**
   * No Financial Backing
   */
  NoFinancialBacking: "FIN",

  /**
   * Medical Status Altered
   */
  MedicalStatusAltered: "MED",

  /**
   * In an outside meeting
   */
  Inanoutsidemeeting: "MTG",

  /**
   * Physician request
   */
  Physicianrequest: "PHY",

  /**
   * StatusRevisionRefusalReasonCode
   */
  StatusRevisionRefusalReasonCode: "_StatusRevisionRefusalReasonCode",

  /**
   * fully filled
   */
  fullyfilled: "FILLED",

  /**
   * SubstanceAdministrationPermissionRefusalReasonCode
   */
  SubstanceAdministrationPermissionRefusalReasonCode:
    "_SubstanceAdministrationPermissionRefusalReasonCode",

  /**
   * patient not eligible
   */
  patientnoteligible: "PATINELIG",

  /**
   * protocol not met
   */
  protocolnotmet: "PROTUNMET",

  /**
   * provider not authorized
   */
  providernotauthorized: "PROVUNAUTH",

  /**
   * SubstanceAdminSubstitutionNotAllowedReason
   */
  SubstanceAdminSubstitutionNotAllowedReason:
    "_SubstanceAdminSubstitutionNotAllowedReason",

  /**
   * allergy intolerance
   */
  allergyintolerance: "ALGINT",

  /**
   * compliance concern
   */
  complianceconcern: "COMPCON",

  /**
   * therapeutic characteristics
   */
  therapeuticcharacteristics: "THERCHAR",

  /**
   * clinical trial drug
   */
  clinicaltrialdrug: "TRIAL",

  /**
   * SubstanceAdminSubstitutionReason
   */
  SubstanceAdminSubstitutionReason: "_SubstanceAdminSubstitutionReason",

  /**
   * continuing therapy
   */
  continuingtherapy: "CT",

  /**
   * formulary policy
   */
  formularypolicy: "FP",

  /**
   * out of stock
   */
  outofstock: "OS",

  /**
   * regulatory requirement
   */
  regulatoryrequirement: "RR",

  /**
   * TransferActReason
   */
  TransferActReason: "_TransferActReason",

  /**
   * Error
   */
  Error: "ER",

  /**
   * Request
   */
  Request: "RQ",

  /**
   * ActAdjudicationReason
   */
  ActAdjudicationReason: "_ActAdjudicationReason",

  /**
   * ActBillableServiceReason
   */
  ActBillableServiceReason: "_ActBillableServiceReason",

  /**
   * ActBillableClinicalServiceReason
   */
  ActBillableClinicalServiceReason: "_ActBillableClinicalServiceReason",

  /**
   * MedicallyNecessaryDuplicateProcedureReason
   */
  MedicallyNecessaryDuplicateProcedureReason:
    "_MedicallyNecessaryDuplicateProcedureReason",

  /**
   * ActCoverageLevelRasonCode
   */
  ActCoverageLevelRasonCode: "_ActCoverageLevelRasonCode",

  /**
   * ActImmunizationReason
   */
  ActImmunizationReason: "_ActImmunizationReason",

  /**
   * ConrolActNullificationReasonCode
   */
  ConrolActNullificationReasonCode: "_ConrolActNullificationReasonCode",

  /**
   * NonPerformanceReasonCode
   */
  NonPerformanceReasonCode: "_NonPerformanceReasonCode",

  /**
   * ReasonForNotEvaluatingDevice
   */
  ReasonForNotEvaluatingDevice: "_ReasonForNotEvaluatingDevice",

  /**
   * ReferralReasonCode
   */
  ReferralReasonCode: "_ReferralReasonCode",

  /**
   *
   */
  BONUS: "BONUS",

  /**
   * Children only
   */
  Childrenonly: "CHD",

  /**
   * Dependents only
   */
  Dependentsonly: "DEP",

  /**
   * Employee and children
   */
  Employeeandchildren: "ECH",

  /**
   *
   */
  EDU: "EDU",

  /**
   * Employee only
   */
  Employeeonly: "EMP",

  /**
   * Employee and spouse
   */
  Employeeandspouse: "ESP",

  /**
   * Family
   */
  Family: "FAM",

  /**
   * Individual
   */
  Individual: "IND",

  /**
   *
   */
  INVOICE: "INVOICE",

  /**
   *
   */
  PROA: "PROA",

  /**
   *
   */
  RECOV: "RECOV",

  /**
   *
   */
  RETRO: "RETRO",

  /**
   * Spouse and children
   */
  Spouseandchildren: "SPC",

  /**
   * Spouse only
   */
  Spouseonly: "SPO",

  /**
   *
   */
  TRAN: "TRAN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActReasonCode = typeof ActReasonCode[keyof typeof ActReasonCode];
