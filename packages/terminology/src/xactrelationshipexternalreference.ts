/**
 * Used to enumerate the relationships between a CDA entry and an externally referenced act.
 * http://terminology.hl7.org/ValueSet/v3-xActRelationshipExternalReference
 */
export const XActRelationshipExternalReferenceCode = {
  /**
   * episodeLink
   */
  ELNK: "ELNK",

  /**
   * refers to
   */
  REFR: "REFR",

  /**
   * replaces
   */
  RPLC: "RPLC",

  /**
   * has support
   */
  SPRT: "SPRT",

  /**
   * has subject
   */
  SUBJ: "SUBJ",

  /**
   * Excerpts
   */
  XCRPT: "XCRPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActRelationshipExternalReferenceCode =
  typeof XActRelationshipExternalReferenceCode[keyof typeof XActRelationshipExternalReferenceCode];
