/**
 * How an entity was used in an activity.
 * http://hl7.org/fhir/ValueSet/provenance-entity-role
 */
export const ProvenanceEntityRoleCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ProvenanceEntityRoleCode =
  typeof ProvenanceEntityRoleCode[keyof typeof ProvenanceEntityRoleCode];
