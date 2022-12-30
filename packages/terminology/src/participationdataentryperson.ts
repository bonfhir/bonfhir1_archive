/**
 * A person entering the data into the originating system. The data entry person is collected optionally for internal quality control purposes. This includes the transcriptionist for dictated text.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationDataEntryPerson
 */
export const ParticipationDataEntryPersonCode = {
  /**
   * data entry person
   */
  ENT: "ENT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationDataEntryPersonCode =
  typeof ParticipationDataEntryPersonCode[keyof typeof ParticipationDataEntryPersonCode];
