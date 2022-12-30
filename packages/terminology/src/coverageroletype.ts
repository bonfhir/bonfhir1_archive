/**
 * Role recognized through the issuance of insurance coverage to an identified covered party who has this relationship with the policy holder such as the policy holder themselves (self), spouse, child, etc
 * http://terminology.hl7.org/ValueSet/v3-CoverageRoleType
 */
export const CoverageRoleTypeCode = {
  /**
   * family dependent
   */
  FAMDEP: "FAMDEP",

  /**
   * handicapped dependent
   */
  HANDIC: "HANDIC",

  /**
   * injured plaintiff
   */
  INJ: "INJ",

  /**
   * self
   */
  SELF: "SELF",

  /**
   * sponsored dependent
   */
  SPON: "SPON",

  /**
   * student
   */
  STUD: "STUD",

  /**
   * full-time student
   */
  FSTUD: "FSTUD",

  /**
   * part-time student
   */
  PSTUD: "PSTUD",

  /**
   * adopted child
   */
  ADOPT: "ADOPT",

  /**
   * grandchild
   */
  GCHILD: "GCHILD",

  /**
   * grandparent
   */
  GPARNT: "GPARNT",

  /**
   * natural child
   */
  NAT: "NAT",

  /**
   * niece/nephew
   */
  NIENE: "NIENE",

  /**
   * parent
   */
  PARNT: "PARNT",

  /**
   * spouse
   */
  SPSE: "SPSE",

  /**
   * step child
   */
  STEP: "STEP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageRoleTypeCode =
  typeof CoverageRoleTypeCode[keyof typeof CoverageRoleTypeCode];
