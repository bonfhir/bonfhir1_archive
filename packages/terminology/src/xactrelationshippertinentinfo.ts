/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActRelationshipPertinentInfo
 */
export const XActRelationshipPertinentInfoCode = {
  /**
   * is etiology for
   */
  isetiologyfor: "CAUS",

  /**
   * is manifestation of
   */
  ismanifestationof: "MFST",

  /**
   * refers to
   */
  refersto: "REFR",

  /**
   * has support
   */
  hassupport: "SPRT",

  /**
   * has subject
   */
  hassubject: "SUBJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActRelationshipPertinentInfoCode =
  typeof XActRelationshipPertinentInfoCode[keyof typeof XActRelationshipPertinentInfoCode];
