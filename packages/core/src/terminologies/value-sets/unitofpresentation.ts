/**
 * The presentation type in which an administrable medicinal product is given to a patient.
 * http://hl7.org/fhir/ValueSet/unit-of-presentation
 */
export const UnitOfPresentationCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type UnitOfPresentationCode =
  typeof UnitOfPresentationCode[keyof typeof UnitOfPresentationCode];
