/**
 * Used to enumerate the relationships between a CDA entry and an externally referenced act.
 * http://terminology.hl7.org/ValueSet/v3-xActRelationshipExternalReference
 */
export const XActRelationshipExternalReferenceCode = {
  /**
   * episodeLink
   */
  episodeLink: "ELNK",

  /**
   * refers to
   */
  refersto: "REFR",

  /**
   * replaces
   */
  replaces: "RPLC",

  /**
   * has support
   */
  hassupport: "SPRT",

  /**
   * has subject
   */
  hassubject: "SUBJ",

  /**
   * Excerpts
   */
  Excerpts: "XCRPT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActRelationshipExternalReferenceCode =
  typeof XActRelationshipExternalReferenceCode[keyof typeof XActRelationshipExternalReferenceCode];
