/**
 * Codes specify the category of observation, evidence, or document used to assess for services, e.g., discharge planning, or to establish eligibility for coverage under a policy or program. The type of evidence is coded as observation values.
 * http://terminology.hl7.org/ValueSet/v3-ActCoverageAssessmentObservationValue
 */
export const ActCoverageAssessmentObservationValueCode = {
  /**
   * ActCoverageAssessmentObservationValue
   */
  _ActCoverageAssessmentObservationValue:
    "_ActCoverageAssessmentObservationValue",

  /**
   * ActFinancialStatusObservationValue
   */
  _ActFinancialStatusObservationValue: "_ActFinancialStatusObservationValue",

  /**
   * asset
   */
  ASSET: "ASSET",

  /**
   * annuity
   */
  ANNUITY: "ANNUITY",

  /**
   * real property
   */
  PROP: "PROP",

  /**
   * retirement investment account
   */
  RETACCT: "RETACCT",

  /**
   * trust
   */
  TRUST: "TRUST",

  /**
   * income
   */
  INCOME: "INCOME",

  /**
   * child support
   */
  CHILD: "CHILD",

  /**
   * disability pay
   */
  DISABL: "DISABL",

  /**
   * investment income
   */
  INVEST: "INVEST",

  /**
   * paid employment
   */
  PAY: "PAY",

  /**
   * retirement pay
   */
  RETIRE: "RETIRE",

  /**
   * spousal or partner support
   */
  SPOUSAL: "SPOUSAL",

  /**
   * income supplement
   */
  SUPPLE: "SUPPLE",

  /**
   * tax obligation
   */
  TAX: "TAX",

  /**
   * living expense
   */
  LIVEXP: "LIVEXP",

  /**
   * clothing expense
   */
  CLOTH: "CLOTH",

  /**
   * food expense
   */
  FOOD: "FOOD",

  /**
   * health expense
   */
  HEALTH: "HEALTH",

  /**
   * household expense
   */
  HOUSE: "HOUSE",

  /**
   * legal expense
   */
  LEGAL: "LEGAL",

  /**
   * mortgage
   */
  MORTG: "MORTG",

  /**
   * rent
   */
  RENT: "RENT",

  /**
   * sundry expense
   */
  SUNDRY: "SUNDRY",

  /**
   * transportation expense
   */
  TRANS: "TRANS",

  /**
   * utility expense
   */
  UTIL: "UTIL",

  /**
   * eligibility indicator
   */
  ELSTAT: "ELSTAT",

  /**
   * adoption document
   */
  ADOPT: "ADOPT",

  /**
   * birth certificate
   */
  BTHCERT: "BTHCERT",

  /**
   * creditable coverage document
   */
  CCOC: "CCOC",

  /**
   * driver license
   */
  DRLIC: "DRLIC",

  /**
   * foster child document
   */
  FOSTER: "FOSTER",

  /**
   * program or policy member
   */
  MEMBER: "MEMBER",

  /**
   * military identification
   */
  MIL: "MIL",

  /**
   * marriage certificate
   */
  MRGCERT: "MRGCERT",

  /**
   * passport
   */
  PASSPORT: "PASSPORT",

  /**
   * student enrollment
   */
  STUDENRL: "STUDENRL",

  /**
   * health status
   */
  HLSTAT: "HLSTAT",

  /**
   * disabled
   */
  DISABLE: "DISABLE",

  /**
   * drug use
   */
  DRUG: "DRUG",

  /**
   * IV drug use
   */
  IVDRG: "IVDRG",

  /**
   * pregnant
   */
  PGNT: "PGNT",

  /**
   * living dependency
   */
  LIVDEP: "LIVDEP",

  /**
   * relative dependent
   */
  RELDEP: "RELDEP",

  /**
   * spouse dependent
   */
  SPSDEP: "SPSDEP",

  /**
   * unrelated person dependent
   */
  URELDEP: "URELDEP",

  /**
   * living situation
   */
  LIVSIT: "LIVSIT",

  /**
   * alone
   */
  ALONE: "ALONE",

  /**
   * dependent children
   */
  DEPCHD: "DEPCHD",

  /**
   * dependent spouse
   */
  DEPSPS: "DEPSPS",

  /**
   * dependent young children
   */
  DEPYGCHD: "DEPYGCHD",

  /**
   * live with family
   */
  FAM: "FAM",

  /**
   * relative
   */
  RELAT: "RELAT",

  /**
   * spouse only
   */
  SPS: "SPS",

  /**
   * unrelated person
   */
  UNREL: "UNREL",

  /**
   * socio economic status
   */
  SOECSTAT: "SOECSTAT",

  /**
   * abuse victim
   */
  ABUSE: "ABUSE",

  /**
   * homeless
   */
  HMLESS: "HMLESS",

  /**
   * illegal immigrant
   */
  ILGIM: "ILGIM",

  /**
   * incarcerated
   */
  INCAR: "INCAR",

  /**
   * probation
   */
  PROB: "PROB",

  /**
   * refugee
   */
  REFUG: "REFUG",

  /**
   * unemployed
   */
  UNEMPL: "UNEMPL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCoverageAssessmentObservationValueCode =
  typeof ActCoverageAssessmentObservationValueCode[keyof typeof ActCoverageAssessmentObservationValueCode];
