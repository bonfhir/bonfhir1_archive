/**
 * Code for the entity type involved in the audit event.
 * http://hl7.org/fhir/ValueSet/audit-entity-type
 */
export const AuditEventEntityTypeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AuditEventEntityTypeCode =
  typeof AuditEventEntityTypeCode[keyof typeof AuditEventEntityTypeCode];
