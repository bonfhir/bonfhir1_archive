/**
 *  A set of codes specifying the motivation, cause, or rationale of an Act, when such rationale is not reasonably represented as an ActRelationship of type "has reason" linking to another Act.  Examples:
Example reasons that might qualify for being coded in this field might be: "routine requirement", "infectious disease reporting requirement", "on patient request", "required by law".
 * http://terminology.hl7.org/ValueSet/v3-ActReason
 */
export const ActReasonCode = {
  /**
   * ActAccommodationReason
   */
  _ActAccommodationReason: "_ActAccommodationReason",

  /**
   * Accommodation Requested Not Available
   */
  ACCREQNA: "ACCREQNA",

  /**
   * Floor Convenience
   */
  FLRCNV: "FLRCNV",

  /**
   * Medical Necessity
   */
  MEDNEC: "MEDNEC",

  /**
   * Patient request
   */
  PAT: "PAT",

  /**
   * ActCoverageReason
   */
  _ActCoverageReason: "_ActCoverageReason",

  /**
   * EligibilityActReasonCode
   */
  _EligibilityActReasonCode: "_EligibilityActReasonCode",

  /**
   * ActIneligibilityReason
   */
  _ActIneligibilityReason: "_ActIneligibilityReason",

  /**
   * coverage suspended
   */
  COVSUS: "COVSUS",

  /**
   * deceased
   */
  DECSD: "DECSD",

  /**
   * registered in error
   */
  REGERR: "REGERR",

  /**
   * CoverageEligibilityReason
   */
  _CoverageEligibilityReason: "_CoverageEligibilityReason",

  /**
   * age eligibility
   */
  AGE: "AGE",

  /**
   * crime victim
   */
  CRIME: "CRIME",

  /**
   * disability
   */
  DIS: "DIS",

  /**
   * employment benefit
   */
  EMPLOY: "EMPLOY",

  /**
   * financial eligibility
   */
  FINAN: "FINAN",

  /**
   * health status
   */
  HEALTH: "HEALTH",

  /**
   * multiple criteria eligibility
   */
  MULTI: "MULTI",

  /**
   * property and casualty condition
   */
  PNC: "PNC",

  /**
   * statutory eligibility
   */
  STATUTORY: "STATUTORY",

  /**
   * motor vehicle accident victim
   */
  VEHIC: "VEHIC",

  /**
   * work related
   */
  WORK: "WORK",

  /**
   * ActCoverageProviderReason
   */
  _ActCoverageProviderReason: "_ActCoverageProviderReason",

  /**
   * ActCoverageServiceReason
   */
  _ActCoverageServiceReason: "_ActCoverageServiceReason",

  /**
   * CoverageExclusionReason
   */
  _CoverageExclusionReason: "_CoverageExclusionReason",

  /**
   * CoverageFinancialParticipationReason
   */
  _CoverageFinancialParticipationReason:
    "_CoverageFinancialParticipationReason",

  /**
   * CoverageLimitationReason
   */
  _CoverageLimitationReason: "_CoverageLimitationReason",

  /**
   * ActInformationManagementReason
   */
  _ActInformationManagementReason: "_ActInformationManagementReason",

  /**
   * ActHealthInformationManagementReason
   */
  _ActHealthInformationManagementReason:
    "_ActHealthInformationManagementReason",

  /**
   * ActConsentInformationAccessOverrideReason
   */
  _ActConsentInformationAccessOverrideReason:
    "_ActConsentInformationAccessOverrideReason",

  /**
   * emergency treatment override
   */
  OVRER: "OVRER",

  /**
   * incompetency override
   */
  OVRINCOMP: "OVRINCOMP",

  /**
   * professional judgment override
   */
  OVRPJ: "OVRPJ",

  /**
   * public safety override
   */
  OVRPS: "OVRPS",

  /**
   * third party safety override
   */
  OVRTPS: "OVRTPS",

  /**
   * purpose of use
   */
  PurposeOfUse: "PurposeOfUse",

  /**
   * healthcare marketing
   */
  HMARKT: "HMARKT",

  /**
   * healthcare operations
   */
  HOPERAT: "HOPERAT",

  /**
   * care management
   */
  CAREMGT: "CAREMGT",

  /**
   * donation
   */
  DONAT: "DONAT",

  /**
   * fraud
   */
  FRAUD: "FRAUD",

  /**
   * government
   */
  GOV: "GOV",

  /**
   * health accreditation
   */
  HACCRED: "HACCRED",

  /**
   * health compliance
   */
  HCOMPL: "HCOMPL",

  /**
   * decedent
   */
  HDECD: "HDECD",

  /**
   * directory
   */
  HDIRECT: "HDIRECT",

  /**
   * healthcare delivery management
   */
  HDM: "HDM",

  /**
   * legal
   */
  HLEGAL: "HLEGAL",

  /**
   * health outcome measure
   */
  HOUTCOMS: "HOUTCOMS",

  /**
   * health program reporting
   */
  HPRGRP: "HPRGRP",

  /**
   * health quality improvement
   */
  HQUALIMP: "HQUALIMP",

  /**
   * health system administration
   */
  HSYSADMIN: "HSYSADMIN",

  /**
   * labeling
   */
  LABELING: "LABELING",

  /**
   * metadata management
   */
  METAMGT: "METAMGT",

  /**
   * member administration
   */
  MEMADMIN: "MEMADMIN",

  /**
   * military command
   */
  MILCDM: "MILCDM",

  /**
   * patient administration
   */
  PATADMIN: "PATADMIN",

  /**
   * patient safety
   */
  PATSFTY: "PATSFTY",

  /**
   * performance measure
   */
  PERFMSR: "PERFMSR",

  /**
   * records management
   */
  RECORDMGT: "RECORDMGT",

  /**
   * system development
   */
  SYSDEV: "SYSDEV",

  /**
   * test health data
   */
  HTEST: "HTEST",

  /**
   * training
   */
  TRAIN: "TRAIN",

  /**
   * healthcare payment
   */
  HPAYMT: "HPAYMT",

  /**
   * claim attachment
   */
  CLMATTCH: "CLMATTCH",

  /**
   * coverage authorization
   */
  COVAUTH: "COVAUTH",

  /**
   * coverage under policy or program
   */
  COVERAGE: "COVERAGE",

  /**
   * eligibility determination
   */
  ELIGDTRM: "ELIGDTRM",

  /**
   * eligibility verification
   */
  ELIGVER: "ELIGVER",

  /**
   * enrollment
   */
  ENROLLM: "ENROLLM",

  /**
   * military discharge
   */
  MILDCRG: "MILDCRG",

  /**
   * remittance advice
   */
  REMITADV: "REMITADV",

  /**
   * healthcare research
   */
  HRESCH: "HRESCH",

  /**
   * biomedical research
   */
  BIORCH: "BIORCH",

  /**
   * clinical trial research
   */
  CLINTRCH: "CLINTRCH",

  /**
   * clinical trial research without patient care
   */
  CLINTRCHNPC: "CLINTRCHNPC",

  /**
   * clinical trial research with patient care
   */
  CLINTRCHPC: "CLINTRCHPC",

  /**
   * preclinical trial research
   */
  PRECLINTRCH: "PRECLINTRCH",

  /**
   * disease specific healthcare research
   */
  DSRCH: "DSRCH",

  /**
   * population origins or ancestry healthcare research
   */
  POARCH: "POARCH",

  /**
   * translational healthcare research
   */
  TRANSRCH: "TRANSRCH",

  /**
   * patient requested
   */
  PATRQT: "PATRQT",

  /**
   * family requested
   */
  FAMRQT: "FAMRQT",

  /**
   * power of attorney
   */
  PWATRNY: "PWATRNY",

  /**
   * support network
   */
  SUPNWK: "SUPNWK",

  /**
   * public health
   */
  PUBHLTH: "PUBHLTH",

  /**
   * disaster
   */
  DISASTER: "DISASTER",

  /**
   * threat
   */
  THREAT: "THREAT",

  /**
   * treatment
   */
  TREAT: "TREAT",

  /**
   * clinical trial
   */
  CLINTRL: "CLINTRL",

  /**
   * coordination of care
   */
  COC: "COC",

  /**
   * Emergency Treatment
   */
  ETREAT: "ETREAT",

  /**
   * break the glass
   */
  BTG: "BTG",

  /**
   * emergency room treatment
   */
  ERTREAT: "ERTREAT",

  /**
   * population health
   */
  POPHLTH: "POPHLTH",

  /**
   * ActHealthInformationPrivacyReason
   */
  _ActHealthInformationPrivacyReason: "_ActHealthInformationPrivacyReason",

  /**
   * ActInformationPrivacyReason
   */
  _ActInformationPrivacyReason: "_ActInformationPrivacyReason",

  /**
   * marketing
   */
  MARKT: "MARKT",

  /**
   * operations
   */
  OPERAT: "OPERAT",

  /**
   * subpoena
   */
  LEGAL: "LEGAL",

  /**
   * accreditation
   */
  ACCRED: "ACCRED",

  /**
   * compliance
   */
  COMPL: "COMPL",

  /**
   * entity administration
   */
  ENADMIN: "ENADMIN",

  /**
   * outcome measure
   */
  OUTCOMS: "OUTCOMS",

  /**
   * program reporting
   */
  PRGRPT: "PRGRPT",

  /**
   * quality improvement
   */
  QUALIMP: "QUALIMP",

  /**
   * system administration
   */
  SYSADMN: "SYSADMN",

  /**
   * payment
   */
  PAYMT: "PAYMT",

  /**
   * research
   */
  RESCH: "RESCH",

  /**
   * service
   */
  SRVC: "SRVC",

  /**
   * ActInvalidReason
   */
  _ActInvalidReason: "_ActInvalidReason",

  /**
   * adverse storage condition
   */
  ADVSTORAGE: "ADVSTORAGE",

  /**
   * cold chain break
   */
  COLDCHNBRK: "COLDCHNBRK",

  /**
   * expired lot
   */
  EXPLOT: "EXPLOT",

  /**
   * administered outside recommended schedule or practice
   */
  OUTSIDESCHED: "OUTSIDESCHED",

  /**
   * product recall
   */
  PRODRECALL: "PRODRECALL",

  /**
   * ActInvoiceCancelReason
   */
  _ActInvoiceCancelReason: "_ActInvoiceCancelReason",

  /**
   * incorrect covered party as patient
   */
  INCCOVPTY: "INCCOVPTY",

  /**
   * incorrect billing
   */
  INCINVOICE: "INCINVOICE",

  /**
   * incorrect policy
   */
  INCPOLICY: "INCPOLICY",

  /**
   * incorrect provider
   */
  INCPROV: "INCPROV",

  /**
   * ActNoImmunizationReason
   */
  _ActNoImmunizationReason: "_ActNoImmunizationReason",

  /**
   * immunity
   */
  IMMUNE: "IMMUNE",

  /**
   * medical precaution
   */
  MEDPREC: "MEDPREC",

  /**
   * product out of stock
   */
  OSTOCK: "OSTOCK",

  /**
   * patient objection
   */
  PATOBJ: "PATOBJ",

  /**
   * philosophical objection
   */
  PHILISOP: "PHILISOP",

  /**
   * religious objection
   */
  RELIG: "RELIG",

  /**
   * vaccine efficacy concerns
   */
  VACEFF: "VACEFF",

  /**
   * vaccine safety concerns
   */
  VACSAF: "VACSAF",

  /**
   * ActSupplyFulfillmentRefusalReason
   */
  _ActSupplyFulfillmentRefusalReason: "_ActSupplyFulfillmentRefusalReason",

  /**
   * order stopped
   */
  FRR01: "FRR01",

  /**
   * stale-dated order
   */
  FRR02: "FRR02",

  /**
   * incomplete data
   */
  FRR03: "FRR03",

  /**
   * product unavailable
   */
  FRR04: "FRR04",

  /**
   * ethical/religious
   */
  FRR05: "FRR05",

  /**
   * unable to provide care
   */
  FRR06: "FRR06",

  /**
   * ClinicalResearchEventReason
   */
  _ClinicalResearchEventReason: "_ClinicalResearchEventReason",

  /**
   * retest
   */
  RET: "RET",

  /**
   * scheduled
   */
  SCH: "SCH",

  /**
   * termination
   */
  TRM: "TRM",

  /**
   * unscheduled
   */
  UNS: "UNS",

  /**
   * ClinicalResearchObservationReason
   */
  _ClinicalResearchObservationReason: "_ClinicalResearchObservationReason",

  /**
   * non-protocol
   */
  NPT: "NPT",

  /**
   * per protocol
   */
  PPT: "PPT",

  /**
   * per definition
   */
  UPT: "UPT",

  /**
   * CombinedPharmacyOrderSuspendReasonCode
   */
  _CombinedPharmacyOrderSuspendReasonCode:
    "_CombinedPharmacyOrderSuspendReasonCode",

  /**
   * try another treatment first
   */
  ALTCHOICE: "ALTCHOICE",

  /**
   * prescription requires clarification
   */
  CLARIF: "CLARIF",

  /**
   * drug level too high
   */
  DRUGHIGH: "DRUGHIGH",

  /**
   * admission to hospital
   */
  HOSPADM: "HOSPADM",

  /**
   * lab interference issues
   */
  LABINT: "LABINT",

  /**
   * patient not-available
   */
  "NON-AVAIL": "NON-AVAIL",

  /**
   * parent is pregnant/breast feeding
   */
  PREG: "PREG",

  /**
   * allergy
   */
  SALG: "SALG",

  /**
   * drug interacts with another drug
   */
  SDDI: "SDDI",

  /**
   * duplicate therapy
   */
  SDUPTHER: "SDUPTHER",

  /**
   * suspected intolerance
   */
  SINTOL: "SINTOL",

  /**
   * patient scheduled for surgery
   */
  SURG: "SURG",

  /**
   * waiting for old drug to wash out
   */
  WASHOUT: "WASHOUT",

  /**
   * ControlActNullificationReasonCode
   */
  _ControlActNullificationReasonCode: "_ControlActNullificationReasonCode",

  /**
   * altered decision
   */
  ALTD: "ALTD",

  /**
   * entered in error
   */
  EIE: "EIE",

  /**
   * no record match
   */
  NORECMTCH: "NORECMTCH",

  /**
   * ControlActNullificationRefusalReasonType
   */
  _ControlActNullificationRefusalReasonType:
    "_ControlActNullificationRefusalReasonType",

  /**
   * in requested state
   */
  INRQSTATE: "INRQSTATE",

  /**
   * no match
   */
  NOMATCH: "NOMATCH",

  /**
   * no product match
   */
  NOPRODMTCH: "NOPRODMTCH",

  /**
   * no service match
   */
  NOSERMTCH: "NOSERMTCH",

  /**
   * no version match
   */
  NOVERMTCH: "NOVERMTCH",

  /**
   * no permission
   */
  NOPERM: "NOPERM",

  /**
   * no user permission
   */
  NOUSERPERM: "NOUSERPERM",

  /**
   * no agent permission
   */
  NOAGNTPERM: "NOAGNTPERM",

  /**
   * no user permission
   */
  NOUSRPERM: "NOUSRPERM",

  /**
   * wrong version
   */
  WRNGVER: "WRNGVER",

  /**
   * ControlActReason
   */
  _ControlActReason: "_ControlActReason",

  /**
   * medication order abort reason
   */
  _MedicationOrderAbortReasonCode: "_MedicationOrderAbortReasonCode",

  /**
   * product discontinued
   */
  DISCONT: "DISCONT",

  /**
   * ineffective
   */
  INEFFECT: "INEFFECT",

  /**
   * response to monitoring
   */
  MONIT: "MONIT",

  /**
   * no longer required for treatment
   */
  NOREQ: "NOREQ",

  /**
   * not covered
   */
  NOTCOVER: "NOTCOVER",

  /**
   * patient refuse
   */
  PREFUS: "PREFUS",

  /**
   * product recalled
   */
  RECALL: "RECALL",

  /**
   * change in order
   */
  REPLACE: "REPLACE",

  /**
   * change in medication/dose
   */
  DOSECHG: "DOSECHG",

  /**
   * error in order
   */
  REPLACEFIX: "REPLACEFIX",

  /**
   * unable to use
   */
  UNABLE: "UNABLE",

  /**
   * medication order release reason
   */
  _MedicationOrderReleaseReasonCode: "_MedicationOrderReleaseReasonCode",

  /**
   * suspend reason no longer applies
   */
  HOLDDONE: "HOLDDONE",

  /**
   * suspend reason inappropriate
   */
  HOLDINAP: "HOLDINAP",

  /**
   * ModifyPrescriptionReasonType
   */
  _ModifyPrescriptionReasonType: "_ModifyPrescriptionReasonType",

  /**
   * administrative error in order
   */
  ADMINERROR: "ADMINERROR",

  /**
   * clinical modification
   */
  CLINMOD: "CLINMOD",

  /**
   * PharmacySupplyEventAbortReason
   */
  _PharmacySupplyEventAbortReason: "_PharmacySupplyEventAbortReason",

  /**
   * contraindication
   */
  CONTRA: "CONTRA",

  /**
   * order aborted
   */
  FOABORT: "FOABORT",

  /**
   * order suspended
   */
  FOSUSP: "FOSUSP",

  /**
   * not picked up
   */
  NOPICK: "NOPICK",

  /**
   * patient changed mind
   */
  PATDEC: "PATDEC",

  /**
   * change supply quantity
   */
  QUANTCHG: "QUANTCHG",

  /**
   * pharmacy supply event stock reason
   */
  _PharmacySupplyEventStockReasonCode: "_PharmacySupplyEventStockReasonCode",

  /**
   * floor stock
   */
  FLRSTCK: "FLRSTCK",

  /**
   * long term care use
   */
  LTC: "LTC",

  /**
   * office use
   */
  OFFICE: "OFFICE",

  /**
   * pharmacy transfer
   */
  PHARM: "PHARM",

  /**
   * program use
   */
  PROG: "PROG",

  /**
   * pharmacy supply request renewal refusal reason
   */
  _PharmacySupplyRequestRenewalRefusalReasonCode:
    "_PharmacySupplyRequestRenewalRefusalReasonCode",

  /**
   * new prescription exists
   */
  ALREADYRX: "ALREADYRX",

  /**
   * family physician must authorize further fills
   */
  FAMPHYS: "FAMPHYS",

  /**
   * modified prescription exists
   */
  MODIFY: "MODIFY",

  /**
   * patient must make appointment
   */
  NEEDAPMT: "NEEDAPMT",

  /**
   * prescriber not available
   */
  NOTAVAIL: "NOTAVAIL",

  /**
   * patient no longer in this practice
   */
  NOTPAT: "NOTPAT",

  /**
   * medication on hold
   */
  ONHOLD: "ONHOLD",

  /**
   * product not available
   */
  PRNA: "PRNA",

  /**
   * prescriber stopped medication for patient
   */
  STOPMED: "STOPMED",

  /**
   * too early
   */
  TOOEARLY: "TOOEARLY",

  /**
   * supply order abort reason
   */
  _SupplyOrderAbortReasonCode: "_SupplyOrderAbortReasonCode",

  /**
   * condition improved
   */
  IMPROV: "IMPROV",

  /**
   * intolerance
   */
  INTOL: "INTOL",

  /**
   * new strength
   */
  NEWSTR: "NEWSTR",

  /**
   * new therapy
   */
  NEWTHER: "NEWTHER",

  /**
   * ControlActReasonConditionNullify
   */
  _ControlActReasonConditionNullify: "_ControlActReasonConditionNullify",

  /**
   * GenericUpdateReasonCode
   */
  _GenericUpdateReasonCode: "_GenericUpdateReasonCode",

  /**
   * information change
   */
  CHGDATA: "CHGDATA",

  /**
   * error correction
   */
  FIXDATA: "FIXDATA",

  /**
   * merge data
   */
  MDATA: "MDATA",

  /**
   * new information
   */
  NEWDATA: "NEWDATA",

  /**
   * unmerge data
   */
  UMDATA: "UMDATA",

  /**
   * patient profile query reason
   */
  _PatientProfileQueryReasonCode: "_PatientProfileQueryReasonCode",

  /**
   * administrative review
   */
  ADMREV: "ADMREV",

  /**
   * patient care
   */
  PATCAR: "PATCAR",

  /**
   * patient request query
   */
  PATREQ: "PATREQ",

  /**
   * practice review
   */
  PRCREV: "PRCREV",

  /**
   * regulatory review
   */
  REGUL: "REGUL",

  /**
   * research
   */
  RSRCH: "RSRCH",

  /**
   * validation review
   */
  VALIDATION: "VALIDATION",

  /**
   * PharmacySupplyRequestFulfillerRevisionRefusalReasonCode
   */
  _PharmacySupplyRequestFulfillerRevisionRefusalReasonCode:
    "_PharmacySupplyRequestFulfillerRevisionRefusalReasonCode",

  /**
   * locked
   */
  LOCKED: "LOCKED",

  /**
   * unknown target
   */
  UNKWNTARGET: "UNKWNTARGET",

  /**
   * RefusalReasonCode
   */
  _RefusalReasonCode: "_RefusalReasonCode",

  /**
   * SchedulingActReason
   */
  _SchedulingActReason: "_SchedulingActReason",

  /**
   * Unexpected Block (of Schedule)
   */
  BLK: "BLK",

  /**
   * Patient Deceased
   */
  DEC: "DEC",

  /**
   * No Financial Backing
   */
  FIN: "FIN",

  /**
   * Medical Status Altered
   */
  MED: "MED",

  /**
   * In an outside meeting
   */
  MTG: "MTG",

  /**
   * Physician request
   */
  PHY: "PHY",

  /**
   * StatusRevisionRefusalReasonCode
   */
  _StatusRevisionRefusalReasonCode: "_StatusRevisionRefusalReasonCode",

  /**
   * fully filled
   */
  FILLED: "FILLED",

  /**
   * SubstanceAdministrationPermissionRefusalReasonCode
   */
  _SubstanceAdministrationPermissionRefusalReasonCode:
    "_SubstanceAdministrationPermissionRefusalReasonCode",

  /**
   * patient not eligible
   */
  PATINELIG: "PATINELIG",

  /**
   * protocol not met
   */
  PROTUNMET: "PROTUNMET",

  /**
   * provider not authorized
   */
  PROVUNAUTH: "PROVUNAUTH",

  /**
   * SubstanceAdminSubstitutionNotAllowedReason
   */
  _SubstanceAdminSubstitutionNotAllowedReason:
    "_SubstanceAdminSubstitutionNotAllowedReason",

  /**
   * allergy intolerance
   */
  ALGINT: "ALGINT",

  /**
   * compliance concern
   */
  COMPCON: "COMPCON",

  /**
   * therapeutic characteristics
   */
  THERCHAR: "THERCHAR",

  /**
   * clinical trial drug
   */
  TRIAL: "TRIAL",

  /**
   * SubstanceAdminSubstitutionReason
   */
  _SubstanceAdminSubstitutionReason: "_SubstanceAdminSubstitutionReason",

  /**
   * continuing therapy
   */
  CT: "CT",

  /**
   * formulary policy
   */
  FP: "FP",

  /**
   * out of stock
   */
  OS: "OS",

  /**
   * regulatory requirement
   */
  RR: "RR",

  /**
   * TransferActReason
   */
  _TransferActReason: "_TransferActReason",

  /**
   * Error
   */
  ER: "ER",

  /**
   * Request
   */
  RQ: "RQ",

  /**
   * ActAdjudicationReason
   */
  _ActAdjudicationReason: "_ActAdjudicationReason",

  /**
   * ActBillableServiceReason
   */
  _ActBillableServiceReason: "_ActBillableServiceReason",

  /**
   * ActBillableClinicalServiceReason
   */
  _ActBillableClinicalServiceReason: "_ActBillableClinicalServiceReason",

  /**
   * MedicallyNecessaryDuplicateProcedureReason
   */
  _MedicallyNecessaryDuplicateProcedureReason:
    "_MedicallyNecessaryDuplicateProcedureReason",

  /**
   * ActCoverageLevelRasonCode
   */
  _ActCoverageLevelRasonCode: "_ActCoverageLevelRasonCode",

  /**
   * ActImmunizationReason
   */
  _ActImmunizationReason: "_ActImmunizationReason",

  /**
   * ConrolActNullificationReasonCode
   */
  _ConrolActNullificationReasonCode: "_ConrolActNullificationReasonCode",

  /**
   * NonPerformanceReasonCode
   */
  _NonPerformanceReasonCode: "_NonPerformanceReasonCode",

  /**
   * ReasonForNotEvaluatingDevice
   */
  _ReasonForNotEvaluatingDevice: "_ReasonForNotEvaluatingDevice",

  /**
   * ReferralReasonCode
   */
  _ReferralReasonCode: "_ReferralReasonCode",

  /**
   *
   */
  BONUS: "BONUS",

  /**
   * Children only
   */
  CHD: "CHD",

  /**
   * Dependents only
   */
  DEP: "DEP",

  /**
   * Employee and children
   */
  ECH: "ECH",

  /**
   *
   */
  EDU: "EDU",

  /**
   * Employee only
   */
  EMP: "EMP",

  /**
   * Employee and spouse
   */
  ESP: "ESP",

  /**
   * Family
   */
  FAM: "FAM",

  /**
   * Individual
   */
  IND: "IND",

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
  SPC: "SPC",

  /**
   * Spouse only
   */
  SPO: "SPO",

  /**
   *
   */
  TRAN: "TRAN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActReasonCode = typeof ActReasonCode[keyof typeof ActReasonCode];
