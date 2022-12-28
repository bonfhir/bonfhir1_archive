/**
 * A general association between two entities that is neither partitive nor ontological.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassAssociative
 */
export const RoleClassAssociativeCode = {
  /**
   * RoleClassMutualRelationship
   */
  _RoleClassMutualRelationship: "_RoleClassMutualRelationship",

  /**
   * RoleClassRelationshipFormal
   */
  _RoleClassRelationshipFormal: "_RoleClassRelationshipFormal",

  /**
   * affiliate
   */
  AFFL: "AFFL",

  /**
   * agent
   */
  AGNT: "AGNT",

  /**
   * assigned entity
   */
  ASSIGNED: "ASSIGNED",

  /**
   * commissioning party
   */
  COMPAR: "COMPAR",

  /**
   * signing authority or officer
   */
  SGNOFF: "SGNOFF",

  /**
   * contact
   */
  CON: "CON",

  /**
   * emergency contact
   */
  ECON: "ECON",

  /**
   * next of kin
   */
  NOK: "NOK",

  /**
   * guardian
   */
  GUARD: "GUARD",

  /**
   * citizen
   */
  CIT: "CIT",

  /**
   * covered party
   */
  COVPTY: "COVPTY",

  /**
   * claimant
   */
  CLAIM: "CLAIM",

  /**
   * named insured
   */
  NAMED: "NAMED",

  /**
   * dependent
   */
  DEPEN: "DEPEN",

  /**
   * individual
   */
  INDIV: "INDIV",

  /**
   * subscriber
   */
  SUBSCR: "SUBSCR",

  /**
   * program eligible
   */
  PROG: "PROG",

  /**
   * clinical research investigator
   */
  CRINV: "CRINV",

  /**
   * clinical research sponsor
   */
  CRSPNSR: "CRSPNSR",

  /**
   * employee
   */
  EMP: "EMP",

  /**
   * military person
   */
  MIL: "MIL",

  /**
   * guarantor
   */
  GUAR: "GUAR",

  /**
   * Investigation Subject
   */
  INVSBJ: "INVSBJ",

  /**
   * Case Subject
   */
  CASEBJ: "CASEBJ",

  /**
   * research subject
   */
  RESBJ: "RESBJ",

  /**
   * licensed entity
   */
  LIC: "LIC",

  /**
   * notary public
   */
  NOT: "NOT",

  /**
   * healthcare provider
   */
  PROV: "PROV",

  /**
   * patient
   */
  PAT: "PAT",

  /**
   * payee
   */
  PAYEE: "PAYEE",

  /**
   * invoice payor
   */
  PAYOR: "PAYOR",

  /**
   * policy holder
   */
  POLHOLD: "POLHOLD",

  /**
   * qualified entity
   */
  QUAL: "QUAL",

  /**
   * coverage sponsor
   */
  SPNSR: "SPNSR",

  /**
   * student
   */
  STD: "STD",

  /**
   * underwriter
   */
  UNDWRT: "UNDWRT",

  /**
   * caregiver
   */
  CAREGIVER: "CAREGIVER",

  /**
   * personal relationship
   */
  PRS: "PRS",

  /**
   * self
   */
  SELF: "SELF",

  /**
   * RoleClassPassive
   */
  _RoleClassPassive: "_RoleClassPassive",

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
export type RoleClassAssociativeCode =
  typeof RoleClassAssociativeCode[keyof typeof RoleClassAssociativeCode];
