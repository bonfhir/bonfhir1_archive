/**
 * Corresponds to the Role class
 * http://terminology.hl7.org/ValueSet/v3-RoleClassRoot
 */
export const RoleClassRootCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassRootCode =
  typeof RoleClassRootCode[keyof typeof RoleClassRootCode];
