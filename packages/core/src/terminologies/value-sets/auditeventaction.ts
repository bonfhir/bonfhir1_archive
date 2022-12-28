/**
 * Indicator for type of action performed during the event that generated the event.
 * http://hl7.org/fhir/ValueSet/audit-event-action
 */
export const AuditEventActionCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AuditEventActionCode =
  typeof AuditEventActionCode[keyof typeof AuditEventActionCode];
