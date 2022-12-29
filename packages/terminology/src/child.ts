/**
 * The player of the role is a child of the scoping entity.
 * http://terminology.hl7.org/ValueSet/v3-Child
 */
export const ChildCode = {
  /**
   * child
   */
  child: "CHILD",

  /**
   * adopted child
   */
  adoptedchild: "CHLDADOPT",

  /**
   * adopted daughter
   */
  adopteddaughter: "DAUADOPT",

  /**
   * adopted son
   */
  adoptedson: "SONADOPT",

  /**
   * foster child
   */
  fosterchild: "CHLDFOST",

  /**
   * foster daughter
   */
  fosterdaughter: "DAUFOST",

  /**
   * foster son
   */
  fosterson: "SONFOST",

  /**
   * daughter
   */
  daughter: "DAUC",

  /**
   * natural daughter
   */
  naturaldaughter: "DAU",

  /**
   * stepdaughter
   */
  stepdaughter: "STPDAU",

  /**
   * natural child
   */
  naturalchild: "NCHILD",

  /**
   * natural son
   */
  naturalson: "SON",

  /**
   * son
   */
  son: "SONC",

  /**
   * stepson
   */
  stepson: "STPSON",

  /**
   * step child
   */
  stepchild: "STPCHLD",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ChildCode = typeof ChildCode[keyof typeof ChildCode];
