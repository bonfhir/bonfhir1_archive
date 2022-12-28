/**
 * Indicates why the state of the subject changed.
 * http://terminology.hl7.org/ValueSet/state-change-reason
 */
export const StateChangeReasonCode = {
  /**
   * adverse event
   */
  adverseEvent: "adverseEvent",

  /**
   * death (adverse event)
   */
  death: "death",

  /**
   * did not meet eligibility criteria
   */
  notEligible: "notEligible",

  /**
   * eligible but unwilling or unable to participate
   */
  eligibleButNo: "eligibleButNo",

  /**
   * enrolled or registered
   */
  enrolled: "enrolled",

  /**
   * exclusion
   */
  exclusion: "exclusion",

  /**
   * follow-up complete
   */
  followUpComplete: "followUpComplete",

  /**
   * inclusion
   */
  inclusion: "inclusion",

  /**
   * Informed consent signed
   */
  informedConsentSigned: "informedConsentSigned",

  /**
   * intervention or observation complete
   */
  intOrObsComplete: "intOrObsComplete",

  /**
   * non-compliance
   */
  nonCompliance: "nonCompliance",

  /**
   * pre-registered or slot reserved
   */
  preReg: "preReg",

  /**
   * refuse consent
   */
  refuseConsent: "refuseConsent",

  /**
   * screen failure
   */
  screenFailure: "screenFailure",

  /**
   * study permanently closed to accrual
   */
  studyClosed: "studyClosed",

  /**
   * study terminated
   */
  studyTerminated: "studyTerminated",

  /**
   * subject refusal
   */
  subjectRefusal: "subjectRefusal",

  /**
   * unwilling or unable to participate
   */
  unwillingOrUnable: "unwillingOrUnable",

  /**
   * withdrawn consent
   */
  withdrawnConsent: "withdrawnConsent",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StateChangeReasonCode =
  typeof StateChangeReasonCode[keyof typeof StateChangeReasonCode];
