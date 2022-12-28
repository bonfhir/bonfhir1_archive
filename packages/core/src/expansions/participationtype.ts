/**
 * A code specifying the meaning and purpose of every Participation instance. Each of its values implies specific constraints on the Roles undertaking the participation.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationType
 */
export const ParticipationTypeCode = {
  /**
   * Participation
   */
  PART: "PART",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationTypeCode =
  typeof ParticipationTypeCode[keyof typeof ParticipationTypeCode];
