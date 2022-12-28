/**
 * How a resource reference is interpreted when testing consent restrictions.
 * http://hl7.org/fhir/ValueSet/consent-data-meaning
 */
export const ConsentDataMeaningCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ConsentDataMeaningCode =
  typeof ConsentDataMeaningCode[keyof typeof ConsentDataMeaningCode];
