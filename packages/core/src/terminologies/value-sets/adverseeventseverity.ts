/**
 * The severity of the adverse event itself, in direct relation to the subject.
 * http://hl7.org/fhir/ValueSet/adverse-event-severity
 */
export const AdverseEventSeverityCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AdverseEventSeverityCode =
  typeof AdverseEventSeverityCode[keyof typeof AdverseEventSeverityCode];
