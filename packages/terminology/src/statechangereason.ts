/**
 * Indicates why the state of the subject changed.
 * http://terminology.hl7.org/ValueSet/state-change-reason
 */
export const StateChangeReasonCode = {
  /**
   * adverse event
   */
  adverseevent: "adverseEvent",

  /**
   * death (adverse event)
   */
  deathadverseevent: "death",

  /**
   * did not meet eligibility criteria
   */
  didnotmeeteligibilitycriteria: "notEligible",

  /**
   * eligible but unwilling or unable to participate
   */
  eligiblebutunwillingorunabletoparticipate: "eligibleButNo",

  /**
   * enrolled or registered
   */
  enrolledorregistered: "enrolled",

  /**
   * exclusion
   */
  exclusion: "exclusion",

  /**
   * follow-up complete
   */
  followupcomplete: "followUpComplete",

  /**
   * inclusion
   */
  inclusion: "inclusion",

  /**
   * Informed consent signed
   */
  Informedconsentsigned: "informedConsentSigned",

  /**
   * intervention or observation complete
   */
  interventionorobservationcomplete: "intOrObsComplete",

  /**
   * non-compliance
   */
  noncompliance: "nonCompliance",

  /**
   * pre-registered or slot reserved
   */
  preregisteredorslotreserved: "preReg",

  /**
   * refuse consent
   */
  refuseconsent: "refuseConsent",

  /**
   * screen failure
   */
  screenfailure: "screenFailure",

  /**
   * study permanently closed to accrual
   */
  studypermanentlyclosedtoaccrual: "studyClosed",

  /**
   * study terminated
   */
  studyterminated: "studyTerminated",

  /**
   * subject refusal
   */
  subjectrefusal: "subjectRefusal",

  /**
   * unwilling or unable to participate
   */
  unwillingorunabletoparticipate: "unwillingOrUnable",

  /**
   * withdrawn consent
   */
  withdrawnconsent: "withdrawnConsent",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StateChangeReasonCode =
  typeof StateChangeReasonCode[keyof typeof StateChangeReasonCode];
