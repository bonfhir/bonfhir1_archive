/**
 * The player of the role is the spouse of scoping person's child.
 * http://terminology.hl7.org/ValueSet/v3-ChildInLaw
 */
export const ChildInLawCode = {
  /**
   * child-in-law
   */
  childinlaw: "CHLDINLAW",

  /**
   * daughter in-law
   */
  daughterinlaw: "DAUINLAW",

  /**
   * son in-law
   */
  soninlaw: "SONINLAW",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ChildInLawCode = typeof ChildInLawCode[keyof typeof ChildInLawCode];
