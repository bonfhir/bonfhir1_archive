/**
 * A code depicting the living arrangements of a person
 * http://terminology.hl7.org/ValueSet/v3-LivingArrangement
 */
export const LivingArrangementCode = {
  /**
   * Institution
   */
  Institution: "I",

  /**
   * community shelter
   */
  communityshelter: "CS",

  /**
   * Group Home
   */
  GroupHome: "G",

  /**
   * Nursing Home
   */
  NursingHome: "N",

  /**
   * Extended care facility
   */
  Extendedcarefacility: "X",

  /**
   * private residence
   */
  privateresidence: "PR",

  /**
   * Independent Household
   */
  IndependentHousehold: "H",

  /**
   * Retirement Community
   */
  RetirementCommunity: "R",

  /**
   * supported living
   */
  supportedliving: "SL",

  /**
   * homeless
   */
  homeless: "HL",

  /**
   * Nomadic
   */
  Nomadic: "M",

  /**
   * Transient
   */
  Transient: "T",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type LivingArrangementCode =
  typeof LivingArrangementCode[keyof typeof LivingArrangementCode];
