/**
 * one that begets or brings forth offspring or a person who brings up and cares for another (Webster's Collegiate Dictionary)
 * http://terminology.hl7.org/ValueSet/v3-Parent
 */
export const ParentCode = {
  /**
   * parent
   */
  parent: "PRN",

  /**
   * adoptive parent
   */
  adoptiveparent: "ADOPTP",

  /**
   * adoptive father
   */
  adoptivefather: "ADOPTF",

  /**
   * adoptive mother
   */
  adoptivemother: "ADOPTM",

  /**
   * father
   */
  father: "FTH",

  /**
   * foster father
   */
  fosterfather: "FTHFOST",

  /**
   * natural father
   */
  naturalfather: "NFTH",

  /**
   * natural father of fetus
   */
  naturalfatheroffetus: "NFTHF",

  /**
   * stepfather
   */
  stepfather: "STPFTH",

  /**
   * mother
   */
  mother: "MTH",

  /**
   * gestational mother
   */
  gestationalmother: "GESTM",

  /**
   * foster mother
   */
  fostermother: "MTHFOST",

  /**
   * natural mother
   */
  naturalmother: "NMTH",

  /**
   * natural mother of fetus
   */
  naturalmotheroffetus: "NMTHF",

  /**
   * stepmother
   */
  stepmother: "STPMTH",

  /**
   * natural parent
   */
  naturalparent: "NPRN",

  /**
   * foster parent
   */
  fosterparent: "PRNFOST",

  /**
   * step parent
   */
  stepparent: "STPPRN",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParentCode = typeof ParentCode[keyof typeof ParentCode];
