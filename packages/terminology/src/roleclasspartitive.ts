/**
 * An association between two Entities where the playing Entity is considered in some way "part" of the scoping Entity, e.g., as a member, component, ingredient, or content. Being "part" in the broadest sense of the word can mean anything from being an integral structural component to a mere incidental temporary association of a playing Entity with a (generally larger) scoping Entity.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassPartitive
 */
export const RoleClassPartitiveCode = {
  /**
   * content
   */
  CONT: "CONT",

  /**
   * exposure agent carrier
   */
  EXPAGTCAR: "EXPAGTCAR",

  /**
   * exposure vector
   */
  EXPVECTOR: "EXPVECTOR",

  /**
   * fomite
   */
  FOMITE: "FOMITE",

  /**
   * ingredient
   */
  INGR: "INGR",

  /**
   * active ingredient
   */
  ACTI: "ACTI",

  /**
   * active ingredient - basis of strength
   */
  ACTIB: "ACTIB",

  /**
   * active ingredient - moiety is basis of strength
   */
  ACTIM: "ACTIM",

  /**
   * active ingredient - reference substance is basis of strength
   */
  ACTIR: "ACTIR",

  /**
   * adjuvant
   */
  ADJV: "ADJV",

  /**
   * additive
   */
  ADTV: "ADTV",

  /**
   * base
   */
  BASE: "BASE",

  /**
   * contaminant ingredient
   */
  CNTM: "CNTM",

  /**
   * inactive ingredient
   */
  IACT: "IACT",

  /**
   * color additive
   */
  COLR: "COLR",

  /**
   * flavor additive
   */
  FLVR: "FLVR",

  /**
   * preservative
   */
  PRSV: "PRSV",

  /**
   * stabilizer
   */
  STBL: "STBL",

  /**
   * mechanical ingredient
   */
  MECH: "MECH",

  /**
   * located entity
   */
  LOCE: "LOCE",

  /**
   * stored entity
   */
  STOR: "STOR",

  /**
   * member
   */
  MBR: "MBR",

  /**
   * part
   */
  PART: "PART",

  /**
   * active moiety
   */
  ACTM: "ACTM",

  /**
   * specimen
   */
  SPEC: "SPEC",

  /**
   * aliquot
   */
  ALQT: "ALQT",

  /**
   * isolate
   */
  ISLT: "ISLT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassPartitiveCode =
  typeof RoleClassPartitiveCode[keyof typeof RoleClassPartitiveCode];
