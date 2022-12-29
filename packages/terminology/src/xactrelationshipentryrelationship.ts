/**
 * Used to enumerate the relationships between two CDA entries.
 * http://terminology.hl7.org/ValueSet/v3-xActRelationshipEntryRelationship
 */
export const XActRelationshipEntryRelationshipCode = {
  /**
   * is etiology for
   */
  isetiologyfor: "CAUS",

  /**
   * has component
   */
  hascomponent: "COMP",

  /**
   * evaluates (goal)
   */
  evaluatesgoal: "GEVL",

  /**
   * is manifestation of
   */
  ismanifestationof: "MFST",

  /**
   * refers to
   */
  refersto: "REFR",

  /**
   * has reason
   */
  hasreason: "RSON",

  /**
   * starts after start of
   */
  startsafterstartof: "SAS",

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
export type XActRelationshipEntryRelationshipCode =
  typeof XActRelationshipEntryRelationshipCode[keyof typeof XActRelationshipEntryRelationshipCode];
