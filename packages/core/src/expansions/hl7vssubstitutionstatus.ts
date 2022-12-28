/**
 * Value Set of codes that specify the substitution status.
 * http://terminology.hl7.org/ValueSet/v2-0167
 */
export const Hl7VSSubstitutionStatusCode = {
  /**
   * No substitute was dispensed.  This is equivalent to the default (null) value.
   */
  N: "N",

  /**
   * A generic substitution was dispensed.
   */
  G: "G",

  /**
   * A therapeutic substitution was dispensed.
   */
  T: "T",

  /**
   * No product selection indicated
   */
  "0": "0",

  /**
   * Substitution not allowed by prescriber
   */
  "1": "1",

  /**
   * Substitution allowed - patient requested product dispensed
   */
  "2": "2",

  /**
   * Substitution allowed - pharmacist selected product dispensed
   */
  "3": "3",

  /**
   * Substitution allowed - generic drug not in stock
   */
  "4": "4",

  /**
   * Substitution allowed - brand drug dispensed as a generic
   */
  "5": "5",

  /**
   * Substitution not allowed - brand drug mandated by law
   */
  "7": "7",

  /**
   * Substitution allowed - generic drug not available in marketplace
   */
  "8": "8",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSSubstitutionStatusCode =
  typeof Hl7VSSubstitutionStatusCode[keyof typeof Hl7VSSubstitutionStatusCode];
