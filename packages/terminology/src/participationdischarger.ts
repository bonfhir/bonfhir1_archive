/**
 * The practitioner who is responsible for the discharge of a patient from a patient encounter.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationDischarger
 */
export const ParticipationDischargerCode = {
  /**
   * discharger
   */
  DIS: "DIS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationDischargerCode =
  typeof ParticipationDischargerCode[keyof typeof ParticipationDischargerCode];
