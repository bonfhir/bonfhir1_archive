/**
 * A relationship between two entities that is formally recognized, frequently by a contract or similar agreement.
 * http://terminology.hl7.org/ValueSet/v3-RoleClassRelationshipFormal
 */
export const RoleClassRelationshipFormalCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type RoleClassRelationshipFormalCode =
  typeof RoleClassRelationshipFormalCode[keyof typeof RoleClassRelationshipFormalCode];
