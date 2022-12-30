/**
 * An association for a playing Entity that is used, known, treated, handled, built, or destroyed, etc. under the auspices of the scoping Entity. The playing Entity is passive in these roles (even though it may be active in other roles), in the sense that the kinds of things done to it in this role happen without an agreement from the playing Entity.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassPassive
 */
export const RoleClassPassiveCode = {
  /**
   * access
   */
  ACCESS: "ACCESS",

  /**
   * adjacency
   */
  ADJY: "ADJY",

  /**
   * connection
   */
  CONC: "CONC",

  /**
   * molecular bond
   */
  BOND: "BOND",

  /**
   * continuity
   */
  CONY: "CONY",

  /**
   * Administerable Material
   */
  ADMM: "ADMM",

  /**
   * birthplace
   */
  BIRTHPL: "BIRTHPL",

  /**
   * place of death
   */
  DEATHPLC: "DEATHPLC",

  /**
   * distributed material
   */
  DST: "DST",

  /**
   * retailed material
   */
  RET: "RET",

  /**
   * event location
   */
  EXLOC: "EXLOC",

  /**
   * service delivery location
   */
  SDLOC: "SDLOC",

  /**
   * dedicated service delivery location
   */
  DSDLOC: "DSDLOC",

  /**
   * incidental service delivery location
   */
  ISDLOC: "ISDLOC",

  /**
   * exposed entity
   */
  EXPR: "EXPR",

  /**
   * held entity
   */
  HLD: "HLD",

  /**
   * health chart
   */
  HLTHCHRT: "HLTHCHRT",

  /**
   * identified entity
   */
  IDENT: "IDENT",

  /**
   * manufactured product
   */
  MANU: "MANU",

  /**
   * therapeutic agent
   */
  THER: "THER",

  /**
   * maintained entity
   */
  MNT: "MNT",

  /**
   * owned entity
   */
  OWN: "OWN",

  /**
   * regulated product
   */
  RGPR: "RGPR",

  /**
   * territory of authority
   */
  TERR: "TERR",

  /**
   * used entity
   */
  USED: "USED",

  /**
   * warranted product
   */
  WRTE: "WRTE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassPassiveCode =
  typeof RoleClassPassiveCode[keyof typeof RoleClassPassiveCode];
