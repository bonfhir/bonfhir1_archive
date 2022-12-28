/**
 * The type of process where the audit event originated from.
 * http://hl7.org/fhir/ValueSet/audit-source-type
 */
export const AuditEventSourceTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AuditEventSourceTypeCode =
  typeof AuditEventSourceTypeCode[keyof typeof AuditEventSourceTypeCode];
