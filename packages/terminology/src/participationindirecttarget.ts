/**
 * Target that is not substantially present in the act and which is not directly affected by the act, but which will be a focus of the record or documentation of the act.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationIndirectTarget
 */
export const ParticipationIndirectTargetCode = {
  /**
   * indirect target
   */
  indirecttarget: "IND",

  /**
   * beneficiary
   */
  beneficiary: "BEN",

  /**
   * causative agent
   */
  causativeagent: "CAGNT",

  /**
   * coverage target
   */
  coveragetarget: "COV",

  /**
   * guarantor party
   */
  guarantorparty: "GUAR",

  /**
   * holder
   */
  holder: "HLD",

  /**
   * record target
   */
  recordtarget: "RCT",

  /**
   * receiver
   */
  receiver: "RCV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationIndirectTargetCode =
  typeof ParticipationIndirectTargetCode[keyof typeof ParticipationIndirectTargetCode];
