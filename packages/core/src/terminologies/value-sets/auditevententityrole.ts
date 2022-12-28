/**
 * Code representing the role the entity played in the audit event.
 * http://hl7.org/fhir/ValueSet/object-role
 */
export const AuditEventEntityRoleCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AuditEventEntityRoleCode =
  typeof AuditEventEntityRoleCode[keyof typeof AuditEventEntityRoleCode];
