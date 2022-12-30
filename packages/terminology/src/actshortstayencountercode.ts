/**
 * **Definition:**An encounter where the patient is admitted to a health care facility for a predetermined length of time, usually less than 24 hours.
 * http://terminology.hl7.org/ValueSet/v3-ActShortStayEncounterCode
 */
export const ActShortStayEncounterCodeCode = {
  /**
   * short stay
   */
  SS: "SS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActShortStayEncounterCodeCode =
  typeof ActShortStayEncounterCodeCode[keyof typeof ActShortStayEncounterCodeCode];
