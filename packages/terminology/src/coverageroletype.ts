/**
 * Role recognized through the issuance of insurance coverage to an identified covered party who has this relationship with the policy holder such as the policy holder themselves (self), spouse, child, etc
 * http://terminology.hl7.org/ValueSet/v3-CoverageRoleType
 */
export const CoverageRoleTypeCode = {
  /**
   * family dependent
   */
  familydependent: "FAMDEP",

  /**
   * handicapped dependent
   */
  handicappeddependent: "HANDIC",

  /**
   * injured plaintiff
   */
  injuredplaintiff: "INJ",

  /**
   * self
   */
  self: "SELF",

  /**
   * sponsored dependent
   */
  sponsoreddependent: "SPON",

  /**
   * student
   */
  student: "STUD",

  /**
   * full-time student
   */
  fulltimestudent: "FSTUD",

  /**
   * part-time student
   */
  parttimestudent: "PSTUD",

  /**
   * adopted child
   */
  adoptedchild: "ADOPT",

  /**
   * grandchild
   */
  grandchild: "GCHILD",

  /**
   * grandparent
   */
  grandparent: "GPARNT",

  /**
   * natural child
   */
  naturalchild: "NAT",

  /**
   * niece/nephew
   */
  niecenephew: "NIENE",

  /**
   * parent
   */
  parent: "PARNT",

  /**
   * spouse
   */
  spouse: "SPSE",

  /**
   * step child
   */
  stepchild: "STEP",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type CoverageRoleTypeCode =
  typeof CoverageRoleTypeCode[keyof typeof CoverageRoleTypeCode];
