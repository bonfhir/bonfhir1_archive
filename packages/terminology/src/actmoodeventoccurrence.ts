/**
 * A service that actually happens, may be an ongoing service or a documentation of a past service.

Historical note: in previous RIM versions, the event mood was captured as a separate class hierarchy, called Patient\_service\_event, and later Service\_event.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodEventOccurrence
 */
export const ActMoodEventOccurrenceCode = {
  /**
   * event (occurrence)
   */
  eventoccurrence: "EVN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodEventOccurrenceCode =
  typeof ActMoodEventOccurrenceCode[keyof typeof ActMoodEventOccurrenceCode];
