/**
 * This table includes codes for the Role class hierarchy. The values in this hierarchy, represent a Role which is an association or relationship between two entities - the entity that plays the role and the entity that scopes the role. Roles names are derived from the name of the playing entity in that role.

The role hierarchy stems from three core concepts, or abstract domains:

 *  **RoleClassOntological** is an abstract domain that collects roles in which the playing entity is defined or specified by the scoping entity.
 *  **RoleClassPartitive** collects roles in which the playing entity is in some sense a "part" of the scoping entity.
 *  **RoleClassAssociative** collects all of the remaining forms of association between the playing entity and the scoping entity. This set of roles is further partitioned between:
    
     *  **RoleClassPassive** which are roles in which the playing entity is used, known, treated, handled, built, or destroyed, etc. under the auspices of the scoping entity. The playing entity is passive in these roles in that the role exists without an agreement from the playing entity.
     *  **RoleClassMutualRelationship** which are relationships based on mutual behavior of the two entities. The basis of these relationship may be formal agreements or they may be *de facto* behavior. Thus, this sub-domain is further divided into:
        
         *  **RoleClassRelationshipFormal** in which the relationship is formally defined, frequently by a contract or agreement.
         *  **Personal relationship** which inks two people in a personal relationship.

The hierarchy discussed above is represented In the current vocabulary tables as a set of abstract domains, with the exception of the "Personal relationship" which is a leaf concept.
 * http://terminology.hl7.org/ValueSet/v3-RoleClass
 */
export const RoleClassCode = {
  /**
   * role
   */
  ROL: "ROL",

  /**
   * RoleClassAssociative
   */
  _RoleClassAssociative: "_RoleClassAssociative",

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

  /**
   * RoleClassOntological
   */
  _RoleClassOntological: "_RoleClassOntological",

  /**
   * equivalent entity
   */
  EQUIV: "EQUIV",

  /**
   * same
   */
  SAME: "SAME",

  /**
   * subsumed by
   */
  SUBY: "SUBY",

  /**
   * has generalization
   */
  GEN: "GEN",

  /**
   * has generic
   */
  GRIC: "GRIC",

  /**
   * instance
   */
  INST: "INST",

  /**
   * subsumer
   */
  SUBS: "SUBS",

  /**
   * RoleClassPartitive
   */
  _RoleClassPartitive: "_RoleClassPartitive",

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

  /**
   * child
   */
  CHILD: "CHILD",

  /**
   * credentialed entity
   */
  CRED: "CRED",

  /**
   * nurse practitioner
   */
  NURPRAC: "NURPRAC",

  /**
   * nurse
   */
  NURS: "NURS",

  /**
   * physician assistant
   */
  PA: "PA",

  /**
   * physician
   */
  PHYS: "PHYS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassCode = typeof RoleClassCode[keyof typeof RoleClassCode];
