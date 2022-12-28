/**
 * An intention or plan to perform a service. Historical note: in previous RIM versions, the intent mood was captured as a separate class hierarchy, called Service\_intent\_or\_order.
 * http://terminology.hl7.org/ValueSet/v3-ActMoodIntent
 */
export const ActMoodIntentCode = {
  /**
   * intent
   */
  INT: "INT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActMoodIntentCode =
  typeof ActMoodIntentCode[keyof typeof ActMoodIntentCode];
