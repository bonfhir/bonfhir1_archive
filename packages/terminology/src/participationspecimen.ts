/**
 * The subject of non-clinical (e.g. laboratory) observation services is a specimen.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationSpecimen
 */
export const ParticipationSpecimenCode = {
  /**
   * specimen
   */
  SPC: "SPC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationSpecimenCode =
  typeof ParticipationSpecimenCode[keyof typeof ParticipationSpecimenCode];
