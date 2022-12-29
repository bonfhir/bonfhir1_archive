/**
 * An association between two Entities where the playing Entity is considered in some way "part" of the scoping Entity, e.g., as a member, component, ingredient, or content. Being "part" in the broadest sense of the word can mean anything from being an integral structural component to a mere incidental temporary association of a playing Entity with a (generally larger) scoping Entity.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassPartitive
 */
export const RoleClassPartitiveCode = {
  /**
   * content
   */
  content: "CONT",

  /**
   * exposure agent carrier
   */
  exposureagentcarrier: "EXPAGTCAR",

  /**
   * exposure vector
   */
  exposurevector: "EXPVECTOR",

  /**
   * fomite
   */
  fomite: "FOMITE",

  /**
   * ingredient
   */
  ingredient: "INGR",

  /**
   * active ingredient
   */
  activeingredient: "ACTI",

  /**
   * active ingredient - basis of strength
   */
  activeingredientbasisofstrength: "ACTIB",

  /**
   * active ingredient - moiety is basis of strength
   */
  activeingredientmoietyisbasisofstrength: "ACTIM",

  /**
   * active ingredient - reference substance is basis of strength
   */
  activeingredientreferencesubstanceisbasisofstrength: "ACTIR",

  /**
   * adjuvant
   */
  adjuvant: "ADJV",

  /**
   * additive
   */
  additive: "ADTV",

  /**
   * base
   */
  base: "BASE",

  /**
   * contaminant ingredient
   */
  contaminantingredient: "CNTM",

  /**
   * inactive ingredient
   */
  inactiveingredient: "IACT",

  /**
   * color additive
   */
  coloradditive: "COLR",

  /**
   * flavor additive
   */
  flavoradditive: "FLVR",

  /**
   * preservative
   */
  preservative: "PRSV",

  /**
   * stabilizer
   */
  stabilizer: "STBL",

  /**
   * mechanical ingredient
   */
  mechanicalingredient: "MECH",

  /**
   * located entity
   */
  locatedentity: "LOCE",

  /**
   * stored entity
   */
  storedentity: "STOR",

  /**
   * member
   */
  member: "MBR",

  /**
   * part
   */
  part: "PART",

  /**
   * active moiety
   */
  activemoiety: "ACTM",

  /**
   * specimen
   */
  specimen: "SPEC",

  /**
   * aliquot
   */
  aliquot: "ALQT",

  /**
   * isolate
   */
  isolate: "ISLT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassPartitiveCode =
  typeof RoleClassPartitiveCode[keyof typeof RoleClassPartitiveCode];
