/**
 * The principle target that the service acts on. E.g. the patient in physical examination, a specimen in a lab observation. May also be a patient's family member (teaching) or a device or room (cleaning, disinfecting, housekeeping). Note: not all direct targets are subjects, consumables, and devices used as tools for a service are not subjects. However, a device may be a subject of a maintenance service.
 * http://terminology.hl7.org/ValueSet/v3-ParticipationTargetSubject
 */
export const ParticipationTargetSubjectCode = {
  /**
   * subject
   */
  SBJ: "SBJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParticipationTargetSubjectCode =
  typeof ParticipationTargetSubjectCode[keyof typeof ParticipationTargetSubjectCode];
