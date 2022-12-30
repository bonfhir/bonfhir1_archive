/**
 * Periods of time on a schedule for a resource. Appointments occupy sets of one or more booked slots. A slot that is open for appointments is considered available and a slot that is held back for administrative purposes is considered blocked. A Resource slot that is "tentatively" booked is referred to as reserved.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodResourceSlot
 */
export const ActMoodResourceSlotCode = {
  /**
   * resource slot
   */
  SLOT: "SLOT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodResourceSlotCode =
  typeof ActMoodResourceSlotCode[keyof typeof ActMoodResourceSlotCode];
