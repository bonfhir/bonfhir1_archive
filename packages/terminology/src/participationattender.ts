/**
 * The practitioner that has responsibility for overseeing a patient's care during a patient encounter.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationAttender
 */
export const ParticipationAttenderCode = {
  /**
   * attender
   */
  ATND: "ATND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationAttenderCode =
  typeof ParticipationAttenderCode[keyof typeof ParticipationAttenderCode];
