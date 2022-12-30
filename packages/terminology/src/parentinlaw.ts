/**
 * The player of the role is the parent of scoping person's husband or wife.
 * http://terminology.hl7.org/ValueSet/v3-ParentInLaw
 */
export const ParentInLawCode = {
  /**
   * parent in-law
   */
  PRNINLAW: "PRNINLAW",

  /**
   * father-in-law
   */
  FTHINLAW: "FTHINLAW",

  /**
   * mother-in-law
   */
  MTHINLAW: "MTHINLAW",

  /**
   * mother-in-law
   */
  MTHINLOAW: "MTHINLOAW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParentInLawCode =
  typeof ParentInLawCode[keyof typeof ParentInLawCode];
