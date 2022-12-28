/**
 * An entity entering the data into the originating system. The data entry entity is collected optionally for internal quality control purposes. This includes the transcriptionist for dictated text transcribed into electronic form.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationInformationTranscriber
 */
export const ParticipationInformationTranscriberCode = {
  /**
   * Transcriber
   */
  TRANS: "TRANS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationInformationTranscriberCode =
  typeof ParticipationInformationTranscriberCode[keyof typeof ParticipationInformationTranscriberCode];
