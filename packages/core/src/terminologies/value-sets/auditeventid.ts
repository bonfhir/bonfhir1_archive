/**
 * Event Types for Audit Events - defined by DICOM with some FHIR specific additions.
 * http://hl7.org/fhir/ValueSet/audit-event-type
 */
export const AuditEventIDCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AuditEventIDCode =
  typeof AuditEventIDCode[keyof typeof AuditEventIDCode];
