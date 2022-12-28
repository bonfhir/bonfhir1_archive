/**
 * The player of the role is a child of the scoping entity.
 * http://terminology.hl7.org/ValueSet/v3-Child
 */
export const ChildCode = {
  /**
   * child
   */
  CHILD: "CHILD",

  /**
   * adopted child
   */
  CHLDADOPT: "CHLDADOPT",

  /**
   * adopted daughter
   */
  DAUADOPT: "DAUADOPT",

  /**
   * adopted son
   */
  SONADOPT: "SONADOPT",

  /**
   * foster child
   */
  CHLDFOST: "CHLDFOST",

  /**
   * foster daughter
   */
  DAUFOST: "DAUFOST",

  /**
   * foster son
   */
  SONFOST: "SONFOST",

  /**
   * daughter
   */
  DAUC: "DAUC",

  /**
   * natural daughter
   */
  DAU: "DAU",

  /**
   * stepdaughter
   */
  STPDAU: "STPDAU",

  /**
   * natural child
   */
  NCHILD: "NCHILD",

  /**
   * natural son
   */
  SON: "SON",

  /**
   * son
   */
  SONC: "SONC",

  /**
   * stepson
   */
  STPSON: "STPSON",

  /**
   * step child
   */
  STPCHLD: "STPCHLD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ChildCode = typeof ChildCode[keyof typeof ChildCode];
