/**
 * The player of the role is a child receiving parental care and nurture from the scoping person (parent) but not related to him or her through legal or blood ties.
 * http://terminology.hl7.org/ValueSet/v3-FosterChild
 */
export const FosterChildCode = {
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
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type FosterChildCode =
  typeof FosterChildCode[keyof typeof FosterChildCode];
