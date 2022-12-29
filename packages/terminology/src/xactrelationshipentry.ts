/**
 * Used to enumerate the relationships between a CDA section and its contained entries.
 * http://terminology.hl7.org/ValueSet/v3-xActRelationshipEntry
 */
export const XActRelationshipEntryCode = {
  /**
   * has component
   */
  hascomponent: "COMP",

  /**
   * is derived from
   */
  isderivedfrom: "DRIV",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActRelationshipEntryCode =
  typeof XActRelationshipEntryCode[keyof typeof XActRelationshipEntryCode];
