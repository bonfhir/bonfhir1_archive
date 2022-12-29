/**
 * A general association between two entities that is neither partitive nor ontological.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassAssociative
 */
export const RoleClassAssociativeCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassAssociativeCode =
  typeof RoleClassAssociativeCode[keyof typeof RoleClassAssociativeCode];
