/**
 * Value Set of codes used with relational operator values to group more than one segment field name.
 * http://terminology.hl7.org/ValueSet/v2-0210
 */
export const Hl7VSRelationalConjunctionCode = {
  /**
   * Default
   */
  Default: "AND",

  /**
   *
   */
  OR: "OR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSRelationalConjunctionCode =
  typeof Hl7VSRelationalConjunctionCode[keyof typeof Hl7VSRelationalConjunctionCode];
