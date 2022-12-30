/**
 * A relationship that is based on mutual behavior of the two Entities as being related. The basis of such relationship may be agreements (e.g., spouses, contract parties) or they may be *de facto* behavior (e.g. friends) or may be an incidental involvement with each other (e.g. parties over a dispute, siblings, children).
 * http://terminology.hl7.org/ValueSet/v3-RoleClassMutualRelationship
 */
export const RoleClassMutualRelationshipCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassMutualRelationshipCode =
  typeof RoleClassMutualRelationshipCode[keyof typeof RoleClassMutualRelationshipCode];
