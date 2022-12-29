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
  role: "ROL",

  /**
   * RoleClassAssociative
   */
  RoleClassAssociative: "_RoleClassAssociative",

  /**
   * RoleClassMutualRelationship
   */
  RoleClassMutualRelationship: "_RoleClassMutualRelationship",

  /**
   * RoleClassRelationshipFormal
   */
  RoleClassRelationshipFormal: "_RoleClassRelationshipFormal",

  /**
   * affiliate
   */
  affiliate: "AFFL",

  /**
   * agent
   */
  agent: "AGNT",

  /**
   * assigned entity
   */
  assignedentity: "ASSIGNED",

  /**
   * commissioning party
   */
  commissioningparty: "COMPAR",

  /**
   * signing authority or officer
   */
  signingauthorityorofficer: "SGNOFF",

  /**
   * contact
   */
  contact: "CON",

  /**
   * emergency contact
   */
  emergencycontact: "ECON",

  /**
   * next of kin
   */
  nextofkin: "NOK",

  /**
   * guardian
   */
  guardian: "GUARD",

  /**
   * citizen
   */
  citizen: "CIT",

  /**
   * covered party
   */
  coveredparty: "COVPTY",

  /**
   * claimant
   */
  claimant: "CLAIM",

  /**
   * named insured
   */
  namedinsured: "NAMED",

  /**
   * dependent
   */
  dependent: "DEPEN",

  /**
   * individual
   */
  individual: "INDIV",

  /**
   * subscriber
   */
  subscriber: "SUBSCR",

  /**
   * program eligible
   */
  programeligible: "PROG",

  /**
   * clinical research investigator
   */
  clinicalresearchinvestigator: "CRINV",

  /**
   * clinical research sponsor
   */
  clinicalresearchsponsor: "CRSPNSR",

  /**
   * employee
   */
  employee: "EMP",

  /**
   * military person
   */
  militaryperson: "MIL",

  /**
   * guarantor
   */
  guarantor: "GUAR",

  /**
   * Investigation Subject
   */
  InvestigationSubject: "INVSBJ",

  /**
   * Case Subject
   */
  CaseSubject: "CASEBJ",

  /**
   * research subject
   */
  researchsubject: "RESBJ",

  /**
   * licensed entity
   */
  licensedentity: "LIC",

  /**
   * notary public
   */
  notarypublic: "NOT",

  /**
   * healthcare provider
   */
  healthcareprovider: "PROV",

  /**
   * patient
   */
  patient: "PAT",

  /**
   * payee
   */
  payee: "PAYEE",

  /**
   * invoice payor
   */
  invoicepayor: "PAYOR",

  /**
   * policy holder
   */
  policyholder: "POLHOLD",

  /**
   * qualified entity
   */
  qualifiedentity: "QUAL",

  /**
   * coverage sponsor
   */
  coveragesponsor: "SPNSR",

  /**
   * student
   */
  student: "STD",

  /**
   * underwriter
   */
  underwriter: "UNDWRT",

  /**
   * caregiver
   */
  caregiver: "CAREGIVER",

  /**
   * personal relationship
   */
  personalrelationship: "PRS",

  /**
   * self
   */
  self: "SELF",

  /**
   * RoleClassPassive
   */
  RoleClassPassive: "_RoleClassPassive",

  /**
   * access
   */
  access: "ACCESS",

  /**
   * adjacency
   */
  adjacency: "ADJY",

  /**
   * connection
   */
  connection: "CONC",

  /**
   * molecular bond
   */
  molecularbond: "BOND",

  /**
   * continuity
   */
  continuity: "CONY",

  /**
   * Administerable Material
   */
  AdministerableMaterial: "ADMM",

  /**
   * birthplace
   */
  birthplace: "BIRTHPL",

  /**
   * place of death
   */
  placeofdeath: "DEATHPLC",

  /**
   * distributed material
   */
  distributedmaterial: "DST",

  /**
   * retailed material
   */
  retailedmaterial: "RET",

  /**
   * event location
   */
  eventlocation: "EXLOC",

  /**
   * service delivery location
   */
  servicedeliverylocation: "SDLOC",

  /**
   * dedicated service delivery location
   */
  dedicatedservicedeliverylocation: "DSDLOC",

  /**
   * incidental service delivery location
   */
  incidentalservicedeliverylocation: "ISDLOC",

  /**
   * exposed entity
   */
  exposedentity: "EXPR",

  /**
   * held entity
   */
  heldentity: "HLD",

  /**
   * health chart
   */
  healthchart: "HLTHCHRT",

  /**
   * identified entity
   */
  identifiedentity: "IDENT",

  /**
   * manufactured product
   */
  manufacturedproduct: "MANU",

  /**
   * therapeutic agent
   */
  therapeuticagent: "THER",

  /**
   * maintained entity
   */
  maintainedentity: "MNT",

  /**
   * owned entity
   */
  ownedentity: "OWN",

  /**
   * regulated product
   */
  regulatedproduct: "RGPR",

  /**
   * territory of authority
   */
  territoryofauthority: "TERR",

  /**
   * used entity
   */
  usedentity: "USED",

  /**
   * warranted product
   */
  warrantedproduct: "WRTE",

  /**
   * RoleClassOntological
   */
  RoleClassOntological: "_RoleClassOntological",

  /**
   * equivalent entity
   */
  equivalententity: "EQUIV",

  /**
   * same
   */
  same: "SAME",

  /**
   * subsumed by
   */
  subsumedby: "SUBY",

  /**
   * has generalization
   */
  hasgeneralization: "GEN",

  /**
   * has generic
   */
  hasgeneric: "GRIC",

  /**
   * instance
   */
  instance: "INST",

  /**
   * subsumer
   */
  subsumer: "SUBS",

  /**
   * RoleClassPartitive
   */
  RoleClassPartitive: "_RoleClassPartitive",

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

  /**
   * child
   */
  child: "CHILD",

  /**
   * credentialed entity
   */
  credentialedentity: "CRED",

  /**
   * nurse practitioner
   */
  nursepractitioner: "NURPRAC",

  /**
   * nurse
   */
  nurse: "NURS",

  /**
   * physician assistant
   */
  physicianassistant: "PA",

  /**
   * physician
   */
  physician: "PHYS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassCode = typeof RoleClassCode[keyof typeof RoleClassCode];
