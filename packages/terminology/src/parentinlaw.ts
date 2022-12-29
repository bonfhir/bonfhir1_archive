/**
 * The player of the role is the parent of scoping person's husband or wife.
 * http://terminology.hl7.org/ValueSet/v3-ParentInLaw
 */
export const ParentInLawCode = {
  /**
   * parent in-law
   */
  parentinlaw: "PRNINLAW",

  /**
   * father-in-law
   */
  fatherinlaw: "FTHINLAW",

  /**
   * mother-in-law
   */
  motherinlaw: "MTHINLAW",

  /**
   * mother-in-law
   */
  motherinlaw: "MTHINLOAW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ParentInLawCode =
  typeof ParentInLawCode[keyof typeof ParentInLawCode];
