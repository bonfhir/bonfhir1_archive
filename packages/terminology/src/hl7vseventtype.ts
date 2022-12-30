/**
 * Value Set of codes specifying the type of event of the message.
 * http://terminology.hl7.org/ValueSet/v2-0450
 */
export const Hl7VSEventTypeCode = {
  /**
   * Log Event
   */
  LOG: "LOG",

  /**
   * Service Event
   */
  SER: "SER",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSEventTypeCode =
  typeof Hl7VSEventTypeCode[keyof typeof Hl7VSEventTypeCode];
