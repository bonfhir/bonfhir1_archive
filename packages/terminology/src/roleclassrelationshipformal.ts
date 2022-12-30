/**
 * A relationship between two entities that is formally recognized, frequently by a contract or similar agreement.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassRelationshipFormal
 */
export const RoleClassRelationshipFormalCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassRelationshipFormalCode =
  typeof RoleClassRelationshipFormalCode[keyof typeof RoleClassRelationshipFormalCode];
