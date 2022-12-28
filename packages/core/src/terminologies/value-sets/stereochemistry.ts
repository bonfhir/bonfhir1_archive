/**
 * The optical rotation type of a substance.
 * http://hl7.org/fhir/ValueSet/substance-stereochemistry
 */
export const StereochemistryCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type StereochemistryCode =
  typeof StereochemistryCode[keyof typeof StereochemistryCode];
