/**
 * More detailed code concerning the type of the audit event - defined by DICOM with some FHIR specific additions.
 * http://hl7.org/fhir/ValueSet/audit-event-sub-type
 */
export const AuditEventSubTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AuditEventSubTypeCode =
  typeof AuditEventSubTypeCode[keyof typeof AuditEventSubTypeCode];
