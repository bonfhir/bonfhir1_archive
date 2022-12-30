/**
 * The practitioner who is responsible for admitting a patient to a patient encounter.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationAdmitter
 */
export const ParticipationAdmitterCode = {
  /**
   * admitter
   */
  ADM: "ADM",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationAdmitterCode =
  typeof ParticipationAdmitterCode[keyof typeof ParticipationAdmitterCode];
