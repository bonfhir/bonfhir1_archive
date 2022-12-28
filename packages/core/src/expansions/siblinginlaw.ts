/**
 * The player of the role is: (1) a sibling of the scoping person's spouse, or (2) the spouse of the scoping person's sibling, or (3) the spouse of a sibling of the scoping person's spouse.
 * http://terminology.hl7.org/ValueSet/v3-SiblingInLaw
 */
export const SiblingInLawCode = {
  /**
   * sibling in-law
   */
  SIBINLAW: "SIBINLAW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SiblingInLawCode =
  typeof SiblingInLawCode[keyof typeof SiblingInLawCode];
