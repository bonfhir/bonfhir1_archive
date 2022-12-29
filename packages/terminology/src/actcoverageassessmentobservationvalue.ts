/**
 * Codes specify the category of observation, evidence, or document used to assess for services, e.g., discharge planning, or to establish eligibility for coverage under a policy or program. The type of evidence is coded as observation values.
 * http://terminology.hl7.org/ValueSet/v3-ActCoverageAssessmentObservationValue
 */
export const ActCoverageAssessmentObservationValueCode = {
  /**
   * ActCoverageAssessmentObservationValue
   */
  ActCoverageAssessmentObservationValue:
    "_ActCoverageAssessmentObservationValue",

  /**
   * ActFinancialStatusObservationValue
   */
  ActFinancialStatusObservationValue: "_ActFinancialStatusObservationValue",

  /**
   * asset
   */
  asset: "ASSET",

  /**
   * annuity
   */
  annuity: "ANNUITY",

  /**
   * real property
   */
  realproperty: "PROP",

  /**
   * retirement investment account
   */
  retirementinvestmentaccount: "RETACCT",

  /**
   * trust
   */
  trust: "TRUST",

  /**
   * income
   */
  income: "INCOME",

  /**
   * child support
   */
  childsupport: "CHILD",

  /**
   * disability pay
   */
  disabilitypay: "DISABL",

  /**
   * investment income
   */
  investmentincome: "INVEST",

  /**
   * paid employment
   */
  paidemployment: "PAY",

  /**
   * retirement pay
   */
  retirementpay: "RETIRE",

  /**
   * spousal or partner support
   */
  spousalorpartnersupport: "SPOUSAL",

  /**
   * income supplement
   */
  incomesupplement: "SUPPLE",

  /**
   * tax obligation
   */
  taxobligation: "TAX",

  /**
   * living expense
   */
  livingexpense: "LIVEXP",

  /**
   * clothing expense
   */
  clothingexpense: "CLOTH",

  /**
   * food expense
   */
  foodexpense: "FOOD",

  /**
   * health expense
   */
  healthexpense: "HEALTH",

  /**
   * household expense
   */
  householdexpense: "HOUSE",

  /**
   * legal expense
   */
  legalexpense: "LEGAL",

  /**
   * mortgage
   */
  mortgage: "MORTG",

  /**
   * rent
   */
  rent: "RENT",

  /**
   * sundry expense
   */
  sundryexpense: "SUNDRY",

  /**
   * transportation expense
   */
  transportationexpense: "TRANS",

  /**
   * utility expense
   */
  utilityexpense: "UTIL",

  /**
   * eligibility indicator
   */
  eligibilityindicator: "ELSTAT",

  /**
   * adoption document
   */
  adoptiondocument: "ADOPT",

  /**
   * birth certificate
   */
  birthcertificate: "BTHCERT",

  /**
   * creditable coverage document
   */
  creditablecoveragedocument: "CCOC",

  /**
   * driver license
   */
  driverlicense: "DRLIC",

  /**
   * foster child document
   */
  fosterchilddocument: "FOSTER",

  /**
   * program or policy member
   */
  programorpolicymember: "MEMBER",

  /**
   * military identification
   */
  militaryidentification: "MIL",

  /**
   * marriage certificate
   */
  marriagecertificate: "MRGCERT",

  /**
   * passport
   */
  passport: "PASSPORT",

  /**
   * student enrollment
   */
  studentenrollment: "STUDENRL",

  /**
   * health status
   */
  healthstatus: "HLSTAT",

  /**
   * disabled
   */
  disabled: "DISABLE",

  /**
   * drug use
   */
  druguse: "DRUG",

  /**
   * IV drug use
   */
  IVdruguse: "IVDRG",

  /**
   * pregnant
   */
  pregnant: "PGNT",

  /**
   * living dependency
   */
  livingdependency: "LIVDEP",

  /**
   * relative dependent
   */
  relativedependent: "RELDEP",

  /**
   * spouse dependent
   */
  spousedependent: "SPSDEP",

  /**
   * unrelated person dependent
   */
  unrelatedpersondependent: "URELDEP",

  /**
   * living situation
   */
  livingsituation: "LIVSIT",

  /**
   * alone
   */
  alone: "ALONE",

  /**
   * dependent children
   */
  dependentchildren: "DEPCHD",

  /**
   * dependent spouse
   */
  dependentspouse: "DEPSPS",

  /**
   * dependent young children
   */
  dependentyoungchildren: "DEPYGCHD",

  /**
   * live with family
   */
  livewithfamily: "FAM",

  /**
   * relative
   */
  relative: "RELAT",

  /**
   * spouse only
   */
  spouseonly: "SPS",

  /**
   * unrelated person
   */
  unrelatedperson: "UNREL",

  /**
   * socio economic status
   */
  socioeconomicstatus: "SOECSTAT",

  /**
   * abuse victim
   */
  abusevictim: "ABUSE",

  /**
   * homeless
   */
  homeless: "HMLESS",

  /**
   * illegal immigrant
   */
  illegalimmigrant: "ILGIM",

  /**
   * incarcerated
   */
  incarcerated: "INCAR",

  /**
   * probation
   */
  probation: "PROB",

  /**
   * refugee
   */
  refugee: "REFUG",

  /**
   * unemployed
   */
  unemployed: "UNEMPL",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCoverageAssessmentObservationValueCode =
  typeof ActCoverageAssessmentObservationValueCode[keyof typeof ActCoverageAssessmentObservationValueCode];
