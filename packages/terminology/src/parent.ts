/**
 * one that begets or brings forth offspring or a person who brings up and cares for another (Webster's Collegiate Dictionary)
 * http://terminology.hl7.org/ValueSet/v3-Parent
 */
export const ParentCode = {
  /**
   * parent
   */
  PRN: "PRN",

  /**
   * adoptive parent
   */
  ADOPTP: "ADOPTP",

  /**
   * adoptive father
   */
  ADOPTF: "ADOPTF",

  /**
   * adoptive mother
   */
  ADOPTM: "ADOPTM",

  /**
   * father
   */
  FTH: "FTH",

  /**
   * foster father
   */
  FTHFOST: "FTHFOST",

  /**
   * natural father
   */
  NFTH: "NFTH",

  /**
   * natural father of fetus
   */
  NFTHF: "NFTHF",

  /**
   * stepfather
   */
  STPFTH: "STPFTH",

  /**
   * mother
   */
  MTH: "MTH",

  /**
   * gestational mother
   */
  GESTM: "GESTM",

  /**
   * foster mother
   */
  MTHFOST: "MTHFOST",

  /**
   * natural mother
   */
  NMTH: "NMTH",

  /**
   * natural mother of fetus
   */
  NMTHF: "NMTHF",

  /**
   * stepmother
   */
  STPMTH: "STPMTH",

  /**
   * natural parent
   */
  NPRN: "NPRN",

  /**
   * foster parent
   */
  PRNFOST: "PRNFOST",

  /**
   * step parent
   */
  STPPRN: "STPPRN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParentCode = typeof ParentCode[keyof typeof ParentCode];
