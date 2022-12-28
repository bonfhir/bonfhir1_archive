/**
 * Overall seriousness of this event for the patient.
 * http://hl7.org/fhir/ValueSet/adverse-event-seriousness
 */
export const AdverseEventSeriousnessCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdverseEventSeriousnessCode =
  typeof AdverseEventSeriousnessCode[keyof typeof AdverseEventSeriousnessCode];
