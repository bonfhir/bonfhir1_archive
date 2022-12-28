/**
 * Supplemental data in a population for measuring purposes.
 * http://hl7.org/fhir/ValueSet/measure-supplemental-data-example
 */
export const MeasureSupplementalDataExampleCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type MeasureSupplementalDataExampleCode =
  typeof MeasureSupplementalDataExampleCode[keyof typeof MeasureSupplementalDataExampleCode];
