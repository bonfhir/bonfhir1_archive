/**
 * The record target indicates whose medical record holds the documentation of this act. This is especially important when the subject of a service is not the patient himself.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationRecordTarget
 */
export const ParticipationRecordTargetCode = {
  /**
   * record target
   */
  RCT: "RCT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationRecordTargetCode =
  typeof ParticipationRecordTargetCode[keyof typeof ParticipationRecordTargetCode];
