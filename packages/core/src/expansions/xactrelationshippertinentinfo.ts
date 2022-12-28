/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-xActRelationshipPertinentInfo
 */
export const XActRelationshipPertinentInfoCode = {
  /**
   * is etiology for
   */
  CAUS: "CAUS",

  /**
   * is manifestation of
   */
  MFST: "MFST",

  /**
   * refers to
   */
  REFR: "REFR",

  /**
   * has support
   */
  SPRT: "SPRT",

  /**
   * has subject
   */
  SUBJ: "SUBJ",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type XActRelationshipPertinentInfoCode =
  typeof XActRelationshipPertinentInfoCode[keyof typeof XActRelationshipPertinentInfoCode];
