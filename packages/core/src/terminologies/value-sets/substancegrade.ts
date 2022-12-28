/**
 * The quality standard, established benchmark, to which a substance complies.
 * http://hl7.org/fhir/ValueSet/substance-grade
 */
export const SubstanceGradeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubstanceGradeCode =
  typeof SubstanceGradeCode[keyof typeof SubstanceGradeCode];
