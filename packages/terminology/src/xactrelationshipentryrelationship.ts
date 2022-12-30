/**
 * Used to enumerate the relationships between two CDA entries.
 * http://terminology.hl7.org/ValueSet/v3-xActRelationshipEntryRelationship
 */
export const XActRelationshipEntryRelationshipCode = {
  /**
   * is etiology for
   */
  CAUS: "CAUS",

  /**
   * has component
   */
  COMP: "COMP",

  /**
   * evaluates (goal)
   */
  GEVL: "GEVL",

  /**
   * is manifestation of
   */
  MFST: "MFST",

  /**
   * refers to
   */
  REFR: "REFR",

  /**
   * has reason
   */
  RSON: "RSON",

  /**
   * starts after start of
   */
  SAS: "SAS",

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
export type XActRelationshipEntryRelationshipCode =
  typeof XActRelationshipEntryRelationshipCode[keyof typeof XActRelationshipEntryRelationshipCode];
